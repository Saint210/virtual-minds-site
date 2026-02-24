import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

// Create a new consultation lead
export const createLead = mutation({
    args: {
        fullName: v.string(),
        email: v.string(),
        ehrPlatform: v.string(),
        practiceSize: v.string(),
        painPoint: v.string(),
    },
    handler: async (ctx, args) => {
        const leadId = await ctx.db.insert("consultationLeads", {
            ...args,
            status: "new",
            createdAt: Date.now(),
        });

        return leadId;
    },
});

// Get all leads (for admin dashboard)
export const getAllLeads = query({
    args: {
        status: v.optional(v.string()),
    },
    handler: async (ctx, args) => {
        if (args.status) {
            return await ctx.db
                .query("consultationLeads")
                .withIndex("status", (q) => q.eq("status", args.status!))
                .order("desc")
                .collect();
        }

        return await ctx.db
            .query("consultationLeads")
            .order("desc")
            .collect();
    },
});

// Get a single lead by ID
export const getLeadById = query({
    args: { id: v.id("consultationLeads") },
    handler: async (ctx, args) => {
        return await ctx.db.get(args.id);
    },
});

// Update lead status
export const updateLeadStatus = mutation({
    args: {
        id: v.id("consultationLeads"),
        status: v.string(),
        contactedBy: v.optional(v.string()),
    },
    handler: async (ctx, args) => {
        const { id, status, contactedBy } = args;

        const updateData: any = {
            status,
        };

        if (status === "contacted" && contactedBy) {
            updateData.contactedAt = Date.now();
            updateData.contactedBy = contactedBy;
        }

        await ctx.db.patch(id, updateData);

        return { success: true };
    },
});

// Add notes to a lead
export const addLeadNotes = mutation({
    args: {
        id: v.id("consultationLeads"),
        notes: v.string(),
    },
    handler: async (ctx, args) => {
        await ctx.db.patch(args.id, {
            notes: args.notes,
        });

        return { success: true };
    },
});

// Get lead statistics
export const getLeadStats = query({
    handler: async (ctx) => {
        const allLeads = await ctx.db.query("consultationLeads").collect();

        const stats = {
            total: allLeads.length,
            new: allLeads.filter(l => l.status === "new").length,
            contacted: allLeads.filter(l => l.status === "contacted").length,
            qualified: allLeads.filter(l => l.status === "qualified").length,
            converted: allLeads.filter(l => l.status === "converted").length,
            lost: allLeads.filter(l => l.status === "lost").length,
        };

        return stats;
    },
});

// Delete a lead (soft delete by changing status)
export const deleteLead = mutation({
    args: { id: v.id("consultationLeads") },
    handler: async (ctx, args) => {
        await ctx.db.delete(args.id);
        return { success: true };
    },
});
