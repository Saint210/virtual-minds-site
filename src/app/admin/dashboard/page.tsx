"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import LeadsManagement from "@/components/admin/LeadsManagement";

interface SiteMetrics {
  totalVisitors: number;
  conversionRate: number;
  leadCount: number;
  activeClients: number;
  monthlyRevenue: number;
  topPages: Array<{ page: string; views: number; conversion: number }>;
  recentActivity: Array<{ type: string; description: string; timestamp: number; status: string }>;
}

interface ContentPage {
  id: string;
  slug: string;
  title: string;
  status: 'published' | 'draft' | 'archived';
  lastModified: number;
  author: string;
  template: string;
  seoScore: number;
  conversionRate: number;
}

interface TeamMember {
  id: string;
  name: string;
  email: string;
  role: string;
  lastActive: number;
  permissions: string[];
}

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authEmail, setAuthEmail] = useState("");
  const [activeTab, setActiveTab] = useState('overview');
  const [metrics, setMetrics] = useState<SiteMetrics | null>(null);
  const [pages, setPages] = useState<ContentPage[]>([]);
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [selectedPage, setSelectedPage] = useState<ContentPage | null>(null);

  useEffect(() => {
    const savedAuth = localStorage.getItem("vm-admin-auth");
    if (savedAuth) {
      const auth = JSON.parse(savedAuth);
      setAuthEmail(auth.email);
      setIsAuthenticated(true);
      loadDashboardData();
    }
  }, []);

  const loadDashboardData = async () => {
    // Mock data - replace with real Convex calls
    setMetrics({
      totalVisitors: 45231,
      conversionRate: 3.2,
      leadCount: 1447,
      activeClients: 127,
      monthlyRevenue: 382000,
      topPages: [
        { page: '/california-psychiatric-va-cost-analysis-2026-v4', views: 8934, conversion: 287 },
        { page: '/services', views: 6234, conversion: 198 },
        { page: '/case-studies', views: 4456, conversion: 142 }
      ],
      recentActivity: [
        { type: 'lead', description: 'New consultation request from Beverly Hills Psychiatry', timestamp: Date.now() - 3600000, status: 'hot' },
        { type: 'content', description: 'Blog post "California VA Compliance 2026" published', timestamp: Date.now() - 7200000, status: 'success' },
        { type: 'system', description: 'SSL certificate renewed', timestamp: Date.now() - 10800000, status: 'info' },
        { type: 'alert', description: 'Page load time spike detected on pricing page', timestamp: Date.now() - 14400000, status: 'warning' }
      ]
    });

    setPages([
      { id: '1', slug: 'california-psychiatric-va-cost-analysis-2026-v4', title: 'CA Psychiatric VA Cost Analysis 2026', status: 'published', lastModified: Date.now() - 86400000, author: 'Admin', template: 'cost-analysis', seoScore: 94, conversionRate: 3.2 },
      { id: '2', slug: 'services', title: 'Virtual Assistant Services', status: 'published', lastModified: Date.now() - 172800000, author: 'Admin', template: 'services', seoScore: 89, conversionRate: 2.8 },
      { id: '3', slug: 'case-studies', title: 'Client Success Stories', status: 'draft', lastModified: Date.now() - 259200000, author: 'Admin', template: 'case-studies', seoScore: 76, conversionRate: 4.1 },
      { id: '4', slug: 'blog/california-psychiatric-va-guide', title: 'Complete Guide to CA Psychiatric VAs', status: 'published', lastModified: Date.now() - 345600000, author: 'Admin', template: 'blog-post', seoScore: 91, conversionRate: 2.9 }
    ]);

    setTeam([
      { id: '1', name: 'Sarah Chen', email: 'sarah@virtualminds.com', role: 'Super Admin', lastActive: Date.now() - 1800000, permissions: ['all'] },
      { id: '2', name: 'Michael Torres', email: 'michael@virtualminds.com', role: 'Content Manager', lastActive: Date.now() - 3600000, permissions: ['content', 'analytics'] },
      { id: '3', name: 'Lisa Wang', email: 'lisa@virtualminds.com', role: 'SEO Specialist', lastActive: Date.now() - 7200000, permissions: ['content', 'seo'] }
    ]);
  };

  const handleLogin = () => {
    if (!authEmail) {
      alert('Please enter admin email');
      return;
    }
    setIsAuthenticated(true);
    localStorage.setItem("vm-admin-auth", JSON.stringify({ email: authEmail, timestamp: Date.now() }));
    loadDashboardData();
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setAuthEmail("");
    localStorage.removeItem("vm-admin-auth");
  };

  const handlePublishPage = async (pageId: string) => {
    setPages(pages.map(p =>
      p.id === pageId ? { ...p, status: 'published' as const } : p
    ));
    // API call would go here
  };

  const handleDeletePage = async (pageId: string) => {
    setPages(pages.filter(p => p.id !== pageId));
    // API call would go here
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-navy-800 to-slate-900 flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-2xl">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 p-2">
                <Image
                  src="/images/virtual-minds-logo-opt.png"
                  alt="Virtual Minds"
                  width={64}
                  height={64}
                  className="w-full h-full object-contain"
                />
              </div>
              <h1 className="text-3xl font-bold text-white mb-2">Virtual Minds Control Center</h1>
              <p className="text-cream/70">Advanced admin dashboard for complete site management</p>
            </div>

            <div className="space-y-6">
              <input
                type="email"
                placeholder="admin@virtualminds.com"
                value={authEmail}
                onChange={(e) => setAuthEmail(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-cream/50 focus:outline-none focus:ring-2 focus:ring-terracotta focus:border-transparent"
              />
              <button
                onClick={handleLogin}
                className="w-full bg-gradient-to-r from-terracotta to-sage text-white font-bold py-3 px-6 rounded-xl hover:scale-105 transition-all shadow-lg"
              >
                Access Dashboard
              </button>
            </div>

            <div className="mt-6 text-center">
              <p className="text-xs text-cream/50">Secure admin access • Multi-factor authentication available</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Image
                src="/images/the-virtual-minds-logo-og-notext.jpg"
                alt="Virtual Minds"
                width={48}
                height={48}
                className="w-12 h-12 object-contain rounded-lg"
              />
              <div>
                <h1 className="text-xl font-bold text-slate-900">Virtual Minds Control Center</h1>
                <p className="text-sm text-slate-500">Advanced Site Management Dashboard</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-sm text-slate-600">Logged in as: <span className="font-medium">{authEmail}</span></span>
              <button
                onClick={handleLogout}
                className="text-sm text-red-600 hover:text-red-700 font-medium"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex gap-8">
            {[
              { id: 'overview', label: 'Overview', icon: 'dashboard' },
              { id: 'leads', label: 'Leads', icon: 'contact_mail' },
              { id: 'content', label: 'Content', icon: 'article' },
              { id: 'analytics', label: 'Analytics', icon: 'analytics' },
              { id: 'team', label: 'Team', icon: 'group' },
              { id: 'settings', label: 'Settings', icon: 'settings' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${activeTab === tab.id
                  ? 'border-terracotta text-terracotta'
                  : 'border-transparent text-slate-600 hover:text-slate-900'
                  }`}
              >
                <span className="material-symbols-outlined text-lg mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Overview Tab */}
        {activeTab === 'overview' && metrics && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-slate-600">Total Visitors</span>
                  <span className="material-symbols-outlined text-sage">visibility</span>
                </div>
                <div className="text-3xl font-bold text-slate-900">{metrics.totalVisitors.toLocaleString()}</div>
                <div className="text-xs text-sage font-medium">+12% from last month</div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-slate-600">Conversion Rate</span>
                  <span className="material-symbols-outlined text-terracotta">trending_up</span>
                </div>
                <div className="text-3xl font-bold text-slate-900">{metrics.conversionRate}%</div>
                <div className="text-xs text-terracotta font-medium">+0.4% from last month</div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-slate-600">Active Clients</span>
                  <span className="material-symbols-outlined text-blue-600">people</span>
                </div>
                <div className="text-3xl font-bold text-slate-900">{metrics.activeClients}</div>
                <div className="text-xs text-blue-600 font-medium">+8 new this month</div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-slate-600">Monthly Revenue</span>
                  <span className="material-symbols-outlined text-green-600">payments</span>
                </div>
                <div className="text-3xl font-bold text-slate-900">${(metrics.monthlyRevenue / 1000).toFixed(0)}K</div>
                <div className="text-xs text-green-600 font-medium">+18% from last month</div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h2 className="text-lg font-bold text-slate-900 mb-4">Recent Activity</h2>
              <div className="space-y-3">
                {metrics.recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center gap-4 p-3 rounded-lg bg-slate-50">
                    <div className={`w-2 h-2 rounded-full ${activity.status === 'success' ? 'bg-green-500' :
                      activity.status === 'warning' ? 'bg-yellow-500' :
                        activity.status === 'error' ? 'bg-red-500' :
                          activity.status === 'info' ? 'bg-blue-500' : 'bg-sage'
                      }`}></div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-medium text-slate-900 capitalize">{activity.type}</span>
                        <span className={`text-xs px-2 py-1 rounded ${activity.status === 'hot' ? 'bg-red-100 text-red-700' :
                          activity.status === 'success' ? 'bg-green-100 text-green-700' :
                            activity.status === 'warning' ? 'bg-yellow-100 text-yellow-700' :
                              activity.status === 'info' ? 'bg-blue-100 text-blue-700' : 'bg-sage/10 text-sage'
                          }`}>
                          {activity.status}
                        </span>
                      </div>
                      <p className="text-sm text-slate-600">{activity.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Leads Tab */}
        {activeTab === 'leads' && (
          <LeadsManagement />
        )}

        {/* Content Tab */}
        {activeTab === 'content' && (
          <div className="space-y-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-slate-900">Content Management</h2>
              <Link href="/admin/content/new" className="bg-terracotta text-white px-4 py-2 rounded-lg hover:bg-terracotta/90 transition-colors">
                <span className="material-symbols-outlined mr-2">add</span>
                Create New Page
              </Link>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <table className="w-full">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="text-left p-4 font-medium text-slate-700">Page</th>
                    <th className="text-left p-4 font-medium text-slate-700">Status</th>
                    <th className="text-left p-4 font-medium text-slate-700">Modified</th>
                    <th className="text-left p-4 font-medium text-slate-700">SEO Score</th>
                    <th className="text-left p-4 font-medium text-slate-700">Conversion</th>
                    <th className="text-left p-4 font-medium text-slate-700">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {pages.map((page) => (
                    <tr key={page.id} className="hover:bg-slate-50">
                      <td className="p-4">
                        <div>
                          <div className="font-medium text-slate-900">{page.title}</div>
                          <div className="text-sm text-slate-500">/{page.slug}</div>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className={`inline-flex px-2 py-1 text-xs font-medium rounded ${page.status === 'published' ? 'bg-green-100 text-green-700' :
                          page.status === 'draft' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-gray-100 text-gray-700'
                          }`}>
                          {page.status}
                        </span>
                      </td>
                      <td className="p-4 text-sm text-slate-600">
                        {new Date(page.lastModified).toLocaleDateString()}
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <div className="text-sm font-medium text-slate-900">{page.seoScore}</div>
                          <div className="w-16 bg-slate-200 rounded-full h-2">
                            <div
                              className={`h-2 rounded-full ${page.seoScore >= 90 ? 'bg-green-500' :
                                page.seoScore >= 70 ? 'bg-yellow-500' : 'bg-red-500'
                                }`}
                              style={{ width: `${page.seoScore}%` }}
                            ></div>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 text-sm text-slate-600">{page.conversionRate}%</td>
                      <td className="p-4">
                        <div className="flex gap-2">
                          <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">Edit</button>
                          {page.status === 'draft' && (
                            <button
                              onClick={() => handlePublishPage(page.id)}
                              className="text-green-600 hover:text-green-700 text-sm font-medium"
                            >
                              Publish
                            </button>
                          )}
                          <button
                            onClick={() => handleDeletePage(page.id)}
                            className="text-red-600 hover:text-red-700 text-sm font-medium"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Analytics Tab */}
        {activeTab === 'analytics' && metrics && (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Analytics & Performance</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Top Performing Pages</h3>
                <div className="space-y-4">
                  {metrics.topPages.map((page, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                      <div>
                        <div className="font-medium text-slate-900">{page.page}</div>
                        <div className="text-sm text-slate-600">{page.views.toLocaleString()} views</div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-terracotta">{page.conversion}</div>
                        <div className="text-xs text-slate-500">conversions</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Performance Metrics</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-slate-600">Page Load Speed</span>
                      <span className="text-sm font-bold text-green-600">Excellent</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div className="w-11/12 bg-green-500 h-2 rounded-full"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-slate-600">Mobile Responsiveness</span>
                      <span className="text-sm font-bold text-green-600">High</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div className="w-11/12 bg-green-500 h-2 rounded-full"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-slate-600">SEO Health</span>
                      <span className="text-sm font-bold text-yellow-600">Good</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div className="w-8/12 bg-yellow-500 h-2 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Team Tab */}
        {activeTab === 'team' && (
          <div className="space-y-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-slate-900">Team Management</h2>
              <button className="bg-terracotta text-white px-4 py-2 rounded-lg hover:bg-terracotta/90 transition-colors">
                <span className="material-symbols-outlined mr-2">person_add</span>
                Invite Team Member
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <table className="w-full">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="text-left p-4 font-medium text-slate-700">Team Member</th>
                    <th className="text-left p-4 font-medium text-slate-700">Role</th>
                    <th className="text-left p-4 font-medium text-slate-700">Last Active</th>
                    <th className="text-left p-4 font-medium text-slate-700">Permissions</th>
                    <th className="text-left p-4 font-medium text-slate-700">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {team.map((member) => (
                    <tr key={member.id} className="hover:bg-slate-50">
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center">
                            <span className="material-symbols-outlined text-slate-600">person</span>
                          </div>
                          <div>
                            <div className="font-medium text-slate-900">{member.name}</div>
                            <div className="text-sm text-slate-500">{member.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className={`inline-flex px-2 py-1 text-xs font-medium rounded ${member.role === 'Super Admin' ? 'bg-red-100 text-red-700' :
                          member.role === 'Content Manager' ? 'bg-blue-100 text-blue-700' :
                            'bg-green-100 text-green-700'
                          }`}>
                          {member.role}
                        </span>
                      </td>
                      <td className="p-4 text-sm text-slate-600">
                        {new Date(member.lastActive).toLocaleDateString()}
                      </td>
                      <td className="p-4">
                        <div className="flex gap-1">
                          {member.permissions.map((perm, index) => (
                            <span key={index} className="inline-flex px-2 py-1 text-xs bg-slate-100 text-slate-700 rounded">
                              {perm}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex gap-2">
                          <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">Edit</button>
                          <button className="text-red-600 hover:text-red-700 text-sm font-medium">Remove</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Site Settings</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-4">General Settings</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Site Title</label>
                    <input
                      type="text"
                      defaultValue="Virtual Minds | California Psychiatric Virtual Assistants"
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-terracotta focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Contact Email</label>
                    <input
                      type="email"
                      defaultValue="info@virtualminds.com"
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-terracotta focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Time Zone</label>
                    <select className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-terracotta focus:border-transparent">
                      <option>America/Los_Angeles</option>
                      <option>America/New_York</option>
                      <option>America/Chicago</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-4">SEO Settings</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Meta Description</label>
                    <textarea
                      rows={3}
                      defaultValue="Trusted by celebrity psychiatrists and Fortune 500 mental health executives. HIPAA-compliant virtual assistants specializing in California psychiatric practices."
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-terracotta focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Google Analytics</label>
                    <input
                      type="text"
                      placeholder="G-XXXXXXXXXXX"
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-terracotta focus:border-transparent"
                    />
                  </div>

                  <div className="flex items-center">
                    <input type="checkbox" id="ssl" defaultChecked className="mr-2" />
                    <label htmlFor="ssl" className="text-sm font-medium text-slate-700">Enable SSL Certificate</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
