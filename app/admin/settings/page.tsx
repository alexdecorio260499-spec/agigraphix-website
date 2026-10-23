"use client";

import { useState, useEffect } from "react";
import { 
  Building2, 
  Mail, 
  Phone, 
  MapPin, 
  Bell, 
  Sliders, 
  Save, 
  CheckCircle2, 
  RotateCcw,
  Sparkles,
  Clock
} from "lucide-react";

interface SettingsState {
  // General
  companyName: string;
  tagline: string;
  supportingPhrase: string;
  establishedYear: string;
  businessRegistration: string;
  vatNumber: string;

  // Contact
  primaryPhone: string;
  secondaryPhone: string;
  publicEmail: string;
  enquiriesEmail: string;
  address: string;
  city: string;
  country: string;
  workingHoursWeekday: string;
  workingHoursSaturday: string;

  // Notifications
  notifyOnNewEnquiry: boolean;
  autoReplyClient: boolean;
  weeklyDigest: boolean;
}

const DEFAULT_SETTINGS: SettingsState = {
  companyName: "Agigraphix Ltd",
  tagline: "We make brands visible.",
  supportingPhrase: "Visual Communication Solutions",
  establishedYear: "2001",
  businessRegistration: "C07028491",
  vatNumber: "VAT20349182",

  primaryPhone: "+230 465 1111",
  secondaryPhone: "+230 5250 1234",
  publicEmail: "hello@agigraphix.mu",
  enquiriesEmail: "quotes@agigraphix.mu",
  address: "6 Wellington Street",
  city: "Rose-Hill",
  country: "Mauritius",
  workingHoursWeekday: "Monday – Friday: 08:00 – 17:00",
  workingHoursSaturday: "Saturday: 08:00 – 12:30",

  notifyOnNewEnquiry: true,
  autoReplyClient: true,
  weeklyDigest: false,
};

const STORAGE_KEY = "agigraphix_admin_settings_v1";

