import React from 'react';
import { Sparkles, Heart, BookOpen, ExternalLink, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 text-xs sm:text-sm border-t border-slate-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800">
          
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-jamovi-purple to-brand-600 flex items-center justify-center text-white font-bold">
              <span>j</span>
            </div>
            <div>
              <span className="font-display font-bold text-white text-base">jamovi CAR: สถิติวิจัยในชั้นเรียน</span>
              <p className="text-slate-500 text-xs">Complete 5-Part Series & Action-Oriented Research Platform</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs">
            <a 
              href="https://www.jamovi.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center space-x-1"
            >
              <span>jamovi.org</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a 
              href="https://apastyle.apa.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center space-x-1"
            >
              <span>APA Style 7th</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <span className="text-slate-600">|</span>
            <span className="text-emerald-400 flex items-center space-x-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>GPL 3.0 Open Source</span>
            </span>
          </div>

        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-xs text-center sm:text-left">
          <p>
            จัดทำขึ้นเพื่อเป็นวิทยาทานและแหล่งเรียนรู้สำหรับผู้บริหาร ศึกษานิเทศก์ และเพื่อนครูในการพัฒนาคุณภาพผู้เรียน
          </p>
          <p className="flex items-center justify-center space-x-1">
            <span>พัฒนาเพื่อการศึกษาด้วย</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 mx-1 inline" />
            <span>Next-Gen Web Technology</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
