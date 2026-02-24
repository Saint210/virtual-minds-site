declare module "context7" {
  export class Context7Client {
    constructor(config: {
      apiKey: string;
      projectId: string;
      knowledgeBase?: any;
    });
    
    generate(params: {
      model: string;
      messages: Array<{role: string; content: string}>;
      maxTokens?: number;
      temperature?: number;
    }): Promise<{
      content: string;
      metadata?: any;
    }>;
  }
}
