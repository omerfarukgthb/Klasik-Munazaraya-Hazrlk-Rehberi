import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, ChevronRight, HelpCircle, Award, Volume2, Users, FileText, Search, BookOpen } from "lucide-react";
import { MünazaraAdımı } from "../types";
import { MUNAZARA_ADIMLARI } from "../data";

export default function AsamaRehberi() {
  const [steps, setSteps] = useState<MünazaraAdımı[]>(MUNAZARA_ADIMLARI);
  const [selectedStepId, setSelectedStepId] = useState<string>("adim-1");
  const [itemCheckStates, setItemCheckStates] = useState<Record<string, boolean>>({});

  // Role quiz states
  const [quizAnswers, setQuizAnswers] = useState<Record<number, string>>({});
  const [quizResult, setQuizResult] = useState<string | null>(null);

  const activeStep = steps.find((s) => s.id === selectedStepId) || steps[0];

  const handleToggleCheck = (stepId: string, itemIndex: number, itemText: string) => {
    const key = `${stepId}-${itemIndex}`;
    const newStates = { ...itemCheckStates, [key]: !itemCheckStates[key] };
    setItemCheckStates(newStates);

    // If all items of active step are checked, mark step as completed
    const stepItems = steps.find((s) => s.id === stepId)?.details || [];
    const allChecked = stepItems.every((_, idx) => newStates[`${stepId}-${idx}`]);

    setSteps(prevSteps => 
      prevSteps.map(s => s.id === stepId ? { ...s, completed: allChecked } : s)
    );
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "hazirlik":
        return <Search className="w-5 h-5 text-blue-500" />;
      case "hitabet":
        return <Volume2 className="w-5 h-5 text-purple-500" />;
      case "mac":
        return <Users className="w-5 h-5 text-emerald-500" />;
      case "sorular":
        return <HelpCircle className="w-5 h-5 text-amber-500" />;
      default:
        return <BookOpen className="w-5 h-5" />;
    }
  };

  // Debating Role recommendation quiz
  const handleAnswerQuiz = (qId: number, option: string) => {
    const nextAnswers = { ...quizAnswers, [qId]: option };
    setQuizAnswers(nextAnswers);

    if (Object.keys(nextAnswers).length === 4) {
      // Calculate recommendation
      const counts = { A: 0, B: 0, C: 0 };
      Object.values(nextAnswers).forEach(val => {
        if (val === "A") counts.A++;
        if (val === "B") counts.B++;
        if (val === "C") counts.C++;
      });

      if (counts.A >= counts.B && counts.A >= counts.C) {
        setQuizResult("1-konusmaci");
      } else if (counts.B >= counts.A && counts.B >= counts.C) {
        setQuizResult("2-konusmaci");
      } else {
        setQuizResult("3-konusmaci");
      }
    }
  };

  const resetQuiz = () => {
    setQuizAnswers({});
    setQuizResult(null);
  };

  return (
    <div id="asama-rehberi-container" className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Sidebar List to Select Steps */}
      <div id="steps-sidebar" className="lg:col-span-4 space-y-3">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 px-1 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-indigo-600" />
          Münazara Hazırlık Adımları
        </h3>
        
        <div className="space-y-2">
          {steps.map((step, idx) => {
            const isSelected = step.id === selectedStepId;
            const completedCount = step.details.filter((_, itemIdx) => itemCheckStates[`${step.id}-${itemIdx}`]).length;
            const progressPercent = (completedCount / step.details.length) * 100;

            return (
              <button
                key={step.id}
                id={`step-tab-${step.id}`}
                onClick={() => setSelectedStepId(step.id)}
                className={`w-full text-left p-4 rounded-xl border transition-all duration-200 cursor-pointer flex items-center justify-between group ${
                  isSelected
                    ? "bg-blue-50/80 border-blue-200 shadow-xs"
                    : "bg-white border-slate-200 hover:border-slate-300 hover:bg-white"
                }`}
              >
                <div className="flex items-center gap-3 min-w-0 pr-2">
                  <div className={`p-2 rounded-lg shrink-0 ${isSelected ? "bg-blue-100/80 text-blue-700" : "bg-slate-100 text-slate-600"}`}>
                    {getCategoryIcon(step.category)}
                  </div>
                  <div className="min-w-0">
                    <h4 className={`text-xs font-bold uppercase tracking-tight truncate ${isSelected ? "text-blue-900" : "text-slate-700"}`}>
                      {step.title}
                    </h4>
                    <p className="text-[11px] text-slate-500 truncate mt-0.5">{step.subtitle}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 shrink-0">
                  {step.completed ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 fill-emerald-50 shrink-0" />
                  ) : completedCount > 0 ? (
                    <span className="text-[10px] font-bold bg-blue-100 text-blue-700 rounded-full px-2 py-0.5">
                      {completedCount}/{step.details.length}
                    </span>
                  ) : (
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Quiz Card */}
        <div id="role-quiz-card" className="bg-gradient-to-br from-[#1E293B] to-slate-800 text-white rounded-2xl p-5 mt-6 shadow-sm border border-slate-700 relative overflow-hidden">
          <div className="absolute right-[-20px] top-[-20px] opacity-10 blur-xs">
            <Award className="w-24 h-24" />
          </div>
          
          <h4 className="text-[10px] uppercase font-bold tracking-widest text-slate-400 flex items-center gap-2 mb-2">
            <Users className="w-4 h-4 shrink-0 text-blue-400" />
            <span>Öğrenci Kılavuzu</span>
          </h4>
          <h3 className="text-sm font-bold mb-3">Münazara Rolü Keşif Testi</h3>
          
          {!quizResult ? (
            <div className="space-y-4 text-xs">
              {Object.keys(quizAnswers).length === 0 && (
                <div>
                  <p className="text-slate-300 leading-relaxed mb-3">
                    Münazara takımında hangi sırada kürsüye çıkacağına emin olamıyor musun? 4 soruluk mini testi tamamla, sana en uygun rolü bulalım!
                  </p>
                  <button
                    onClick={() => handleAnswerQuiz(1, "")}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded-lg transition text-center cursor-pointer shadow-xs"
                  >
                    Testi Başlat
                  </button>
                </div>
              )}

              {/* Question 1 */}
              {Object.keys(quizAnswers).length === 1 && quizAnswers[1] === "" && (
                <div className="space-y-2">
                  <p className="font-semibold text-slate-200 mb-2">Soru 1: Sahnede veya topluluk önünde kendini nasıl hissedersin?</p>
                  <button onClick={() => handleAnswerQuiz(1, "A")} className="w-full text-left p-2.5 rounded-lg bg-slate-800/80 border border-slate-700 hover:bg-slate-700 hover:text-white transition cursor-pointer">
                    A) Heyecanlı ama kurallara uyarak güzel bir açılış şovu yapabilirim.
                  </button>
                  <button onClick={() => handleAnswerQuiz(1, "B")} className="w-full text-left p-2.5 rounded-lg bg-slate-800/80 border border-slate-700 hover:bg-slate-700 hover:text-white transition cursor-pointer">
                    B) Sakinimdir, iddialarımı örneklerle derin derin anlatmayı severim.
                  </button>
                  <button onClick={() => handleAnswerQuiz(1, "C")} className="w-full text-left p-2.5 rounded-lg bg-slate-800/80 border border-slate-700 hover:bg-slate-700 hover:text-white transition cursor-pointer">
                    C) Çok hırslıyımdır, haksız iddiaları yakalayıp çürütmek bana enerji verir.
                  </button>
                </div>
              )}

              {/* Question 2 */}
              {Object.keys(quizAnswers).length === 2 && (
                <div className="space-y-2 flex flex-col">
                  <p className="font-semibold text-slate-200 mb-2">Soru 2: Çalışırken veya tartışırken hangisine daha çok güvenirsin?</p>
                  <button onClick={() => handleAnswerQuiz(2, "A")} className="w-full text-left p-2.5 rounded-lg bg-slate-800/80 border border-slate-700 hover:bg-slate-700 hover:text-white transition cursor-pointer">
                    A) Planlı çalışmaya, kavramların net tanımlarına ve düzene.
                  </button>
                  <button onClick={() => handleAnswerQuiz(2, "B")} className="w-full text-left p-2.5 rounded-lg bg-slate-800/80 border border-slate-700 hover:bg-slate-700 hover:text-white transition cursor-pointer">
                    B) Bilimsel verilere, kitaplardan derlediğim bol kanıt ve kaynaklara.
                  </button>
                  <button onClick={() => handleAnswerQuiz(2, "C")} className="w-full text-left p-2.5 rounded-lg bg-slate-800/80 border border-slate-700 hover:bg-slate-700 hover:text-white transition cursor-pointer">
                    C) Pratik zekama, anlık düşünebilmeye ve mantık hatalarını yakalamaya.
                  </button>
                </div>
              )}

              {/* Question 3 */}
              {Object.keys(quizAnswers).length === 3 && (
                <div className="space-y-2">
                  <p className="font-semibold text-slate-200 mb-2">Soru 3: Sana göre bir münazara maçında en keyifli an hangisidir?</p>
                  <button onClick={() => handleAnswerQuiz(3, "A")} className="w-full text-left p-2.5 rounded-lg bg-slate-800/80 border border-slate-700 hover:bg-slate-700 hover:text-white transition cursor-pointer">
                    A) Kürsüye ilk çıkıp konuyu heyecanla seyircilere tanıtmak ve rüzgar estirmek.
                  </button>
                  <button onClick={() => handleAnswerQuiz(3, "B")} className="w-full text-left p-2.5 rounded-lg bg-slate-800/80 border border-slate-700 hover:bg-slate-700 hover:text-white transition cursor-pointer">
                    B) İstatistiklerle, gerçek yaşam örnekleriyle haklılığımızı ispatlamak.
                  </button>
                  <button onClick={() => handleAnswerQuiz(3, "C")} className="w-full text-left p-2.5 rounded-lg bg-slate-800/80 border border-slate-700 hover:bg-slate-700 hover:text-white transition cursor-pointer">
                    C) Rakibin iddialarına 'Hayır, o öyle değil!' diyerek jüri önünde onları çürütmek.
                  </button>
                </div>
              )}

              {/* Question 4 */}
              {Object.keys(quizAnswers).length === 4 && !quizResult && (
                <div className="space-y-2">
                  <p className="font-semibold text-slate-200 mb-2">Soru 4: En zayıf olduğunu hissettiğin ya da çekindiğin alan hangisidir?</p>
                  <button onClick={() => handleAnswerQuiz(4, "A")} className="w-full text-left p-2.5 rounded-lg bg-slate-800/80 border border-slate-700 hover:bg-slate-700 hover:text-white transition cursor-pointer">
                    A) Karşı tarafın ani sorularına o anda cevap vermekte zorlanabilirim.
                  </button>
                  <button onClick={() => handleAnswerQuiz(4, "B")} className="w-full text-left p-2.5 rounded-lg bg-slate-800/80 border border-slate-700 hover:bg-slate-700 hover:text-white transition cursor-pointer">
                    B) Çok heyecanlanır ve konuşma süresini kontrol etmekte zorlanabilirim.
                  </button>
                  <button onClick={() => handleAnswerQuiz(4, "C")} className="w-full text-left p-2.5 rounded-lg bg-slate-800/80 border border-slate-700 hover:bg-slate-700 hover:text-white transition cursor-pointer">
                    C) Sıfırdan bir konuyu tanımlamak, kuralları falan anlatmak bana sıkıcı gelir.
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-2 text-xs">
              <span className="inline-block bg-blue-500/20 text-blue-300 border border-blue-400/30 px-3 py-1 rounded-full font-bold mb-3 uppercase tracking-wider text-[10px]">
                🎯 Senin Rolün Hazır!
              </span>
              
              {quizResult === "1-konusmaci" && (
                <div>
                  <h4 className="text-sm font-extrabold text-blue-400 mb-2 uppercase tracking-wide">1. Konuşmacı (Açılışçı)</h4>
                  <p className="text-slate-300 leading-relaxed mb-4 text-xs">
                    Sen kurallara sadık, planlı ve çerçeveyi mükemmel çizen bir açılışçısın! Görevin konunun tanımını yapmak, sınırları çizmek ve takımı öne geçirecek ilk sağlam argümanları kurmaktır.
                  </p>
                </div>
              )}

              {quizResult === "2-konusmaci" && (
                <div>
                  <h4 className="text-sm font-extrabold text-blue-400 mb-2 uppercase tracking-wide">2. Konuşmacı (Kanıtçı)</h4>
                  <p className="text-slate-300 leading-relaxed mb-4 text-xs">
                    Sen olayları derinlemesine incelemeyi, araştırmayı seven, bilgi dolu bir konuşmacısın! Görevin takım arkadaşının iddialarına yeni bilimsel veriler, harika örnekler katmak ve iddiaları sarsılmaz kılmaktır.
                  </p>
                </div>
              )}

              {quizResult === "3-konusmaci" && (
                <div>
                  <h4 className="text-sm font-extrabold text-blue-400 mb-2 uppercase tracking-wide">3. Konuşmacı (Çürütücü)</h4>
                  <p className="text-slate-300 leading-relaxed mb-4 text-xs">
                    Sen anlık hata yakalayan, hızlı düşünen ve aslan payını almayı seven bir çürütücüsün! Görevin, konuşma boyunca rakibin söylediği tüm yanlışları toparlayıp birer birer patlatmak ve son darbeyi vurmaktır!
                  </p>
                </div>
              )}

              <button
                onClick={resetQuiz}
                className="w-full bg-slate-700 hover:bg-slate-650 text-white font-bold py-2 rounded-lg transition cursor-pointer text-xs uppercase"
              >
                Yeniden Çöz
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Main Content Area showing Interactive Checklist of Active Step */}
      <div id="step-active-content" className="lg:col-span-8 space-y-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm space-y-6"
          >
            {/* Stage Title Banner */}
            <div className="border-b border-slate-150 pb-5">
              <div className="flex items-center gap-2 text-blue-600 font-bold text-xs tracking-wider uppercase mb-1">
                {getCategoryIcon(activeStep.category)}
                <span>Aşama {activeStep.id.split("-")[1]}</span>
              </div>
              <h2 className="text-lg md:text-xl font-extrabold text-slate-800 tracking-tight">
                {activeStep.title}
              </h2>
              <p className="text-xs text-slate-500 mt-1">{activeStep.subtitle}</p>
            </div>

            {/* Interactive Tasks Checklist */}
            <div className="space-y-4">
              <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Tamamlaman Gereken Kılavuz Adımları (Etkileşimli Liste)</span>
              </h3>
              
              <div className="space-y-3">
                {activeStep.details.map((detail, idx) => {
                  const isChecked = !!itemCheckStates[`${activeStep.id}-${idx}`];
                  return (
                    <button
                      key={idx}
                      onClick={() => handleToggleCheck(activeStep.id, idx, detail)}
                      className={`w-full text-left flex items-start gap-4 p-4 rounded-xl border-2 transition-all cursor-pointer ${
                        isChecked
                          ? "border-emerald-100 bg-emerald-50/20 text-slate-500"
                          : "border-slate-200 bg-white hover:border-blue-350 hover:bg-slate-50/20 text-slate-800 font-medium"
                      }`}
                    >
                      <div className={`w-5 h-5 rounded border-2 mt-0.5 shrink-0 flex items-center justify-center transition-all ${
                        isChecked
                          ? "bg-emerald-500 border-emerald-500 text-white"
                          : "border-slate-300 bg-white"
                      }`}>
                        {isChecked && (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                      <span className={`text-xs leading-relaxed ${isChecked ? "line-through text-slate-400" : ""}`}>
                        {detail}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Coach Tips Cards */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-3">
              <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1.5">
                💡 Münazara Koçundan Değerli Tavsiyeler
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {activeStep.tips.map((tip, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-4 border border-slate-200 shadow-xs">
                    <h5 className="font-bold text-slate-800 text-xs">{tip.title}</h5>
                    <p className="text-[11px] text-slate-500 leading-relaxed mt-1">
                      {tip.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Completion Progress Banner */}
            <div className="flex items-center justify-between p-4 bg-blue-50/30 rounded-xl border border-blue-100/30 text-xs">
              <div className="flex items-center gap-2">
                <span className="flex h-2 w-2 relative">
                  <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${activeStep.completed ? "bg-emerald-400" : "bg-blue-400"}`}></span>
                  <span className={`relative inline-flex rounded-full h-2 w-2 ${activeStep.completed ? "bg-emerald-500" : "bg-blue-600"}`}></span>
                </span>
                <span className="font-bold text-slate-700">
                  {activeStep.completed ? "Harika! Bu aşamanın tüm kriterlerini tamamladın." : "Hepsini işaretleyip aşamayı tamamlamaya çalış!"}
                </span>
              </div>
              <div className="text-slate-500 font-mono font-bold text-[11px] bg-slate-100 px-2 py-0.5 rounded-md">
                {activeStep.details.filter((_, idx) => itemCheckStates[`${activeStep.id}-${idx}`]).length} / {activeStep.details.length}
              </div>
            </div>

          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
