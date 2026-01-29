import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// AI Chat System
export const startAIConversation = mutation({
  args: {
    initialMessage: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const sessionId = crypto.randomUUID();
    
    await ctx.db.insert("aiConversations", {
      sessionId,
      messages: [{
        role: "assistant",
        content: "Hello! I'm your Virtual Minds content assistant. I can help you update any page content, styling, pricing, or make improvements to the site. What would you like to change today?",
        timestamp: Date.now(),
      }],
      createdAt: Date.now(),
      lastActivity: Date.now(),
    });

    return { sessionId };
  },
});

export const sendAIMessage = mutation({
  args: {
    sessionId: v.string(),
    message: v.string(),
  },
  handler: async (ctx, args) => {
    const conversation = await ctx.db
      .query("aiConversations")
      .withIndex("sessionId", (q) => q.eq("sessionId", args.sessionId))
      .unique();

    if (!conversation) {
      throw new Error("Conversation not found");
    }

    // Add user message
    const updatedMessages = [...conversation.messages, {
      role: "user",
      content: args.message,
      timestamp: Date.now(),
      changeRequest: undefined
    }];

    // Generate AI response with change detection
    const aiResponse = await generateAIResponse(args.message, conversation.messages);
    
    updatedMessages.push({
      role: "assistant",
      content: aiResponse.content,
      timestamp: Date.now(),
      changeRequest: aiResponse.changeRequest,
    });

    // Update conversation
    await ctx.db.patch(conversation._id, {
      messages: updatedMessages,
      lastActivity: Date.now(),
    });

    // Store change request if detected
    if (aiResponse.changeRequest) {
      await ctx.db.insert("changeRequests", {
        conversationId: conversation._id,
        pageSlug: aiResponse.changeRequest.target,
        requestType: aiResponse.changeRequest.type,
        description: aiResponse.changeRequest.description,
        oldValue: aiResponse.changeRequest.oldValue,
        newValue: aiResponse.changeRequest.newValue,
        status: "pending",
        createdAt: Date.now(),
      });
    }

    return { 
      message: aiResponse.content,
      changeRequest: aiResponse.changeRequest 
    };
  },
});

// Content Management
export const updatePageContent = mutation({
  args: {
    slug: v.string(),
    content: v.string(),
    title: v.optional(v.string()),
    modifiedBy: v.string(),
  },
  handler: async (ctx, args) => {
    const existingPage = await ctx.db
      .query("contentPages")
      .withIndex("slug", (q) => q.eq("slug", args.slug))
      .first();

    if (existingPage) {
      await ctx.db.patch(existingPage._id, {
        content: args.content,
        title: args.title || existingPage.title,
        lastModified: Date.now(),
        modifiedBy: args.modifiedBy,
      });
    } else {
      await ctx.db.insert("contentPages", {
        slug: args.slug,
        title: args.title || args.slug,
        content: args.content,
        category: "general",
        lastModified: Date.now(),
        modifiedBy: args.modifiedBy,
      });
    }

    return { success: true };
  },
});

// Get conversation
export const getAIConversation = query({
  args: { sessionId: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("aiConversations")
      .withIndex("sessionId", (q) => q.eq("sessionId", args.sessionId))
      .first();
  },
});

// Get pending changes
export const getPendingChanges = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("changeRequests")
      .filter((q) => q.eq(q.field("status"), "pending"))
      .collect();
  },
});

// AI Response Generation (simplified)
async function generateAIResponse(message: string, conversationHistory: any[]) {
  const lowerMessage = message.toLowerCase();
  
  // Detect change requests
  if (lowerMessage.includes("change") || lowerMessage.includes("update") || lowerMessage.includes("modify")) {
    const targetPage = extractPageFromMessage(message);
    const changeType = detectChangeType(message);
    const newValue = extractNewValue(message);
    
    return {
      content: `I understand you want to ${changeType} the ${targetPage} page. I've prepared the update for your review. Would you like me to implement this change?`,
      changeRequest: {
        type: changeType,
        target: targetPage,
        oldValue: "Current content",
        newValue: newValue,
        description: `User wants to ${changeType} ${targetPage}`,
        status: "pending"
      }
    };
  }

  // General responses
  if (lowerMessage.includes("pricing")) {
    return {
      content: "I can help update pricing. Would you like to change the Starter plan, Professional plan, or Enterprise plan? Please specify the new pricing and I'll update it.",
      changeRequest: undefined
    };
  }

  if (lowerMessage.includes("hero") || lowerMessage.includes("headline")) {
    return {
      content: "I can update the hero section. What would you like the new headline to be? I can also change the description, CTA button text, or background styling.",
      changeRequest: undefined
    };
  }

  return {
    content: "I'm here to help! I can update page content, styling, pricing, or make improvements. What specific changes would you like to make?",
    changeRequest: undefined
  };
}

function extractPageFromMessage(message: string): string {
  const pages = ["home", "pricing", "services", "about", "contact", "cost analysis", "roi calculator"];
  for (const page of pages) {
    if (message.toLowerCase().includes(page)) {
      return page;
    }
  }
  return "specified page";
}

function detectChangeType(message: string): string {
  if (message.toLowerCase().includes("text") || message.toLowerCase().includes("content")) return "text";
  if (message.toLowerCase().includes("price") || message.toLowerCase().includes("cost")) return "pricing";
  if (message.toLowerCase().includes("color") || message.toLowerCase().includes("style")) return "styling";
  if (message.toLowerCase().includes("layout")) return "layout";
  return "content";
}

function extractNewValue(message: string): string {
  // Simple extraction - in real implementation, this would be more sophisticated
  const quotes = message.match(/"([^"]+)"/g);
  return quotes ? quotes[quotes.length - 1] : "New value specified in message";
}
