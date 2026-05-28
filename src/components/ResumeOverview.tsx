import React from "react";
import { 
  GraduationCap, Award, Languages, ChevronRight, Calendar, BookOpen, Clock, Globe 
} from "lucide-react";
import { EDUCATION_LIST, CERTIFICATIONS, LANGUAGES } from "../data";

export default function ResumeOverview() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6" id="resume-overview-outer-grid">
      
      {/* Education Timeline Block */}
      <div className="lg:col-span-7 bg-white rounded-2xl border border-gray-100 shadow-sm p-5 md:p-6" id="education-sub-block">
        <div className="flex items-center gap-2 mb-5">
          <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-display font-semibold text-gray-900 text-base">Academic Foundations</h3>
            <p className="text-xs text-gray-500">Degree pathways and technical learning foundations</p>
          </div>
        </div>

        {/* Dynamic Vertical Timeline */}
        <div className="relative border-l border-gray-150 pl-6 ml-3 space-y-7 my-2">
          {EDUCATION_LIST.map((edu, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline dot marker styled carefully with focus states */}
              <div className="absolute -left-[31px] top-1.5 w-[11px] h-[11px] rounded-full bg-white border-2 border-indigo-600 ring-4 ring-indigo-50 transition-colors group-hover:bg-indigo-600 group-hover:ring-indigo-100" />
              
              <div className="flex items-center gap-2 mb-1.5 text-xs font-semibold text-indigo-600">
                <Calendar className="w-3.5 h-3.5" />
                <span className="font-mono">{edu.duration}</span>
                {idx === 0 && (
                  <span className="text-[10px] bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full border border-emerald-100 font-semibold uppercase tracking-wider ml-1 animate-pulse">
                    Currently Enrolled
                  </span>
                )}
              </div>

              <h4 className="font-display font-bold text-gray-900 text-sm group-hover:text-indigo-700 transition-colors leading-tight">
                {edu.degree}
              </h4>
              <p className="text-[11px] font-medium text-gray-500 mt-0.5 font-sans leading-relaxed">
                {edu.institution}
              </p>

              {edu.details && (
                <p className="text-xs text-gray-600 mt-2 bg-gray-50 p-2.5 rounded-lg border border-gray-200/50 leading-relaxed font-sans">
                  {edu.details}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Certifications and Languages Sidebar Block */}
      <div className="lg:col-span-5 flex flex-col gap-6">
        
        {/* Certifications Cards Card */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 md:p-5 flex-1" id="certifications-sub-card">
          <div className="flex items-center gap-2 pb-3 mb-4 border-b border-gray-100">
            <div className="p-1.5 rounded bg-amber-50 text-amber-500">
              <Award className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-display font-semibold text-gray-900 text-sm">Professional Certifications</h4>
              <p className="text-[10px] text-gray-400">Industry-standard validations</p>
            </div>
          </div>

          <div className="flex flex-col gap-2.5">
            {CERTIFICATIONS.map((cert, idx) => (
              <div 
                key={idx}
                className="p-2.5 rounded-xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:border-amber-250 transition-all flex items-start gap-2.5"
                id={`cert-item-${idx}`}
              >
                <ChevronRight className="w-3.5 h-3.5 text-amber-500 mt-1 shrink-0" />
                <div>
                  <h5 className="text-xs font-semibold text-gray-800 leading-tight">
                    {cert.name}
                  </h5>
                  <p className="text-[9px] text-gray-400 font-mono mt-0.5 uppercase tracking-wider">
                    Official Validation Complete
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Languages block */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 md:p-5" id="languages-sub-card">
          <div className="flex items-center gap-2 pb-3 mb-4 border-b border-gray-100">
            <div className="p-1.5 rounded bg-emerald-50 text-emerald-600">
              <Languages className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-display font-semibold text-gray-900 text-sm">Language Fluencies</h4>
              <p className="text-[10px] text-gray-400">Verbal communication registers</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {LANGUAGES.map((lang, idx) => (
              <div 
                key={idx}
                className="p-2.5 rounded-xl border border-gray-100 bg-white shadow-3xs flex flex-col gap-1"
                id={`lang-item-${idx}`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-gray-800 font-display">{lang.name}</span>
                  <Globe className="w-3.5 h-3.5 text-gray-400" />
                </div>
                <div className="p-1 rounded bg-gray-50 text-center border border-gray-200/30">
                  <span className="text-[9px] font-mono text-gray-550 block font-semibold leading-tight">
                    {lang.proficiency}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>

    </div>
  );
}
