import React, { useState } from 'react';
import { Bot, Send, Sparkles, Volume2, Copy, Check, RotateCcw, HelpCircle } from 'lucide-react';

interface AiQAFeatureProps {
  initialPrompt?: string;
  lang: 'bn' | 'en';
}

const PRESET_QUESTIONS = [
  "ChatGPT দিয়ে ঘরে বসে ফ্রিল্যান্সিং কিভাবে শুরু করব?",
  "মালদার কালিয়াচকে বসে AI শিখে কি বাস্তব ইনকাম সম্ভব?",
  "AI দিয়ে আধুনিক ওয়েবসাইট বানাতে কি কোডিং জানতে হয়?",
  "ভিডিও এডিটিং ও ইউটিউব রিলস বানাতে কোন AI টুলস সেরা?",
  "কালিয়াচক M Rahman AI সেন্টারের ফি ও ক্লাসের সময়সূচী কি?"
];

export const AiQAFeature: React.FC<AiQAFeatureProps> = ({ initialPrompt = '', lang }) => {
  const [question, setQuestion] = useState(initialPrompt);
  const [answer, setAnswer] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // If initialPrompt changes from parent, set it
  React.useEffect(() => {
    if (initialPrompt) {
      setQuestion(initialPrompt);
      handleAsk(initialPrompt);
    }
  }, [initialPrompt]);

  const handleAsk = async (queryToAsk?: string) => {
    const q = queryToAsk || question;
    if (!q.trim()) return;

    setLoading(true);
    setErrorMsg(null);
    setAnswer(null);

    try {
      const res = await fetch('/api/ai-qa', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: q, language: lang }),
      });

      if (!res.ok) {
        throw new Error('সার্ভারে সমস্যা হয়েছে, অনুগ্রহ করে আবার চেষ্টা করুন।');
      }

      const data = await res.json();
      setAnswer(data.answer);
    } catch (err: any) {
      console.error(err);
      setErrorMsg('দুঃখিত, উত্তর পেতে কিছুটা সমস্যা হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন বা সরাসরি আমাদের কালিয়াচক অফিসে হোয়াটসঅ্যাপ করুন।');
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    if (!answer) return;
    navigator.clipboard.writeText(answer);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSpeak = () => {
    if (!answer) return;
    if ('speechSynthesis' in window) {
      if (speaking) {
        window.speechSynthesis.cancel();
        setSpeaking(false);
        return;
      }
      const utterance = new SpeechSynthesisUtterance(answer.replace(/[*_#]/g, ''));
      utterance.rate = 1.0;
      utterance.onend = () => setSpeaking(false);
      utterance.onerror = () => setSpeaking(false);
      setSpeaking(true);
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div id="features-qa" className="rounded-2xl bg-gradient-to-b from-[#0c1326] to-[#070b14] border border-blue-500/30 p-6 sm:p-8 shadow-[0_0_40px_rgba(59,130,246,0.15)] relative overflow-hidden">
      {/* Subtle neon glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 blur-[100px] pointer-events-none rounded-full" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/70 border border-blue-500/30 text-xs font-semibold text-cyan-300 mb-2">
            <Bot className="w-3.5 h-3.5 text-cyan-400" />
            <span>Interactive Feature 1</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
            <span>Questions & Answer with AI</span>
            <span className="text-xs font-normal text-purple-400 bg-purple-950/60 border border-purple-500/30 px-2 py-0.5 rounded">
              Gemini 3.8 Powered
            </span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            {lang === 'bn' 
              ? 'AI, ফ্রিল্যান্সিং, কোর্স বা টেকনোলজি নিয়ে যেকোনো প্রশ্ন করুন — বাংলা ও ইংরেজিতে তাৎক্ষণিক প্র্যাকটিক্যাল উত্তর পান।'
              : 'Ask anything about AI tools, courses, career pathways, or freelancing in Bengali & English.'}
          </p>
        </div>

        <div className="text-xs text-slate-400 flex items-center gap-2 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800 self-start sm:self-auto">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>কালিয়াচক ভার্চুয়াল মেন্টর রেডি</span>
        </div>
      </div>

      {/* Preset Suggestions */}
      <div className="mt-5">
        <div className="text-xs font-semibold text-slate-400 flex items-center gap-1.5 mb-2.5">
          <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
          <span>দ্রুত এক ক্লিকে প্রশ্ন সিলেক্ট করুন:</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {PRESET_QUESTIONS.map((pq, idx) => (
            <button
              key={idx}
              onClick={() => {
                setQuestion(pq);
                handleAsk(pq);
              }}
              className="text-xs px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-white transition-all text-left cursor-pointer"
            >
              {pq}
            </button>
          ))}
        </div>
      </div>

      {/* Input Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAsk();
        }}
        className="mt-5 relative"
      >
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="relative flex-1">
            <textarea
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="আপনার প্রশ্নটি বাংলায় বা ইংরেজিতে লিখুন... (যেমন: আমি কীভাবে AI দিয়ে ভিডিও বানাব?)"
              rows={2}
              className="w-full rounded-xl bg-slate-950/90 border border-slate-700/80 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 p-3.5 text-sm text-white placeholder-slate-500 resize-none outline-none transition-all shadow-inner"
            />
          </div>

          <button
            type="submit"
            disabled={loading || !question.trim()}
            className="sm:w-36 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all cursor-pointer shadow-[0_0_20px_rgba(59,130,246,0.3)]"
          >
            {loading ? (
              <>
                <Sparkles className="w-4 h-4 animate-spin text-cyan-300" />
                <span>উত্তর আসছে...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>প্রশ্ন করুন</span>
              </>
            )}
          </button>
        </div>
      </form>

      {/* Error state */}
      {errorMsg && (
        <div className="mt-4 p-3 rounded-lg bg-rose-950/40 border border-rose-800 text-rose-300 text-xs">
          {errorMsg}
        </div>
      )}

      {/* Answer Output */}
      {answer && (
        <div className="mt-6 rounded-xl bg-slate-950/80 border border-purple-500/30 p-5 sm:p-6 text-slate-100 shadow-xl animate-fadeIn">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800/80 mb-3 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.8)]"></span>
              <span className="font-semibold text-purple-300">M Rahman AI Academy Mentor Response</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleSpeak}
                title="ভয়েসে শুনুন"
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                <Volume2 className={`w-3.5 h-3.5 ${speaking ? 'text-cyan-400 animate-pulse' : ''}`} />
                <span>{speaking ? 'থামান' : 'শুনুন'}</span>
              </button>

              <button
                onClick={handleCopy}
                title="উত্তর কপি করুন"
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'কপি হয়েছে' : 'কপি'}</span>
              </button>

              <button
                onClick={() => {
                  setAnswer(null);
                  setQuestion('');
                }}
                title="নতুন প্রশ্ন"
                className="p-1 rounded bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="text-xs sm:text-sm text-slate-200 leading-relaxed whitespace-pre-line space-y-2">
            {answer}
          </div>

          <div className="mt-4 pt-3 border-t border-slate-850 flex items-center justify-between text-xs text-slate-400">
            <span>📍 কালিয়াচক ক্যাম্পাসে সরাসরি কথা বলতে চান?</span>
            <a
              href="#about-contact"
              className="text-cyan-400 hover:underline font-semibold"
            >
              সরাসরি অফিসে আসুন →
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
