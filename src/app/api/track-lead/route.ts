import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const data = await request.json();

        // Calculate lead score
        const leadScore = calculateLeadScore(data);

        // Log lead data (in production, store in database)
        console.log('📊 Calculator Lead Tracked:', {
            calculator: data.calculator_type,
            timestamp: data.timestamp,
            page: data.page_url,
            lead_score: leadScore,
            inputs: data.inputs,
            results: data.results,
        });

        // If high-value lead, log prominently
        if (leadScore >= 80) {
            console.log('🔥 HIGH-VALUE LEAD DETECTED!', {
                score: leadScore,
                total_impact: data.results.totalAnnualImpact || data.results.annualSavings,
                hourly_rate: data.inputs.hourly_rate || data.inputs.hourlyRate,
                admin_hours: data.inputs.admin_hours || data.inputs.adminHours,
                page: data.page_url,
            });

            // TODO: Send notification (email, Slack, etc.)
            // await sendHighValueLeadNotification(data, leadScore);
        }

        // TODO: Store in database
        // Example with Supabase:
        // const { data: lead, error } = await supabase
        //   .from('calculator_leads')
        //   .insert({
        //     calculator_type: data.calculator_type,
        //     inputs: data.inputs,
        //     results: data.results,
        //     lead_score: leadScore,
        //     page_url: data.page_url,
        //     timestamp: data.timestamp,
        //     user_agent: request.headers.get('user-agent'),
        //     ip_address: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip'),
        //   });

        return NextResponse.json({
            success: true,
            lead_score: leadScore,
            message: leadScore >= 80 ? 'High-value lead!' : 'Lead tracked successfully'
        });
    } catch (error) {
        console.error('❌ Error tracking lead:', error);
        return NextResponse.json(
            { error: 'Failed to track lead' },
            { status: 500 }
        );
    }
}

function calculateLeadScore(data: any): number {
    let score = 0;
    const { inputs, results } = data;

    // Normalize input keys (handle both snake_case and camelCase)
    const hourlyRate = inputs.hourly_rate || inputs.hourlyRate || 0;
    const adminHours = inputs.admin_hours || inputs.adminHours || 0;
    const activePatients = inputs.active_patients || inputs.activePatients || 0;
    const priorAuthHours = inputs.prior_auth_hours || inputs.priorAuthHours || 0;
    const billingErrorRate = inputs.billing_error_rate || inputs.billingErrorRate || 0;
    const totalImpact = results.totalAnnualImpact || results.annualSavings || 0;

    // High revenue potential (hourly rate)
    if (hourlyRate >= 500) score += 35;
    else if (hourlyRate >= 400) score += 30;
    else if (hourlyRate >= 300) score += 20;
    else if (hourlyRate >= 200) score += 10;

    // High admin burden (more opportunity for savings)
    if (adminHours >= 25) score += 25;
    else if (adminHours >= 20) score += 20;
    else if (adminHours >= 15) score += 15;
    else if (adminHours >= 10) score += 10;

    // Large practice (more revenue potential)
    if (activePatients >= 100) score += 20;
    else if (activePatients >= 80) score += 18;
    else if (activePatients >= 50) score += 15;
    else if (activePatients >= 30) score += 10;

    // Prior authorization burden (additional pain point)
    if (priorAuthHours >= 10) score += 10;
    else if (priorAuthHours >= 5) score += 5;

    // Billing errors (significant pain point)
    if (billingErrorRate >= 10) score += 10;
    else if (billingErrorRate >= 5) score += 5;

    // High total impact (strong ROI)
    if (totalImpact >= 150000) score += 30;
    else if (totalImpact >= 100000) score += 25;
    else if (totalImpact >= 75000) score += 20;
    else if (totalImpact >= 50000) score += 15;
    else if (totalImpact >= 25000) score += 10;

    return Math.min(score, 100); // Cap at 100
}
