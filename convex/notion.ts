import { Client } from "@notionhq/client";
import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// Initialize Notion client
const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

// Notion database IDs (these would be configured in Notion)
const DATABASES = {
  clients: process.env.NOTION_CLIENTS_DB || "",
  content: process.env.NOTION_CONTENT_DB || "",
  tasks: process.env.NOTION_TASKS_DB || "",
  templates: process.env.NOTION_TEMPLATES_DB || "",
};

/*
// Sync clients from Notion to Convex
export const syncNotionClients = mutation({
  args: {},
  handler: async (ctx) => {
    try {
      // Fetch all clients from Notion
      // TODO: Fix Notion API integration
      // const response = await notion.databases.query({
      //   database_id: DATABASES.clients,
      //   filter: {
      //     property: "Status",
      //     select: {
      //       equals: "Active"
      //     }
      //   }
      // });

      // Mock response for now
      const response = { results: [] };

      const clients = response.results.map((page: any) => ({
        notionId: page.id,
        name: page.properties.Name?.title?.[0]?.plain_text || "",
        email: page.properties.Email?.email || "",
        practiceSize: page.properties["Practice Size"]?.select?.name || "",
        specialties: page.properties.Specialties?.multi_select?.map((s: any) => s.name) || [],
        status: page.properties.Status?.select?.name || "",
        startDate: page.properties["Start Date"]?.date?.start || "",
        monthlyFee: page.properties["Monthly Fee"]?.number || 0,
        lastContact: page.properties["Last Contact"]?.date?.start || "",
        syncedAt: Date.now(),
      }));

      // Sync to Convex
      for (const client of clients) {
        await ctx.db.insert("notionClients", client);
      }

      return { synced: response.results.length, total: response.results.length };
    } catch (error) {
      console.error("Failed to sync Notion clients:", error);
      throw new Error("Notion sync failed");
    }
  },
});

// Create content in Notion from AI-generated content
export const createNotionContent = mutation({
  args: {
    title: v.string(),
    content: v.string(),
    contentType: v.string(),
    targetPage: v.string(),
    status: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    try {
      // Create new page in Notion content database
      const page = await notion.pages.create({
        parent: {
          database_id: DATABASES.content,
          type: "database_id"
        },
        properties: {
          Title: {
            title: [
              {
                text: {
                  content: args.title
                }
              }
            ]
          },
          "Content Type": {
            select: {
              name: args.contentType
            }
          },
          "Target Page": {
            rich_text: [
              {
                text: {
                  content: args.targetPage
                }
              }
            ]
          },
          Status: {
            select: {
              name: args.status || "Draft"
            }
          },
          "Created Date": {
            date: {
              start: new Date().toISOString()
            }
          }
        },
        children: [
          {
            object: "block",
            type: "paragraph",
            paragraph: {
              rich_text: [
                {
                  text: {
                    content: args.content
                  }
                }
              ]
            }
          }
        ]
      });

      // Store reference in Convex
      await ctx.db.insert("notionContent", {
        notionId: page.id,
        title: args.title,
        content: args.content,
        contentType: args.contentType,
        targetPage: args.targetPage,
        status: args.status || "Draft",
        createdAt: Date.now(),
      });

      return { success: true, notionId: page.id };
    } catch (error) {
      console.error("Failed to create Notion content:", error);
      throw new Error("Notion content creation failed");
    }
  },
});

// Create tasks in Notion
export const createNotionTask = mutation({
  args: {
    title: v.string(),
    description: v.string(),
    assignee: v.optional(v.string()),
    priority: v.string(), // 'high', 'medium', 'low'
    dueDate: v.optional(v.string()),
    relatedClient: v.optional(v.string()),
    taskType: v.string(), // 'content', 'client', 'compliance', 'development'
  },
  handler: async (ctx, args) => {
    try {
      const task = await notion.pages.create({
        parent: {
          database_id: DATABASES.tasks,
          type: "database_id"
        },
        properties: {
          Task: {
            title: [
              {
                text: {
                  content: args.title
                }
              }
            ]
          },
          Description: {
            rich_text: [
              {
                text: {
                  content: args.description
                }
              }
            ]
          },
          Priority: {
            select: {
              name: args.priority
            }
          },
          Status: {
            select: {
              name: "Not Started"
            }
          },
          "Task Type": {
            select: {
              name: args.taskType
            }
          },
          "Due Date": args.dueDate ? {
            date: {
              start: args.dueDate
            }
          } : undefined,
          Assignee: args.assignee ? {
            people: [
              {
                id: args.assignee
              }
            ]
          } : undefined,
          "Related Client": args.relatedClient ? {
            relation: [
              {
                id: args.relatedClient
              }
            ]
          } : undefined
        }
      });

      // Store task in Convex
      await ctx.db.insert("notionTasks", {
        notionId: task.id,
        title: args.title,
        description: args.description,
        assignee: args.assignee,
        priority: args.priority,
        dueDate: args.dueDate,
        relatedClient: args.relatedClient,
        taskType: args.taskType,
        status: "Not Started",
        createdAt: Date.now(),
      });

      return { success: true, taskId: task.id };
    } catch (error) {
      console.error("Failed to create Notion task:", error);
      throw new Error("Notion task creation failed");
    }
  },
});

// Get content templates from Notion
export const getNotionTemplates = query({
  args: {
    templateType: v.optional(v.string()), // 'service', 'blog', 'email', 'compliance'
  },
  handler: async (ctx, args) => {
    try {
      let filter = {};
      if (args.templateType) {
        filter = {
          property: "Template Type",
          select: {
            equals: args.templateType
          }
        };
      }

      const response = await notion.databases.query({
        database_id: DATABASES.templates,
        filter
      });

      return response.results.map((template: any) => ({
        notionId: template.id,
        title: template.properties.Title?.title?.[0]?.plain_text || "",
        type: template.properties["Template Type"]?.select?.name || "",
        content: template.properties.Content?.rich_text?.[0]?.plain_text || "",
        variables: template.properties.Variables?.rich_text?.[0]?.plain_text || "",
        usage: template.properties.Usage?.rich_text?.[0]?.plain_text || "",
        createdAt: template.properties["Created Date"]?.date?.start || "",
      }));
    } catch (error) {
      console.error("Failed to fetch Notion templates:", error);
      return [];
    }
  },
});

// Update page content in both Notion and Convex
export const updateContentEverywhere = mutation({
  args: {
    pageSlug: v.string(),
    content: v.string(),
    title: v.optional(v.string()),
    notionPageId: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    try {
      // Update in Convex
      await ctx.db.insert("contentUpdates", {
        pageSlug: args.pageSlug,
        content: args.content,
        title: args.title,
        notionPageId: args.notionPageId,
        updatedAt: Date.now(),
      });

      // Update in Notion if page ID provided
      if (args.notionPageId) {
        await notion.pages.update({
          page_id: args.notionPageId,
          properties: {
            Title: {
              title: [
                {
                  text: {
                    content: args.title || "Updated Content"
                  }
                }
              ]
            },
            "Last Updated": {
              date: {
                start: new Date().toISOString()
              }
            }
          },
          children: [
            {
              object: "block",
              type: "paragraph",
              paragraph: {
                rich_text: [
                  {
                    text: {
                      content: args.content
                    }
                  }
                ]
              }
            }
          ]
        });
      }

      return { success: true, updatedIn: ["convex", args.notionPageId ? "notion" : "convex"] };
    } catch (error) {
      console.error("Failed to update content:", error);
      throw new Error("Content update failed");
    }
  },
});
*/
