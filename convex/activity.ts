
import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const logActivity = mutation({
    args: {
        user: v.string(),
        action: v.string(),
        details: v.string(),
        type: v.string(),
        metadata: v.optional(v.any()),
    },
    handler: async (ctx, args) => {
        // Basic validation or sanitization
        await ctx.db.insert("activityLogs", {
            ...args,
            timestamp: Date.now(),
        });
    },
});

export const getLogs = query({
    args: {
        limit: v.optional(v.number()),
        type: v.optional(v.string()),
    },
    handler: async (ctx, args) => {
        let logsQuery = ctx.db.query("activityLogs").withIndex("timestamp");

        // Type filtering is tricky with timestamp index, so we might fetch and filter or use .filter()
        // For now, let's just reverse order by timestamp
        const logs = await logsQuery.order("desc").take(args.limit || 50);

        if (args.type && args.type !== 'all') {
            return logs.filter(log => log.type === args.type);
        }

        return logs;
    },
});
