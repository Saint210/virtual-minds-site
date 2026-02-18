import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  // Users table (from calculations.ts)
  users: defineTable({
    name: v.string(),
    email: v.string(),
    practiceSize: v.string(),
    staffCount: v.number(),
    createdAt: v.number(),
  }).index("email", ["email"]),

  // Calculations table (from calculations.ts)
  calculations: defineTable({
    userId: v.id("users"),
    practiceSize: v.string(),
    staffCount: v.number(),
    patientVolume: v.string(),
    projectedSavings: v.number(),
    roi: v.number(),
    createdAt: v.number(),
  }).index("userId", ["userId"]),

  // Real-time sessions table (from calculations.ts)
  realTimeSessions: defineTable({
    sessionId: v.string(),
    userId: v.id("users"),
    calculationData: v.any(),
    lastUpdated: v.number(),
    viewers: v.array(v.string()),
  }).index("sessionId", ["sessionId"]).index("userId", ["userId"]),

  // Content management
  contentPages: defineTable({
    slug: v.string(),
    title: v.string(),
    content: v.string(),
    category: v.string(),
    lastModified: v.number(),
    modifiedBy: v.string(),
  }).index("slug", ["slug"]),

  // AI chat conversations
  aiConversations: defineTable({
    sessionId: v.string(),
    messages: v.array(v.object({
      role: v.string(),
      content: v.string(),
      timestamp: v.number(),
      changeRequest: v.optional(v.object({
        type: v.string(),
        target: v.string(),
        oldValue: v.string(),
        newValue: v.string(),
        description: v.string(),
        status: v.string(), // 'pending', 'approved', 'rejected'
      }))
    })),
    createdAt: v.number(),
    lastActivity: v.number(),
  }).index("sessionId", ["sessionId"]),

  // AI change requests
  changeRequests: defineTable({
    conversationId: v.id("aiConversations"),
    pageSlug: v.string(),
    requestType: v.string(), // 'text', 'styling', 'layout', 'pricing'
    description: v.string(),
    oldValue: v.string(),
    newValue: v.string(),
    status: v.string(), // 'pending', 'in_progress', 'completed', 'rejected'
    createdAt: v.number(),
    completedAt: v.optional(v.number()),
  }).index("conversationId", ["conversationId"]),

  // Admin users
  adminUsers: defineTable({
    email: v.string(),
    name: v.string(),
    role: v.string(), // 'owner', 'admin', 'editor'
    lastLogin: v.number(),
    isActive: v.boolean(),
  }).index("email", ["email"]),

  // Notion clients sync
  notionClients: defineTable({
    notionId: v.string(),
    name: v.string(),
    email: v.string(),
    practiceSize: v.string(),
    specialties: v.array(v.string()),
    status: v.string(),
    startDate: v.string(),
    monthlyFee: v.number(),
    lastContact: v.string(),
    syncedAt: v.number(),
  }).index("notionId", ["notionId"]),

  // Generated content
  generatedContent: defineTable({
    title: v.string(),
    content: v.string(),
    type: v.string(),
    prompt: v.string(),
    contentType: v.string(),
    targetAudience: v.string(),
    contextUsed: v.boolean(),
    createdAt: v.number(),
    modifiedAt: v.number(),
  }),

  // ROI calculations
  roiCalculations: defineTable({
    practiceSize: v.string(),
    currentStaff: v.number(),
    vaHours: v.number(),
    monthlyCost: v.number(),
    savingsAmount: v.number(),
    roiPercentage: v.number(),
    createdAt: v.number(),
  }),

  // Compliance checks
  complianceChecks: defineTable({
    checkType: v.string(),
    result: v.string(),
    details: v.string(),
    checkedAt: v.number(),
    status: v.string(),
  }),

  // Notion content
  notionContent: defineTable({
    notionId: v.string(),
    title: v.string(),
    content: v.string(),
    contentType: v.string(),
    targetPage: v.string(),
    status: v.string(),
    createdAt: v.number(),
  }),

  // Notion tasks
  notionTasks: defineTable({
    notionId: v.string(),
    title: v.string(),
    description: v.string(),
    assignee: v.string(),
    priority: v.string(),
    dueDate: v.string(),
    relatedClient: v.string(),
    taskType: v.string(),
    status: v.string(),
    createdAt: v.number(),
  }),

  // Activity Logs
  activityLogs: defineTable({
    user: v.string(), // e.g., "Admin User" or email
    action: v.string(), // e.g., "Login", "Update Page"
    details: v.string(), // e.g., "Successful login from IP..."
    type: v.string(), // 'auth', 'content', 'system', 'media', 'data'
    metadata: v.optional(v.any()), // flexible JSON payload
    timestamp: v.number(),
  }).index("timestamp", ["timestamp"]).index("type", ["type"]),

  // Consultation leads from booking form
  consultationLeads: defineTable({
    fullName: v.string(),
    email: v.string(),
    ehrPlatform: v.string(),
    practiceSize: v.string(),
    painPoint: v.string(),
    status: v.string(), // 'new', 'contacted', 'qualified', 'converted', 'lost'
    notes: v.optional(v.string()),
    contactedAt: v.optional(v.number()),
    contactedBy: v.optional(v.string()),
    createdAt: v.number(),
  }).index("email", ["email"]).index("status", ["status"]).index("createdAt", ["createdAt"]),
});
