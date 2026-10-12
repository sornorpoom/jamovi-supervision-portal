import React, { useState } from 'react';
import { 
  BookOpen, 
  Award, 
  Table, 
  Calculator, 
  Download, 
  Bookmark, 
  Menu, 
  X, 
  ChevronRight,
  ShieldCheck
} from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'chapters', label: 'เนื้อหา 5 ตอน', icon: BookOpen },
    { id: 'policy-rubrics', label: 'มาตรฐาน & เกณฑ์ประเมิน', icon: Award },
    { id: 'apa-tables', label: 'ตาราง APA 7th & Word', icon: Table },
    { id: 'calculator', label: 'เครื่องมือคำนวณ E1/E2', icon: Calculator },
    { id: 'downloads', label: 'คลังดาวน์โหลด', icon: Download },
    { id: 'references', label: 'แหล่งอ้างอิง', icon: Bookmark },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <div 
            onClick={() => setActiveTab('hero')}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-jamovi-purple to-brand-600 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
              <span className="font-display font-bold text-xl tracking-tight">j</span>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-display font-bold text-lg text-slate-900 tracking-tight">jamovi CAR</span>
                <span className="bg-brand-100 text-brand-700 text-xs px-2 py-0.5 rounded-full font-medium">Classroom Research</span>
              </div>
              <p className="text-xs text-slate-500 hidden sm:block">สถิติวิจัยในชั้นเรียนฉบับสมบูรณ์ 5 ตอน</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-sm font-medium transition-all ${
                    isActive 
                      ? 'bg-brand-600 text-white font-semibold shadow-xs' 
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Badge Indicator */}
          <div className="hidden sm:flex items-center space-x-2 bg-emerald-50 border border-emerald-200 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-emerald-800">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>มาตรฐานสากล APA 7th</span>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-2 shadow-lg">
          <div className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    isActive ? 'bg-brand-600 text-white font-semibold' : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                    <span>{item.label}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};
