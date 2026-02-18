"use client";

import { useState, useEffect } from "react";
import { useQuery, useMutation } from "convex/react";
// @ts-ignore
// @ts-ignore
import { api } from "../../../convex/_generated/api";
// @ts-ignore
import type { Id } from "../../../convex/_generated/dataModel";

interface Lead {
    _id: Id<"consultationLeads">;
    _creationTime: number;
    fullName: string;
    email: string;
    ehrPlatform: string;
    practiceSize: string;
    painPoint: string;
    status: string;
    notes?: string;
    contactedAt?: number;
    contactedBy?: string;
    createdAt: number;
}

export default function LeadsManagement() {
    const [statusFilter, setStatusFilter] = useState<string | undefined>(undefined);
    const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
    const [newNotes, setNewNotes] = useState("");
    const [adminEmail, setAdminEmail] = useState("");

    // Real Convex Data
    const leads = useQuery(api.consultationLeads.getAllLeads, { status: statusFilter });
    const stats = useQuery(api.consultationLeads.getLeadStats);

    const updateStatus = useMutation(api.consultationLeads.updateLeadStatus);
    const addNotes = useMutation(api.consultationLeads.addLeadNotes);

    useEffect(() => {
        const auth = localStorage.getItem("vm-admin-auth");
        if (auth) {
            const { email } = JSON.parse(auth);
            setAdminEmail(email);
        }
    }, []);

    const handleStatusChange = async (leadId: Id<"consultationLeads">, newStatus: string) => {
        await updateStatus({
            id: leadId,
            status: newStatus,
            contactedBy: newStatus === "contacted" ? adminEmail : undefined,
        });

        // Optimistic update for selected lead if open
        if (selectedLead && selectedLead._id === leadId) {
            setSelectedLead({
                ...selectedLead,
                status: newStatus,
                contactedAt: newStatus === "contacted" ? Date.now() : selectedLead.contactedAt,
                contactedBy: newStatus === "contacted" ? adminEmail : selectedLead.contactedBy
            });
        }
    };

    const handleAddNotes = async (leadId: Id<"consultationLeads">) => {
        if (!newNotes.trim()) return;

        await addNotes({ id: leadId, notes: newNotes });

        // Optimistic update
        if (selectedLead && selectedLead._id === leadId) {
            setSelectedLead({ ...selectedLead, notes: newNotes });
        }

        setNewNotes("");
        // Don't close modal, just clear input so they can see it saved (re-render will show it if backend updates fast enough, or usage of optimistic update)
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case "new":
                return "bg-blue-100 text-blue-700";
            case "contacted":
                return "bg-yellow-100 text-yellow-700";
            case "qualified":
                return "bg-purple-100 text-purple-700";
            case "converted":
                return "bg-green-100 text-green-700";
            case "lost":
                return "bg-red-100 text-red-700";
            default:
                return "bg-gray-100 text-gray-700";
        }
    };

    const formatDate = (timestamp: number) => {
        return new Date(timestamp).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        });
    };

    if (!leads && !stats) {
        return (
            <div className="p-12 text-center">
                <div className="size-8 border-4 border-primary/30 border-t-primary rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-slate-500">Loading Command Center...</p>
            </div>
        );
    }

    return (
        <div className="space-y-8 animate-in fade-in duration-500">

            {/* Stats Cards */}
            {stats && (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4">
                        <div className="text-sm font-medium text-slate-600 mb-1">Total Leads</div>
                        <div className="text-2xl font-bold text-slate-900">{stats.total}</div>
                    </div>
                    <div className="bg-blue-50 rounded-xl shadow-sm border border-blue-200 p-4">
                        <div className="text-sm font-medium text-blue-600 mb-1">New</div>
                        <div className="text-2xl font-bold text-blue-900">{stats.new}</div>
                    </div>
                    <div className="bg-yellow-50 rounded-xl shadow-sm border border-yellow-200 p-4">
                        <div className="text-sm font-medium text-yellow-600 mb-1">Contacted</div>
                        <div className="text-2xl font-bold text-yellow-900">{stats.contacted}</div>
                    </div>
                    <div className="bg-purple-50 rounded-xl shadow-sm border border-purple-200 p-4">
                        <div className="text-sm font-medium text-purple-600 mb-1">Qualified</div>
                        <div className="text-2xl font-bold text-purple-900">{stats.qualified}</div>
                    </div>
                    <div className="bg-green-50 rounded-xl shadow-sm border border-green-200 p-4">
                        <div className="text-sm font-medium text-green-600 mb-1">Converted</div>
                        <div className="text-2xl font-bold text-green-900">{stats.converted}</div>
                    </div>
                    <div className="bg-red-50 rounded-xl shadow-sm border border-red-200 p-4">
                        <div className="text-sm font-medium text-red-600 mb-1">Lost</div>
                        <div className="text-2xl font-bold text-red-900">{stats.lost}</div>
                    </div>
                </div>
            )}

            {/* Filters */}
            <div className="flex items-center gap-4">
                <h2 className="text-2xl font-bold text-slate-900">Consultation Leads</h2>
                <div className="flex-1"></div>
                <select
                    value={statusFilter || "all"}
                    onChange={(e) => setStatusFilter(e.target.value === "all" ? undefined : e.target.value)}
                    className="px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#D2691E] focus:border-transparent"
                >
                    <option value="all">All Statuses</option>
                    <option value="new">New</option>
                    <option value="contacted">Contacted</option>
                    <option value="qualified">Qualified</option>
                    <option value="converted">Converted</option>
                    <option value="lost">Lost</option>
                </select>
            </div>

            {/* Leads Table */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden min-h-[400px]">
                <table className="w-full">
                    <thead className="bg-slate-50 border-b border-slate-200">
                        <tr>
                            <th className="text-left p-4 font-medium text-slate-700">Contact</th>
                            <th className="text-left p-4 font-medium text-slate-700">Practice Info</th>
                            <th className="text-left p-4 font-medium text-slate-700">Pain Point</th>
                            <th className="text-left p-4 font-medium text-slate-700">Status</th>
                            <th className="text-left p-4 font-medium text-slate-700">Submitted</th>
                            <th className="text-left p-4 font-medium text-slate-700">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                        {leads?.map((lead) => (
                            <tr key={lead._id} className="hover:bg-slate-50 transition-colors">
                                <td className="p-4">
                                    <div>
                                        <div className="font-medium text-slate-900">{lead.fullName}</div>
                                        <a href={`mailto:${lead.email}`} className="text-sm text-[#D2691E] hover:underline">
                                            {lead.email}
                                        </a>
                                    </div>
                                </td>
                                <td className="p-4">
                                    <div className="text-sm">
                                        <div className="text-slate-900"><strong>EHR:</strong> {lead.ehrPlatform}</div>
                                        <div className="text-slate-600"><strong>Size:</strong> {lead.practiceSize} providers</div>
                                    </div>
                                </td>
                                <td className="p-4">
                                    <div className="text-sm text-slate-600 max-w-xs truncate" title={lead.painPoint}>
                                        {lead.painPoint || "Not provided"}
                                    </div>
                                </td>
                                <td className="p-4">
                                    <select
                                        value={lead.status}
                                        onChange={(e) => handleStatusChange(lead._id, e.target.value)}
                                        className={`text-xs font-medium px-2 py-1 rounded border-0 cursor-pointer ${getStatusColor(lead.status)}`}
                                    >
                                        <option value="new">New</option>
                                        <option value="contacted">Contacted</option>
                                        <option value="qualified">Qualified</option>
                                        <option value="converted">Converted</option>
                                        <option value="lost">Lost</option>
                                    </select>
                                </td>
                                <td className="p-4 text-sm text-slate-600">
                                    {formatDate(lead._creationTime)}
                                </td>
                                <td className="p-4">
                                    <button
                                        onClick={() => setSelectedLead(lead)}
                                        className="text-blue-600 hover:text-blue-700 text-sm font-medium hover:underline"
                                    >
                                        View Details
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {leads && leads.length === 0 && (
                    <div className="p-12 text-center text-slate-500 flex flex-col items-center gap-4">
                        <div className="size-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-400">
                            <span className="material-symbols-outlined text-2xl">inbox</span>
                        </div>
                        <p>No leads found via real-time sync.</p>
                        {statusFilter && <p className="text-sm">Try clearing the "{statusFilter}" filter.</p>}
                    </div>
                )}
            </div>

            {/* Lead Detail Modal */}
            {selectedLead && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-200">
                        <div className="p-6 border-b border-slate-200">
                            <div className="flex items-center justify-between">
                                <h3 className="text-2xl font-bold text-slate-900">Lead Details</h3>
                                <button
                                    onClick={() => setSelectedLead(null)}
                                    className="text-slate-400 hover:text-slate-600 transition-colors"
                                >
                                    <span className="material-symbols-outlined">close</span>
                                </button>
                            </div>
                        </div>

                        <div className="p-6 space-y-6">
                            {/* Contact Info */}
                            <div>
                                <h4 className="text-sm font-bold text-slate-700 uppercase tracking-wider mb-3">Contact Information</h4>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-slate-400">person</span>
                                        <span className="font-medium">{selectedLead.fullName}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-slate-400">email</span>
                                        <a href={`mailto:${selectedLead.email}`} className="text-[#D2691E] hover:underline">
                                            {selectedLead.email}
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Practice Info */}
                            <div>
                                <h4 className="text-sm font-bold text-slate-700 uppercase tracking-wider mb-3">Practice Information</h4>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <div className="text-xs text-slate-500 mb-1">EHR Platform</div>
                                        <div className="font-medium">{selectedLead.ehrPlatform}</div>
                                    </div>
                                    <div>
                                        <div className="text-xs text-slate-500 mb-1">Practice Size</div>
                                        <div className="font-medium">{selectedLead.practiceSize} providers</div>
                                    </div>
                                </div>
                            </div>

                            {/* Pain Point */}
                            <div>
                                <h4 className="text-sm font-bold text-slate-700 uppercase tracking-wider mb-3">Primary Pain Point</h4>
                                <p className="text-slate-700 bg-slate-50 p-4 rounded-lg">
                                    {selectedLead.painPoint || "Not provided"}
                                </p>
                            </div>

                            {/* Status & Timeline */}
                            <div>
                                <h4 className="text-sm font-bold text-slate-700 uppercase tracking-wider mb-3">Status & Timeline</h4>
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-slate-600">Current Status:</span>
                                        <span className={`text-xs font-medium px-3 py-1 rounded ${getStatusColor(selectedLead.status)}`}>
                                            {selectedLead.status}
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-slate-600">Submitted:</span>
                                        <span className="text-sm font-medium">{formatDate(selectedLead._creationTime)}</span>
                                    </div>
                                    {selectedLead.contactedAt && (
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-slate-600">Last Contacted:</span>
                                            <span className="text-sm font-medium">{formatDate(selectedLead.contactedAt)}</span>
                                        </div>
                                    )}
                                    {selectedLead.contactedBy && (
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-slate-600">Contacted By:</span>
                                            <span className="text-sm font-medium">{selectedLead.contactedBy}</span>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Notes */}
                            <div>
                                <h4 className="text-sm font-bold text-slate-700 uppercase tracking-wider mb-3">Notes</h4>
                                {selectedLead.notes ? (
                                    <p className="text-slate-700 bg-slate-50 p-4 rounded-lg mb-3">{selectedLead.notes}</p>
                                ) : (
                                    <p className="text-slate-400 italic mb-3">No notes yet</p>
                                )}
                                <textarea
                                    value={newNotes}
                                    onChange={(e) => setNewNotes(e.target.value)}
                                    placeholder="Add notes about this lead..."
                                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#D2691E] focus:border-transparent resize-none"
                                    rows={3}
                                />
                                <button
                                    onClick={() => handleAddNotes(selectedLead._id)}
                                    disabled={!newNotes.trim()}
                                    className="mt-2 px-4 py-2 bg-[#D2691E] text-white rounded-lg hover:bg-[#D2691E]/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                                >
                                    Save Notes
                                </button>
                            </div>

                            {/* Quick Actions */}
                            <div className="flex gap-3 pt-4 border-t border-slate-200">
                                <a
                                    href={`mailto:${selectedLead.email}?subject=Virtual Minds Consultation Follow-up&body=Hi ${selectedLead.fullName},%0D%0A%0D%0AThank you for your interest in Virtual Minds...`}
                                    className="flex-1 px-4 py-2 bg-[#D2691E] text-white text-center rounded-lg hover:bg-[#D2691E]/90 font-medium transition-all"
                                >
                                    Send Email
                                </a>
                                <button
                                    onClick={() => {
                                        if (selectedLead.status === "new") {
                                            handleStatusChange(selectedLead._id, "contacted");
                                        }
                                    }}
                                    className="flex-1 px-4 py-2 bg-slate-200 text-slate-700 rounded-lg hover:bg-slate-300 font-medium transition-all"
                                >
                                    Mark as Contacted
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
