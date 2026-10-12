import React, { useState } from 'react';
import { chaptersData } from '../data/chaptersData';
import { Chapter, ChapterSection } from '../types';
import { 
  CheckCircle2, 
  AlertTriangle, 
  Lightbulb, 
  Copy, 
  Check, 
  Sparkles, 
  HelpCircle, 
  ChevronRight,
  Database,
  BarChart2,
  TrendingUp,
  FileText,
  Cpu,
  Layers,
  Users,
  Target
} from 'lucide-react';
import { copyHtmlToClipboard } from '../utils/copyToClipboard';

export const ChapterViewer: React.FC = () => {
  const [selectedChapterId, setSelectedChapterId] = useState<string>('chapter-1');
  const [copiedTable, setCopiedTable] = useState(false);

  const currentChapter = chaptersData.find(c => c.id === selectedChapterId) || chaptersData[0];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Database': return Database;
      case 'BarChart2': return BarChart2;
      case 'CheckCircle': return CheckCircle2;
      case 'TrendingUp': return TrendingUp;
      case 'FileText': return FileText;
      case 'Cpu': return Cpu;
      default: return Layers;
    }
  };

  const handleCopyTable = async () => {
    if (!currentChapter.apaTemplate) return;
    
    // Generate clean HTML table
    const headers = currentChapter.apaTemplate.tableHeaders.map(h => `<th style="text-align:left; padding:6px 10px; border-bottom:1.5px solid #000;">${h}</th>`).join('');
    const rows = currentChapter.apaTemplate.tableRows.map((r, i) => {
      const isLast = i === currentChapter.apaTemplate!.tableRows.length - 1;
      const borderBottom = isLast ? 'border-bottom:2px solid #000;' : '';
      const cells = r.map(c => `<td style="padding:6px 10px;">${c}</td>`).join('');
      return `<tr style="${borderBottom}">${cells}</tr>`;
    }).join('');

    const fullHtml = `
      <table style="width:100%; border-collapse:collapse; font-family:'TH Sarabun PSK', serif; font-size:16pt; line-height:1.2;">
        <caption style="text-align:left; font-weight:bold; margin-bottom:6px;">${currentChapter.apaTemplate.tableTitle}</caption>
        <thead><tr style="border-top:2px solid #000;">${headers}</tr></thead>
        <tbody>${rows}</tbody>
      </table>
      <div style="font-family:'TH Sarabun PSK', serif; font-size:14pt; font-style:italic; margin-top:4px;">${currentChapter.apaTemplate.note}</div>
    `;

    const success = await copyHtmlToClipboard(fullHtml);
    if (success) {
      setCopiedTable(true);
      setTimeout(() => setCopiedTable(false), 3000);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <span className="text-xs font-semibold uppercase tracking-wider text-brand-600 bg-brand-50 px-3 py-1 rounded-full">
          คู่มือเชิงปฏิบัติการ 5 ตอนฉบับสมบูรณ์
        </span>
        <h2 className="text-3xl font-display font-bold text-slate-900 mt-2">
          ก้าวสู่นักวิจัยชั้นเรียนมืออาชีพด้วย jamovi
        </h2>
        <p className="text-slate-600 text-sm sm:text-base mt-2">
          คลิกเลือกศึกษาเนื้อหาแต่ละตอนเพื่อดูขั้นตอนการกดเมนู คำอธิบายสถิติ และตัวอย่างการเขียนอภิปรายผลจริง
        </p>
      </div>

      {/* Chapters Selection Grid / Navigation Pill */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 mb-10">
        {chaptersData.map((chap) => {
          const Icon = getIcon(chap.icon);
          const isSelected = chap.id === selectedChapterId;
          return (
            <button
              key={chap.id}
              onClick={() => setSelectedChapterId(chap.id)}
              className={`flex flex-col items-start p-3 sm:p-4 rounded-2xl border text-left transition-all relative overflow-hidden ${
                isSelected
                  ? 'bg-brand-600 text-white border-brand-600 shadow-md scale-[1.02]'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-brand-300 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center justify-between w-full mb-2">
                <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${
                  isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                }`}>
                  {typeof chap.number === 'number' ? `ตอนที่ ${chap.number}` : chap.number}
                </span>
                <Icon className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-brand-600'}`} />
              </div>
              <h3 className={`font-semibold text-xs sm:text-sm line-clamp-2 ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                {chap.title}
              </h3>
            </button>
          );
        })}
      </div>

      {/* Chapter Content Details */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        
        {/* Chapter Banner */}
        <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="bg-amber-400 text-slate-950 text-xs font-bold px-3 py-1 rounded-full">
              {currentChapter.badge}
            </span>
            <span className="text-slate-300 text-xs font-mono">
              {currentChapter.subtitle}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold">
            {typeof currentChapter.number === 'number' ? `ตอนที่ ${currentChapter.number}: ` : ''}{currentChapter.title}
          </h2>
          
          {/* Objectives List */}
          <div className="mt-6 pt-6 border-t border-slate-700/60">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-brand-300 mb-3 flex items-center space-x-1.5">
              <Target className="w-4 h-4" />
              <span>วัตถุประสงค์การเรียนรู้ประจำตอน (Module Objectives)</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-300">
              {currentChapter.objectives.map((obj, i) => (
                <div key={i} className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{obj}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-8 space-y-10">
          
          {/* Classroom Scenario Card */}
          <div className="bg-indigo-50/70 border border-indigo-100 rounded-2xl p-5 sm:p-6 flex items-start space-x-4">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-indigo-950 text-base">บริบทสถานการณ์ในห้องเรียน (Classroom Scenario)</h3>
              <p className="text-indigo-900/80 text-sm mt-1 leading-relaxed">
                {currentChapter.scenario}
              </p>
            </div>
          </div>

          {/* Step-by-Step Sections */}
          <div className="space-y-8">
            <div className="border-b border-slate-200 pb-3">
              <h3 className="text-xl font-display font-bold text-slate-900 flex items-center space-x-2">
                <span className="w-2.5 h-6 bg-brand-600 rounded-full inline-block"></span>
                <span>ขั้นตอนการปฏิบัติการในโปรแกรม jamovi</span>
              </h3>
            </div>

            <div className="space-y-6">
              {currentChapter.sections.map((sec, idx) => (
                <div 
                  key={sec.id}
                  className="border border-slate-200 rounded-2xl p-5 sm:p-6 bg-slate-50/50 hover:bg-white hover:shadow-xs transition-all"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-base sm:text-lg font-bold text-slate-900">
                      {sec.title}
                    </h4>
                    <span className="text-xs font-semibold text-slate-400 bg-white px-2.5 py-1 rounded-full border border-slate-200">
                      หัวข้อย่อย {idx + 1}
                    </span>
                  </div>

                  <p className="text-slate-600 text-sm mb-4 leading-relaxed bg-white p-3.5 rounded-xl border border-slate-100">
                    <strong className="text-slate-800">💡 หลักการสำคัญ: </strong> {sec.concept}
                  </p>

                  {/* Steps */}
                  <div className="space-y-2 mb-4">
                    <h5 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      ลำดับขั้นตอนการกดคำสั่ง (Step-by-Step):
                    </h5>
                    <div className="space-y-2">
                      {sec.steps.map((st, sidx) => (
                        <div key={sidx} className="flex items-start space-x-3 bg-white p-3 rounded-xl border border-slate-200/80 text-xs sm:text-sm text-slate-700">
                          <span className="w-5 h-5 rounded-full bg-brand-100 text-brand-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                            {sidx + 1}
                          </span>
                          <span className="whitespace-pre-line leading-relaxed">{st}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Jamovi Output */}
                  <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3.5 text-xs sm:text-sm text-emerald-900 flex items-start space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong>ผลลัพธ์ที่ได้จากการประมวลผล: </strong> {sec.jamoviOutputDescription}
                    </div>
                  </div>

                  {/* Warning / Tip Alerts */}
                  {sec.warningAlert && (
                    <div className="mt-3 bg-amber-50 border border-amber-200 rounded-xl p-3.5 text-xs sm:text-sm text-amber-900 flex items-start space-x-2.5">
                      <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <div>{sec.warningAlert}</div>
                    </div>
                  )}

                  {sec.tipAlert && (
                    <div className="mt-3 bg-blue-50 border border-blue-200 rounded-xl p-3.5 text-xs sm:text-sm text-blue-900 flex items-start space-x-2.5">
                      <Lightbulb className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <div>{sec.tipAlert}</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* APA Table Template for this Chapter */}
          {currentChapter.apaTemplate && (
            <div className="bg-slate-900 text-white rounded-2xl p-6 border border-slate-800">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-4 border-b border-slate-800">
                <div>
                  <span className="text-xs font-semibold text-emerald-400 bg-emerald-950 px-2.5 py-0.5 rounded-full border border-emerald-800">
                    แม่แบบตารางบทที่ 4 (APA 7th Edition)
                  </span>
                  <h4 className="text-base sm:text-lg font-semibold text-white mt-1">
                    {currentChapter.apaTemplate.tableTitle}
                  </h4>
                </div>

                <button
                  onClick={handleCopyTable}
                  className="px-4 py-2 bg-brand-600 hover:bg-brand-500 text-white text-xs sm:text-sm font-semibold rounded-xl flex items-center justify-center space-x-2 shadow-sm transition-all"
                >
                  {copiedTable ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-300" />
                      <span>คัดลอกตารางลงคลิปบอร์ดแล้ว!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>คัดลอกตารางไปวางใน Word</span>
                    </>
                  )}
                </button>
              </div>

              {/* Responsive Table Preview */}
              <div className="overflow-x-auto bg-white text-slate-900 rounded-xl p-4 shadow-inner">
                <table className="apa-table">
                  <thead>
                    <tr>
                      {currentChapter.apaTemplate.tableHeaders.map((h, i) => (
                        <th key={i}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {currentChapter.apaTemplate.tableRows.map((row, i) => (
                      <tr key={i}>
                        {row.map((cell, ci) => (
                          <td key={ci}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="apa-note">
                  {currentChapter.apaTemplate.note}
                </div>
              </div>
            </div>
          )}

          {/* Dual Action-Oriented Discussion Framework */}
          <div className="border border-purple-200 rounded-3xl p-6 bg-purple-50/40">
            <div className="flex items-center space-x-2 text-purple-900 mb-4">
              <Sparkles className="w-5 h-5 text-purple-600" />
              <h3 className="text-lg font-bold font-display">
                แนวทางการเขียนรายงานผลและอภิปรายผล 2 มิติ
              </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* Academic Reporting */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  มิติที่ 1: การรายงานผลเชิงวิชาการ (Academic Reporting)
                </span>
                <p className="text-sm text-slate-700 mt-2 leading-relaxed font-serif text-base">
                  "{currentChapter.actionDiscussionExample.academic}"
                </p>
              </div>

              {/* Action-Oriented Discussion (3 Dimensions) */}
              <div className="bg-white p-5 rounded-2xl border border-purple-100 shadow-xs space-y-3">
                <span className="text-xs font-semibold text-purple-700 uppercase tracking-wider flex items-center space-x-1">
                  <span>มิติที่ 2: การอภิปรายผลเชิงปฏิบัติการเพื่อพัฒนาผู้เรียน (3 ระดับ)</span>
                </span>

                <div className="space-y-2 text-xs sm:text-sm">
                  <div className="p-2.5 rounded-xl bg-red-50 text-red-950 border border-red-100">
                    <strong className="text-red-700">1. กลุ่มต้องการความช่วยเหลือ (Remediation): </strong>
                    {currentChapter.actionDiscussionExample.actionOriented.remediation}
                  </div>
                  <div className="p-2.5 rounded-xl bg-blue-50 text-blue-950 border border-blue-100">
                    <strong className="text-blue-700">2. กลุ่มระดับปานกลาง (Consolidation): </strong>
                    {currentChapter.actionDiscussionExample.actionOriented.consolidation}
                  </div>
                  <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-950 border border-emerald-100">
                    <strong className="text-emerald-700">3. กลุ่มระดับเป็นเลิศ (Enrichment): </strong>
                    {currentChapter.actionDiscussionExample.actionOriented.enrichment}
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
