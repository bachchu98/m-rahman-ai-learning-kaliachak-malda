import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, Play, Terminal, ShieldCheck, MapPin, Zap, Code2, Video, CheckCircle2 } from 'lucide-react';
import { ACADEMY_INFO } from '../data/contentData';

interface HeroProps {
  onOpenEnroll: () => void;
  lang: 'bn' | 'en';
}

const TERMINAL_SNIPPETS = [
  {
    role: "User",
    prompt: "মালদার কালিয়াচকে বসে AI শিখে কোন ৫টি ফ্রিল্যান্সিং সার্ভিস দেওয়া সম্ভব?",
    result: "১. AI ফেসলেস ভিডিও এডিটিং\n২. আধুনিক ল্যান্ডিং পেজ ডিজাইন (Cursor/v0)\n৩. প্রফেশনাল অনুবাদ ও কপিরাইটিং\n৪. ই-কমার্স প্রোডাক্ট ইমেজ ও ব্যানার জেনারেশন\n৫. ChatGPT/Gemini কাস্টম প্রম্পট অটোমেশন"
  },
  {
    role: "User",
    prompt: "Generate modern dark landing hero code with neon glow accents in Tailwind",
    result: "⚡ Generated 100% responsive modern React + Tailwind code with smooth CSS radial gradients & zero layout shift in 0.8s."
  },
  {
    role: "User",
    prompt: "কালিয়াচক সেন্টারে অফলাইনে প্র্যাকটিক্যাল ল্যাব কীভাবে পরিচালিত হয়?",
    result: "প্রত্যেক শিক্ষার্থীর জন্য নিজস্ব কম্পিউটার ওয়ার্কস্টেশন, M Rahman স্যারের সরাসরি ১-অন-১ গাইডেন্স এবং প্রতি ক্লাসেই লাইভ প্রজেক্ট তৈরি ও রিভিউ।"
  }
];

