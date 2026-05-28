import React, { useState } from "react";
import { Link2, Copy, Check, QrCode, Globe, CheckCircle, Share2, Sparkles, Smartphone } from "lucide-react";

export default function CustomUrlSection() {
  const [handle, setHandle] = useState("moku-vijay-kumar-reddy");
  const [domain, setDomain] = useState("dev"); // dev, me, bio, tech
  const [customPath, setCustomPath] = useState("projects"); // overview, projects, skills, contact
  const [cardTheme, setCardTheme] = useState<"slate" | "emerald" | "amber" | "indigo">("indigo");
  const [copied, setCopied] = useState(false);
  const [simulatedLoad, setSimulatedLoad] = useState(false);

  const getDomainFormat = () => {
    switch (domain) {
      case "dev":
        return `https://${handle}.dev/${customPath}`;
      case "me":
        return `https://vijaykumarreddy.me/${customPath}`;
      case "bio":
        return `https://bio.link/moku-vijay/${customPath}`;
      case "tech":
        return `https://moku-tech.net/portfolio/${customPath}`;
      default:
        return `https://${handle}.dev/${customPath}`;
    }
  };

  const currentUrl = getDomainFormat();

  const handleCopy = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Predefined QR code visual block using dynamic inline templates
  const renderQrCode = () => {
    const themeColor = {
      slate: "text-slate-800",
      emerald: "text-emerald-600",
      amber: "text-amber-500",
      indigo: "text-indigo-600",
    }[cardTheme];

    return (
      <div className="flex flex-col items-center justify-center p-4 bg-white rounded-xl border border-gray-100 shadow-sm relative group">
        <div className={`p-3 rounded-xl bg-gray-50 flex items-center justify-center ${themeColor} transition-transform duration-300 group-hover:scale-105`}>
          {/* Detailed SVG QR Code representation */}
          <svg className="w-24 h-24" viewBox="0 0 100 100" fill="currentColor">
            <rect x="0" y="0" width="20" height="20" />
            <rect x="5" y="5" width="10" height="10" fill="white" />
            <rect x="7" y="7" width="6" height="6" />
            
            <rect x="80" y="0" width="20" height="20" />
            <rect x="85" y="5" width="10" height="10" fill="white" />
            <rect x="87" y="7" width="6" height="6" />
            
            <rect x="0" y="80" width="20" height="20" />
            <rect x="5" y="85" width="10" height="10" fill="white" />
            <rect x="7" y="87" width="6" height="6" />
            
            {/* Random QR structures */}
            <rect x="30" y="10" width="8" height="8" />
            <rect x="45" y="5" width="12" height="4" />
            <rect x="65" y="15" width="6" height="12" />
            <rect x="30" y="30" width="15" height="15" />
            <rect x="50" y="40" width="10" height="10" />
            <rect x="70" y="35" width="12" height="8" />
            
            <rect x="25" y="60" width="16" height="6" />
            <rect x="45" y="55" width="8" height="18" />
            <rect x="65" y="65" width="12" height="12" />
            <rect x="30" y="80" width="4" height="16" />
            <rect x="40" y="85" width="18" height="4" />
            <rect x="65" y="80" width="10" height="10" />
            
            <circle cx="50" cy="50" r="5" className={themeColor} />
          </svg>
        </div>
        <p className="text-[10px] font-mono text-gray-400 mt-2">Dynamic QR Generator</p>
      </div>
    );
  };

  const themeClasses = {
    slate: {
      bg: "bg-slate-50",
      accent: "bg-slate-900 text-white hover:bg-slate-800",
      border: "border-slate-200",
      text: "text-slate-900",
      badge: "bg-slate-100 text-slate-800 border-slate-200",
      lightAccent: "bg-slate-50 border-slate-100",
    },
    emerald: {
      bg: "bg-emerald-50/45",
      accent: "bg-emerald-600 text-white hover:bg-emerald-700",
      border: "border-emerald-200",
      text: "text-emerald-900",
      badge: "bg-emerald-50/80 text-emerald-800 border-emerald-100",
      lightAccent: "bg-emerald-50/20 border-emerald-50/65",
    },
    amber: {
      bg: "bg-amber-50/45",
      accent: "bg-amber-500 text-white hover:bg-amber-600",
      border: "border-amber-200",
      text: "text-amber-900",
      badge: "bg-amber-50 text-amber-800 border-amber-100",
      lightAccent: "bg-amber-50/20 border-amber-50/65",
    },
    indigo: {
      bg: "bg-indigo-50/30",
      accent: "bg-indigo-600 text-white hover:bg-indigo-700",
      border: "border-indigo-100",
      text: "text-indigo-900",
      badge: "bg-indigo-55 bg-opacity-10 text-indigo-700 border-indigo-100/50",
      lightAccent: "bg-indigo-50/20 border-indigo-50/60",
    },
  }[cardTheme];

  const triggerSimulation = () => {
    setSimulatedLoad(true);
    setTimeout(() => {
      setSimulatedLoad(false);
    }, 1500);
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 md:p-6" id="url-config-section">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600">
            <Link2 className="w-5 h-5" id="url-chain-icon" />
          </div>
          <div>
            <h3 className="font-display font-semibold text-gray-900 text-base">Custom Portfolio URL</h3>
            <p className="text-xs text-gray-500">Configure your unique digital share handle</p>
          </div>
        </div>
        <span className="flex items-center gap-1 text-[11px] font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
          <Sparkles className="w-3 h-3" /> Live
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-2">
        {/* Settings Module */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1.5 font-display uppercase tracking-wider">
              Choose Vanity Frame
            </label>
            <div className="grid grid-cols-4 gap-2">
              {[
                { id: "dev", label: "vijay.dev" },
                { id: "me", label: "vijay.me" },
                { id: "bio", label: "bio.link/vijay" },
                { id: "tech", label: "moku.tech" },
              ].map((d) => (
                <button
                  key={d.id}
                  onClick={() => setDomain(d.id)}
                  className={`py-2 px-1 text-xs font-medium rounded-lg border transition-all text-center ${
                    domain === d.id
                      ? "border-indigo-600 bg-indigo-50/50 text-indigo-700 font-semibold"
                      : "border-gray-200 bg-white text-gray-600 hover:bg-gray-50"
                  }`}
                  id={`domain-btn-${d.id}`}
                >
                  {d.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="block text-xs font-semibold text-gray-600 font-display uppercase tracking-wider">
                Digital Slug Handle
              </label>
              <span className="text-[10px] text-gray-400 font-mono">lowercase, alphanumeric only</span>
            </div>
            <div className="relative rounded-lg shadow-sm">
              <input
                type="text"
                value={handle}
                onChange={(e) => setHandle(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, ""))}
                placeholder="vanity-handle"
                className="w-full text-xs py-2.5 px-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 font-mono text-gray-800"
                id="slug-input-handle"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5 font-display uppercase tracking-wider">
                Direct Landing Route
              </label>
              <select
                value={customPath}
                onChange={(e) => setCustomPath(e.target.value)}
                className="w-full text-xs py-2 px-2.5 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 text-gray-700"
                id="route-select"
              >
                <option value="overview">/overview (Resume Core)</option>
                <option value="projects">/projects (Interactive Showcase)</option>
                <option value="skills">/skills (Expertise Matrix)</option>
                <option value="education">/education (Academics Timeline)</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5 font-display uppercase tracking-wider">
                Visual Share Theme
              </label>
              <div className="flex items-center gap-1.5 py-1.5">
                {[
                  { id: "indigo", color: "bg-indigo-600" },
                  { id: "emerald", color: "bg-emerald-600" },
                  { id: "amber", color: "bg-amber-500" },
                  { id: "slate", color: "bg-slate-800" },
                ].map((th) => (
                  <button
                    key={th.id}
                    onClick={() => setCardTheme(th.id as any)}
                    className={`w-7 h-7 rounded-full ${th.color} cursor-pointer transition-all flex items-center justify-center border-2 ${
                      cardTheme === th.id ? "border-white ring-2 ring-gray-400" : "border-transparent"
                    }`}
                    title={th.id}
                    id={`theme-select-${th.id}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Live Card Showcase Panel */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div className={`p-4 rounded-xl border transition-colors ${themeClasses.bg} ${themeClasses.border} flex flex-col gap-3 relative overflow-hidden`}>
            
            {/* Hologram visual element to make it look incredibly styled */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-radial from-white/20 to-transparent pointer-events-none rounded-full blur-xl" />

            <div className="flex items-start justify-between">
              <div>
                <span className={`text-[9px] font-bold font-mono tracking-widest px-2 py-0.5 rounded-full border leading-tight ${themeClasses.badge}`}>
                  DIGITAL BUS CARD
                </span>
                <h4 className={`font-display font-bold text-sm tracking-tight mt-2 ${themeClasses.text}`}>
                  M. VIJAY KUMAR REDDY
                </h4>
                <p className="text-[10px] text-gray-500 font-mono mt-0.5">Software Engineer</p>
              </div>
              
              {renderQrCode()}
            </div>

            <div className="bg-white/70 p-2.5 rounded-lg border border-gray-100 mt-1">
              <span className="text-[9px] text-gray-400 font-bold block uppercase tracking-wide">Target Custom URL</span>
              <span className="text-xs font-mono text-indigo-700 font-medium truncate block select-all mt-0.5">
                {currentUrl}
              </span>
            </div>

            <div className="flex items-center justify-between gap-2 mt-1">
              <button
                onClick={handleCopy}
                className="flex-1 flex items-center justify-center gap-1.5 text-xs font-semibold py-2 px-3 rounded-lg bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 cursor-pointer shadow-xs transition-colors"
                id="copy-custom-url-btn"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700 font-medium">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-gray-500" />
                    <span>Copy URL</span>
                  </>
                )}
              </button>

              <button
                onClick={triggerSimulation}
                disabled={simulatedLoad}
                className={`flex-1 flex items-center justify-center gap-1.5 text-xs font-semibold py-2 px-3 rounded-lg cursor-pointer shadow-xs transition-all ${themeClasses.accent}`}
                id="test-route-btn"
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>{simulatedLoad ? "Loading..." : "Test Link"}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {simulatedLoad && (
        <div className="mt-4 p-3 bg-indigo-50/80 rounded-xl border border-indigo-100 flex items-center gap-3 animate-pulse">
          <Globe className="w-4 h-4 text-indigo-600 animate-spin" />
          <div className="text-xs">
            <span className="font-semibold text-indigo-900 block">Routing to Virtual Endpoint...</span>
            <span className="text-indigo-700 text-[11px] font-mono">{currentUrl} loaded successfully.</span>
          </div>
        </div>
      )}
    </div>
  );
}
