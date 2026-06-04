import React from "react";
import { Flame, BookOpen } from "lucide-react";
import AsamaRehberi from "./components/AsamaRehberi";

export default function App() {
  return (
    <div id="app-root-wrapper" className="min-h-screen bg-[#F1F5F9] font-sans text-slate-900 selection:bg-blue-100 flex flex-col print:bg-white print:text-black">
      
      {/* Top Navbar Brand Line (Across the screen) */}
      <header id="main-header" className="bg-[#1E293B] text-white border-b border-slate-800 shrink-0 py-4 px-6 md:px-8 print:hidden sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-600 text-white rounded-xl shadow-md">
              <Flame className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h1 className="text-white font-extrabold text-lg tracking-tight uppercase">
                Kürsü <span className="text-blue-400">Yıldızları</span>
              </h1>
              <p className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">Şampiyon Klasik Münazara Portalı</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold border bg-blue-950 text-blue-300 border-blue-900">
              <span className="animate-pulse w-2 h-2 bg-emerald-500 rounded-full"></span>
              <span>MOD: EĞİTİM MERKEZİ</span>
            </div>
          </div>
        </div>
      </header>

      {/* HERO BANNER SECTION */}
      <section id="hero-banner" className="bg-slate-900 text-white relative overflow-hidden print:hidden border-b border-slate-800 shrink-0">
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 blur-3xl rounded-full"></div>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-8 relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="inline-flex items-center gap-1 bg-blue-950 text-blue-300 border border-blue-800/40 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
              🗣️ Şampiyon Hatipler Yetiştiren Klasik Akademi
            </span>
            <h2 className="text-xl md:text-2xl font-black tracking-tight text-white leading-tight">
              Fikirlerin Çarpıştığı, Akılların Yarıştığı Yer!
            </h2>
            <p className="text-xs text-slate-300 max-w-2xl leading-relaxed">
              Ortaokul hatiplerimiz için her adımda rehberlik sunan, klasik münazara hazırlık süreci.
            </p>
          </div>
          
          <div className="flex items-center gap-4 shrink-0 bg-slate-800/50 border border-slate-700/40 px-4 py-2.5 rounded-xl">
            <div className="text-center">
              <div className="text-lg font-extrabold text-blue-400 font-mono">06</div>
              <div className="text-[9px] text-slate-400 uppercase font-bold tracking-tight">Eğitici Aşama</div>
            </div>
            <div className="h-6 w-px bg-slate-700"></div>
            <div className="text-center">
              <div className="text-lg font-extrabold text-amber-400 font-mono">100</div>
              <div className="text-[9px] text-slate-400 uppercase font-bold tracking-tight">Altın Puan</div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT AREA - SINGLE VIEW PORTAL */}
      <main id="main-content-layout" className="flex-1 max-w-7xl mx-auto w-full p-4 sm:p-6 md:p-8 space-y-12 shrink-0 print:p-0 print:space-y-6">
        
        {/* SECTION 1: MÜNAZARA REHBERİ (PREPARATION STEPS) */}
        <section id="munazara-rehberi-section" className="space-y-6">
          <div className="border-b border-slate-200 pb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h2 className="text-base sm:text-lg font-black tracking-tight text-slate-800 uppercase font-mono flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-blue-600" />
                Münazara Hazırlık Süreci: 6 Adımda Başarı
              </h2>
            </div>
            <span className="text-[11px] text-slate-500 font-medium hidden sm:inline">Kürsü Provaları</span>
          </div>
          
          <AsamaRehberi />
        </section>

      </main>

      {/* Bottom Activity Footer */}
      <footer id="main-footer" className="bg-white border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between px-6 sm:px-8 py-4 text-[11px] text-slate-500 shrink-0 print:hidden gap-3">
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 justify-center">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            <span>Hazırlık Süreci: 6 Eğitici Aşama</span>
          </div>
        </div>
        <div className="font-extrabold text-slate-700 text-center sm:text-right">
          Münazara Turnuvası - Kürsü Yıldızları v2.5
        </div>
      </footer>

    </div>
  );
}
