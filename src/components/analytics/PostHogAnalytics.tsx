"use client";

import { useEffect } from "react";
import Script from "next/script";

// PostHog type definitions
declare global {
  interface Window {
    posthog?: any;
    posthog_lib?: any;
  }
}

interface PostHogAnalyticsProps {
  apiKey?: string;
  apiHost?: string;
  enableSessionRecording?: boolean;
  enableHeatmaps?: boolean;
}

export default function PostHogAnalytics({
  apiKey,
  apiHost = process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://app.posthog.com",
  enableSessionRecording = true,
  enableHeatmaps = true,
}: PostHogAnalyticsProps) {
  const posthogApiKey = apiKey || process.env.NEXT_PUBLIC_POSTHOG_KEY;

  useEffect(() => {
    if (!posthogApiKey) return;

    // Initialize PostHog only on client side
    if (typeof window !== "undefined" && !window.posthog) {
      // Load PostHog script first
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.async = true;
      script.defer = true;
      script.src = `${apiHost}/static/array.js`;
      
      // Add script to head
      document.head.appendChild(script);

      // Wait for script to load, then initialize
      script.addEventListener('load', () => {
        setTimeout(() => {
          try {
            if (window.posthog && typeof window.posthog.init === 'function') {
              window.posthog.init(posthogApiKey, {
                api_host: apiHost,
                autocapture: true,
                capture_pageview: true,
                capture_pageleave: true,
                capture_dead_clicks: true,
                session_recording: {
                  enabled: enableSessionRecording
                },
                heatmap: {
                  enabled: enableHeatmaps
                },
                persistence: 'localStorage',
                property_blacklist: ['password', 'credit_card'],
                sanitize_properties: true
              });

              // Track initial page view
              window.posthog.capture("$pageview", {
                page_title: document.title,
                page_url: window.location.href,
                referrer: document.referrer,
                utm_source: new URLSearchParams(window.location.search).get("utm_source"),
                utm_medium: new URLSearchParams(window.location.search).get("utm_medium"),
                utm_campaign: new URLSearchParams(window.location.search).get("utm_campaign"),
              });
            }
          } catch (error) {
            console.warn("PostHog initialization failed:", error);
          }
        }, 1000);
      });

      script.addEventListener('error', () => {
        console.warn("PostHog script failed to load");
      });
    }
  }, [posthogApiKey, apiHost, enableSessionRecording, enableHeatmaps]);

  if (!posthogApiKey) return null;

  return (
    <Script
      src={`${apiHost}/static/array.js`}
      strategy="lazyOnload"
      onError={() => console.warn("PostHog script failed to load")}
    />
  );
}

// PostHog utility functions for Virtual Minds
export const PostHogUtils = {
  // Track VA service page views
  trackServiceView: (serviceName: string, specialty: string) => {
    if (typeof window !== "undefined" && window.posthog && typeof window.posthog.capture === 'function') {
      window.posthog.capture("va_service_viewed", {
        service_name: serviceName,
        specialty: specialty,
        timestamp: new Date().toISOString(),
      });
    }
  },

  // Track contact form submissions
  trackContactSubmission: (formData: any) => {
    if (typeof window !== "undefined" && window.posthog && typeof window.posthog.capture === 'function') {
      window.posthog.capture("contact_form_submitted", {
        form_type: formData.type,
        practice_size: formData.practiceSize,
        specialty: formData.specialty,
        urgency: formData.urgency,
        timestamp: new Date().toISOString(),
      });
    }
  },

  // Track cost analysis interactions
  trackCostAnalysis: (analysisType: string, results: any) => {
    if (typeof window !== "undefined" && window.posthog && typeof window.posthog.capture === 'function') {
      window.posthog.capture("cost_analysis_completed", {
        analysis_type: analysisType,
        practice_size: results.practiceSize,
        estimated_savings: results.estimatedSavings,
        roi_months: results.roiMonths,
        timestamp: new Date().toISOString(),
      });
    }
  },

  // Track consultation bookings
  trackConsultationBooking: (bookingData: any) => {
    if (typeof window !== "undefined" && window.posthog && typeof window.posthog.capture === 'function') {
      window.posthog.capture("consultation_booked", {
        consultation_type: bookingData.type,
        preferred_date: bookingData.preferredDate,
        practice_info: bookingData.practiceInfo,
        value: bookingData.value || 0,
        currency: "USD",
        timestamp: new Date().toISOString(),
      });
    }
  },

  // Track page engagement
  trackPageEngagement: (page: string, timeOnPage: number, scrollDepth: number) => {
    if (typeof window !== "undefined" && window.posthog && typeof window.posthog.capture === 'function') {
      window.posthog.capture("page_engagement", {
        page_name: page,
        time_on_page: timeOnPage,
        scroll_depth: scrollDepth,
        timestamp: new Date().toISOString(),
      });
    }
  },

  // Track user journey through VA services
  trackUserJourney: (step: string, context: any) => {
    if (typeof window !== "undefined" && window.posthog && typeof window.posthog.capture === 'function') {
      window.posthog.capture("user_journey_step", {
        journey_step: step,
        context: context,
        timestamp: new Date().toISOString(),
      });
    }
  },

  // Identify psychiatric practice type
  identifyPracticeType: (practiceType: string, specialties: string[]) => {
    if (typeof window !== "undefined" && window.posthog && typeof window.posthog.identify === 'function') {
      window.posthog.identify("psychiatric_practice", {
        practice_type: practiceType,
        specialties: specialties,
        user_type: "psychiatric_practice",
        timestamp: new Date().toISOString(),
      });
    }
  },

  // Track feature usage
  trackFeatureUsage: (feature: string, action: string) => {
    if (typeof window !== "undefined" && window.posthog && typeof window.posthog.capture === 'function') {
      window.posthog.capture("feature_used", {
        feature_name: feature,
        action: action,
        timestamp: new Date().toISOString(),
      });
    }
  },
};
