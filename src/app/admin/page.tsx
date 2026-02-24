"use client";

import { useState, useEffect } from "react";

// Mock API for demonstration - replace with real Convex when installed
const mockAPI = {
  startConversation: async () => ({ sessionId: "demo-session-" + Date.now() }),
  sendMessage: async (data: any) => ({
    message: "I understand your request. Let me help you update that content.",
    changeRequest: data.message.includes("change") ? {
      type: "content",
      target: "services page",
      oldValue: "Current content",
      newValue: data.message,
      status: "pending"
    } : null
  }),
  updatePage: async () => ({ success: true }),
  getConversation: async () => ({
    messages: [
      {
        role: "assistant",
        content: "Hello! I'm your Virtual Minds content assistant. I can help you update any page content, styling, pricing, or make improvements to the site. What would you like to change today?",
        timestamp: Date.now() - 10000
      }
    ]
  }),
  getPendingChanges: async () => [
    {
      _id: "change-1",
      pageSlug: "services",
      requestType: "content",
      description: "Update service description",
      oldValue: "Current service description",
      newValue: "New service description with enhanced features",
      status: "pending",
      createdAt: Date.now() - 5000
    }
  ]
};

interface Message {
  role: "user" | "assistant";
  content: string;
  timestamp: number;
  changeRequest?: {
    type: string;
    target: string;
    oldValue: string;
    newValue: string;
    status: string;
  };
}

interface ChangeRequest {
  _id: string;
  pageSlug: string;
  requestType: string;
  description: string;
  oldValue: string;
  newValue: string;
  status: string;
  createdAt: number;
  completedAt?: number;
}

