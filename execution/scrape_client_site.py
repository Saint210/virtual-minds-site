"""
Website Content Scraper for Client Onboarding

Scrapes a client's existing website to extract:
- Homepage content (hero, about, services)
- Bio/About page content
- Services/Specialties
- Testimonials
- Contact information

Uses Playwright for JavaScript-rendered sites.
Outputs structured JSON for Brand DNA extraction.
"""

import argparse
import json
import logging
import sys
from pathlib import Path
from typing import Dict, List, Optional
from urllib.parse import urljoin, urlparse

try:
    from playwright.sync_api import sync_playwright, TimeoutError as PlaywrightTimeout
    from bs4 import BeautifulSoup
except ImportError:
    print("Missing dependencies. Install with:")
    print("pip install playwright beautifulsoup4")
    print("playwright install chromium")
    sys.exit(1)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


class WebsiteScraper:
    """Scrapes psychiatric practice websites for content migration."""
    
    def __init__(self, base_url: str, max_pages: int = 10):
        self.base_url = base_url.rstrip('/')
        self.domain = urlparse(base_url).netloc
        self.max_pages = max_pages
        self.visited_urls = set()
        self.scraped_data = {
            'base_url': base_url,
            'homepage': {},
            'about': {},
            'services': [],
            'testimonials': [],
            'contact': {},
            'all_text': []
        }
    
    def is_same_domain(self, url: str) -> bool:
        """Check if URL belongs to the same domain."""
        return urlparse(url).netloc == self.domain
    
    def extract_page_content(self, html: str, url: str) -> Dict:
        """Extract structured content from HTML."""
        soup = BeautifulSoup(html, 'html.parser')
        
        # Remove script and style elements
        for element in soup(['script', 'style', 'nav', 'footer', 'header']):
            element.decompose()
        
        content = {
            'url': url,
            'title': soup.title.string if soup.title else '',
            'headings': [],
            'paragraphs': [],
            'lists': [],
            'images': [],
            'raw_text': ''
        }
        
        # Extract headings
        for heading in soup.find_all(['h1', 'h2', 'h3']):
            text = heading.get_text(strip=True)
            if text:
                content['headings'].append({
                    'level': heading.name,
                    'text': text
                })
        
        # Extract paragraphs
        for p in soup.find_all('p'):
            text = p.get_text(strip=True)
            if text and len(text) > 20:  # Filter out short/empty paragraphs
                content['paragraphs'].append(text)
        
        # Extract lists
        for ul in soup.find_all(['ul', 'ol']):
            items = [li.get_text(strip=True) for li in ul.find_all('li')]
            if items:
                content['lists'].append(items)
        
        # Extract images
        for img in soup.find_all('img'):
            src = img.get('src')
            alt = img.get('alt', '')
            if src and not src.startswith('data:'):  # Ignore base64
                content['images'].append({
                    'src': urljoin(url, src),
                    'alt': alt
                })
        
        # Get all text for full context
        content['raw_text'] = soup.get_text(separator=' ', strip=True)
        
        return content
    
    def categorize_page(self, url: str, content: Dict) -> str:
        """Determine page type based on URL and content."""
        url_lower = url.lower()
        title_lower = content['title'].lower()
        text_lower = content['raw_text'].lower()[:500]
        
        # Check for about page
        if any(keyword in url_lower for keyword in ['about', 'bio', 'dr-', 'doctor']):
            return 'about'
        if any(keyword in title_lower for keyword in ['about', 'biography', 'meet']):
            return 'about'
        
        # Check for services page
        if any(keyword in url_lower for keyword in ['service', 'treatment', 'specialt']):
            return 'services'
        if any(keyword in title_lower for keyword in ['service', 'treatment', 'what we treat']):
            return 'services'
        
        # Check for testimonials
        if any(keyword in url_lower for keyword in ['testimonial', 'review', 'patient']):
            return 'testimonials'
        
        # Check for contact
        if any(keyword in url_lower for keyword in ['contact', 'appointment', 'book']):
            return 'contact'
        
        # Default to homepage if it's the base URL
        if url == self.base_url or url == self.base_url + '/':
            return 'homepage'
        
        return 'other'
    
    def scrape_page(self, page, url: str) -> Optional[Dict]:
        """Scrape a single page."""
        if url in self.visited_urls or len(self.visited_urls) >= self.max_pages:
            return None
        
        try:
            logger.info(f"Scraping: {url}")
            page.goto(url, wait_until='networkidle', timeout=30000)
            
            # Wait for content to load
            page.wait_for_timeout(2000)
            
            html = page.content()
            content = self.extract_page_content(html, url)
            
            self.visited_urls.add(url)
            
            # Categorize and store
            page_type = self.categorize_page(url, content)
            
            if page_type == 'homepage':
                self.scraped_data['homepage'] = content
            elif page_type == 'about':
                self.scraped_data['about'] = content
            elif page_type == 'services':
                self.scraped_data['services'].append(content)
            elif page_type == 'testimonials':
                self.scraped_data['testimonials'].append(content)
            elif page_type == 'contact':
                self.scraped_data['contact'] = content
            
            # Add to all_text for context
            self.scraped_data['all_text'].append(content['raw_text'])
            
            # Find internal links
            links = page.query_selector_all('a[href]')
            internal_links = []
            
            for link in links[:50]:  # Limit to first 50 links
                href = link.get_attribute('href')
                if href:
                    absolute_url = urljoin(url, href)
                    if self.is_same_domain(absolute_url) and absolute_url not in self.visited_urls:
                        internal_links.append(absolute_url)
            
            return internal_links
            
        except PlaywrightTimeout:
            logger.warning(f"Timeout loading {url}")
            return None
        except Exception as e:
            logger.error(f"Error scraping {url}: {str(e)}")
            return None
    
    def scrape(self) -> Dict:
        """Main scraping method."""
        logger.info(f"Starting scrape of {self.base_url}")
        
        with sync_playwright() as p:
            browser = p.chromium.launch(headless=True)
            page = browser.new_page()
            
            # Start with homepage
            to_visit = [self.base_url]
            
            while to_visit and len(self.visited_urls) < self.max_pages:
                url = to_visit.pop(0)
                links = self.scrape_page(page, url)
                
                if links:
                    # Prioritize about and services pages
                    priority_links = [l for l in links if any(k in l.lower() for k in ['about', 'service', 'bio'])]
                    other_links = [l for l in links if l not in priority_links]
                    to_visit.extend(priority_links + other_links)
            
            browser.close()
        
        logger.info(f"Scraping complete. Visited {len(self.visited_urls)} pages")
        return self.scraped_data


