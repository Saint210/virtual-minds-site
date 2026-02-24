#!/usr/bin/env python3
"""
Content Generator Tool
Automates blog/resource creation for psychiatric specialties
"""

import os
import json
import logging
from datetime import datetime
from typing import Dict, Any, List, Optional

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler('.tmp/logs/content_generator.log'),
        logging.StreamHandler()
    ]
)

class ContentGenerator:
    def __init__(self):
        self.min_seo_score = int(os.getenv('SEO_MIN_SCORE', '80'))
        self.compliance_required = os.getenv('COMPLIANCE_CHECK_REQUIRED', 'true').lower() == 'true'
        
    def analyze_keywords(self, topic: str, specialty: str) -> List[str]:
        """Analyze and extract target keywords"""
        base_keywords = [
            'virtual assistant',
            'psychiatric practice',
            'california psychiatry',
            'admin support',
            'practice efficiency'
        ]
        
        specialty_keywords = {
            'psychiatrists': ['psychiatric va', 'mental health assistant', 'psychiatry admin'],
            'adhd-clinics': ['adhd clinic support', 'stimulant prior auth', 'adhd scheduling'],
            'private-practice': ['private practice startup', 'solo psychiatry support', 'practice management'],
            'nurse-practitioners': ['pmhnp assistant', 'psychiatric np support', 'nurse practitioner admin'],
            'drchrono-users': ['drchrono ehr', 'ehr virtual assistant', 'drchrono templates'],
            'charm-health-users': ['charmhealth support', 'charm ehr assistant', 'patient portal management']
        }
        
        topic_keywords = topic.lower().split()
        
        all_keywords = base_keywords + specialty_keywords.get(specialty, []) + topic_keywords
        return list(set([kw.lower() for kw in all_keywords]))
    
    def generate_content_draft(self, topic: str, specialty: str, keywords: List[str]) -> Dict[str, Any]:
        """Generate initial content draft"""
        content_id = f"content-{datetime.now().strftime('%Y%m%d%H%M%S')}"
        
        # Create SEO-friendly slug
        slug = topic.lower().replace(' ', '-').replace('/', '-').strip('-')
        slug = f"{slug}-{specialty}" if specialty not in slug else slug
        
        # Generate meta information
        meta_title = f"{topic.title()} for {specialty.replace('-', ' ').title()} | Virtual Minds California"
        meta_description = f"Expert {topic.lower()} solutions for {specialty.replace('-', ' ')} psychiatric practices in California. Improve efficiency and patient care with specialized virtual assistants."
        
        # Basic content structure (would use AI in production)
        content_structure = {
            'introduction': f"Comprehensive {topic.lower()} solutions tailored for {specialty.replace('-', ' ')} practices in California.",
            'benefits': [
                "Reduce administrative burden by up to 40%",
                "Improve patient care focus and satisfaction",
                "Ensure HIPAA and CMIA compliance",
                "Specialized knowledge of psychiatric workflows"
            ],
            'implementation': [
                "Initial practice assessment and workflow analysis",
                "Custom VA matching based on specialty requirements",
                "Gradual integration with minimal disruption",
                "Ongoing support and optimization"
            ],
            'conclusion': f"Transform your {specialty.replace('-', ' ')} practice with expert {topic.lower()} support from Virtual Minds."
        }
        
        return {
            'content_id': content_id,
            'title': f"{topic.title()} for {specialty.replace('-', ' ').title()}",
            'slug': slug,
            'meta_title': meta_title,
            'meta_description': meta_description,
            'keywords': keywords,
            'specialty': specialty,
            'content_type': 'blog',
            'body_content': content_structure,
            'seo_score': 0,  # To be calculated
            'compliance_checked': False,
            'publication_status': 'draft',
            'created_at': datetime.now().isoformat()
        }
    
    def calculate_seo_score(self, content: Dict[str, Any]) -> int:
        """Calculate SEO optimization score"""
        score = 0
        
        # Title optimization (25 points)
        title = content.get('meta_title', '')
        if len(title) >= 50 and len(title) <= 60:
            score += 15
        if any(keyword.lower() in title.lower() for keyword in content.get('keywords', [])):
            score += 10
            
        # Meta description (20 points)
        meta_desc = content.get('meta_description', '')
        if len(meta_desc) >= 120 and len(meta_desc) <= 160:
            score += 10
        if any(keyword.lower() in meta_desc.lower() for keyword in content.get('keywords', [])):
            score += 10
            
        # Content structure (25 points)
        body = content.get('body_content', {})
        required_sections = ['introduction', 'benefits', 'implementation', 'conclusion']
        if all(section in body for section in required_sections):
            score += 15
        if len(body.get('benefits', [])) >= 3:
            score += 10
            
        # Keyword density (15 points)
        all_text = ' '.join([
            content.get('title', ''),
            content.get('meta_description', ''),
            ' '.join(body.values())
        ]).lower()
        
        keyword_count = sum(1 for keyword in content.get('keywords', []) if keyword in all_text)
        if keyword_count >= 3:
            score += 15
        elif keyword_count >= 2:
            score += 10
        elif keyword_count >= 1:
            score += 5
            
        # Readability (15 points)
        sentences = all_text.split('.')
        if len(sentences) > 10:  # Sufficient content length
            score += 10
        # Simple readability check (would use more sophisticated analysis in production)
        avg_sentence_length = sum(len(s.split()) for s in sentences) / len(sentences)
        if 10 <= avg_sentence_length <= 20:
            score += 5
            
        return min(score, 100)
    
    def check_compliance(self, content: Dict[str, Any]) -> bool:
        """Check content for compliance issues"""
        if not self.compliance_required:
            return True
            
        # Check for prohibited medical claims
        prohibited_terms = [
            'guarantee', 'cure', 'treatment', 'diagnosis', 'therapy',
            'medical advice', 'prescription', 'medication management'
        ]
        
        all_text = ' '.join([
            content.get('title', ''),
            content.get('meta_description', ''),
            ' '.join(str(v) for v in content.get('body_content', {}).values())
        ]).lower()
        
        violations = [term for term in prohibited_terms if term in all_text]
        
        if violations:
            logging.warning(f"Compliance violations found: {violations}")
            return False
            
        # Check for California geographic targeting
        if 'california' not in all_text:
            logging.warning("Missing California geographic targeting")
            return False
            
        return True
    
    def optimize_content(self, content: Dict[str, Any]) -> Dict[str, Any]:
        """Optimize content for SEO and compliance"""
        # Calculate SEO score
        content['seo_score'] = self.calculate_seo_score(content)
        
        # Check compliance
        content['compliance_checked'] = self.check_compliance(content)
        
        # Update status based on scores
        if content['seo_score'] >= self.min_seo_score and content['compliance_checked']:
            content['publication_status'] = 'review'
        else:
            content['publication_status'] = 'needs_review'
            
        return content
    
    def save_content(self, content: Dict[str, Any]) -> bool:
        """Save generated content"""
        try:
            os.makedirs('.tmp/content', exist_ok=True)
            filename = f".tmp/content/{content['content_id']}.json"
            
            with open(filename, 'w') as f:
                json.dump(content, f, indent=2)
                
            logging.info(f"Content saved: {content['content_id']}")
            return True
            
        except Exception as e:
            logging.error(f"Failed to save content: {str(e)}")
            return False
    
    def generate_content(self, topic: str, specialty: str, content_type: str = 'blog') -> Dict[str, Any]:
        """Main content generation pipeline"""
        try:
            # Step 1: Analyze keywords
            keywords = self.analyze_keywords(topic, specialty)
            
            # Step 2: Generate draft
            content = self.generate_content_draft(topic, specialty, keywords)
            content['content_type'] = content_type
            
            # Step 3: Optimize
            content = self.optimize_content(content)
            
            # Step 4: Save
            saved = self.save_content(content)
            
            return {
                'status': 'success' if saved else 'error',
                'content': content,
                'message': f"Content generated with SEO score {content['seo_score']}"
            }
            
        except Exception as e:
            logging.error(f"Content generation failed: {str(e)}")
            return {'status': 'error', 'message': str(e)}

def main():
    """Test the content generator"""
    generator = ContentGenerator()
    
    # Sample content request
    result = generator.generate_content(
        topic="Streamlining Prior Authorizations",
        specialty="psychiatrists",
        content_type="blog"
    )
    
    print(f"Generation result: {json.dumps(result, indent=2)}")

if __name__ == "__main__":
    main()
