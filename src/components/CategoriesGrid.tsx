import React, { useState } from 'react';
import { 
  Cpu, 
  Sparkles, 
  Layout, 
  Video, 
  Languages, 
  Flame, 
  ArrowUpRight, 
  Layers
} from 'lucide-react';
import { CATEGORIES_DATA } from '../data/contentData';
import { Category } from '../types';
import { CategoryModal } from './CategoryModal';

interface CategoriesGridProps {
  onSelectAskAi: (prompt: string) => void;
  onOpenEnroll: (courseTitle?: string) => void;
  lang: 'bn' | 'en';
}

const ICON_MAP: Record<string, React.ReactNode> = {
  Cpu: <Cpu className="w-6 h-6 text-cyan-400" />,
  Sparkles: <Sparkles className="w-6 h-6 text-purple-400" />,
  Layout: <Layout className="w-6 h-6 text-blue-400" />,
  Video: <Video className="w-6 h-6 text-pink-400" />,
  Languages: <Languages className="w-6 h-6 text-emerald-400" />,
  Flame: <Flame className="w-6 h-6 text-amber-400" />
};

export const CategoriesGrid: React.FC<CategoriesGridProps> = ({
  onSelectAskAi,
  onOpenEnroll,
  lang
}) => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  return (
    <section id="categories" className="py-16 md:py-24 relative">
      {/* Background neon accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 blur-[130px] -z-10 pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-purple-600/10 blur-[130px] -z-10 pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-blue-500/30 text-blue-300 text-xs font-semibold mb-3">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span>M Rahman AI Curriculum Roadmap</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            {lang === 'bn' ? (
              <>
                আমাদের <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-300 bg-clip-text text-transparent">৬টি স্পেশালাইজড</span> AI লার্নিং ক্যাটাগরি
              </>
            ) : (
              <>
                Our <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-300 bg-clip-text text-transparent">6 Specialized</span> AI Learning Tracks
              </>
            )}
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-300">
            {lang === 'bn' 
              ? 'কালিয়াচক ও মালদার শিক্ষার্থীদের বাস্তব কর্মসংস্থান ও ফ্রিল্যান্সিং স্কিল অর্জনের জন্য আধুনিকতম কোর্স মডিউল।'
              : 'Designed to equip students in Kaliakak and Malda with globally competitive digital skills and real-world income pathways.'}
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES_DATA.map((cat) => (
            <div
              key={cat.id}
              onClick={() => setSelectedCategory(cat)}
              className={`group relative rounded-2xl bg-gradient-to-b from-slate-900/90 to-[#0c1222]/90 border ${cat.neonBorder} p-6 sm:p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl cursor-pointer flex flex-col justify-between`}
            >
              <div>
                {/* Top Badge and Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-slate-800/90 border border-slate-700 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {ICON_MAP[cat.iconName] || <Cpu className="w-6 h-6 text-cyan-400" />}
                  </div>

                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 bg-slate-800/70 border border-slate-700/60 px-2.5 py-1 rounded-md">
                    {cat.badge}
                  </span>
                </div>

                {/* Card Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {lang === 'bn' ? cat.titleBn : cat.titleEn}
                </h3>

                <p className="mt-2 text-xs font-mono text-purple-400/90">
                  {cat.titleEn}
                </p>

                {/* Card Description */}
                <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                  {lang === 'bn' ? cat.descriptionBn : cat.descriptionEn}
                </p>

                {/* Tools preview list */}
                <div className="mt-5 pt-4 border-t border-slate-800/80">
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    টপ টুলস:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.tools.slice(0, 3).map((tool, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] px-2 py-0.5 rounded bg-slate-900 border border-slate-700/80 text-blue-200"
                      >
                        {tool}
                      </span>
                    ))}
                    {cat.tools.length > 3 && (
                      <span className="text-[11px] px-1.5 py-0.5 rounded bg-slate-900 text-slate-400">
                        +{cat.tools.length - 3} আরো
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Bottom trigger */}
              <div className="mt-6 pt-3 flex items-center justify-between text-xs font-semibold text-cyan-400 group-hover:text-purple-300 transition-colors">
                <span>{lang === 'bn' ? 'সিলেবাস ও ডেমো প্রম্পট' : 'Explore Syllabus & Prompts'}</span>
                <div className="w-7 h-7 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-purple-600/30 group-hover:translate-x-1 transition-all">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom banner for Categories */}
        <div className="mt-12 p-5 rounded-xl bg-gradient-to-r from-blue-950/40 via-purple-950/40 to-slate-900/60 border border-blue-500/20 text-center max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left text-xs sm:text-sm text-slate-300">
            <span className="font-semibold text-white">কালিয়াচক ল্যাবে সরাসরি বসে ট্রায়াল দিতে চান?</span>
            <p className="text-slate-400 text-xs">আমাদের কম্পিউটার সেন্টারে এসে বিনামূল্যে ১টি ক্লাস ডেমো দেখে সিদ্ধান্ত নিন।</p>
          </div>
          <button
            onClick={() => onOpenEnroll('ফ্রি অফলাইন ট্রায়াল ক্লাস')}
            className="shrink-0 px-4 py-2 rounded-lg text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 transition-colors cursor-pointer shadow-md"
          >
            ফ্রি ক্লাস বুক করুন
          </button>
        </div>
      </div>

      {/* Detail Modal */}
      <CategoryModal
        category={selectedCategory}
        onClose={() => setSelectedCategory(null)}
        onSelectAskAi={onSelectAskAi}
        onOpenEnroll={onOpenEnroll}
      />
    </section>
  );
};
