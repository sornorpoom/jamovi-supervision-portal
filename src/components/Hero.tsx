import React from 'react';
import { 
  ArrowRight, 
  BookOpen, 
  ShieldCheck, 
  Sparkles, 
  Table, 
  Award,
  Cpu
} from 'lucide-react';

interface HeroProps {
  onStartLearning: () => void;
  onExploreRubrics: () => void;
  onGoToApa: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onStartLearning,
  onExploreRubrics,
  onGoToApa
}) => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-900 text-white pt-12 pb-20 sm:pt-20 sm:pb-28">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <span className="inline-flex items-center space-x-1.5 bg-indigo-500/20 text-indigo-300 text-xs font-medium px-3 py-1 rounded-full border border-indigo-400/30 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Classroom Action Research (CAR) Series</span>
          </span>
          <span className="inline-flex items-center space-x-1.5 bg-emerald-500/20 text-emerald-300 text-xs font-medium px-3 py-1 rounded-full border border-emerald-400/30 backdrop-blur-sm">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>มาตรฐานสากล APA 7th Edition</span>
          </span>
          <span className="inline-flex items-center space-x-1.5 bg-amber-500/20 text-amber-300 text-xs font-medium px-3 py-1 rounded-full border border-amber-400/30 backdrop-blur-sm">
            <Cpu className="w-3.5 h-3.5" />
            <span>Open Source ฟรี 100% สำหรับครูทุกสังกัด</span>
          </span>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight leading-tight">
            การประยุกต์ใช้ <span className="bg-gradient-to-r from-amber-400 via-brand-400 to-indigo-400 bg-clip-text text-transparent">jamovi</span> <br className="hidden sm:inline" />
            กับงานวิจัยปฏิบัติการในชั้นเรียน
          </h1>
          
          <p className="text-base sm:text-xl text-slate-300 font-light leading-relaxed max-w-3xl mx-auto">
            คู่มือเชิงปฏิบัติการฉบับสมบูรณ์ 5 ตอน + ภาคผนวก ยกระดับสถิติวิจัยในชั้นเรียนจากตัวเลขสู่ <strong className="text-amber-300 font-normal">กลยุทธ์การพัฒนาผู้เรียนจริง (Action-Oriented Discussion)</strong> พร้อมแม่แบบตาราง APA 7th ที่คัดลอกลง Word ได้ทันที
          </p>

          {/* Action CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
            <button
              onClick={onStartLearning}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-brand-500 to-indigo-600 hover:from-brand-600 hover:to-indigo-700 text-white font-semibold text-sm sm:text-base shadow-lg shadow-brand-500/25 flex items-center justify-center space-x-2 transition-all hover:scale-105"
            >
              <BookOpen className="w-5 h-5" />
              <span>เริ่มศึกษาเนื้อหา 5 ตอน</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>

            <button
              onClick={onExploreRubrics}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-purple-600/30 hover:bg-purple-600/40 text-purple-200 border border-purple-400/40 font-medium text-sm sm:text-base backdrop-blur-sm flex items-center justify-center space-x-2 transition-all hover:scale-105"
            >
              <Award className="w-5 h-5 text-purple-300" />
              <span>มาตรฐาน & เกณฑ์ประเมิน CAR</span>
            </button>

            <button
              onClick={onGoToApa}
              className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 border border-slate-700 font-medium text-sm sm:text-base flex items-center justify-center space-x-2 transition-all"
            >
              <Table className="w-4 h-4 text-emerald-400" />
              <span>คัดลอกตาราง APA 7th</span>
            </button>
          </div>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16 pt-8 border-t border-slate-800/80">
          <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/60 rounded-2xl p-5 hover:border-slate-600 transition-all">
            <div className="w-10 h-10 rounded-xl bg-brand-500/20 text-brand-400 flex items-center justify-center mb-3">
              <span className="font-bold text-lg">01</span>
            </div>
            <h2 className="font-semibold text-white text-base">เตรียมข้อมูลถูกหลัก (ต้นน้ำ)</h2>
            <p className="text-xs text-slate-400 mt-1">
              นำเข้าไฟล์ .CSV ภาษาไทยไม่เพี้ยน กำหนด Measure Types และ Clean ค่าผิดปกติ NA
            </p>
          </div>

          <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/60 rounded-2xl p-5 hover:border-slate-600 transition-all">
            <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center mb-3">
              <span className="font-bold text-lg">02</span>
            </div>
            <h2 className="font-semibold text-white text-base">สถิติบรรยาย & คุณภาพ</h2>
            <p className="text-xs text-slate-400 mt-1">
              Mean, SD, Boxplot, ความเชื่อมั่น KR-20, Cronbach Alpha และประสิทธิภาพนวัตกรรม E1/E2
            </p>
          </div>

          <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/60 rounded-2xl p-5 hover:border-slate-600 transition-all">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-3">
              <span className="font-bold text-lg">03</span>
            </div>
            <h2 className="font-semibold text-white text-base">ทดสอบสมมติฐาน & ขนาดอิทธิพล</h2>
            <p className="text-xs text-slate-400 mt-1">
              One sample, Paired t-test, Independent t-test, Cohen's d และสมการถดถอยพหุคูณ
            </p>
          </div>

          <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/60 rounded-2xl p-5 hover:border-slate-600 transition-all">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3">
              <span className="font-bold text-lg">04</span>
            </div>
            <h2 className="font-semibold text-white text-base">อภิปรายผลสะท้อน 3 มิติ</h2>
            <p className="text-xs text-slate-400 mt-1">
              ตารางมาตรฐาน APA 7th พร้อมกรอบเขียนสะท้อนกลุ่มซ่อมเสริม กลุ่มกลาง และกลุ่มเป็นเลิศ
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
