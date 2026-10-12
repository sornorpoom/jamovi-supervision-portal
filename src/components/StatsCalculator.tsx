import React, { useState } from 'react';
import { 
  Calculator, 
  CheckCircle2, 
  AlertTriangle, 
  Info, 
  HelpCircle, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

export const StatsCalculator: React.FC = () => {
  // E1/E2 Calculator State
  const [totalStudents, setTotalStudents] = useState<number>(30);
  const [processMaxScore, setProcessMaxScore] = useState<number>(30);
  const [processAvgScore, setProcessAvgScore] = useState<number>(25.93);
  const [postMaxScore, setPostMaxScore] = useState<number>(30);
  const [postAvgScore, setPostAvgScore] = useState<number>(25.70);
  const [targetStandard, setTargetStandard] = useState<string>('85/85');

  // Item Difficulty / Discrimination State
  const [itemP, setItemP] = useState<number>(0.65);
  const [itemR, setItemR] = useState<number>(0.42);

  // E1 & E2 Calculation
  const e1 = processMaxScore > 0 ? (processAvgScore / processMaxScore) * 100 : 0;
  const e2 = postMaxScore > 0 ? (postAvgScore / postMaxScore) * 100 : 0;

  const [targetE1, targetE2] = targetStandard.split('/').map(Number);
  const isE1Pass = e1 >= targetE1 - 2.5; // Acceptable tolerance +- 2.5%
  const isE2Pass = e2 >= targetE2 - 2.5;
  const isOverallPass = isE1Pass && isE2Pass;

  // Item Quality Evaluation
  const getItemDifficultyText = (p: number) => {
    if (p > 0.80) return { label: 'ง่ายมาก (ควรปรับปรุงหรือตัดออก)', color: 'text-amber-600 bg-amber-50' };
    if (p >= 0.60) return { label: 'ค่อนข้างง่าย (ใช้ได้ดี)', color: 'text-emerald-600 bg-emerald-50' };
    if (p >= 0.40) return { label: 'ยากง่ายพอเหมาะ (ดีมาก)', color: 'text-emerald-700 bg-emerald-100' };
    if (p >= 0.20) return { label: 'ค่อนข้างยาก (ใช้ได้ดี)', color: 'text-blue-600 bg-blue-50' };
    return { label: 'ยากมาก (ควรปรับปรุงหรือตัดออก)', color: 'text-red-600 bg-red-50' };
  };

  const getItemDiscriminationText = (r: number) => {
    if (r >= 0.40) return { label: 'อำนาจจำแนกดีมาก (รักษาไว้)', color: 'text-emerald-700 bg-emerald-100' };
    if (r >= 0.30) return { label: 'อำนาจจำแนกดี (ใช้ได้)', color: 'text-emerald-600 bg-emerald-50' };
    if (r >= 0.20) return { label: 'อำนาจจำแนกพอใช้ (ควรปรับปรุง)', color: 'text-amber-600 bg-amber-50' };
    return { label: 'อำนาจจำแนกต่ำมาก / ติดลบ (ตัดทิ้ง)', color: 'text-red-600 bg-red-50' };
  };

  const diffResult = getItemDifficultyText(itemP);
  const discResult = getItemDiscriminationText(itemR);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-xs font-semibold uppercase tracking-wider text-brand-600 bg-brand-50 px-3 py-1 rounded-full">
          Interactive Research Tools
        </span>
        <h2 className="text-3xl font-display font-bold text-slate-900 mt-2">
          เครื่องมือคำนวณและแปลผลสถิติวิจัยในชั้นเรียน
        </h2>
        <p className="text-slate-600 text-sm sm:text-base mt-2">
          ทดลองคำนวณประสิทธิภาพสื่อนวัตกรรม (E1/E2) และแปลผลคุณภาพข้อสอบ (ค่า p และ r) แบบ Real-time
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Tool 1: E1/E2 Calculator */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex items-center space-x-3 border-b border-slate-100 pb-4">
            <div className="w-10 h-10 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center font-bold">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-lg">1. โปรแกรมคำนวณประสิทธิภาพนวัตกรรม (E1/E2)</h3>
              <p className="text-xs text-slate-500">อิงทฤษฎี ศ.ดร.ชัยยงค์ พรหมวงศ์</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
            
            {/* Target Standard */}
            <div className="sm:col-span-2">
              <label className="block font-semibold text-slate-700 mb-1">
                เกณฑ์มาตรฐานประสิทธิภาพที่ตั้งไว้:
              </label>
              <select
                value={targetStandard}
                onChange={(e) => setTargetStandard(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-brand-500 font-medium"
              >
                <option value="80/80">80/80 (สำหรับเนื้อหาวิชาการระดับทั่วไป)</option>
                <option value="85/85">85/85 (สำหรับทักษะ/วิทยาศาสตร์/คณิตศาสตร์)</option>
                <option value="90/90">90/90 (สำหรับวิชาชีพ/ทักษะความปลอดภัยสูง)</option>
              </select>
            </div>

            {/* Process E1 */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
              <span className="font-bold text-slate-800 text-xs block text-brand-700">
                คะแนนกระบวนการระหว่างเรียน (E1)
              </span>
              <div>
                <label className="text-slate-500 text-xs block">คะแนนเต็ม (B):</label>
                <input
                  type="number"
                  value={processMaxScore}
                  onChange={(e) => setProcessMaxScore(Number(e.target.value))}
                  className="w-full mt-1 p-2 rounded-lg border border-slate-200 bg-white"
                />
              </div>
              <div>
                <label className="text-slate-500 text-xs block">คะแนนเฉลี่ยห้องเรียน (M):</label>
                <input
                  type="number"
                  step="0.01"
                  value={processAvgScore}
                  onChange={(e) => setProcessAvgScore(Number(e.target.value))}
                  className="w-full mt-1 p-2 rounded-lg border border-slate-200 bg-white font-semibold"
                />
              </div>
            </div>

            {/* Product E2 */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
              <span className="font-bold text-slate-800 text-xs block text-purple-700">
                คะแนนผลลัพธ์หลังเรียน (E2)
              </span>
              <div>
                <label className="text-slate-500 text-xs block">คะแนนเต็ม (A):</label>
                <input
                  type="number"
                  value={postMaxScore}
                  onChange={(e) => setPostMaxScore(Number(e.target.value))}
                  className="w-full mt-1 p-2 rounded-lg border border-slate-200 bg-white"
                />
              </div>
              <div>
                <label className="text-slate-500 text-xs block">คะแนนเฉลี่ยห้องเรียน (M):</label>
                <input
                  type="number"
                  step="0.01"
                  value={postAvgScore}
                  onChange={(e) => setPostAvgScore(Number(e.target.value))}
                  className="w-full mt-1 p-2 rounded-lg border border-slate-200 bg-white font-semibold"
                />
              </div>
            </div>

          </div>

          {/* E1/E2 Result Box */}
          <div className={`p-5 rounded-2xl border ${
            isOverallPass ? 'bg-emerald-50 border-emerald-200 text-emerald-950' : 'bg-amber-50 border-amber-200 text-amber-950'
          }`}>
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider">
                ผลการประเมินประสิทธิภาพสื่อนวัตกรรม:
              </span>
              <span className="text-2xl font-display font-extrabold tracking-tight">
                {e1.toFixed(2)} / {e2.toFixed(2)}
              </span>
            </div>

            <div className="mt-3 text-xs sm:text-sm font-medium">
              {isOverallPass ? (
                <div className="flex items-center space-x-2 text-emerald-800">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>
                    ผ่านเกณฑ์มาตรฐาน {targetStandard} อย่างมีประสิทธิภาพ (ยอมรับได้ในระดับความคลาดเคลื่อน ±2.5%)
                  </span>
                </div>
              ) : (
                <div className="flex items-center space-x-2 text-amber-800">
                  <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
                  <span>
                    ยังไม่ถึงเกณฑ์ {targetStandard} (ควรปรับปรุงกิจกรรมระหว่างเรียนหรือแบบทดสอบ)
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Tool 2: Item Difficulty & Discrimination Interpreter */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center space-x-3 border-b border-slate-100 pb-4">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg">2. เครื่องมือแปลผลค่าความยากง่าย (p) & อำนาจจำแนก (r)</h3>
                <p className="text-xs text-slate-500">อิงเกณฑ์มาตรฐาน Ebel & Frisbie (1991)</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
              
              {/* Slider Difficulty (p) */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                <div className="flex justify-between items-center text-xs font-semibold">
                  <label className="text-slate-700">ค่าความยากง่าย (p):</label>
                  <span className="font-mono text-brand-700 text-sm">{itemP.toFixed(2)}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={itemP}
                  onChange={(e) => setItemP(parseFloat(e.target.value))}
                  className="w-full accent-brand-600 cursor-pointer"
                />
                <div className="text-[11px] text-slate-400 flex justify-between">
                  <span>0.00 (ยากสุด)</span>
                  <span>1.00 (ง่ายสุด)</span>
                </div>
              </div>

              {/* Slider Discrimination (r) */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                <div className="flex justify-between items-center text-xs font-semibold">
                  <label className="text-slate-700">ค่าอำนาจจำแนก (r):</label>
                  <span className="font-mono text-purple-700 text-sm">{itemR.toFixed(2)}</span>
                </div>
                <input
                  type="range"
                  min="-0.5"
                  max="1"
                  step="0.01"
                  value={itemR}
                  onChange={(e) => setItemR(parseFloat(e.target.value))}
                  className="w-full accent-purple-600 cursor-pointer"
                />
                <div className="text-[11px] text-slate-400 flex justify-between">
                  <span>-0.50</span>
                  <span>+1.00</span>
                </div>
              </div>

            </div>
          </div>

          {/* Translation Result Cards */}
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3.5 rounded-xl border border-slate-100 bg-slate-50 text-xs sm:text-sm">
              <span className="text-slate-600">การแปลผลความยากง่าย (p):</span>
              <span className={`px-3 py-1 rounded-lg font-semibold ${diffResult.color}`}>
                {diffResult.label}
              </span>
            </div>

            <div className="flex items-center justify-between p-3.5 rounded-xl border border-slate-100 bg-slate-50 text-xs sm:text-sm">
              <span className="text-slate-600">การแปลผลอำนาจจำแนก (r):</span>
              <span className={`px-3 py-1 rounded-lg font-semibold ${discResult.color}`}>
                {discResult.label}
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-100 text-blue-900 text-xs">
              <strong>💡 เกณฑ์ข้อสอบคุณภาพสูง:</strong> ค่า p อยู่ระหว่าง <strong>0.20 – 0.80</strong> และค่า r <strong>≥ 0.20</strong> ขึ้นไป
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
