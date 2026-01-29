import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// Calculate savings in real-time
export const calculateSavings = mutation({
  args: {
    practiceSize: v.string(),
    staffCount: v.number(),
    patientVolume: v.string(),
    sessionId: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const baseSalary = 62400; // California average
    const benefitsRate = 0.30; // 30% benefits
    const officeCost = 8500; // Per seat
    const itCost = 4200;
    
    const vaCost = args.staffCount <= 2 ? 22000 : 
                  args.staffCount <= 5 ? 25000 : 28000;
    
    const inClinicCost = (baseSalary * args.staffCount) + 
                        (baseSalary * args.staffCount * benefitsRate) + 
                        officeCost + itCost;
    
    const totalSavings = inClinicCost - vaCost;
    const roi = ((totalSavings / vaCost) * 100);
    
    const calculation = {
      userId: "demo-user" as any, // TODO: Get actual user from auth
      practiceSize: args.practiceSize,
      staffCount: args.staffCount,
      patientVolume: args.patientVolume,
      projectedSavings: totalSavings,
      roi: Math.round(roi),
      createdAt: Date.now(),
    };

    // Save calculation
    const calculationId = await ctx.db.insert("calculations", calculation);

    // Update real-time session if provided
    if (args.sessionId) {
      const existingSession = await ctx.db
        .query("realTimeSessions")
        .withIndex("sessionId", (q) => q.eq("sessionId", args.sessionId!))
        .unique();

      if (existingSession) {
        await ctx.db.patch(existingSession._id, {
          calculationData: calculation,
          lastUpdated: Date.now(),
          viewers: [] // Initialize with empty array
        });
      } else {
        await ctx.db.insert("realTimeSessions", {
          sessionId: args.sessionId,
          userId: "demo-user" as any, // TODO: Get actual user from auth
          calculationData: calculation,
          lastUpdated: Date.now(),
          viewers: [],
        });
      }
    }

    return {
      ...calculation,
      id: calculationId,
      inClinicCost,
      vaCost,
    };
  },
});

// Get real-time session data
export const getSessionData = query({
  args: { sessionId: v.string() },
  handler: async (ctx, args) => {
    const session = await ctx.db
      .query("realTimeSessions")
      .withIndex("sessionId", (q) => q.eq("sessionId", args.sessionId))
      .unique();

    return session;
  },
});

// Join real-time session
export const joinSession = mutation({
  args: { 
    sessionId: v.string(), 
    userId: v.id("users") 
  },
  handler: async (ctx, args) => {
    const session = await ctx.db
      .query("realTimeSessions")
      .withIndex("sessionId", (q) => q.eq("sessionId", args.sessionId))
      .unique();

    if (session) {
      const viewers = session.viewers || [];
      if (!viewers.includes(args.userId)) {
        await ctx.db.patch(session._id, {
          viewers: [...viewers, args.userId],
        });
      }
    }

    return session;
  },
});

// Get user's calculation history
export const getUserCalculations = query({
  args: { userId: v.id("users") },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("calculations")
      .withIndex("userId", (q) => q.eq("userId", args.userId))
      .order("desc")
      .take(10);
  },
});
