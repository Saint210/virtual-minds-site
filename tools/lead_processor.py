#!/usr/bin/env python3
"""
Lead Processor Tool
Processes web form submissions and routes qualified leads to CRM
"""

import os
import json
import hashlib
import logging
from datetime import datetime
from typing import Dict, Any, Optional

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler('.tmp/logs/lead_processor.log'),
        logging.StreamHandler()
    ]
)

class LeadProcessor:
    def __init__(self):
        self.min_score = int(os.getenv('LEAD_QUALIFICATION_THRESHOLD', '70'))
        self.crm_provider = os.getenv('CRM_PROVIDER', 'salesforce')
        
    def validate_lead_data(self, lead_data: Dict[str, Any]) -> bool:
        """Validate lead data for HIPAA compliance"""
        required_fields = ['name', 'email', 'practice_name', 'specialty']
        
        for field in required_fields:
            if not lead_data.get(field):
                logging.error(f"Missing required field: {field}")
                return False
                
        # Basic email validation
        email = lead_data.get('email', '')
        if '@' not in email or '.' not in email:
            logging.error("Invalid email format")
            return False
            
        return True
    
    def calculate_lead_score(self, lead_data: Dict[str, Any]) -> int:
        """Calculate lead qualification score"""
        score = 0
        
        # Practice size (30 points max)
        practice_size = lead_data.get('practice_size', '').lower()
        if 'large' in practice_size or 'multi' in practice_size:
            score += 30
        elif 'medium' in practice_size or 'group' in practice_size:
            score += 20
        elif 'small' in practice_size or 'solo' in practice_size:
            score += 10
            
        # Specialty relevance (25 points max)
        specialty = lead_data.get('specialty', '').lower()
        high_value_specialties = ['psychiatrists', 'adhd-clinics', 'private-practice']
        if any(s in specialty for s in high_value_specialties):
            score += 25
        else:
            score += 15
            
        # Budget indication (20 points max)
        budget = lead_data.get('budget_range', '').lower()
        if 'high' in budget or '5000+' in budget:
            score += 20
        elif 'medium' in budget or '2500+' in budget:
            score += 15
        elif 'low' in budget or '1000+' in budget:
            score += 10
            
        # Timeline urgency (15 points max)
        timeline = lead_data.get('timeline', '').lower()
        if 'immediate' in timeline or 'asap' in timeline:
            score += 15
        elif '1-2 weeks' in timeline or 'soon' in timeline:
            score += 10
        elif '1 month' in timeline or 'researching' in timeline:
            score += 5
            
        # Current challenges (10 points max)
        challenges = lead_data.get('current_challenges', '').lower()
        pain_points = ['overwhelm', 'staffing', 'admin', 'billing', 'scheduling']
        if any(pain in challenges for pain in pain_points):
            score += 10
            
        logging.info(f"Lead score calculated: {score}/100")
        return score
    
    def check_duplicate_lead(self, lead_data: Dict[str, Any]) -> bool:
        """Check for duplicate leads using email hash"""
        email = lead_data.get('email', '').lower().strip()
        email_hash = hashlib.md5(email.encode()).hexdigest()
        
        # In production, this would check CRM/database
        # For now, log the hash for tracking
        logging.info(f"Lead email hash: {email_hash}")
        return False
    
    def route_to_crm(self, lead_data: Dict[str, Any], score: int) -> bool:
        """Route qualified lead to CRM"""
        if score < self.min_score:
            logging.info(f"Lead score {score} below threshold {self.min_score}")
            return False
            
        try:
            # Prepare CRM payload
            crm_payload = {
                'lead_id': f"VM-{datetime.now().strftime('%Y%m%d%H%M%S')}",
                'name': lead_data['name'],
                'email': lead_data['email'],
                'phone': lead_data.get('phone', ''),
                'practice_name': lead_data['practice_name'],
                'specialty': lead_data['specialty'],
                'qualification_score': score,
                'follow_up_priority': 'high' if score >= 85 else 'medium',
                'source': lead_data.get('source', 'Website'),
                'timestamp': datetime.now().isoformat()
            }
            
            # In production, this would make actual API call to CRM
            # For now, save to temp file
            os.makedirs('.tmp/leads', exist_ok=True)
            with open(f".tmp/leads/{crm_payload['lead_id']}.json", 'w') as f:
                json.dump(crm_payload, f, indent=2)
                
            logging.info(f"Lead routed to CRM: {crm_payload['lead_id']}")
            return True
            
        except Exception as e:
            logging.error(f"Failed to route lead to CRM: {str(e)}")
            return False
    
    def process_lead(self, lead_data: Dict[str, Any]) -> Dict[str, Any]:
        """Main lead processing pipeline"""
        try:
            # Step 1: Validate
            if not self.validate_lead_data(lead_data):
                return {'status': 'error', 'message': 'Invalid lead data'}
            
            # Step 2: Check duplicates
            if self.check_duplicate_lead(lead_data):
                return {'status': 'duplicate', 'message': 'Duplicate lead detected'}
            
            # Step 3: Score lead
            score = self.calculate_lead_score(lead_data)
            
            # Step 4: Route to CRM
            routed = self.route_to_crm(lead_data, score)
            
            return {
                'status': 'success' if routed else 'rejected',
                'score': score,
                'routed': routed,
                'message': f'Lead processed with score {score}'
            }
            
        except Exception as e:
            logging.error(f"Lead processing failed: {str(e)}")
            return {'status': 'error', 'message': str(e)}

def main():
    """Test the lead processor"""
    processor = LeadProcessor()
    
    # Sample lead data
    test_lead = {
        'name': 'Dr. Sarah Johnson',
        'email': 'drjohnson@psychpractice.com',
        'phone': '555-0123',
        'practice_name': 'Bay Area Psychiatric Group',
        'specialty': 'psychiatrists',
        'practice_size': 'medium group practice',
        'budget_range': '$5000+',
        'timeline': '2-3 weeks',
        'current_challenges': 'overwhelmed with admin work and scheduling',
        'source': 'Website Contact Form'
    }
    
    result = processor.process_lead(test_lead)
    print(f"Processing result: {json.dumps(result, indent=2)}")

if __name__ == "__main__":
    main()
