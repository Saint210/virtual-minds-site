import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// Enhanced AI with psychiatric context
export const generatePsychiatricContent = mutation({
  args: {
    prompt: v.string(),
    contentType: v.string(), // 'blog', 'service', 'roi', 'compliance'
    targetAudience: v.string(), // 'psychiatrists', 'practice managers', 'patients'
  },
  handler: async (ctx, args) => {
    // Note: Context7 integration temporarily disabled - using mock responses
    const mockContent = `Generated ${args.contentType} content for ${args.targetAudience} based on: ${args.prompt}`;

    // Store generated content
    await ctx.db.insert("generatedContent", {
      prompt: args.prompt,
      contentType: args.contentType,
      targetAudience: args.targetAudience,
      content: mockContent,
      contextUsed: false,
      type: args.contentType,
      title: `${args.contentType} for ${args.targetAudience}`,
      modifiedAt: Date.now(),
      createdAt: Date.now(),
    });

    return {
      content: mockContent,
      metadata: { mock: true },
    };
  },
});

// Psychiatric-specific ROI calculations
export const calculatePsychiatricROI = mutation({
  args: {
    practiceSize: v.string(),
    specialties: v.array(v.string()),
    averagePatientLoad: v.number(),
    billingComplexity: v.string(),
  },
  handler: async (ctx, args) => {
    // Note: Context7 integration temporarily disabled - using mock calculations
    const mockROIData = {
      practiceSize: args.practiceSize,
      specialties: args.specialties,
      currentCosts: {
        psychiatristSalary: 275000,
        administrativeOverhead: 82500,
        emrCosts: 12000,
        officeExpenses: 36000,
        total: 405500
      },
      vaCosts: {
        vaSalary: 28000,
        benefitsAndTaxes: 8400,
        trainingCosts: 2000,
        technologyCosts: 1500,
        total: 39900
      },
      projections: {
        monthlySavings: 27500,
        annualSavings: 330000,
        roiPercentage: 827,
        paybackPeriod: 1.4
      },
      assumptions: {
        psychiatristHourlyRate: 150,
        vaProductivityGain: 25,
        billingAccuracyImprovement: 15,
        complianceRiskReduction: 20000
      }
    };
    
    await ctx.db.insert("roiCalculations", {
      practiceSize: mockROIData.practiceSize,
      currentStaff: mockROIData.currentCosts?.psychiatristSalary ? 1 : 0, // TODO: Calculate properly
      vaHours: 160, // Standard VA hours
      monthlyCost: mockROIData.vaCosts?.total || 39900,
      savingsAmount: mockROIData.projections?.annualSavings || 330000,
      roiPercentage: mockROIData.projections?.roiPercentage || 827,
      createdAt: Date.now(),
    });

    return mockROIData;
  },
});

// Compliance checking for psychiatric content
export const checkPsychiatricCompliance = mutation({
  args: {
    content: v.string(),
    contentType: v.string(),
  },
  handler: async (ctx, args) => {
    // Note: Context7 integration temporarily disabled - using mock compliance check
    const mockComplianceResult = {
      score: 92,
      issues: [
        "Missing HIPAA notice on telehealth page",
        "No emergency contact information"
      ],
      recommendations: [
        "Add specific HIPAA compliance notice",
        "Include California medical board license information",
        "Add emergency disclosure for telehealth"
      ],
      riskLevel: "low"
    };

    await ctx.db.insert("complianceChecks", {
      checkType: "compliance",
      result: mockComplianceResult.score.toString(),
      details: mockComplianceResult.issues.join(", "),
      checkedAt: Date.now(),
      status: mockComplianceResult.riskLevel,
    });

    return mockComplianceResult;
  },
});
