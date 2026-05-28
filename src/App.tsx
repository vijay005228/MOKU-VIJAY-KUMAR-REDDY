import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  MapPin, Mail, Linkedin, Github, FileText, Sparkles, Terminal, 
  Sprout, Award, Code, Globe, MessageSquare, Copy, Check, ExternalLink, Heart,
  Sun, Moon
} from "lucide-react";
import { PERSONAL_INFO } from "./data";
import AboutAndSkills from "./components/AboutAndSkills";
import ProjectShowcase from "./components/ProjectShowcase";
import ResumeOverview from "./components/ResumeOverview";
import CustomUrlSection from "./components/CustomUrlSection";

export default function App() {
  const [activeTab, setActiveTab] = useState<"projects" | "skills" | "education">("projects");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedLinkedIn, setCopiedLinkedIn] = useState(false);
  const [copiedGitHub, setCopiedGitHub] = useState(false);

  // Persistent Theme State Support
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("portfolio-theme");
      if (saved === "light" || saved === "dark") {
        return saved;
      }
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      return prefersDark ? "dark" : "light";
    }
    return "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyContact = (type: "linkedin" | "github", link: string) => {
    navigator.clipboard.writeText(link);
    if (type === "linkedin") {
      setCopiedLinkedIn(true);
      setTimeout(() => setCopiedLinkedIn(false), 2000);
    } else {
      setCopiedGitHub(true);
      setTimeout(() => setCopiedGitHub(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-gray-800 font-sans selection:bg-indigo-100 selection:text-indigo-905 flex flex-col justify-between">
      
      {/* Dynamic Global Top Header Bar */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200/60 shadow-3xs" id="global-nav">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-mono font-bold tracking-tight text-sm">
              MV
            </div>
            <div>
              <span className="font-display font-bold text-gray-800 tracking-tight text-xs block leading-none">
                MOKU VIJAY KUMAR REDDY
              </span>
              <span className="text-[10px] text-gray-400 font-mono tracking-wider">
                PORTFOLIO PLATFORM
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Elegant Light/Dark Persisted Theme Toggle */}
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="p-2 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 text-gray-750 hover:text-gray-900 transition-all cursor-pointer flex items-center justify-center shadow-3xs"
              title={theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
              id="theme-toggle-btn"
            >
              {theme === "light" ? (
                <Moon className="w-4 h-4 text-indigo-600 hover:scale-110 transition-transform" />
              ) : (
                <Sun className="w-4 h-4 text-amber-500 animate-spin-slow" />
              )}
            </button>

            <span className="flex items-center gap-1.5 text-[11px] font-medium text-indigo-700 bg-indigo-50 border border-indigo-100/50 px-2.5 py-1 rounded-full leading-none">
              <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full animate-pulse" />
              Active for Opportunities
            </span>
          </div>
        </div>
      </header>

      {/* Main Container Layout */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex-grow w-full grid grid-cols-1 lg:grid-cols-12 gap-6" id="app-main-workspace">
        
        {/* Left Hand: General Bio Cards & Custom URL Builder (Spans 4 columns) */}
        <section className="lg:col-span-5 xl:col-span-4 flex flex-col gap-6" id="left-bio-rail">
          
          {/* Main User Meta Card */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 overflow-hidden relative" id="profile-headline-card">
            {/* Elegant Ambient Background Gradient Slices */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-100 rounded-full blur-3xl opacity-60 -z-10" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-100 rounded-full blur-3xl opacity-40 -z-10" />

            <div className="flex flex-col items-center text-center">
              {/* Text Badge Profile Monogram */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-indigo-600 to-indigo-400 text-white font-display font-medium text-2xl flex items-center justify-center shadow-md relative group">
                <span className="group-hover:scale-115 transition-transform duration-300">MV</span>
                <div className="absolute -bottom-1 -right-1 bg-white p-1 rounded-full border border-gray-100 shadow-3xs">
                  <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full" />
                </div>
              </div>

              <h1 className="font-display font-bold text-gray-900 text-lg tracking-tight mt-4">
                MOKU VIJAY KUMAR REDDY
              </h1>
              
              <div className="flex flex-wrap items-center justify-center gap-1.5 mt-2.5" id="titles-pill-box">
                {PERSONAL_INFO.titles.map((title) => (
                  <span 
                    key={title} 
                    className="text-[10px] font-bold tracking-wider font-display bg-gray-50 text-gray-600 border border-gray-200/60 px-2.5 py-1 rounded-full uppercase"
                  >
                    {title}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Location & Direct Action Contacts */}
            <div className="mt-6 pt-5 border-t border-gray-100 flex flex-col gap-3" id="contact-list-container">
              
              {/* Location Badge */}
              <div className="flex items-center gap-3 text-xs text-gray-600" id="contact-loc">
                <MapPin className="w-4 h-4 text-gray-400 shrink-0" />
                <span>{PERSONAL_INFO.location}</span>
              </div>

              {/* Email Copier Click */}
              <button 
                onClick={handleCopyEmail}
                className="flex items-center justify-between w-full text-xs text-gray-700 hover:text-indigo-700 group cursor-pointer transition-colors text-left"
                id="contact-email-btn"
                title="Copy email to clipboard"
              >
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-gray-400 group-hover:text-indigo-500 shrink-0" />
                  <span className="font-mono truncate max-w-[210px]">{PERSONAL_INFO.email}</span>
                </div>
                {copiedEmail ? (
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-gray-300 group-hover:text-gray-450 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                )}
              </button>

              {/* LinkedIn Copier */}
              <button 
                onClick={() => handleCopyContact("linkedin", PERSONAL_INFO.linkedin)}
                className="flex items-center justify-between w-full text-xs text-gray-700 hover:text-indigo-700 group cursor-pointer transition-colors text-left"
                id="contact-linkedin-btn"
                title="Copy LinkedIn profile link"
              >
                <div className="flex items-center gap-3">
                  <Linkedin className="w-4 h-4 text-gray-400 group-hover:text-indigo-500 shrink-0" />
                  <span>LinkedIn Profile</span>
                </div>
                <div className="flex items-center gap-1">
                  {copiedLinkedIn && <Check className="w-3 h-3 text-emerald-600" />}
                  <a 
                    href={PERSONAL_INFO.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    onClick={(e) => e.stopPropagation()} 
                    className="p-1 rounded text-gray-400 hover:text-indigo-650 shrink-0 pointer-events-auto"
                  >
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </button>

              {/* GitHub Link */}
              <button 
                onClick={() => handleCopyContact("github", PERSONAL_INFO.github)}
                className="flex items-center justify-between w-full text-xs text-gray-700 hover:text-indigo-700 group cursor-pointer transition-colors text-left"
                id="contact-github-btn"
                title="Copy GitHub profile link"
              >
                <div className="flex items-center gap-3">
                  <Github className="w-4 h-4 text-gray-400 group-hover:text-indigo-500 shrink-0" />
                  <span>GitHub Profile</span>
                </div>
                <div className="flex items-center gap-1">
                  {copiedGitHub && <Check className="w-3 h-3 text-emerald-600" />}
                  <a 
                    href={PERSONAL_INFO.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    onClick={(e) => e.stopPropagation()} 
                    className="p-1 rounded text-gray-400 hover:text-indigo-650 shrink-0 pointer-events-auto"
                  >
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </button>
            </div>
          </div>

          {/* Vanity Custom URL Creator Section */}
          <CustomUrlSection />

        </section>

        {/* Right Hand: Workspace content and core functional components (Spans 8 columns) */}
        <section className="lg:col-span-7 xl:col-span-8 flex flex-col gap-6" id="right-workspace-deck">
          
          {/* Main Navigation Workspace Tabs */}
          <div className="bg-white p-2 rounded-2xl border border-gray-100 shadow-xs flex items-center justify-between" id="tabs-deck">
            <div className="flex items-center gap-1 w-full sm:w-auto">
              {[
                { id: "projects", label: "Projects Simulator", icon: <Terminal className="w-4 h-4" /> },
                { id: "skills", label: "Skills Matrix", icon: <Code className="w-4 h-4" /> },
                { id: "education", label: "Academics", icon: <FileText className="w-4 h-4" /> },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 py-2 px-4 text-xs font-semibold rounded-xl cursor-pointer transition-all ${
                    activeTab === tab.id
                      ? "bg-indigo-600 text-white shadow-sm"
                      : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                  id={`tab-btn-${tab.id}`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            <div className="hidden sm:flex items-center gap-1.5 text-[10px] font-mono text-gray-400 pr-3">
              <span>Press Tab keys</span>
            </div>
          </div>

          {/* Core Dynamic Content Displays */}
          <div className="relative min-h-[480px]">
            <AnimatePresence mode="wait">
              {activeTab === "projects" && (
                <motion.div
                  key="projects-tab"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="w-full"
                >
                  <ProjectShowcase />
                </motion.div>
              )}

              {activeTab === "skills" && (
                <motion.div
                  key="skills-tab"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="w-full"
                >
                  <AboutAndSkills />
                </motion.div>
              )}

              {activeTab === "education" && (
                <motion.div
                  key="education-tab"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="w-full"
                >
                  <ResumeOverview />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </section>

      </main>

      {/* Global Brand Footer */}
      <footer className="bg-white border-t border-gray-150 py-5 mt-8 px-4 sm:px-6 lg:px-8 text-center text-xs text-gray-400 shadow-3xs" id="global-footer">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-mono">
            &copy; 2026 MOKU VIJAY KUMAR REDDY. All Rights Reserved.
          </p>
          <div className="flex items-center gap-1 font-sans text-[11px] font-medium text-gray-500 bg-gray-50 px-3 py-1 rounded-full border border-gray-100">
            <span>Built with precision in React, Tailwind v4 & Lucide Icons</span>
            <Heart className="w-3 h-3 text-rose-500 fill-rose-500 ml-1.5" />
          </div>
        </div>
      </footer>
    </div>
  );
}