def main():
    parser = argparse.ArgumentParser(description='Scrape client website for content migration')
    parser.add_argument('--url', required=True, help='Client website URL')
    parser.add_argument('--output', required=True, help='Output JSON file path')
    parser.add_argument('--max-pages', type=int, default=10, help='Maximum pages to scrape')
    
    args = parser.parse_args()
    
    # Validate URL
    if not args.url.startswith(('http://', 'https://')):
        logger.error("URL must start with http:// or https://")
        sys.exit(1)
    
    # Create output directory if needed
    output_path = Path(args.output)
    output_path.parent.mkdir(parents=True, exist_ok=True)
    
    # Scrape
    scraper = WebsiteScraper(args.url, max_pages=args.max_pages)
    data = scraper.scrape()
    
    # Save to JSON
    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    
    logger.info(f"Scraped data saved to {output_path}")
    
    # Print summary
    print("\n=== Scrape Summary ===")
    print(f"Pages visited: {len(scraper.visited_urls)}")
    print(f"Homepage: {'✓' if data['homepage'] else '✗'}")
    print(f"About page: {'✓' if data['about'] else '✗'}")
    print(f"Services pages: {len(data['services'])}")
    print(f"Testimonials: {len(data['testimonials'])}")
    print(f"Contact info: {'✓' if data['contact'] else '✗'}")
    print(f"\nOutput: {output_path}")


if __name__ == '__main__':
    main()
