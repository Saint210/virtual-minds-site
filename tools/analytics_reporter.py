#!/usr/bin/env python3
"""
Analytics Reporter Tool
Processes GA4 data and generates performance reports
"""

import os
import json
import logging
from datetime import datetime, timedelta
from typing import Dict, Any, List, Optional

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler('.tmp/logs/analytics_reporter.log'),
        logging.StreamHandler()
    ]
)

class AnalyticsReporter:
    def __init__(self):
        self.ga_measurement_id = os.getenv('GA_MEASUREMENT_ID', 'G-XXXXXXXXXX')
        self.data_retention_days = int(os.getenv('DATA_RETENTION_DAYS', '730'))  # 2 years
        
    def process_lead_conversion_metrics(self, raw_data: Dict[str, Any]) -> Dict[str, Any]:
        """Process lead conversion metrics"""
        try:
            # Extract conversion data
            total_visitors = raw_data.get('total_visitors', 0)
            total_leads = raw_data.get('total_leads', 0)
            qualified_leads = raw_data.get('qualified_leads', 0)
            
            # Calculate conversion rates
            visitor_to_lead_rate = (total_leads / total_visitors * 100) if total_visitors > 0 else 0
            lead_to_qualified_rate = (qualified_leads / total_leads * 100) if total_leads > 0 else 0
            overall_conversion_rate = (qualified_leads / total_visitors * 100) if total_visitors > 0 else 0
            
            # Target metrics
            target_visitor_to_lead = 3.0  # 3% target
            target_lead_to_qualified = 70.0  # 70% target
            
            return {
                'total_visitors': total_visitors,
                'total_leads': total_leads,
                'qualified_leads': qualified_leads,
                'conversion_rates': {
                    'visitor_to_lead': round(visitor_to_lead_rate, 2),
                    'lead_to_qualified': round(lead_to_qualified_rate, 2),
                    'overall': round(overall_conversion_rate, 2)
                },
                'performance_vs_target': {
                    'visitor_to_lead': {
                        'actual': round(visitor_to_lead_rate, 2),
                        'target': target_visitor_to_lead,
                        'meeting_target': visitor_to_lead_rate >= target_visitor_to_lead
                    },
                    'lead_to_qualified': {
                        'actual': round(lead_to_qualified_rate, 2),
                        'target': target_lead_to_qualified,
                        'meeting_target': lead_to_qualified_rate >= target_lead_to_qualified
                    }
                },
                'period': 'last_30_days'
            }
            
        except Exception as e:
            logging.error(f"Failed to process lead conversion metrics: {str(e)}")
            return {'error': str(e)}
    
    def analyze_content_engagement(self, content_data: Dict[str, Any]) -> Dict[str, Any]:
        """Analyze content engagement by specialty and type"""
        try:
            engagement_metrics = {}
            
            # Process content by specialty
            specialties = ['psychiatrists', 'private-practice', 'adhd-clinics', 'nurse-practitioners', 'drchrono-users', 'charm-health-users']
            
            for specialty in specialties:
                specialty_content = content_data.get(specialty, {})
                
                total_views = sum(page.get('views', 0) for page in specialty_content.values())
                avg_time_on_page = sum(page.get('avg_time', 0) for page in specialty_content.values()) / len(specialty_content) if specialty_content else 0
                bounce_rate = sum(page.get('bounce_rate', 0) for page in specialty_content.values()) / len(specialty_content) if specialty_content else 0
                
                engagement_metrics[specialty] = {
                    'total_views': total_views,
                    'avg_time_on_page': round(avg_time_on_page, 2),
                    'bounce_rate': round(bounce_rate, 2),
                    'top_performing_page': max(specialty_content.items(), key=lambda x: x[1].get('views', 0))[0] if specialty_content else None,
                    'engagement_score': self.calculate_engagement_score(total_views, avg_time_on_page, bounce_rate)
                }
            
            # Find overall best performing specialty
            best_specialty = max(engagement_metrics.items(), key=lambda x: x[1]['engagement_score'])[0] if engagement_metrics else None
            
            return {
                'specialty_performance': engagement_metrics,
                'best_performing_specialty': best_specialty,
                'overall_engagement_trends': self.get_engagement_trends(content_data),
                'recommendations': self.generate_content_recommendations(engagement_metrics)
            }
            
        except Exception as e:
            logging.error(f"Failed to analyze content engagement: {str(e)}")
            return {'error': str(e)}
    
    def calculate_engagement_score(self, views: int, avg_time: float, bounce_rate: float) -> float:
        """Calculate engagement score (0-100)"""
        # Normalize metrics
        view_score = min(views / 1000 * 50, 50)  # Max 50 points for views
        time_score = min(avg_time / 180 * 30, 30)  # Max 30 points for 3+ minutes
        bounce_score = max(30 - (bounce_rate * 0.3), 0)  # Max 30 points for low bounce rate
        
        return round(view_score + time_score + bounce_score, 2)
    
    def get_engagement_trends(self, content_data: Dict[str, Any]) -> Dict[str, Any]:
        """Analyze engagement trends over time"""
        # In production, this would analyze historical data
        # For now, return mock trend data
        return {
            'trending_up': ['cost-analysis', 'prior-authorizations'],
            'trending_down': ['general-admin', 'basic-scheduling'],
            'stable': ['hipaa-compliance', 'california-regulations'],
            'emerging_topics': ['telehealth-support', 'ai-automation']
        }
    
    def generate_content_recommendations(self, engagement_metrics: Dict[str, Any]) -> List[str]:
        """Generate content recommendations based on performance"""
        recommendations = []
        
        # Find underperforming specialties
        low_performing = [spec for spec, metrics in engagement_metrics.items() if metrics['engagement_score'] < 50]
        if low_performing:
            recommendations.append(f"Focus on improving content for: {', '.join(low_performing)}")
        
        # Find high-performing topics
        high_performing = [spec for spec, metrics in engagement_metrics.items() if metrics['engagement_score'] > 80]
        if high_performing:
            recommendations.append(f"Create more content similar to: {', '.join(high_performing)}")
        
        # General recommendations
        recommendations.extend([
            "Optimize page load times for better engagement",
            "Add more video content to increase time on page",
            "Improve internal linking between related specialties"
        ])
        
        return recommendations
    
    def analyze_geographic_performance(self, geo_data: Dict[str, Any]) -> Dict[str, Any]:
        """Analyze performance by geographic region"""
        try:
            # Focus on California performance
            ca_metrics = geo_data.get('california', {})
            other_states = geo_data.get('other_states', {})
            
            total_ca_visitors = ca_metrics.get('visitors', 0)
            total_ca_leads = ca_metrics.get('leads', 0)
            total_other_visitors = other_states.get('visitors', 0)
            total_other_leads = other_states.get('leads', 0)
            
            ca_conversion_rate = (total_ca_leads / total_ca_visitors * 100) if total_ca_visitors > 0 else 0
            other_conversion_rate = (total_other_leads / total_other_visitors * 100) if total_other_visitors > 0 else 0
            
            # California city breakdown
            ca_cities = ca_metrics.get('cities', {})
            top_ca_cities = sorted(ca_cities.items(), key=lambda x: x[1].get('leads', 0), reverse=True)[:5]
            
            return {
                'california_performance': {
                    'visitors': total_ca_visitors,
                    'leads': total_ca_leads,
                    'conversion_rate': round(ca_conversion_rate, 2),
                    'top_cities': [{'city': city, 'leads': metrics.get('leads', 0)} for city, metrics in top_ca_cities]
                },
                'other_states_performance': {
                    'visitors': total_other_visitors,
                    'leads': total_other_leads,
                    'conversion_rate': round(other_conversion_rate, 2)
                },
                'geographic_efficiency': {
                    'ca_vs_other_conversion_diff': round(ca_conversion_rate - other_conversion_rate, 2),
                    'ca_focus_effectiveness': ca_conversion_rate > other_conversion_rate * 1.5
                }
            }
            
        except Exception as e:
            logging.error(f"Failed to analyze geographic performance: {str(e)}")
            return {'error': str(e)}
    
    def generate_weekly_report(self, all_data: Dict[str, Any]) -> Dict[str, Any]:
        """Generate comprehensive weekly performance report"""
        try:
            report_date = datetime.now().strftime('%Y-%m-%d')
            week_start = (datetime.now() - timedelta(days=7)).strftime('%Y-%m-%d')
            
            # Process all metrics
            lead_metrics = self.process_lead_conversion_metrics(all_data.get('lead_data', {}))
            content_metrics = self.analyze_content_engagement(all_data.get('content_data', {}))
            geo_metrics = self.analyze_geographic_performance(all_data.get('geo_data', {}))
            
            # Calculate overall performance score
            overall_score = self.calculate_overall_performance_score(lead_metrics, content_metrics, geo_metrics)
            
            # Generate insights and recommendations
            insights = self.generate_performance_insights(lead_metrics, content_metrics, geo_metrics)
            
            report = {
                'report_metadata': {
                    'report_date': report_date,
                    'period_start': week_start,
                    'period_end': report_date,
                    'report_type': 'weekly_performance'
                },
                'overall_performance': {
                    'score': overall_score,
                    'grade': self.get_performance_grade(overall_score),
                    'key_highlights': insights['highlights'],
                    'areas_for_improvement': insights['improvements']
                },
                'lead_generation': lead_metrics,
                'content_performance': content_metrics,
                'geographic_analysis': geo_metrics,
                'action_items': insights['action_items'],
                'next_steps': insights['next_steps']
            }
            
            # Save report
            self.save_report(report)
            
            return report
            
        except Exception as e:
            logging.error(f"Failed to generate weekly report: {str(e)}")
            return {'error': str(e)}
    
    def calculate_overall_performance_score(self, lead_metrics: Dict, content_metrics: Dict, geo_metrics: Dict) -> float:
        """Calculate overall performance score (0-100)"""
        try:
            scores = []
            
            # Lead generation score (40% weight)
            if 'conversion_rates' in lead_metrics:
                lead_score = lead_metrics['conversion_rates'].get('overall', 0)
                scores.append(lead_score * 0.4)
            
            # Content engagement score (35% weight)
            if 'specialty_performance' in content_metrics:
                content_scores = [metrics['engagement_score'] for metrics in content_metrics['specialty_performance'].values()]
                avg_content_score = sum(content_scores) / len(content_scores) if content_scores else 0
                scores.append(avg_content_score * 0.35)
            
            # Geographic efficiency score (25% weight)
            if 'geographic_efficiency' in geo_metrics:
                geo_efficiency = 100 if geo_metrics['geographic_efficiency'].get('ca_focus_effectiveness', False) else 70
                scores.append(geo_efficiency * 0.25)
            
            return round(sum(scores), 2)
            
        except Exception as e:
            logging.error(f"Failed to calculate overall performance score: {str(e)}")
            return 0.0
    
    def get_performance_grade(self, score: float) -> str:
        """Convert performance score to letter grade"""
        if score >= 90:
            return 'A'
        elif score >= 80:
            return 'B'
        elif score >= 70:
            return 'C'
        elif score >= 60:
            return 'D'
        else:
            return 'F'
    
    def generate_performance_insights(self, lead_metrics: Dict, content_metrics: Dict, geo_metrics: Dict) -> Dict[str, Any]:
        """Generate performance insights and recommendations"""
        insights = {
            'highlights': [],
            'improvements': [],
            'action_items': [],
            'next_steps': []
        }
        
        # Lead generation insights
        if 'performance_vs_target' in lead_metrics:
            visitor_performance = lead_metrics['performance_vs_target'].get('visitor_to_lead', {})
            if visitor_performance.get('meeting_target', False):
                insights['highlights'].append("Lead generation meeting or exceeding targets")
            else:
                insights['improvements'].append("Lead generation below target - optimize conversion funnel")
                insights['action_items'].append("Review and optimize landing page performance")
        
        # Content performance insights
        if 'best_performing_specialty' in content_metrics:
            best_specialty = content_metrics['best_performing_specialty']
            insights['highlights'].append(f"Strong performance in {best_specialty} specialty")
            insights['action_items'].append(f"Create more content for {best_specialty} audience")
        
        # Geographic insights
        if 'geographic_efficiency' in geo_metrics:
            ca_effectiveness = geo_metrics['geographic_efficiency'].get('ca_focus_effectiveness', False)
            if ca_effectiveness:
                insights['highlights'].append("California geographic targeting highly effective")
            else:
                insights['improvements'].append("California targeting needs optimization")
        
        # Next steps
        insights['next_steps'] = [
            "Schedule weekly performance review meeting",
            "Implement high-priority action items",
            "Monitor changes in key metrics",
            "Adjust strategy based on data insights"
        ]
        
        return insights
    
    def save_report(self, report: Dict[str, Any]) -> bool:
        """Save analytics report to file"""
        try:
            os.makedirs('.tmp/reports', exist_ok=True)
            timestamp = datetime.now().strftime('%Y%m%d_%H%M%S')
            filename = f".tmp/reports/analytics_report_{timestamp}.json"
            
            with open(filename, 'w') as f:
                json.dump(report, f, indent=2)
                
            logging.info(f"Analytics report saved: {filename}")
            return True
            
        except Exception as e:
            logging.error(f"Failed to save analytics report: {str(e)}")
            return False

def main():
    """Test the analytics reporter"""
    reporter = AnalyticsReporter()
    
    # Sample data
    sample_data = {
        'lead_data': {
            'total_visitors': 1000,
            'total_leads': 35,
            'qualified_leads': 25
        },
        'content_data': {
            'psychiatrists': {
                'cost-analysis': {'views': 500, 'avg_time': 180, 'bounce_rate': 40},
                'prior-auths': {'views': 300, 'avg_time': 120, 'bounce_rate': 50}
            }
        },
        'geo_data': {
            'california': {
                'visitors': 800,
                'leads': 30,
                'cities': {
                    'Los Angeles': {'leads': 15},
                    'San Francisco': {'leads': 10},
                    'San Diego': {'leads': 5}
                }
            },
            'other_states': {
                'visitors': 200,
                'leads': 5
            }
        }
    }
    
    report = reporter.generate_weekly_report(sample_data)
    print(f"Weekly report generated: {json.dumps(report, indent=2)}")

if __name__ == "__main__":
    main()
