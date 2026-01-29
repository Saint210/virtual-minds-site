#!/usr/bin/env python3
"""
Compliance Checker Tool
Validates California psychiatric compliance for content and data
"""

import os
import json
import logging
import re
from datetime import datetime
from typing import Dict, Any, List, Optional

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler('.tmp/logs/compliance_checker.log'),
        logging.StreamHandler()
    ]
)

class ComplianceChecker:
    def __init__(self):
        self.cmia_mode = os.getenv('CMIA_COMPLIANCE_MODE', 'strict')
        self.phi_encryption_required = os.getenv('PHI_ENCRYPTION_REQUIRED', 'true').lower() == 'true'
        self.geo_targeting = os.getenv('GEO_TARGETING', 'california').lower()
        
    def check_hipaa_compliance(self, data: Dict[str, Any]) -> Dict[str, Any]:
        """Check HIPAA compliance for data handling"""
        violations = []
        score = 100
        
        # Check for PHI in inappropriate contexts
        phi_indicators = [
            'ssn', 'social security', 'medical record', 'patient id',
            'diagnosis', 'treatment', 'medication', 'therapy'
        ]
        
        def check_for_phi(text: str, context: str) -> None:
            text_lower = text.lower()
            for indicator in phi_indicators:
                if indicator in text_lower:
                    violations.append(f"PHI indicator '{indicator}' found in {context}")
                    score -= 10
        
        # Check various data fields
        if 'name' in data and len(data['name']) > 0:
            # Names are acceptable in lead contexts but should be protected
            if self.phi_encryption_required and 'encrypted' not in str(data).lower():
                violations.append("PHI encryption required but not implemented")
                score -= 15
        
        if 'email' in data:
            check_for_phi(data['email'], 'email field')
        
        if 'content' in data or 'body_content' in data:
            content_text = str(data.get('content', '') + str(data.get('body_content', '')))
            check_for_phi(content_text, 'content body')
        
        return {
            'compliant': score >= 80,
            'score': max(score, 0),
            'violations': violations,
            'standard': 'HIPAA'
        }
    
    def check_cmia_compliance(self, data: Dict[str, Any]) -> Dict[str, Any]:
        """Check California Medical Injury Compensation Reform Act compliance"""
        violations = []
        score = 100
        
        # CMIA specific requirements for California
        if self.geo_targeting == 'california':
            # Check for California-specific content
            content_text = str(data.get('content', '') + str(data.get('body_content', '') + str(data.get('meta_description', ''))))
            
            if 'california' not in content_text.lower():
                violations.append("Missing California geographic targeting")
                score -= 20
            
            # Check for medical malpractice references (CMIA related)
            malpractice_terms = ['malpractice', 'medical injury', 'compensation', 'lawsuit']
            for term in malpractice_terms:
                if term in content_text.lower():
                    violations.append(f"CMIA-sensitive term '{term}' detected")
                    score -= 15
            
            # Strict mode additional checks
            if self.cmia_mode == 'strict':
                # Check for specific California psychiatric regulations
                ca_regulations = ['board of psychology', 'medical board', 'licensing', 'supervision']
                found_regulations = [reg for reg in ca_regulations if reg in content_text.lower()]
                if not found_regulations:
                    violations.append("Missing California regulatory references")
                    score -= 10
        
        return {
            'compliant': score >= 80,
            'score': max(score, 0),
            'violations': violations,
            'standard': 'CMIA'
        }
    
    def check_professional_standards(self, data: Dict[str, Any]) -> Dict[str, Any]:
        """Check professional healthcare industry standards"""
        violations = []
        score = 100
        
        content_text = str(data.get('content', '') + str(data.get('body_content', '') + str(data.get('title', ''))))
        
        # Check for inappropriate medical claims
        prohibited_claims = [
            'guarantee.*result', 'cure.*condition', 'diagnose.*patient',
            'treatment.*plan', 'prescribe.*medication', 'medical advice'
        ]
        
        for claim in prohibited_claims:
            if re.search(claim, content_text, re.IGNORECASE):
                violations.append(f"Prohibited medical claim: {claim}")
                score -= 20
        
        # Check for professional tone
        unprofessional_terms = [
            'awesome', 'amazing', 'incredible', 'magical', 'instant',
            'hack', 'trick', 'secret'
        ]
        
        for term in unprofessional_terms:
            if term in content_text.lower():
                violations.append(f"Unprofessional language: {term}")
                score -= 5
        
        # Check for appropriate disclaimers
        if 'disclaimer' not in content_text.lower() and 'consult' not in content_text.lower():
            violations.append("Missing professional disclaimer")
            score -= 10
        
        return {
            'compliant': score >= 80,
            'score': max(score, 0),
            'violations': violations,
            'standard': 'Professional Standards'
        }
    
    def check_geographic_targeting(self, data: Dict[str, Any]) -> Dict[str, Any]:
        """Verify California geographic targeting"""
        violations = []
        score = 100
        
        content_text = str(data.get('content', '') + str(data.get('body_content', '') + 
                                   str(data.get('meta_description', '') + str(data.get('title', '')))))
        
        # Check for California references
        ca_references = ['california', 'ca', 'golden state', 'west coast']
        found_ca = any(ref in content_text.lower() for ref in ca_references)
        
        if not found_ca:
            violations.append("No California geographic targeting found")
            score -= 30
        
        # Check for inappropriate out-of-state references
        other_states = ['texas', 'florida', 'new york', 'illinois']
        found_other = [state for state in other_states if state in content_text.lower()]
        
        if found_other:
            violations.append(f"Inappropriate state references: {found_other}")
            score -= 10 * len(found_other)
        
        return {
            'compliant': score >= 80,
            'score': max(score, 0),
            'violations': violations,
            'standard': 'Geographic Targeting'
        }
    
    def check_medical_claim_screening(self, data: Dict[str, Any]) -> Dict[str, Any]:
        """Screen for inappropriate medical claims"""
        violations = []
        score = 100
        
        content_text = str(data.get('content', '') + str(data.get('body_content', '') + str(data.get('title', ''))))
        
        # Direct medical claims
        direct_claims = [
            'we treat', 'we diagnose', 'we prescribe', 'we provide therapy',
            'our staff can diagnose', 'we offer medical treatment'
        ]
        
        for claim in direct_claims:
            if claim in content_text.lower():
                violations.append(f"Direct medical claim: {claim}")
                score -= 25
        
        # Implied medical claims
        implied_claims = [
            'help with depression', 'treat anxiety', 'manage bipolar',
            'adhd treatment', 'medication management'
        ]
        
        for claim in implied_claims:
            if claim in content_text.lower():
                violations.append(f"Implied medical claim: {claim}")
                score -= 20
        
        return {
            'compliant': score >= 80,
            'score': max(score, 0),
            'violations': violations,
            'standard': 'Medical Claim Screening'
        }
    
    def run_compliance_check(self, data: Dict[str, Any], check_type: str = 'all') -> Dict[str, Any]:
        """Run comprehensive compliance check"""
        results = {
            'overall_compliant': True,
            'overall_score': 100,
            'checks': {},
            'timestamp': datetime.now().isoformat(),
            'data_type': check_type
        }
        
        checks_to_run = {
            'hipaa': self.check_hipaa_compliance,
            'cmia': self.check_cmia_compliance,
            'professional': self.check_professional_standards,
            'geographic': self.check_geographic_targeting,
            'medical_claims': self.check_medical_claim_screening
        }
        
        if check_type != 'all':
            checks_to_run = {k: v for k, v in checks_to_run.items() if k in check_type}
        
        for check_name, check_function in checks_to_run.items():
            try:
                result = check_function(data)
                results['checks'][check_name] = result
                
                if not result['compliant']:
                    results['overall_compliant'] = False
                
                results['overall_score'] = min(results['overall_score'], result['score'])
                
            except Exception as e:
                logging.error(f"Compliance check '{check_name}' failed: {str(e)}")
                results['checks'][check_name] = {
                    'compliant': False,
                    'score': 0,
                    'violations': [f"Check failed: {str(e)}"],
                    'standard': check_name.title()
                }
                results['overall_compliant'] = False
                results['overall_score'] = 0
        
        # Save compliance report
        self.save_compliance_report(results)
        
        return results
    
    def save_compliance_report(self, report: Dict[str, Any]) -> bool:
        """Save compliance report to file"""
        try:
            os.makedirs('.tmp/compliance', exist_ok=True)
            timestamp = datetime.now().strftime('%Y%m%d%H%M%S')
            filename = f".tmp/compliance/compliance_report_{timestamp}.json"
            
            with open(filename, 'w') as f:
                json.dump(report, f, indent=2)
                
            logging.info(f"Compliance report saved: {filename}")
            return True
            
        except Exception as e:
            logging.error(f"Failed to save compliance report: {str(e)}")
            return False

def main():
    """Test the compliance checker"""
    checker = ComplianceChecker()
    
    # Sample content data
    test_content = {
        'title': 'Virtual Assistant Services for California Psychiatric Practices',
        'content': 'Our virtual assistants help California psychiatrists with administrative tasks, scheduling, and billing support. We specialize in supporting psychiatric practices throughout California.',
        'meta_description': 'Professional virtual assistant services for psychiatric practices in California. HIPAA compliant administrative support.',
        'body_content': {
            'introduction': 'Comprehensive administrative support for California psychiatric practices.',
            'services': ['Scheduling', 'Billing support', 'Prior authorizations']
        }
    }
    
    result = checker.run_compliance_check(test_content)
    print(f"Compliance check result: {json.dumps(result, indent=2)}")

if __name__ == "__main__":
    main()