export default function AIChatInterface() {
  const [sessionId, setSessionId] = useState<string>("");
  const [message, setMessage] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authEmail, setAuthEmail] = useState("");
  const [conversation, setConversation] = useState<any>(null);
  const [pendingChanges, setPendingChanges] = useState<ChangeRequest[]>([]);

  useEffect(() => {
    // Check for existing session or create new
    const savedSession = localStorage.getItem("vm-admin-session");
    if (savedSession) {
      setSessionId(savedSession);
      setIsAuthenticated(true);
      // Load conversation
      loadConversation(savedSession);
    }
  }, []);

  const loadConversation = async (sid: string) => {
    const conv = await mockAPI.getConversation();
    setConversation(conv);
    const changes = await mockAPI.getPendingChanges();
    setPendingChanges(changes);
  };

  const handleStartChat = async () => {
    if (!authEmail) {
      alert("Please enter your email to continue");
      return;
    }
    
    const result = await mockAPI.startConversation();
    setSessionId(result.sessionId);
    setIsAuthenticated(true);
    localStorage.setItem("vm-admin-session", result.sessionId);
    localStorage.setItem("vm-admin-email", authEmail);
    loadConversation(result.sessionId);
  };

  const handleSendMessage = async () => {
    if (!message.trim() || !sessionId) return;

    const result = await mockAPI.sendMessage({ sessionId, message });
    
    // Update conversation with user message and AI response
    const newMessages = [
      ...(conversation?.messages || []),
      {
        role: "user" as const,
        content: message,
        timestamp: Date.now()
      },
      {
        role: "assistant" as const,
        content: result.message,
        timestamp: Date.now(),
        changeRequest: result.changeRequest
      }
    ];

    setConversation({ ...conversation, messages: newMessages });
    
    // Add to pending changes if there's a change request
    if (result.changeRequest) {
      const newChange: ChangeRequest = {
        _id: "change-" + Date.now(),
        pageSlug: result.changeRequest.target,
        requestType: result.changeRequest.type,
        description: "Content update",
        oldValue: result.changeRequest.oldValue,
        newValue: result.changeRequest.newValue,
        status: "pending",
        createdAt: Date.now()
      };
      setPendingChanges([...pendingChanges, newChange]);
    }

    setMessage("");
  };

  const handleApproveChange = async (change: ChangeRequest) => {
    await mockAPI.updatePage();

    // Update change request status
    setPendingChanges(pendingChanges.map(c => 
      c._id === change._id 
        ? { ...c, status: "completed", completedAt: Date.now() }
        : c
    ));

    alert(`Change approved and applied to ${change.pageSlug}!`);
  };

  const handleRejectChange = async (changeId: string) => {
    setPendingChanges(pendingChanges.map(c => 
      c._id === changeId 
        ? { ...c, status: "rejected" }
        : c
    ));
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">Virtual Minds Admin</h1>
          <p className="text-slate-600 mb-6">Enter your email to access the AI content management system</p>
          <div className="space-y-4">
            <input
              type="email"
              placeholder="admin@virtualminds.com"
              value={authEmail}
              onChange={(e) => setAuthEmail(e.target.value)}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <button
              onClick={handleStartChat}
              className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Start AI Assistant
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-xl font-bold text-primary">Virtual Minds AI Assistant</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-slate-600">Logged in as:</span>
            <span className="text-sm font-medium text-slate-900">{authEmail}</span>
            <button
              onClick={() => {
                localStorage.removeItem("vm-admin-session");
                localStorage.removeItem("vm-admin-email");
                setIsAuthenticated(false);
                setSessionId("");
              }}
              className="text-sm text-red-600 hover:text-red-700"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex gap-6 p-6">
        {/* Chat Interface */}
        <div className="flex-1 bg-white rounded-lg shadow-lg">
          <div className="border-b border-slate-200 p-4">
            <h2 className="text-lg font-semibold text-slate-900 mb-2">AI Content Assistant</h2>
            <p className="text-slate-600 text-sm">
              Tell me what to change: "Update pricing to $3,000", "Change hero headline to...", "Modify services description"
            </p>
          </div>

          <div className="h-96 overflow-y-auto p-4 space-y-4">
            {conversation?.messages?.map((msg: Message, index: number) => (
              <div
                key={index}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-lg rounded-lg px-4 py-2 ${
                    msg.role === "user"
                      ? "bg-primary text-white"
                      : "bg-slate-100 text-slate-900"
                  }`}
                >
                  <p className="text-sm">{msg.content}</p>
                  {msg.changeRequest && (
                    <div className="mt-2 p-2 bg-yellow-50 border border-yellow-200 rounded text-xs">
                      <p className="font-medium text-yellow-800">🔄 Change Requested:</p>
                      <p className="text-yellow-700">
                        {msg.changeRequest.type}: {msg.changeRequest.target}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-slate-200 p-4">
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="What would you like to change?"
                className="flex-1 px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button
                onClick={handleSendMessage}
                disabled={!message.trim()}
                className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50"
              >
                Send
              </button>
            </div>
          </div>
        </div>

        {/* Pending Changes Panel */}
        <div className="w-80 bg-white rounded-lg shadow-lg">
          <div className="border-b border-slate-200 p-4">
            <h3 className="text-lg font-semibold text-slate-900">Pending Changes</h3>
            <p className="text-slate-600 text-sm mt-1">
              Review and approve AI-suggested changes
            </p>
          </div>

          <div className="p-4 space-y-3">
            {pendingChanges?.map((change: ChangeRequest) => (
              <div key={change._id} className="border border-slate-200 rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-slate-900">
                    {change.requestType}
                  </span>
                  <span className={`text-xs px-2 py-1 rounded ${
                    change.status === "pending" ? "bg-yellow-100 text-yellow-800" :
                    change.status === "completed" ? "bg-green-100 text-green-800" :
                    "bg-red-100 text-red-800"
                  }`}>
                    {change.status}
                  </span>
                </div>

                <div className="text-xs text-slate-600 space-y-1">
                  <p><strong>Page:</strong> {change.pageSlug}</p>
                  <p><strong>Current:</strong> {change.oldValue}</p>
                  <p><strong>New:</strong> {change.newValue}</p>
                </div>

                {change.status === "pending" && (
                  <div className="flex gap-2 mt-3">
                    <button
                      onClick={() => handleApproveChange(change)}
                      className="flex-1 bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => handleRejectChange(change._id)}
                      className="flex-1 bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700"
                    >
                      Reject
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
