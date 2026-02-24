import React, { useState } from 'react';
import { useQuery } from "convex/react";
// @ts-ignore
import { api } from "../../../convex/_generated/api";

export default function ActivityLog() {
    const [filter, setFilter] = useState('all');
    const logs = useQuery(api.activity.getLogs, {
        limit: 50,
        type: filter === 'all' ? undefined : filter
    });

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-slate-900">System Activity & Audit Logs</h2>
                <button className="text-slate-500 hover:text-slate-700 text-sm font-medium flex items-center gap-2">
                    <span className="material-symbols-outlined">download</span>
                    Export Logs
                </button>
            </div>

            {/* Filters */}
            <div className="flex gap-2">
                {['all', 'auth', 'content', 'system', 'data', 'media'].map(f => (
                    <button
                        key={f}
                        onClick={() => setFilter(f)}
                        className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition-colors ${filter === f ? 'bg-slate-900 text-white' : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                            }`}
                    >
                        {f}
                    </button>
                ))}
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                <table className="w-full">
                    <thead className="bg-slate-50 border-b border-slate-200">
                        <tr>
                            <th className="text-left p-4 font-medium text-slate-700">User</th>
                            <th className="text-left p-4 font-medium text-slate-700">Action</th>
                            <th className="text-left p-4 font-medium text-slate-700">Details</th>
                            <th className="text-left p-4 font-medium text-slate-700">Type</th>
                            <th className="text-left p-4 font-medium text-slate-700">Time</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                        {!logs ? (
                            <tr>
                                <td colSpan={5} className="p-8 text-center text-slate-500">
                                    <div className="animate-pulse flex justify-center items-center gap-2">
                                        <div className="h-4 w-4 bg-slate-300 rounded-full"></div>
                                        Loading logs...
                                    </div>
                                </td>
                            </tr>
                        ) : logs.length === 0 ? (
                            <tr>
                                <td colSpan={5} className="p-8 text-center text-slate-500">
                                    No activity logs found.
                                </td>
                            </tr>
                        ) : (
                            logs.map((log: any) => (
                                <tr key={log._id} className="hover:bg-slate-50">
                                    <td className="p-4">
                                        <div className="flex items-center gap-2">
                                            <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-600">
                                                {log.user.charAt(0).toUpperCase()}
                                            </div>
                                            <span className="font-medium text-slate-900">{log.user}</span>
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <span className={`inline-flex px-2 py-1 text-xs font-medium rounded capitalize ${log.type === 'auth' ? 'bg-purple-100 text-purple-700' :
                                            log.type === 'content' ? 'bg-blue-100 text-blue-700' :
                                                log.type === 'system' ? 'bg-gray-100 text-gray-700' :
                                                    log.type === 'alert' ? 'bg-red-100 text-red-700' :
                                                        'bg-green-100 text-green-700'
                                            }`}>
                                            {log.action}
                                        </span>
                                    </td>
                                    <td className="p-4 text-slate-600 max-w-md truncate" title={log.details}>
                                        {log.details}
                                    </td>
                                    <td className="p-4 font-mono text-xs text-slate-400 capitalize">
                                        {log.type}
                                    </td>
                                    <td className="p-4 text-sm text-slate-500">
                                        {new Date(log.timestamp).toLocaleString()}
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
