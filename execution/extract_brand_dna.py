"""
Brand DNA Extractor

Analyzes scraped website content using LLM to generate Brand DNA configuration.
Outputs structured JSON that can be used to build the new site.

Uses Claude (Anthropic) for analysis - known for following structured output formats well.
"""

import argparse
import json
import logging
import os
import sys
from pathlib import Path
from typing import Dict, List

try:
    from anthropic import Anthropic
    from dotenv import load_dotenv
except ImportError:
    print("Missing dependencies. Install with:")
    print("pip install anthropic python-dotenv")
    sys.exit(1)

# Load environment variables
load_dotenv()

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


BRAND_DNA_PROMPT = """You are a brand strategist analyzing a psychiatrist's existing website to create a comprehensive Brand DNA document.

I will provide you with scraped content from their website. Your job is to extract and infer:
1. Keywords (primary and semantic)
2. Brand personality and tone
3. Target patient personas
4. Unique selling proposition
5. Which design template would fit best

=== SCRAPED CONTENT ===
{content}

=== YOUR TASK ===
Analyze this content and output a JSON object with the following structure:

{{
  "practice_name": "string",
  "doctor_name": "string",
  "credentials": ["string"],
  "design": {{
    "template": "clinical-clarity" | "academic-authority" | "modern-minimalist",
    "template_reasoning": "string - why you chose this template",
    "color_palette": {{
      "primary": "#HEX",
      "accent": "#HEX",
      "background": "#HEX"
    }},
    "typography": "serif-modern" | "sans-clean" | "mixed",
    "tone": "authoritative" | "warm" | "clinical" | "approachable"
  }},
  "keywords": {{
    "primary": ["string - 3-5 high-intent keywords"],
    "semantic": ["string - 5-10 long-tail keywords"]
  }},
  "brand_identity": {{
    "values": ["string - 3 core values"],
    "usp": "string - one sentence unique selling proposition",
    "positioning": "string - how they differentiate from competitors"
  }},
  "patient_personas": [
    {{
      "name": "string - persona name",
      "pain_points": ["string"],
      "desires": ["string"],
      "hook": "string - compelling headline for this persona"
    }}
  ],
  "content": {{
    "hero_headline": "string - compelling main headline",
    "hero_subheadline": "string - supporting text",
    "about_bio": "string - 2-3 paragraph bio",
    "services": [
      {{
        "title": "string",
        "description": "string"
      }}
    ],
    "testimonials": [
      {{
        "quote": "string",
        "attribution": "string"
      }}
    ]
  }},
  "seo": {{
    "meta_title": "string - 60 chars max",
    "meta_description": "string - 160 chars max",
    "target_cities": ["string - if location-specific"]
  }}
}}

TEMPLATE SELECTION GUIDE:
- "clinical-clarity": Warm, luxury feel. For established practices, concierge care, high-end private practice
- "academic-authority": Professional, research-focused. For university-affiliated, published researchers, MD/PhD
- "modern-minimalist": Clean, wellness-focused. For younger psychiatrists, holistic approaches, approachable care

COLOR PALETTE GUIDE:
- Extract from their existing branding if visible
- If not clear, suggest based on template:
  - Clinical Clarity: Warm tones (terracotta, cream, gold)
  - Academic Authority: Professional (navy, slate, white)
  - Modern Minimalist: Soft, muted (sage, sand, charcoal)

Be thoughtful and strategic. This Brand DNA will drive the entire site build.
Output ONLY the JSON, no other text.
"""


