import React from 'react';
import { executiveInsights, carEvaluationRubric } from '../data/executiveData';
import { 
  DollarSign, 
  Award, 
  Users, 
  Zap, 
  CheckCircle2, 
  FileCheck, 
  TrendingUp, 
  Sparkles,
  ShieldCheck,
  HelpCircle
} from 'lucide-react';

export const ExecutiveView: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'DollarSign': return DollarSign;
      case 'Award': return Award;
      case 'Users': return Users;
      case 'Zap': return Zap;
      default: return Sparkles;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-950 via-indigo-900 to-slate-900 text-white p-8 sm:p-12 shadow-xl">
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center space-x-2 bg-purple-400/20 text-purple-300 text-xs font-semibold px-3 py-1 rounded-full border border-purple-400/30">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Policy, PLC Framework & Research Quality Standard</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight">
            มิติเชิงนโยบายและเกณฑ์มาตรฐานคุณภาพงานวิจัยในชั้นเรียน
          </h2>
          
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
            กรอบแนวทางสำหรับสถานศึกษาทุกสังกัด ในการขับเคลื่อนนวัตกรรมการจัดการเรียนรู้ การประหยัดงบประมาณซอฟต์แวร์ และเกณฑ์ประเมินคุณภาพงานวิจัยเพื่อการพัฒนาวิชาชีพสู่มาตรฐานสากล
          </p>
        </div>
      </div>

      {/* 4 Core Pillars */}
      <div className="space-y-6">
        <div className="text-center max-w-2xl mx-auto">
          <h3 className="text-2xl font-display font-bold text-slate-900">
            4 คุณค่าหลักของ jamovi ต่อการพัฒนาคุณภาพการศึกษา
          </h3>
          <p className="text-slate-600 text-sm mt-1">
            เหตุผลเชิงยุทธศาสตร์ที่ควรส่งเสริมให้ครูผู้สอนทุกสังกัดนำ jamovi ไปใช้งานจริง
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {executiveInsights.map((insight, idx) => {
            const Icon = getIcon(insight.icon);
            return (
              <div 
                key={idx}
                className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center shrink-0 shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg">
                        {insight.title}
                      </h4>
                      <p className="text-xs text-purple-700 font-medium mt-0.5">
                        {insight.summary}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-2.5 my-5 text-sm text-slate-600">
                    {insight.details.map((detail, di) => (
                      <li key={di} className="flex items-start space-x-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-100 bg-purple-50/50 p-4 rounded-2xl">
                  <span className="text-xs font-semibold text-purple-900 uppercase tracking-wider block mb-1">
                    🎯 ข้อเสนอแนะเชิงยุทธศาสตร์:
                  </span>
                  <p className="text-xs sm:text-sm text-purple-950 font-medium leading-relaxed">
                    {insight.recommendation}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* CAR Evaluation Rubric */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-600 bg-brand-50 px-3 py-1 rounded-full">
              เครื่องมือตรวจเช็กลิสต์และประเมินคุณภาพ
            </span>
            <h3 className="text-2xl font-display font-bold text-slate-900 mt-2">
              เกณฑ์การตรวจประเมินคุณภาพงานวิจัยในชั้นเรียน (CAR Rubric)
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              ใช้สำหรับตรวจประเมินความถูกต้องของเล่มรายงานวิจัย บทที่ 4 และ บทที่ 5 และการพัฒนาวิชาชีพครู
            </p>
          </div>
          <div className="flex items-center space-x-2 bg-emerald-50 text-emerald-800 text-xs px-4 py-2 rounded-xl font-medium border border-emerald-200 shrink-0">
            <FileCheck className="w-4 h-4 text-emerald-600" />
            <span>เกณฑ์ประเมิน 100 คะแนน (4 มิติ)</span>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="bg-slate-100/80 text-slate-800 text-xs font-semibold border-b border-slate-200">
                <th className="p-4 rounded-l-xl">ประเด็นการประเมิน</th>
                <th className="p-4 text-center">น้ำหนัก</th>
                <th className="p-4 text-emerald-800 bg-emerald-50/50">ระดับดีเด่น (3 คะแนน)</th>
                <th className="p-4 text-blue-800 bg-blue-50/50">ระดับพอใช้ (2 คะแนน)</th>
                <th className="p-4 rounded-r-xl text-amber-800 bg-amber-50/50">ควรปรับปรุง (1 คะแนน)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {carEvaluationRubric.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-4 font-semibold text-slate-900">
                    {item.criteria}
                  </td>
                  <td className="p-4 text-center font-bold text-brand-600">
                    {item.weight}
                  </td>
                  <td className="p-4 text-xs text-slate-700 bg-emerald-50/20 leading-relaxed">
                    {item.excellent}
                  </td>
                  <td className="p-4 text-xs text-slate-700 bg-blue-50/20 leading-relaxed">
                    {item.good}
                  </td>
                  <td className="p-4 text-xs text-slate-700 bg-amber-50/20 leading-relaxed">
                    {item.needsImprovement}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};