export default function AdminSettingsPage() {
  const [settings, setSettings] = useState<SettingsState>(DEFAULT_SETTINGS);
  const [activeTab, setActiveTab] = useState<"general" | "contact" | "notifications">("general");
  const [isSaving, setIsSaving] = useState(false);
  const [showSavedToast, setShowSavedToast] = useState(false);

  // Load from localStorage if present
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setSettings({ ...DEFAULT_SETTINGS, ...JSON.parse(saved) });
      }
    } catch {
      // fallback to defaults
    }
  }, []);

  const handleChange = (field: keyof SettingsState, value: string | boolean) => {
    setSettings(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);

    setTimeout(() => {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
      } catch (err) {
        console.error("Failed to save settings", err);
      }
      setIsSaving(false);
      setShowSavedToast(true);
      setTimeout(() => setShowSavedToast(false), 3500);
    }, 600);
  };

  const handleReset = () => {
    if (confirm("Reset all settings to default values?")) {
      setSettings(DEFAULT_SETTINGS);
      localStorage.removeItem(STORAGE_KEY);
      setShowSavedToast(true);
      setTimeout(() => setShowSavedToast(false), 3500);
    }
  };

  const tabs = [
    { id: "general", label: "General & Branding", icon: Building2 },
    { id: "contact", label: "Contact & Hours", icon: Phone },
    { id: "notifications", label: "Notifications", icon: Bell },
  ] as const;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black uppercase tracking-tight text-agigraphix-black">
            System Settings
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Configure global website parameters, contact endpoints, brand identity, and communication preferences.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center px-4 py-2 text-xs font-bold uppercase tracking-wider text-gray-600 bg-white border border-gray-200 rounded hover:bg-gray-50 transition-colors shadow-sm"
          >
            <RotateCcw className="w-3.5 h-3.5 mr-1.5" />
            Reset Defaults
          </button>
          <button
            type="button"
            onClick={handleSave}
            disabled={isSaving}
            className="inline-flex items-center px-5 py-2 text-xs font-bold uppercase tracking-wider text-white bg-agigraphix-red rounded hover:bg-red-700 transition-colors shadow-sm disabled:opacity-50"
          >
            {isSaving ? (
              <span className="flex items-center">
                <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                Saving...
              </span>
            ) : (
              <>
                <Save className="w-3.5 h-3.5 mr-1.5" />
                Save Changes
              </>
            )}
          </button>
        </div>
      </div>

      {/* Success Notification */}
      {showSavedToast && (
        <div className="p-4 bg-emerald-50 border border-emerald-200 rounded text-emerald-800 text-sm font-medium flex items-center justify-between shadow-sm animate-fade-in">
          <div className="flex items-center">
            <CheckCircle2 className="w-5 h-5 mr-2 text-emerald-600 shrink-0" />
            <span>Settings successfully saved and synchronized.</span>
          </div>
          <button 
            onClick={() => setShowSavedToast(false)}
            className="text-emerald-700 hover:text-emerald-900 text-xs font-bold uppercase tracking-wider ml-4"
          >
            Dismiss
          </button>
        </div>
      )}

      {/* Main Settings Card */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
        {/* Navigation Tabs */}
        <div className="flex border-b border-gray-100 overflow-x-auto bg-gray-50/50">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-4 text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all border-b-2 ${
                  isActive
                    ? "border-agigraphix-red text-agigraphix-black bg-white"
                    : "border-transparent text-gray-500 hover:text-agigraphix-black hover:bg-gray-100/50"
                }`}
              >
                <Icon className={`w-4 h-4 mr-2 ${isActive ? "text-agigraphix-red" : "text-gray-400"}`} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Forms */}
        <form onSubmit={handleSave} className="p-8 space-y-6">
          {/* TAB 1: GENERAL */}
          {activeTab === "general" && (
            <div className="space-y-6">
              <div className="border-b border-gray-100 pb-4">
                <h3 className="text-base font-bold text-agigraphix-black uppercase tracking-wide">Brand & Identity</h3>
                <p className="text-xs text-gray-500">Public company credentials shown across header, footer, and quotes.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">Company Name</label>
                  <input
                    type="text"
                    value={settings.companyName}
                    onChange={(e) => handleChange("companyName", e.target.value)}
                    className="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-agigraphix-red focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">Established Year</label>
                  <input
                    type="text"
                    value={settings.establishedYear}
                    onChange={(e) => handleChange("establishedYear", e.target.value)}
                    className="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-agigraphix-red focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">Primary Tagline</label>
                  <input
                    type="text"
                    value={settings.tagline}
                    onChange={(e) => handleChange("tagline", e.target.value)}
                    className="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-agigraphix-red focus:bg-white transition-colors"
                  />
                  <span className="text-[11px] text-gray-400 mt-1 block">Hero tagline displayed across the website.</span>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">Supporting Phrase</label>
                  <input
                    type="text"
                    value={settings.supportingPhrase}
                    onChange={(e) => handleChange("supportingPhrase", e.target.value)}
                    className="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-agigraphix-red focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">Business Reg. No. (BRN)</label>
                  <input
                    type="text"
                    value={settings.businessRegistration}
                    onChange={(e) => handleChange("businessRegistration", e.target.value)}
                    className="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-agigraphix-red focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">VAT Registration Number</label>
                  <input
                    type="text"
                    value={settings.vatNumber}
                    onChange={(e) => handleChange("vatNumber", e.target.value)}
                    className="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-agigraphix-red focus:bg-white transition-colors"
                  />
                </div>
              </div>

              {/* Brand Palette Summary */}
              <div className="pt-4 border-t border-gray-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-600 mb-3">Live Brand Identity Palettes</h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="p-3 bg-gray-50 rounded border border-gray-100 flex items-center space-x-3">
                    <div className="w-8 h-8 rounded bg-[#D92525] border border-gray-200 shadow-xs" />
                    <div>
                      <p className="text-xs font-bold text-gray-900">Agigraphix Red</p>
                      <p className="text-[10px] text-gray-500 font-mono">#D92525</p>
                    </div>
                  </div>
                  <div className="p-3 bg-gray-50 rounded border border-gray-100 flex items-center space-x-3">
                    <div className="w-8 h-8 rounded bg-[#111111] border border-gray-200 shadow-xs" />
                    <div>
                      <p className="text-xs font-bold text-gray-900">Agigraphix Black</p>
                      <p className="text-[10px] text-gray-500 font-mono">#111111</p>
                    </div>
                  </div>
                  <div className="p-3 bg-gray-50 rounded border border-gray-100 flex items-center space-x-3">
                    <div className="w-8 h-8 rounded bg-[#F9FAFB] border border-gray-200 shadow-xs" />
                    <div>
                      <p className="text-xs font-bold text-gray-900">Soft White</p>
                      <p className="text-[10px] text-gray-500 font-mono">#F9FAFB</p>
                    </div>
                  </div>
                  <div className="p-3 bg-gray-50 rounded border border-gray-100 flex items-center space-x-3">
                    <div className="w-8 h-8 rounded bg-[#374151] border border-gray-200 shadow-xs" />
                    <div>
                      <p className="text-xs font-bold text-gray-900">Charcoal Slate</p>
                      <p className="text-[10px] text-gray-500 font-mono">#374151</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: CONTACT */}
          {activeTab === "contact" && (
            <div className="space-y-6">
              <div className="border-b border-gray-100 pb-4">
                <h3 className="text-base font-bold text-agigraphix-black uppercase tracking-wide">Contact Details & Operations</h3>
                <p className="text-xs text-gray-500">Physical address, hotline numbers, and workshop operating hours.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">Primary Phone / Landline</label>
                  <input
                    type="text"
                    value={settings.primaryPhone}
                    onChange={(e) => handleChange("primaryPhone", e.target.value)}
                    className="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-agigraphix-red focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">Secondary / Mobile Hotline</label>
                  <input
                    type="text"
                    value={settings.secondaryPhone}
                    onChange={(e) => handleChange("secondaryPhone", e.target.value)}
                    className="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-agigraphix-red focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">Public Enquiries Email</label>
                  <input
                    type="email"
                    value={settings.publicEmail}
                    onChange={(e) => handleChange("publicEmail", e.target.value)}
                    className="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-agigraphix-red focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">Quotes & RFP Inbound Email</label>
                  <input
                    type="email"
                    value={settings.enquiriesEmail}
                    onChange={(e) => handleChange("enquiriesEmail", e.target.value)}
                    className="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-agigraphix-red focus:bg-white transition-colors"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">Studio & Workshop Street Address</label>
                  <input
                    type="text"
                    value={settings.address}
                    onChange={(e) => handleChange("address", e.target.value)}
                    className="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-agigraphix-red focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">City / Town</label>
                  <input
                    type="text"
                    value={settings.city}
                    onChange={(e) => handleChange("city", e.target.value)}
                    className="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-agigraphix-red focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">Country</label>
                  <input
                    type="text"
                    value={settings.country}
                    onChange={(e) => handleChange("country", e.target.value)}
                    className="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-agigraphix-red focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">Weekday Working Hours</label>
                  <input
                    type="text"
                    value={settings.workingHoursWeekday}
                    onChange={(e) => handleChange("workingHoursWeekday", e.target.value)}
                    className="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-agigraphix-red focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">Weekend Working Hours</label>
                  <input
                    type="text"
                    value={settings.workingHoursSaturday}
                    onChange={(e) => handleChange("workingHoursSaturday", e.target.value)}
                    className="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-agigraphix-red focus:bg-white transition-colors"
                  />
                </div>
              </div>
            </div>
          )}



          {/* TAB 5: NOTIFICATIONS */}
          {activeTab === "notifications" && (
            <div className="space-y-6">
              <div className="border-b border-gray-100 pb-4">
                <h3 className="text-base font-bold text-agigraphix-black uppercase tracking-wide">Email Notifications & Enquiries Routing</h3>
                <p className="text-xs text-gray-500">Configure how and when the team receives RFQ submissions.</p>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded border border-gray-100 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-agigraphix-black">Instant Email Alert on New Project Enquiry</p>
                    <p className="text-xs text-gray-500 mt-0.5">
                      Send notification email to <span className="font-semibold text-agigraphix-black">{settings.enquiriesEmail}</span> immediately when a client submits the contact form.
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.notifyOnNewEnquiry}
                      onChange={(e) => handleChange("notifyOnNewEnquiry", e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-agigraphix-red" />
                  </label>
                </div>

                <div className="p-4 bg-gray-50 rounded border border-gray-100 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-agigraphix-black">Automated Client Confirmation Receipt</p>
                    <p className="text-xs text-gray-500 mt-0.5">
                      Send an immediate, branded acknowledgment email back to the prospective client confirming their submission.
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.autoReplyClient}
                      onChange={(e) => handleChange("autoReplyClient", e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-agigraphix-red" />
                  </label>
                </div>

                <div className="p-4 bg-gray-50 rounded border border-gray-100 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-agigraphix-black">Weekly Activity Digest</p>
                    <p className="text-xs text-gray-500 mt-0.5">
                      Receive an executive summary every Monday morning of new leads, views, and published projects.
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.weeklyDigest}
                      onChange={(e) => handleChange("weeklyDigest", e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-agigraphix-red" />
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* Form Bottom Actions */}
          <div className="pt-6 border-t border-gray-100 flex justify-end gap-3">
            <button
              type="button"
              onClick={handleReset}
              className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-gray-600 bg-white border border-gray-200 rounded hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSaving}
              className="inline-flex items-center px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-agigraphix-red rounded hover:bg-red-700 transition-colors shadow-sm disabled:opacity-50"
            >
              {isSaving ? "Saving Changes..." : "Save Settings"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
