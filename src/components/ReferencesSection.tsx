import React from 'react';
import { academicReferences } from '../data/referencesData';
import { 
  Bookmark, 
  ExternalLink, 
  BookOpen, 
  CheckCircle2, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';

export const ReferencesSection: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-xs font-semibold uppercase tracking-wider text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
          Academic Sources & Standards
        </span>
        <h2 className="text-3xl font-display font-bold text-slate-900 mt-2">
          รายการอ้างอิงทางวิชาการและมาตรฐานสากล
        </h2>
        <p className="text-slate-600 text-sm sm:text-base mt-2">
          รวบรวมแหล่งอ้างอิงมาตรฐานที่ใช้ในการจัดทำคู่มือและการพัฒนาเว็บแอปพลิเคชัน อิงตามรูปแบบ <strong>APA 7th Edition</strong> และสามารถตรวจสอบได้จริง
        </p>
      </div>

      {/* References Grid */}
      <div className="space-y-4">
        {academicReferences.map((ref, idx) => (
          <div 
            key={ref.id}
            className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:border-purple-300 transition-all space-y-3"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-xs font-semibold text-purple-700 bg-purple-50 px-2.5 py-1 rounded-full border border-purple-100">
                [{idx + 1}] {ref.type}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {ref.tags.map((tag, ti) => (
                  <span key={ti} className="text-[11px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* APA Formatted Citation */}
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80 font-serif text-base text-slate-900 leading-relaxed">
              {ref.citationAPA}
            </div>

            {/* Description in Thai */}
            <div className="text-xs sm:text-sm text-slate-600 space-y-1">
              <strong className="text-slate-800 font-sans block">{ref.titleTh}:</strong>
              <p className="leading-relaxed">{ref.description}</p>
            </div>

            {ref.url && (
              <div className="pt-2">
                <a
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 text-xs text-brand-600 hover:text-brand-700 font-medium hover:underline"
                >
                  <span>ตรวจสอบแหล่งข้อมูลทางการ</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            )}
          </div>
        ))}
      </div>

    </div>
  );
};
