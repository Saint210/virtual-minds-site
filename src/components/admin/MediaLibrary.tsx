"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { getMediaAssets, updateMediaMetadata, autoOptimizeAllAssets, type SanityAsset } from '@/app/actions/media';

export default function MediaLibrary() {
    const [assets, setAssets] = useState<SanityAsset[]>([]);
    const [loading, setLoading] = useState(true);
    const [view, setView] = useState<'grid' | 'list'>('grid');
    const [search, setSearch] = useState('');

    // Metadata Editing State
    const [editingAsset, setEditingAsset] = useState<SanityAsset | null>(null);
    const [metaForm, setMetaForm] = useState({ altText: '', title: '', description: '' });
    const [isSaving, setIsSaving] = useState(false);
    const [isOptimizing, setIsOptimizing] = useState(false);

    useEffect(() => {
        loadAssets();
    }, []);

    async function loadAssets() {
        try {
            const data = await getMediaAssets();
            setAssets(data);
        } catch (error) {
            console.error("Failed to load media assets", error);
        } finally {
            setLoading(false);
        }
    }

    const handleAutoOptimize = async () => {
        if (!confirm("This will auto-generate Alt Text and Titles from filenames for all assets missing them. Continue?")) return;

        setIsOptimizing(true);
        try {
            const result = await autoOptimizeAllAssets();
            if (result.success) {
                alert(`Success! Auto-optimized ${result.count} assets.`);
                loadAssets(); // Refresh list
            } else {
                alert("Optimization failed.");
            }
        } catch (e) {
            console.error(e);
            alert("Error running optimization.");
        } finally {
            setIsOptimizing(false);
        }
    };

    const handleEditClick = (asset: SanityAsset) => {
        setEditingAsset(asset);
        setMetaForm({
            altText: asset.altText || '',
            title: asset.title || '',
            description: asset.description || ''
        });
    };

    const handleSaveMetadata = async () => {
        if (!editingAsset) return;
        setIsSaving(true);
        try {
            const result = await updateMediaMetadata(editingAsset._id, metaForm);
            if (result.success) {
                // Optimistic update
                setAssets(assets.map(a => a._id === editingAsset._id ? { ...a, ...metaForm } : a));
                setEditingAsset(null);
            } else {
                alert("Failed to save metadata");
            }
        } catch (e) {
            console.error(e);
            alert("Error saving metadata");
        } finally {
            setIsSaving(false);
        }
    };

    const filteredAssets = assets.filter(a => a.originalFilename.toLowerCase().includes(search.toLowerCase()));

    const formatBytes = (bytes: number, decimals = 2) => {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center p-12">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-terracotta"></div>
            </div>
        );
    }

    return (
        <div className="space-y-6 relative">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-slate-900">Media Library (Sanity)</h2>
                <div className="flex gap-4">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search assets..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-terracotta focus:outline-none w-64"
                        />
                        <span className="material-symbols-outlined absolute left-3 top-2.5 text-slate-400 text-lg">search</span>
                    </div>

                    <button
                        onClick={handleAutoOptimize}
                        disabled={isOptimizing}
                        className="bg-white border border-slate-300 text-slate-700 px-4 py-2 rounded-lg hover:bg-slate-50 transition-colors flex items-center gap-2 disabled:opacity-50"
                    >
                        {isOptimizing ? (
                            <span className="animate-spin material-symbols-outlined text-sm">sync</span>
                        ) : (
                            <span className="material-symbols-outlined text-sm">magic_button</span>
                        )}
                        Auto-Optimize
                    </button>

                    <button className="bg-terracotta text-white px-4 py-2 rounded-lg hover:bg-terracotta/90 transition-colors flex items-center gap-2">
                        <span className="material-symbols-outlined">upload</span>
                        Upload New
                    </button>
                </div>
            </div>

            {/* Toolbar */}
            <div className="flex items-center justify-between bg-white p-2 rounded-lg border border-slate-200">
                <div className="flex gap-2">
                    <button
                        onClick={() => setView('grid')}
                        className={`p-2 rounded ${view === 'grid' ? 'bg-slate-100 text-slate-900' : 'text-slate-500 hover:text-slate-700'}`}
                    >
                        <span className="material-symbols-outlined">grid_view</span>
                    </button>
                    <button
                        onClick={() => setView('list')}
                        className={`p-2 rounded ${view === 'list' ? 'bg-slate-100 text-slate-900' : 'text-slate-500 hover:text-slate-700'}`}
                    >
                        <span className="material-symbols-outlined">list</span>
                    </button>
                </div>
                <span className="text-sm text-slate-500">{filteredAssets.length} items</span>
            </div>

            {/* Grid View */}
            {view === 'grid' && (
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {filteredAssets.map(asset => (
                        <div key={asset._id} className="group relative bg-white rounded-lg border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                            <div className="aspect-square relative bg-slate-100 cursor-pointer" onClick={() => handleEditClick(asset)}>
                                <Image
                                    src={asset.url}
                                    alt={asset.altText || asset.originalFilename}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                                    <button className="p-2 bg-white rounded-full text-slate-900 hover:bg-slate-100">
                                        <span className="material-symbols-outlined text-sm">edit</span>
                                    </button>
                                </div>
                                {asset.altText && (
                                    <div className="absolute bottom-2 right-2 bg-green-500 text-white text-[10px] px-1.5 py-0.5 rounded shadow-sm">
                                        SEO OK
                                    </div>
                                )}
                            </div>
                            <div className="p-3">
                                <p className="text-sm font-medium text-slate-900 truncate" title={asset.originalFilename}>{asset.originalFilename}</p>
                                <p className="text-xs text-slate-500">{asset.dimensions} • {formatBytes(asset.size)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* List View */}
            {view === 'list' && (
                <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
                    <table className="w-full">
                        <thead className="bg-slate-50 border-b border-slate-200">
                            <tr>
                                <th className="text-left p-4 font-medium text-slate-700">Preview</th>
                                <th className="text-left p-4 font-medium text-slate-700">Name</th>
                                <th className="text-left p-4 font-medium text-slate-700">Alt Text</th>
                                <th className="text-left p-4 font-medium text-slate-700">Size</th>
                                <th className="text-left p-4 font-medium text-slate-700">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200">
                            {filteredAssets.map(asset => (
                                <tr key={asset._id} className="hover:bg-slate-50">
                                    <td className="p-4 w-20">
                                        <div className="w-12 h-12 relative rounded overflow-hidden bg-slate-100">
                                            <Image src={asset.url} alt={asset.altText || asset.originalFilename} fill className="object-cover" />
                                        </div>
                                    </td>
                                    <td className="p-4 font-medium text-slate-900">{asset.originalFilename}</td>
                                    <td className="p-4 text-slate-600 truncate max-w-xs">{asset.altText || <span className="text-slate-400 italic">Missing</span>}</td>
                                    <td className="p-4 text-slate-600">{formatBytes(asset.size)}</td>
                                    <td className="p-4">
                                        <button
                                            onClick={() => handleEditClick(asset)}
                                            className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                                        >
                                            Edit Metadata
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {/* Metadata Editor Modal */}
            {editingAsset && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-fade-in-up">
                        <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                            <h3 className="text-xl font-bold text-slate-900">Edit Image Metadata</h3>
                            <button onClick={() => setEditingAsset(null)} className="text-slate-400 hover:text-slate-600">
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </div>

                        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <div className="aspect-square bg-slate-100 relative rounded-lg overflow-hidden border border-slate-200">
                                    <Image
                                        src={editingAsset.url}
                                        alt={editingAsset.originalFilename}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <div className="text-sm text-slate-500 space-y-1">
                                    <p><strong>Filename:</strong> {editingAsset.originalFilename}</p>
                                    <p><strong>Dimensions:</strong> {editingAsset.dimensions}</p>
                                    <p><strong>Size:</strong> {formatBytes(editingAsset.size)}</p>
                                    <p><strong>Uploaded:</strong> {new Date(editingAsset._createdAt).toLocaleDateString()}</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-bold text-slate-900 mb-1">
                                        Alt Text <span className="text-red-500">*</span>
                                    </label>
                                    <p className="text-xs text-slate-500 mb-2">Crucial for SEO and accessibility. Describe the image content clearly.</p>
                                    <input
                                        type="text"
                                        value={metaForm.altText}
                                        onChange={e => setMetaForm({ ...metaForm, altText: e.target.value })}
                                        className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-terracotta focus:outline-none"
                                        placeholder="e.g. Modern consultation room with blue chairs"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-slate-900 mb-1">
                                        Title
                                    </label>
                                    <input
                                        type="text"
                                        value={metaForm.title}
                                        onChange={e => setMetaForm({ ...metaForm, title: e.target.value })}
                                        className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-terracotta focus:outline-none"
                                        placeholder="Image Title"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-slate-900 mb-1">
                                        Description / Caption
                                    </label>
                                    <textarea
                                        rows={4}
                                        value={metaForm.description}
                                        onChange={e => setMetaForm({ ...metaForm, description: e.target.value })}
                                        className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-terracotta focus:outline-none"
                                        placeholder="Detailed description or context for the image..."
                                    />
                                </div>

                                <div className="pt-4 flex justify-end gap-3">
                                    <button
                                        onClick={() => setEditingAsset(null)}
                                        className="px-4 py-2 text-slate-600 font-medium hover:bg-slate-50 rounded-lg transition-colors"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        onClick={handleSaveMetadata}
                                        disabled={isSaving}
                                        className="bg-terracotta text-white px-6 py-2 rounded-lg font-medium hover:bg-terracotta/90 transition-colors disabled:opacity-50 flex items-center gap-2"
                                    >
                                        {isSaving ? (
                                            <>
                                                <span className="animate-spin material-symbols-outlined text-sm">sync</span>
                                                Saving...
                                            </>
                                        ) : (
                                            'Save Changes'
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
