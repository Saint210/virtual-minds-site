'use client';

declare global {
    interface Window {
        plausible?: (event: string, options?: { props?: Record<string, any> }) => void;
    }
}

export const useTracking = () => {
    const trackEvent = (eventName: string, eventProps?: Record<string, any>) => {
        if (typeof window !== 'undefined' && window.plausible) {
            window.plausible(eventName, { props: eventProps || {} });
        }
    };

    const trackPageView = (pagePath: string) => {
        trackEvent('pageview', { page: pagePath });
    };

    const trackClick = (elementName: string, elementType: string, destination?: string) => {
        trackEvent('Click', {
            element: elementName,
            type: elementType,
            destination: destination,
        });
    };

    const trackCalculatorView = (calculatorType: string) => {
        trackEvent('Calculator View', {
            calculator: calculatorType,
        });
    };

    const trackCalculatorInteraction = (
        calculatorType: string,
        inputName: string,
        value: number
    ) => {
        trackEvent('Calculator Interaction', {
            calculator: calculatorType,
            input: inputName,
            value: value,
        });
    };

    const trackCalculatorResult = (
        calculatorType: string,
        inputs: Record<string, number>,
        results: Record<string, number>
    ) => {
        // Track in Plausible
        trackEvent('Calculator Result', {
            calculator: calculatorType,
            total_impact: results.totalAnnualImpact || results.annualSavings,
            admin_hours: inputs.admin_hours || inputs.adminHours,
            hourly_rate: inputs.hourly_rate || inputs.hourlyRate,
            patient_load: inputs.active_patients || inputs.activePatients,
        });

        // Also send to lead intelligence API for detailed storage
        fetch('/api/track-lead', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                calculator_type: calculatorType,
                inputs,
                results,
                timestamp: new Date().toISOString(),
                page_url: window.location.href,
            }),
        }).catch(err => console.error('Failed to track lead:', err));
    };

    const trackCTAClick = (ctaName: string, destination: string, source?: string) => {
        trackEvent('CTA Click', {
            type: ctaName,
            destination: destination,
            source: source || window.location.pathname,
        });
    };

    const trackPhoneClick = (phoneNumber: string) => {
        trackEvent('Click', {
            type: 'Phone Number',
            number: phoneNumber,
            source: window.location.pathname,
        });
    };

    const trackEmailClick = (email: string) => {
        trackEvent('Click', {
            type: 'Email',
            email: email,
            source: window.location.pathname,
        });
    };

    const trackFormSubmit = (formType: string, formData?: Record<string, any>) => {
        trackEvent('Form Submit', {
            type: formType,
            source: window.location.pathname,
            ...formData,
        });
    };

    const trackNavigation = (destination: string, linkType: string, linkText?: string) => {
        trackEvent('Navigation', {
            type: linkType,
            destination: destination,
            text: linkText,
            source: window.location.pathname,
        });
    };

    return {
        trackEvent,
        trackPageView,
        trackClick,
        trackCalculatorView,
        trackCalculatorInteraction,
        trackCalculatorResult,
        trackCTAClick,
        trackPhoneClick,
        trackEmailClick,
        trackFormSubmit,
        trackNavigation,
    };
};
