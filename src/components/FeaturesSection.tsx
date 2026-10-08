import React from 'react';
import { Sparkles, Terminal, Lightbulb, Wrench } from 'lucide-react';
import { AiQAFeature } from './AiQAFeature';
import { DailyTipsFeature } from './DailyTipsFeature';
import { LiveToolsDemoFeature } from './LiveToolsDemoFeature';

interface FeaturesSectionProps {
  initialPrompt?: string;
  lang: 'bn' | 'en';
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ initialPrompt, lang }) => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-[#060a12]/90 border-t border-b border-slate-900">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-purple-600/10 blur-[150px] -z-10 pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] -z-10 pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-purple-500/30 text-purple-300 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Core Interactive Features</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            {lang === 'bn' ? (
              <>
                ইন্টারেক্টিভ লার্নিং ফিচারস &{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  AI টুলস ল্যাব
                </span>
              </>
            ) : (
              <>
                Interactive Learning Hub &{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Hands-On AI Labs
                </span>
              </>
            )}
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-300">
            {lang === 'bn'
              ? 'শুধুমাত্র থিওরি নয় — লাইভ প্রশ্ন করুন, প্রতিদিনের পরীক্ষিত টিপস জানুন এবং সরাসরি ব্রাউজারেই AI টুলস পরখ করুন।'
              : 'Beyond theory: live Q&A queries, actionable formulas, and live sandbox tools right in your browser.'}
          </p>

          {/* Quick jump navigation buttons */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5 text-xs font-medium">
            <a
              href="#features-qa"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-blue-500/30 text-blue-300 hover:text-white hover:border-blue-400 transition-colors"
            >
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span>১. Questions & Answer with AI</span>
            </a>
            <a
              href="#features-tips"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-purple-500/30 text-purple-300 hover:text-white hover:border-purple-400 transition-colors"
            >
              <Lightbulb className="w-3.5 h-3.5 text-yellow-400" />
              <span>২. Daily AI Tips</span>
            </a>
            <a
              href="#features-tools"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-cyan-500/30 text-cyan-300 hover:text-white hover:border-cyan-400 transition-colors"
            >
              <Wrench className="w-3.5 h-3.5 text-cyan-400" />
              <span>৩. Live Tools Demo</span>
            </a>
          </div>
        </div>

        {/* Feature 1: Questions & Answer with AI */}
        <AiQAFeature initialPrompt={initialPrompt} lang={lang} />

        {/* Feature 2: Daily AI Tips */}
        <DailyTipsFeature lang={lang} />

        {/* Feature 3: Live Tools Demo */}
        <LiveToolsDemoFeature lang={lang} />
      </div>
    </section>
  );
};
