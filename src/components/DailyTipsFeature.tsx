import React, { useState } from 'react';
import { Lightbulb, Copy, Check, Bookmark, Sparkles, Filter, Search } from 'lucide-react';
import { DAILY_TIPS_DATA } from '../data/contentData';
import { DailyTip } from '../types';

interface DailyTipsFeatureProps {
  lang: 'bn' | 'en';
}

export const DailyTipsFeature: React.FC<DailyTipsFeatureProps> = ({ lang }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([]);

  const categories = ['All', 'ChatGPT', 'Video AI', 'Web Design', 'Image & Design', 'Freelancing'];

  const filteredTips = DAILY_TIPS_DATA.filter((tip) => {
    const matchesCat = selectedCategory === 'All' || tip.category === selectedCategory;
    const matchesSearch = 
      tip.titleBn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tip.titleEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tip.descriptionBn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tip.promptSnippet.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const handleCopyPrompt = (tip: DailyTip) => {
    navigator.clipboard.writeText(tip.promptSnippet);
    setCopiedId(tip.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const toggleBookmark = (id: string) => {
    setBookmarkedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div id="features-tips" className="mt-12 rounded-2xl bg-[#0a0f1d] border border-purple-500/30 p-6 sm:p-8 shadow-[0_0_40px_rgba(168,85,247,0.15)] relative">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/70 border border-purple-500/30 text-xs font-semibold text-purple-300 mb-2">
            <Lightbulb className="w-3.5 h-3.5 text-yellow-400" />
            <span>Interactive Feature 2</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
            <span>Daily AI Tips & Prompts</span>
            <span className="text-xs text-cyan-300 bg-cyan-950/60 border border-cyan-800 px-2 py-0.5 rounded">
              প্রতিদিনের সেরা টেকনিক
            </span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            {lang === 'bn'
              ? 'মালদার শিক্ষার্থীদের জন্য প্রতিদিনের টেস্টেড প্রম্পট, টাইম-সেভিং ট্রিকস ও সিক্রেট হ্যাকস।'
              : 'Actionable prompt formulas, workflows, and productivity hacks tested daily.'}
          </p>
        </div>

        {/* Search */}
        <div className="relative w-full md:w-64">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="টিপস বা প্রম্পট খুঁজুন..."
            className="w-full pl-9 pr-3 py-2 rounded-lg bg-slate-900 border border-slate-700/80 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-purple-400"
          />
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="mt-5 flex items-center gap-2 overflow-x-auto pb-2">
        <Filter className="w-3.5 h-3.5 text-slate-500 shrink-0" />
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`text-xs px-3 py-1.5 rounded-lg whitespace-nowrap transition-all cursor-pointer font-medium ${
              selectedCategory === cat
                ? 'bg-purple-600 text-white shadow-[0_0_12px_rgba(168,85,247,0.4)]'
                : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Tips Cards Grid */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredTips.map((tip) => {
          const isCopied = copiedId === tip.id;
          const isBookmarked = bookmarkedIds.includes(tip.id);

          return (
            <div
              key={tip.id}
              className="rounded-xl bg-slate-950/70 border border-slate-800/90 hover:border-purple-500/40 p-5 flex flex-col justify-between transition-all hover:-translate-y-0.5 group shadow-lg"
            >
              <div>
                {/* Card header */}
                <div className="flex items-center justify-between mb-3 text-xs">
                  <span className="font-semibold text-cyan-400 bg-cyan-950/60 border border-cyan-800/60 px-2 py-0.5 rounded">
                    {tip.category}
                  </span>

                  <div className="flex items-center gap-2">
                    <span className="text-[11px] text-slate-400">{tip.tool}</span>
                    <button
                      onClick={() => toggleBookmark(tip.id)}
                      className="text-slate-400 hover:text-yellow-400 transition-colors cursor-pointer"
                      title="বুকমার্ক করুন"
                    >
                      <Bookmark
                        className={`w-4 h-4 ${isBookmarked ? 'fill-yellow-400 text-yellow-400' : ''}`}
                      />
                    </button>
                  </div>
                </div>

                {/* Title */}
                <h4 className="text-sm font-bold text-white group-hover:text-purple-300 transition-colors">
                  {lang === 'bn' ? tip.titleBn : tip.titleEn}
                </h4>

                <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                  {tip.descriptionBn}
                </p>

                {/* Snippet box */}
                <div className="mt-3 p-3 rounded-lg bg-black/60 border border-slate-800/90 text-[11px] font-mono text-purple-200 line-clamp-3">
                  {tip.promptSnippet}
                </div>
              </div>

              {/* Bottom copy action */}
              <div className="mt-4 pt-3 border-t border-slate-850 flex items-center justify-between text-xs">
                <span className="text-[11px] text-slate-400">লেভেল: {tip.difficulty}</span>

                <button
                  onClick={() => handleCopyPrompt(tip)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-950/50 hover:bg-purple-900/60 border border-purple-500/40 text-purple-200 text-xs font-medium transition-colors cursor-pointer"
                >
                  {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{isCopied ? 'কপি সফল' : 'প্রম্পট কপি'}</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {filteredTips.length === 0 && (
        <div className="text-center py-10 text-slate-400 text-sm">
          কোনো টিপস পাওয়া যায়নি। অন্য ক্যাটাগরি ট্রাই করুন।
        </div>
      )}
    </div>
  );
};
