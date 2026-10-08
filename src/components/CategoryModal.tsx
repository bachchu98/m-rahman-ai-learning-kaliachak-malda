import React from 'react';
import { X, Sparkles, CheckCircle, ArrowRight, Terminal, Copy, Check } from 'lucide-react';
import { Category } from '../types';

interface CategoryModalProps {
  category: Category | null;
  onClose: () => void;
  onSelectAskAi: (prompt: string) => void;
  onOpenEnroll: (courseTitle?: string) => void;
}

export const CategoryModal: React.FC<CategoryModalProps> = ({
  category,
  onClose,
  onSelectAskAi,
  onOpenEnroll,
}) => {
  const [copied, setCopied] = React.useState(false);

  if (!category) return null;

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(category.samplePrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0c1222] border border-slate-700/80 shadow-[0_0_50px_rgba(59,130,246,0.3)] text-slate-100 p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="pr-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs uppercase tracking-wider font-semibold text-cyan-400">
              {category.badge}
            </span>
            <span className="text-slate-600">·</span>
            <span className="text-xs text-slate-400">M Rahman AI Curriculum</span>
          </div>

          <h3 className="text-2xl font-bold text-white mb-1">
            {category.titleBn}
          </h3>
          <p className="text-sm text-purple-300 font-mono">
            {category.titleEn}
          </p>
        </div>

        {/* Description */}
        <div className="mt-4 text-slate-300 text-sm leading-relaxed border-b border-slate-800 pb-5">
          {category.descriptionBn}
          <p className="mt-2 text-xs text-slate-400 italic">
            {category.descriptionEn}
          </p>
        </div>

        {/* Popular Tools Tags */}
        <div className="mt-5">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2.5">
            এই ক্যাটাগরিতে ব্যবহৃত ইন্ডাস্ট্রি টুলস:
          </h4>
          <div className="flex flex-wrap gap-2">
            {category.tools.map((tool, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-md bg-slate-900 border border-slate-700 text-xs font-medium text-blue-300 shadow-sm"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Key Learning Topics */}
        <div className="mt-6">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
            আপনি যা যা শিখবেন (হাতে-কলমে):
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {category.keyTopics.map((topic, idx) => (
              <div key={idx} className="flex items-start gap-2.5 bg-slate-900/60 border border-slate-800 rounded-lg p-3">
                <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-200">{topic}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Real-world Project */}
        <div className="mt-6 bg-gradient-to-r from-blue-950/40 via-purple-950/30 to-slate-900/40 border border-blue-500/30 rounded-xl p-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-300 mb-1">
            <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
            <span>প্র্যাকটিক্যাল ক্যাপস্টোন প্রজেক্ট:</span>
          </div>
          <p className="text-xs text-slate-200">
            {category.projectIdea}
          </p>
        </div>

        {/* Sample Prompt Box */}
        <div className="mt-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-slate-400 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-purple-400" />
              মডেল প্রম্পট (কপি করে ট্রাই করুন):
            </span>
            <button
              onClick={handleCopyPrompt}
              className="inline-flex items-center gap-1 text-xs text-purple-400 hover:text-purple-300 cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'কপি হয়েছে!' : 'প্রম্পট কপি করুন'}</span>
            </button>
          </div>
          <div className="p-3 bg-black/60 border border-purple-500/30 rounded-lg text-xs font-mono text-purple-200 break-words leading-relaxed">
            {category.samplePrompt}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-8 pt-5 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={() => {
              onClose();
              onSelectAskAi(category.samplePrompt);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold text-cyan-300 bg-cyan-950/60 border border-cyan-800/60 hover:bg-cyan-900/60 transition-colors cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI অ্যাসিস্ট্যান্টে এই প্রম্পট টেস্ট করুন</span>
          </button>

          <button
            onClick={() => {
              onClose();
              onOpenEnroll(category.titleBn);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-md transition-all cursor-pointer"
          >
            <span>এই কোর্সে ভর্তি হতে চান?</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