class BrandDNAExtractor:
    """Extracts Brand DNA from scraped website content using LLM."""
    
    def __init__(self, api_key: str = None):
        self.api_key = api_key or os.getenv('ANTHROPIC_API_KEY')
        if not self.api_key:
            raise ValueError("ANTHROPIC_API_KEY not found in environment")
        
        self.client = Anthropic(api_key=self.api_key)
    
    def prepare_content(self, scraped_data: Dict) -> str:
        """Format scraped data for LLM analysis."""
        content_parts = []
        
        # Homepage
        if scraped_data.get('homepage'):
            content_parts.append("=== HOMEPAGE ===")
            hp = scraped_data['homepage']
            content_parts.append(f"Title: {hp.get('title', '')}")
            content_parts.append("Headings: " + " | ".join([h['text'] for h in hp.get('headings', [])[:5]]))
            content_parts.append("Content: " + " ".join(hp.get('paragraphs', [])[:3]))
        
        # About
        if scraped_data.get('about'):
            content_parts.append("\n=== ABOUT/BIO ===")
            about = scraped_data['about']
            content_parts.append(f"Title: {about.get('title', '')}")
            content_parts.append("Content: " + " ".join(about.get('paragraphs', [])))
        
        # Services
        if scraped_data.get('services'):
            content_parts.append("\n=== SERVICES ===")
            for service in scraped_data['services'][:3]:
                content_parts.append(f"- {service.get('title', '')}")
                content_parts.append("  " + " ".join(service.get('paragraphs', [])[:2]))
        
        # Testimonials
        if scraped_data.get('testimonials'):
            content_parts.append("\n=== TESTIMONIALS ===")
            for testimonial in scraped_data['testimonials'][:3]:
                content_parts.append("  " + " ".join(testimonial.get('paragraphs', [])[:1]))
        
        # Combine all text for context
        content_parts.append("\n=== FULL CONTEXT (first 2000 chars) ===")
        all_text = " ".join(scraped_data.get('all_text', []))
        content_parts.append(all_text[:2000])
        
        return "\n".join(content_parts)
    
    def extract(self, scraped_data: Dict) -> Dict:
        """Extract Brand DNA using Claude."""
        logger.info("Preparing content for LLM analysis...")
        content = self.prepare_content(scraped_data)
        
        logger.info("Sending to Claude for Brand DNA extraction...")
        
        try:
            message = self.client.messages.create(
                model="claude-3-5-sonnet-20241022",
                max_tokens=4096,
                temperature=0.3,  # Lower temp for more consistent structured output
                messages=[
                    {
                        "role": "user",
                        "content": BRAND_DNA_PROMPT.format(content=content)
                    }
                ]
            )
            
            # Extract JSON from response
            response_text = message.content[0].text
            
            # Try to parse JSON
            # Sometimes Claude wraps in markdown code blocks
            if "```json" in response_text:
                response_text = response_text.split("```json")[1].split("```")[0]
            elif "```" in response_text:
                response_text = response_text.split("```")[1].split("```")[0]
            
            brand_dna = json.loads(response_text.strip())
            
            logger.info("Brand DNA extracted successfully")
            return brand_dna
            
        except json.JSONDecodeError as e:
            logger.error(f"Failed to parse JSON from Claude response: {e}")
            logger.error(f"Response was: {response_text[:500]}")
            raise
        except Exception as e:
            logger.error(f"Error calling Claude API: {e}")
            raise
    
    def validate_brand_dna(self, brand_dna: Dict) -> bool:
        """Validate that Brand DNA has required fields."""
        required_fields = [
            'practice_name',
            'design',
            'keywords',
            'brand_identity',
            'content',
            'seo'
        ]
        
        for field in required_fields:
            if field not in brand_dna:
                logger.warning(f"Missing required field: {field}")
                return False
        
        # Check template is valid
        valid_templates = ['clinical-clarity', 'academic-authority', 'modern-minimalist']
        if brand_dna['design'].get('template') not in valid_templates:
            logger.warning(f"Invalid template: {brand_dna['design'].get('template')}")
            return False
        
        return True


def main():
    parser = argparse.ArgumentParser(description='Extract Brand DNA from scraped website content')
    parser.add_argument('--input', required=True, help='Input JSON file from scraper')
    parser.add_argument('--output', required=True, help='Output Brand DNA JSON file')
    parser.add_argument('--api-key', help='Anthropic API key (or set ANTHROPIC_API_KEY env var)')
    
    args = parser.parse_args()
    
    # Load scraped data
    input_path = Path(args.input)
    if not input_path.exists():
        logger.error(f"Input file not found: {input_path}")
        sys.exit(1)
    
    with open(input_path, 'r', encoding='utf-8') as f:
        scraped_data = json.load(f)
    
    logger.info(f"Loaded scraped data from {input_path}")
    
    # Extract Brand DNA
    extractor = BrandDNAExtractor(api_key=args.api_key)
    brand_dna = extractor.extract(scraped_data)
    
    # Validate
    if not extractor.validate_brand_dna(brand_dna):
        logger.warning("Brand DNA validation failed - review output carefully")
    
    # Save output
    output_path = Path(args.output)
    output_path.parent.mkdir(parents=True, exist_ok=True)
    
    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(brand_dna, f, indent=2, ensure_ascii=False)
    
    logger.info(f"Brand DNA saved to {output_path}")
    
    # Print summary
    print("\n=== Brand DNA Summary ===")
    print(f"Practice: {brand_dna.get('practice_name', 'Unknown')}")
    print(f"Doctor: {brand_dna.get('doctor_name', 'Unknown')}")
    print(f"Template: {brand_dna.get('design', {}).get('template', 'Unknown')}")
    print(f"Reasoning: {brand_dna.get('design', {}).get('template_reasoning', 'N/A')}")
    print(f"Primary Keywords: {', '.join(brand_dna.get('keywords', {}).get('primary', []))}")
    print(f"USP: {brand_dna.get('brand_identity', {}).get('usp', 'N/A')}")
    print(f"\nOutput: {output_path}")


if __name__ == '__main__':
    main()
