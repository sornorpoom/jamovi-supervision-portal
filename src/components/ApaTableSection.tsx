import React, { useState } from 'react';
import { apaTablesData } from '../data/apaTablesData';
import { ApaTableItem } from '../types';
import { 
  Table, 
  Copy, 
  Check, 
  FileText, 
  Sparkles, 
  Info,
  ExternalLink
} from 'lucide-react';
import { copyHtmlToClipboard } from '../utils/copyToClipboard';

export const ApaTableSection: React.FC = () => {
  const [selectedTableId, setSelectedTableId] = useState<string>(apaTablesData[0].id);
  const [copied, setCopied] = useState<boolean>(false);

  const currentTable = apaTablesData.find(t => t.id === selectedTableId) || apaTablesData[0];

  const handleCopy = async () => {
    const success = await copyHtmlToClipboard(currentTable.htmlContent);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
          One-Click Export to Word
        </span>
        <h2 className="text-3xl font-display font-bold text-slate-900 mt-2">
          คลังแม่แบบตารางผลลัพธ์บทที่ 4 ตามมาตรฐาน APA 7th Edition
        </h2>
        <p className="text-slate-600 text-sm sm:text-base mt-2">
          คลิกปุ่ม <strong>"คัดลอกตารางไปวางใน Word"</strong> แล้วกด Paste (Ctrl + V) ใน Microsoft Word ได้ทันที โดยตารางจะมีเส้นบน-ล่าง ตัวเอียงสัญลักษณ์ และจัดฟอนต์วิชาการไว้อย่างสมบูรณ์
        </p>
      </div>

      {/* Table Selector Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {apaTablesData.map((table) => {
          const isSelected = table.id === selectedTableId;
          return (
            <button
              key={table.id}
              onClick={() => {
                setSelectedTableId(table.id);
                setCopied(false);
              }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                isSelected
                  ? 'bg-emerald-700 text-white shadow-sm font-semibold'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              <span>{table.title}</span>
            </button>
          );
        })}
      </div>

      {/* Main Table Display Box */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        
        {/* Table Toolbar */}
        <div className="bg-slate-900 text-white p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-semibold text-emerald-400 bg-emerald-950 px-2.5 py-0.5 rounded-full border border-emerald-800">
              {currentTable.statType}
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-white mt-1">
              {currentTable.title}
            </h3>
          </div>

          <button
            onClick={handleCopy}
            className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold rounded-xl flex items-center justify-center space-x-2 shadow-md hover:scale-105 transition-all"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-200" />
                <span>คัดลอกตาราง HTML ลงคลิปบอร์ดแล้ว!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>📋 คัดลอกตารางไปวางใน Word</span>
              </>
            )}
          </button>
        </div>

        {/* Rendered Table Preview */}
        <div className="p-6 sm:p-8 bg-slate-50/60 overflow-x-auto">
          <div 
            className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm max-w-4xl mx-auto"
            dangerouslySetInnerHTML={{ __html: currentTable.htmlContent }}
          />
        </div>

        {/* Explanation & Writing Template */}
        <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-2 gap-6 border-t border-slate-200 bg-white">
          
          <div className="space-y-2">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider flex items-center space-x-1">
              <Info className="w-4 h-4 text-brand-600" />
              <span>คำอธิบายโครงสร้างตาราง APA 7th</span>
            </span>
            <p className="text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200">
              {currentTable.explanation}
            </p>
          </div>

          <div className="space-y-2">
            <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider flex items-center space-x-1">
              <FileText className="w-4 h-4 text-emerald-600" />
              <span>ตัวอย่างความเรียงบรรยายใต้ตาราง (บทที่ 4)</span>
            </span>
            <p className="text-sm text-slate-800 font-serif leading-relaxed bg-emerald-50/60 p-4 rounded-xl border border-emerald-200">
              "{currentTable.writingTemplate}"
            </p>
          </div>

        </div>

      </div>

      {/* Rules of APA 7th Reminder Card */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-3xl p-6 sm:p-8">
        <h4 className="font-bold text-amber-950 text-base sm:text-lg mb-3 flex items-center space-x-2">
          <Sparkles className="w-5 h-5 text-amber-600" />
          <span>4 กฎเหล็กของตารางผลลัพธ์มาตรฐาน APA 7th Edition</span>
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs sm:text-sm text-amber-900">
          <div className="bg-white/80 p-3.5 rounded-xl border border-amber-200">
            <strong>1. เส้นแนวนอน 3 เส้น:</strong> มีเฉพาะเส้นบนสุด เส้นใต้หัวตาราง และเส้นล่างสุด
          </div>
          <div className="bg-white/80 p-3.5 rounded-xl border border-amber-200">
            <strong>2. ไม่มีเส้นแนวตั้ง:</strong> ห้ามใส่เส้นคั่นคอลัมน์แนวตั้งในตารางเด็ดขาด
          </div>
          <div className="bg-white/80 p-3.5 rounded-xl border border-amber-200">
            <strong>3. ตัวเอียงสัญลักษณ์:</strong> สัญลักษณ์สถิติ เช่น <i>M, SD, t, p, r, F, df</i> ต้องเอียงเสมอ
          </div>
          <div className="bg-white/80 p-3.5 rounded-xl border border-amber-200">
            <strong>4. ทศนิยม p-value:</strong> รายงาน 3 ตำแหน่ง เช่น <i>p</i> = .024 หรือ <i>p</i> &lt; .001 (ไม่ต้องใส่ 0 หน้าจุด)
          </div>
        </div>
      </div>

    </div>
  );
};