export const Hero: React.FC<HeroProps> = ({ onOpenEnroll, lang }) => {
  const [snippetIndex, setSnippetIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSnippetIndex((prev) => (prev + 1) % TERMINAL_SNIPPETS.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const currentSnippet = TERMINAL_SNIPPETS[snippetIndex];

  return (
    <section className="relative pt-8 pb-16 md:pt-16 md:pb-24 overflow-hidden">
      {/* Background Neon ambient orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-blue-600/15 via-purple-600/20 to-cyan-500/10 blur-[130px] -z-10 pointer-events-none rounded-full" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-purple-600/15 blur-[100px] -z-10 pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-600/15 blur-[110px] -z-10 pointer-events-none rounded-full" />

      {/* Background subtle technical grid */}
      <div 
        className="absolute inset-0 -z-20 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #38bdf8 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Location & Institution Badge */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-purple-500/30 text-purple-300 text-xs sm:text-sm font-medium shadow-[0_0_15px_rgba(168,85,247,0.2)]">
            <span className="flex h-2 w-2 rounded-full bg-purple-400 animate-ping" />
            <MapPin className="w-3.5 h-3.5 text-cyan-400" />
            <span>Kaliakak, Malda District, West Bengal</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-300 text-xs font-medium">
            <Zap className="w-3.5 h-3.5 text-yellow-400" />
            <span>2026 Future Tech Academy</span>
          </div>
        </div>

        {/* Main Hero Headline */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.15]">
            <span className="block text-white mb-2 font-black">
              AI শিখুন, ভবিষ্যৎ গড়ুন
            </span>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent font-black">
              M Rahman AI Learning - Kaliakak
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {lang === 'bn' ? (
              <>
                মালদা জেলার <strong className="text-cyan-300 font-semibold">কালিয়াচকে</strong> প্রথম পূর্ণাঙ্গ প্র্যাকটিক্যাল কৃত্রিম বুদ্ধিমত্তা (AI) ট্রেনিং ইনস্টিটিউট। 
                ChatGPT, Gemini, নো-কোড ওয়েব ডিজাইন, AI ভিডিও ও ফ্রিল্যান্সিং টুলস শিখে নিজের ক্যারিয়ারকে বিশ্বমানের করে তুলুন।
              </>
            ) : (
              <>
                Premier Artificial Intelligence & Future Tech Academy in <strong className="text-cyan-300 font-semibold">Kaliakak, Malda, West Bengal</strong>. 
                Hands-on practical training in ChatGPT, Gemini, AI Web Design, Video Production, and High-Income Digital Skills.
              </>
            )}
          </p>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenEnroll}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-[0_0_25px_rgba(59,130,246,0.45)] hover:shadow-[0_0_35px_rgba(139,92,246,0.6)] transition-all cursor-pointer transform hover:-translate-y-0.5"
            >
              <Sparkles className="w-5 h-5 text-cyan-300" />
              <span>{lang === 'bn' ? 'ফ্রি ডেমো ক্লাস বুক করুন' : 'Book Free Demo Session'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#courses"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-medium text-slate-200 bg-slate-900/90 border border-slate-700/80 hover:border-purple-500/50 hover:bg-slate-850 hover:text-white transition-all shadow-lg"
            >
              <span>{lang === 'bn' ? 'সকল কোর্স ও সিলেবাস' : 'View Course Curriculum'}</span>
            </a>

            <a
              href="#features-qa"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl text-base font-medium text-cyan-400 bg-cyan-950/30 border border-cyan-800/50 hover:bg-cyan-900/40 transition-colors"
            >
              <Terminal className="w-4 h-4" />
              <span>{lang === 'bn' ? 'লাইভ AI চ্যাট ট্রাই করুন' : 'Try Live AI Chat'}</span>
            </a>
          </div>

          {/* Value Badges */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>১০০% প্র্যাকটিক্যাল ল্যাব ক্লাস</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <span>কালিয়াচক অফলাইন ক্যাম্পাস + অনলাইন ব্যাকআপ</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-purple-400" />
              <span>সহজ বাংলা ও ইংরেজি মাধ্যম</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-yellow-400" />
              <span>লাইফটাইম সাপোর্ট ও সার্টিফিকেট</span>
            </div>
          </div>
        </div>

        {/* Interactive Futuristic Terminal Card */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="relative rounded-2xl p-1 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-cyan-500/30 shadow-[0_0_40px_rgba(59,130,246,0.25)]">
            <div className="rounded-[15px] bg-[#0c1222]/95 border border-slate-800 p-5 sm:p-7 backdrop-blur-xl">
              {/* Terminal top header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    mrahman-ai-core@kaliakak-malda:~$ interactive-lab
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="hidden sm:inline font-mono text-slate-400">Model: Gemini 3.8 / LLM Lab</span>
                  <span className="text-purple-400 font-semibold">Active</span>
                </div>
              </div>

              {/* Terminal body */}
              <div className="space-y-4 font-mono text-xs sm:text-sm">
                <div>
                  <div className="text-slate-400 flex items-center gap-2 mb-1.5">
                    <span className="text-cyan-400 font-bold">&gt; Student Inquiry (মালদা ল্যাব):</span>
                  </div>
                  <div className="bg-slate-900/80 border border-blue-500/20 rounded-lg p-3 text-cyan-200">
                    "{currentSnippet.prompt}"
                  </div>
                </div>

                <div>
                  <div className="text-slate-400 flex items-center gap-2 mb-1.5">
                    <span className="text-purple-400 font-bold">&gt; M Rahman AI System Output:</span>
                    <span className="text-[10px] text-slate-500 bg-slate-800 px-1.5 py-0.5 rounded">Instant Response</span>
                  </div>
                  <div className="bg-slate-950/90 border border-purple-500/30 rounded-lg p-3.5 text-slate-200 whitespace-pre-line leading-relaxed shadow-inner">
                    {currentSnippet.result}
                  </div>
                </div>
              </div>

              {/* Quick Prompt triggers */}
              <div className="mt-5 pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs">
                <span className="text-slate-400">অন্যান্য ডেমো প্রম্পট ক্লিক করে দেখুন:</span>
                <div className="flex items-center gap-1.5">
                  {TERMINAL_SNIPPETS.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setSnippetIndex(i)}
                      className={`px-2.5 py-1 rounded text-xs transition-colors cursor-pointer ${
                        snippetIndex === i
                          ? 'bg-purple-600 text-white font-medium shadow-[0_0_10px_rgba(168,85,247,0.5)]'
                          : 'bg-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      ডেমো {i + 1}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          <div className="bg-slate-900/60 border border-blue-500/20 rounded-xl p-5 text-center backdrop-blur-sm hover:border-blue-500/40 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
            <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              850+
            </div>
            <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">
              সফল শিক্ষার্থী (মালদা ও আশপাশ)
            </div>
          </div>

          <div className="bg-slate-900/60 border border-purple-500/20 rounded-xl p-5 text-center backdrop-blur-sm hover:border-purple-500/40 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
            <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-300">
              25+
            </div>
            <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">
              হাতে-কলমে শেখানো AI টুলস
            </div>
          </div>

          <div className="bg-slate-900/60 border border-cyan-500/20 rounded-xl p-5 text-center backdrop-blur-sm hover:border-cyan-500/40 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
            <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-300">
              4.9★
            </div>
            <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">
              শিক্ষার্থী রেটিং ও রিভিউ
            </div>
          </div>

          <div className="bg-slate-900/60 border border-indigo-500/20 rounded-xl p-5 text-center backdrop-blur-sm hover:border-indigo-500/40 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
            <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-300">
              ১০০%
            </div>
            <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">
              কালিয়াচক প্র্যাকটিক্যাল ল্যাব
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
