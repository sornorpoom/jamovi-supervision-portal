import React, { useState } from 'react';
import { downloadsData, DownloadItem } from '../data/downloadsData';
import { 
  Download, 
  FileSpreadsheet, 
  Layers, 
  ExternalLink, 
  Database,
  Search,
  Filter,
  CheckCircle2,
  Sparkles,
  FileCode2,
  Table
} from 'lucide-react';

export const DownloadCenter: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredItems = downloadsData.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.filename.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (item.chapterBadge && item.chapterBadge.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'csv': return FileSpreadsheet;
      case 'omv': return Layers;
      case 'xlsx': return Table;
      default: return ExternalLink;
    }
  };

  const getBadgeStyle = (type: string) => {
    switch (type) {
      case 'csv': return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'omv': return 'bg-purple-50 text-purple-700 border-purple-200';
      case 'xlsx': return 'bg-blue-50 text-blue-700 border-blue-200';
      default: return 'bg-amber-50 text-amber-700 border-amber-200';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-xs font-semibold uppercase tracking-wider text-brand-600 bg-brand-50 px-3 py-1 rounded-full">
          Official Research Datasets & Project Files
        </span>
        <h2 className="text-3xl font-display font-bold text-slate-900 mt-2">
          คลังไฟล์ชุดข้อมูลและไฟล์โปรเจกต์ jamovi สำเร็จรูป
        </h2>
        <p className="text-slate-600 text-sm sm:text-base mt-2">
          รวบรวมไฟล์ข้อมูลตัวอย่างจริง <strong>.CSV</strong> สำหรับฝึกปฏิบัติ และไฟล์โปรเจกต์สำเร็จรูป <strong>.OMV</strong> ที่เปิดดูผลการวิเคราะห์สถิติทุกตอนได้ทันที
        </p>
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-white p-4 sm:p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {[
              { id: 'all', label: 'ทั้งหมด' },
              { id: 'csv', label: '📁 ชุดข้อมูล .CSV (7 ไฟล์)' },
              { id: 'omv', label: '🟣 ไฟล์ jamovi .OMV (7 ไฟล์)' },
              { id: 'excel', label: '📊 Master Excel (1 ไฟล์)' },
              { id: 'software', label: '⚙️ โปรแกรม jamovi' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  selectedCategory === tab.id
                    ? 'bg-brand-600 text-white shadow-xs font-semibold'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200/70 hover:text-slate-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="ค้นหาชื่อไฟล์ หรือตอน..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl text-xs sm:text-sm border border-slate-200 bg-slate-50 focus:bg-white focus:outline-brand-500 transition-colors"
            />
          </div>

        </div>

      </div>

      {/* Downloads Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => {
          const Icon = getFileIcon(item.fileType);
          const isLink = item.fileType === 'software';
          const badgeClass = getBadgeStyle(item.fileType);

          return (
            <div 
              key={item.id}
              className="bg-white rounded-3xl border border-slate-200 p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                
                {/* Card Top */}
                <div className="flex items-start justify-between gap-2 mb-3">
                  <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${badgeClass}`}>
                    {item.chapterBadge || item.tag}
                  </span>
                  <span className="text-[11px] text-slate-400 font-mono">
                    {item.size}
                  </span>
                </div>

                <div className="flex items-start space-x-3 mb-2">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${
                    item.fileType === 'omv' ? 'bg-purple-100 text-purple-700' :
                    item.fileType === 'csv' ? 'bg-emerald-100 text-emerald-700' :
                    item.fileType === 'xlsx' ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-700'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base leading-snug">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <p className="text-[11px] text-slate-400 font-mono break-all mt-1 bg-slate-50 px-2 py-1 rounded-lg border border-slate-100">
                  {item.filename}
                </p>

                <p className="text-slate-600 text-xs mt-3 leading-relaxed">
                  {item.description}
                </p>

              </div>

              {/* Download CTA Button */}
              <div className="mt-5 pt-3 border-t border-slate-100">
                <a
                  href={item.url}
                  download={!isLink ? item.filename : undefined}
                  target={isLink ? "_blank" : undefined}
                  rel={isLink ? "noopener noreferrer" : undefined}
                  className={`w-full py-2.5 px-4 text-xs font-semibold rounded-xl flex items-center justify-center space-x-2 shadow-xs transition-all ${
                    item.fileType === 'omv' ? 'bg-purple-700 hover:bg-purple-800 text-white' :
                    item.fileType === 'csv' ? 'bg-emerald-700 hover:bg-emerald-800 text-white' :
                    item.fileType === 'xlsx' ? 'bg-blue-700 hover:bg-blue-800 text-white' : 'bg-slate-900 hover:bg-slate-800 text-white'
                  }`}
                >
                  {isLink ? (
                    <>
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>เปิดดาวน์โหลด jamovi ทางการ</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-3.5 h-3.5" />
                      <span>ดาวน์โหลด ({item.fileType.toUpperCase()})</span>
                    </>
                  )}
                </a>
              </div>

            </div>
          );
        })}
      </div>

      {/* Help Note for .omv vs .csv files */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
        
        <div className="bg-emerald-50/80 border border-emerald-200 rounded-3xl p-6 flex items-start space-x-4">
          <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
            <FileSpreadsheet className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-bold text-emerald-950 text-sm sm:text-base">
              วิธีใช้ไฟล์ชุดข้อมูล .CSV:
            </h4>
            <p className="text-xs text-emerald-900/80 mt-1 leading-relaxed">
              เหมาะสำหรับผู้ที่ต้องการ **ฝึกกดเมนูด้วยตนเองตั้งแต่ต้น**: เปิดโปรแกรม jamovi ➔ กดเมนูหลัก ➔ Open ➔ Browse ➔ เลือกไฟล์ .csv แล้วปฏิบัติตามคู่มือในแต่ละตอน
            </p>
          </div>
        </div>

        <div className="bg-purple-50/80 border border-purple-200 rounded-3xl p-6 flex items-start space-x-4">
          <div className="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center shrink-0">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-bold text-purple-950 text-sm sm:text-base">
              วิธีใช้ไฟล์โปรเจกต์ .OMV:
            </h4>
            <p className="text-xs text-purple-900/80 mt-1 leading-relaxed">
              เหมาะสำหรับผู้ที่ต้องการ **ดูตัวอย่างผลลัพธ์สำเร็จรูปทันที**: ดับเบิลคลิกไฟล์ .omv โปรแกรม jamovi จะเปิดขึ้นพร้อมตารางสถิติและกราฟิกที่วิเคราะห์เสร็จสมบูรณ์แล้ว
            </p>
          </div>
        </div>

      </div>

    </div>
  );
};
