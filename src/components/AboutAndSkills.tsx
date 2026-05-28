import React from "react";
import { 
  Terminal, Code2, Cpu, Wrench, Shield, CheckCheck, MapPin, Mail, Linkedin, Github, ExternalLink 
} from "lucide-react";
import { PERSONAL_INFO, SKILL_CATEGORIES } from "../data";

export default function AboutAndSkills() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6" id="about-skills-grid">
      
      {/* About Me Section Card */}
      <div className="lg:col-span-12 bg-white rounded-2xl border border-gray-100 shadow-sm p-5 md:p-6" id="about-card-section">
        <h3 className="font-display font-semibold text-gray-900 text-base mb-3 flex items-center gap-2">
          <Terminal className="w-5 h-5 text-indigo-650" /> Professional Overview
        </h3>
        <div className="text-sm text-gray-750 font-normal space-y-3.5 leading-relaxed font-sans">
          {PERSONAL_INFO.aboutMe.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
      </div>

      {/* Expertise Categories Grid */}
      <div className="lg:col-span-12 mt-2">
        <div className="flex items-center gap-2 mb-4">
          <Code2 className="w-5 h-5 text-indigo-600" />
          <div>
            <h3 className="font-display font-semibold text-gray-905 text-base">Expertise Matrix & Skillsets</h3>
            <p className="text-xs text-gray-500">Core compiler platforms, frameworks, engines, and tools</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILL_CATEGORIES.map((cat, idx) => {
            // Pick a matching category indicator icon
            const icon = {
              "Programming Languages": <Code2 className="w-4 h-4 text-indigo-600" />,
              "Frontend Dev": <Cpu className="w-4 h-4 text-emerald-600" />,
              "Backend Dev": <Terminal className="w-4 h-4 text-sky-600" />,
              "Databases": <Shield className="w-4 h-4 text-purple-600" />,
              "AI & Machine Learning": <Cpu className="w-4 h-4 text-amber-500" />,
              "Tools & Platforms": <Wrench className="w-4 h-4 text-slate-705" />,
            }[cat.category] || <Code2 className="w-4 h-4 text-gray-650" />;

            return (
              <div 
                key={idx} 
                className="bg-white rounded-xl border border-gray-100 p-4 shadow-3xs hover:shadow-2xs hover:border-indigo-100/80 transition-all flex flex-col justify-between"
                id={`skillset-cat-${idx}`}
              >
                <div>
                  <div className="flex items-center gap-2 pb-2.5 mb-3.5 border-b border-gray-105">
                    {icon}
                    <h4 className="font-display text-xs font-semibold uppercase tracking-wider text-gray-800">
                      {cat.category}
                    </h4>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-1.5" id={`skill-badges-${idx}`}>
                    {cat.skills.map((skill) => (
                      <div 
                        key={skill.name}
                        className="group flex items-center justify-between text-xs px-2.5 py-1 bg-gray-50 text-gray-700 rounded-lg border border-gray-200/50 hover:bg-indigo-50 hover:text-indigo-700 hover:border-indigo-200 transition-all font-sans font-medium hover:scale-[1.02]"
                        id={`skill-${skill.name.toLowerCase().replace(/[^a-z]/g, "")}`}
                      >
                        <span className="flex items-center gap-1.5 leading-none">
                          <CheckCheck className="w-3.5 h-3.5 text-indigo-500 opacity-60 group-hover:opacity-100 shrink-0" />
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-50 flex items-center justify-between text-[10px] font-mono text-gray-400">
                  <span>Verified Competence</span>
                  <span>100% Core</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
