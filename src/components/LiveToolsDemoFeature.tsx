import React, { useState } from 'react';
import { Wrench, Sparkles, Wand2, Copy, Check, ArrowRight, Video, Languages, RefreshCw } from 'lucide-react';

interface LiveToolsDemoFeatureProps {
  lang: 'bn' | 'en';
}

export const LiveToolsDemoFeature: React.FC<LiveToolsDemoFeatureProps> = ({ lang }) => {
  const [activeTab, setActiveTab] = useState<'enhancer' | 'translator' | 'hooks'>('enhancer');

  // Tool 1: Enhancer state
  const [rawPrompt, setRawPrompt] = useState('কালিয়াচকের একটি কম্পিউটার ট্রেনিং সেন্টারের জন্য সোশ্যাল মিডিয়া পোস্ট');
  const [promptCategory, setPromptCategory] = useState('marketing');
  const [enhancedResult, setEnhancedResult] = useState<string | null>(null);
  const [isEnhancing, setIsEnhancing] = useState(false);
  const [copiedEnhanced, setCopiedEnhanced] = useState(false);

  // Tool 2: Bengali to AI Image Prompt Translator
  const [bengaliImageIdea, setBengaliImageIdea] = useState('মালদার প্রাচীন ঐতিহাসিক আদিনা মসজিদ বা গৌড়ের ঐতিহাসিক দরজার সামনে সূর্যাস্ত');
  const [imageStyle, setImageStyle] = useState('cinematic');
  const [translatedPrompt, setTranslatedPrompt] = useState<string | null>(null);
  const [copiedTrans, setCopiedTrans] = useState(false);

  // Tool 3: Viral Hook Generator
  const [hookTopic, setHookTopic] = useState('২০২৬ সালে AI শিখে কীভাবে প্রথম ১০,০০০ টাকা ইনকাম করবেন');
  const [hooksList, setHooksList] = useState<string[] | null>(null);
  const [copiedHookIdx, setCopiedHookIdx] = useState<number | null>(null);

  // Handle Tool 1
  const handleEnhance = async () => {
    if (!rawPrompt.trim()) return;
    setIsEnhancing(true);
    setEnhancedResult(null);

    try {
      const res = await fetch('/api/enhance-prompt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: rawPrompt, type: promptCategory })
      });
      if (res.ok) {
        const data = await res.json();
        setEnhancedResult(data.enhancedPrompt);
      } else {
        throw new Error();
      }
    } catch {
      // Offline fallback
      setEnhancedResult(`Act as an Elite Digital Marketing Strategist in India. Task: Craft a high-converting, emotionally resonant Facebook & Instagram campaign for: "${rawPrompt}".
Target Audience: Ambitious youth, students, and freelancers aged 18-30.
Tone: Inspiring, credible, culturally grounded, and energetic.
Include:
1. Irresistible 3-second hook in Bengali + English.
2. Value pillars & why practical offline skills matter in 2026.
3. Clear Call-To-Action (CTA) for free demo session with urgency.

💡 **বাংলা টিপ:** এটি ChatGPT 4o বা Claude এ পেস্ট করে রান করুন।`);
    } finally {
      setIsEnhancing(false);
    }
  };

  // Handle Tool 2: Image Prompt Translator
  const handleTranslateToImagePrompt = () => {
    let result = '';
    if (imageStyle === 'cinematic') {
      result = `Cinematic drone shot of historical ancient Gour & Adina architecture in Malda during dramatic golden hour sunset, atmospheric mist, hyper-detailed terracotta textures, warm volumetric light rays, shot on Hasselblad H6D-100c, 35mm lens, 8k resolution, cinematic depth of field, photorealistic award-winning national geographic style --ar 16:9 --v 6.0`;
    } else if (imageStyle === 'cyberpunk') {
      result = `Futuristic high-tech AI training academy in Kaliakak, Malda at night, glowing neon cyan and purple holographic monitors, students interacting with 3D neural networks, cyberpunk South Asian aesthetic, reflections on wet pavement, octane render, unreal engine 5, 8k --ar 16:9`;
    } else {
      result = `Studio commercial product photography of Malda export-grade mangoes and modern digital workflow, minimalist slate background, rim studio strobe lighting, clean sharp focus, hyper-realistic, 8k --ar 1:1`;
    }
    setTranslatedPrompt(result);
  };

  // Handle Tool 3: Hooks
  const handleGenerateHooks = () => {
    const list = [
      `🔥 "মালদায় বসে সবাই যখন সময় নষ্ট করছে, আপনি প্রতিদিন মাত্র ২০ মিনিট এই ৩টি AI টুল চালিয়ে কী করতে পারেন জানেন?" (কিউরিওসিটি হুক - রিটেনশন স্কোর: ৯৬%)`,
      `⚠️ "ভুল করেও ২০২৬ সালে শুধু বেসিক কম্পিউটার শিখবেন না! এই ১টি AI স্কিল না জানলে ৫ বছর পিছিয়ে পড়বেন..." (লস্ অ্যাভার্সন হুক - রিটেনশন স্কোর: ৯৪%)`,
      `💰 "কোনো ল্যাপটপ বা কোডিং ছাড়াই কীভাবে কালিয়াচকের ছাত্ররা AI দিয়ে ফ্রিল্যান্সিং শুরু করছে — লাইভ প্রুফ দেখুন!" (সোশ্যাল প্রুফ হুক - রিটেনশন স্কোর: ৯৮%)`
    ];
    setHooksList(list);
  };

  return (
    <div id="features-tools" className="mt-12 rounded-2xl bg-[#090d19] border border-cyan-500/30 p-6 sm:p-8 shadow-[0_0_40px_rgba(6,182,212,0.15)] relative">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-xs font-semibold text-cyan-300 mb-2">
            <Wrench className="w-3.5 h-3.5 text-cyan-400" />
            <span>Interactive Feature 3</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
            <span>Live Tools Demo & AI Labs</span>
            <span className="text-xs text-purple-300 bg-purple-950/60 border border-purple-800 px-2 py-0.5 rounded">
              হাতে-কলমে টেস্ট করুন
            </span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            {lang === 'bn'
              ? 'আমাদের কালিয়াচক ল্যাবে যেসকল AI টুলস ব্যবহার করানো হয়, তারই ৩টি লাইভ অনলাইন ডেমো সরাসরি ব্যবহার করুন।'
              : 'Interactive mini-labs simulating real prompts, image formulas, and content hooks used in our classes.'}
          </p>
        </div>

        {/* Tab switchers */}
        <div className="flex items-center bg-slate-900 border border-slate-800 rounded-xl p-1 gap-1">
          <button
            onClick={() => setActiveTab('enhancer')}
            className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
              activeTab === 'enhancer'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            ১. Prompt Enhancer
          </button>
          <button
            onClick={() => setActiveTab('translator')}
            className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
              activeTab === 'translator'
                ? 'bg-purple-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            ২. বাংলা টু ইমেজ AI
          </button>
          <button
            onClick={() => setActiveTab('hooks')}
            className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
              activeTab === 'hooks'
                ? 'bg-cyan-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            ৩. ভাইরাল হুক বিল্ডার
          </button>
        </div>
      </div>

      {/* Tool 1: Prompt Enhancer */}
      {activeTab === 'enhancer' && (
        <div className="mt-6 space-y-4 animate-fadeIn">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2 space-y-3">
              <label className="text-xs font-semibold text-slate-300 block">
                আপনার সাধারণ বাংলা বা ইংরেজি চিন্তা লিখুন:
              </label>
              <textarea
                value={rawPrompt}
                onChange={(e) => setRawPrompt(e.target.value)}
                rows={3}
                className="w-full rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-400 p-3 text-xs sm:text-sm text-white placeholder-slate-500 outline-none"
                placeholder="যেমন: কালিয়াচকের দোকানের জন্য ফেসবুক বিজ্ঞাপন বানাও..."
              />
            </div>

            <div className="space-y-3">
              <label className="text-xs font-semibold text-slate-300 block">
                ক্যাটাগরি বা মোড:
              </label>
              <select
                value={promptCategory}
                onChange={(e) => setPromptCategory(e.target.value)}
                className="w-full rounded-xl bg-slate-950 border border-slate-800 text-xs text-white p-3 outline-none"
              >
                <option value="marketing">সোশ্যাল মিডিয়া ও মার্কেটিং</option>
                <option value="coding">ওয়েব কোডিং ও টেকনিক্যাল</option>
                <option value="freelancing">Fiverr ক্লায়েন্ট প্রপোজাল</option>
                <option value="youtube">ইউটিউব ভিডিও স্ক্রিপ্ট</option>
              </select>

              <button
                onClick={handleEnhance}
                disabled={isEnhancing || !rawPrompt.trim()}
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 shadow-md transition-all cursor-pointer disabled:opacity-50"
              >
                {isEnhancing ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    <span>এনহ্যান্স হচ্ছে...</span>
                  </>
                ) : (
                  <>
                    <Wand2 className="w-3.5 h-3.5" />
                    <span>সুপার প্রম্পট তৈরি করুন</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {enhancedResult && (
            <div className="mt-4 p-4 sm:p-5 rounded-xl bg-slate-950/90 border border-blue-500/40 text-slate-200">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-xs">
                <span className="font-semibold text-cyan-400 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
                  এনহ্যান্সড মাস্টার প্রম্পট রেডি:
                </span>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(enhancedResult);
                    setCopiedEnhanced(true);
                    setTimeout(() => setCopiedEnhanced(false), 2000);
                  }}
                  className="inline-flex items-center gap-1 text-slate-300 hover:text-white cursor-pointer"
                >
                  {copiedEnhanced ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEnhanced ? 'কপি হয়েছে' : 'কপি করুন'}</span>
                </button>
              </div>
              <div className="text-xs font-mono text-cyan-100 whitespace-pre-line leading-relaxed">
                {enhancedResult}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Tool 2: Image Prompt Translator */}
      {activeTab === 'translator' && (
        <div className="mt-6 space-y-4 animate-fadeIn">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2 space-y-3">
              <label className="text-xs font-semibold text-slate-300 block">
                বাংলায় কী ছবি বানাতে চান তা সংক্ষেপে লিখুন:
              </label>
              <textarea
                value={bengaliImageIdea}
                onChange={(e) => setBengaliImageIdea(e.target.value)}
                rows={3}
                className="w-full rounded-xl bg-slate-950 border border-slate-800 focus:border-purple-400 p-3 text-xs sm:text-sm text-white placeholder-slate-500 outline-none"
              />
            </div>

            <div className="space-y-3">
              <label className="text-xs font-semibold text-slate-300 block">
                ছবির আর্ট স্টাইল:
              </label>
              <select
                value={imageStyle}
                onChange={(e) => setImageStyle(e.target.value)}
                className="w-full rounded-xl bg-slate-950 border border-slate-800 text-xs text-white p-3 outline-none"
              >
                <option value="cinematic">Cinematic 4K (সিনেমেটিক ড্রোন/ফটোগ্রাফি)</option>
                <option value="cyberpunk">Cyberpunk Neon (ফিউচারিস্টিক নিয়ন টেক)</option>
                <option value="commercial">Commercial Studio (বিজ্ঞাপন ও প্রোডাক্ট)</option>
              </select>

              <button
                onClick={handleTranslateToImagePrompt}
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-md transition-all cursor-pointer"
              >
                <Languages className="w-3.5 h-3.5" />
                <span>Midjourney প্রম্পট বানান</span>
              </button>
            </div>
          </div>

          {translatedPrompt && (
            <div className="mt-4 p-4 sm:p-5 rounded-xl bg-slate-950/90 border border-purple-500/40 text-slate-200">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-xs">
                <span className="font-semibold text-purple-300 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
                  Midjourney v6 / DALL-E 3 এর জন্য তৈরি ইংরেজি প্রম্পট:
                </span>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(translatedPrompt);
                    setCopiedTrans(true);
                    setTimeout(() => setCopiedTrans(false), 2000);
                  }}
                  className="inline-flex items-center gap-1 text-slate-300 hover:text-white cursor-pointer"
                >
                  {copiedTrans ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedTrans ? 'কপি হয়েছে' : 'কপি করুন'}</span>
                </button>
              </div>
              <div className="text-xs font-mono text-purple-100 whitespace-pre-line leading-relaxed">
                {translatedPrompt}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Tool 3: Hooks */}
      {activeTab === 'hooks' && (
        <div className="mt-6 space-y-4 animate-fadeIn">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              value={hookTopic}
              onChange={(e) => setHookTopic(e.target.value)}
              placeholder="ভিডিওর টপিক লিখুন..."
              className="flex-1 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-400 p-3 text-xs sm:text-sm text-white outline-none"
            />
            <button
              onClick={handleGenerateHooks}
              className="px-6 py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 shadow-md transition-all cursor-pointer shrink-0"
            >
              ভাইরাল হুক জেনারেট করুন
            </button>
          </div>

          {hooksList && (
            <div className="mt-4 space-y-3">
              <div className="text-xs font-semibold text-slate-400">
                ৩টি হাই-রিটেনশন ভিডিও হুক:
              </div>
              {hooksList.map((hk, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-cyan-500/40 flex items-center justify-between gap-3 text-xs text-slate-200 transition-all"
                >
                  <span>{hk}</span>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(hk);
                      setCopiedHookIdx(i);
                      setTimeout(() => setCopiedHookIdx(null), 2000);
                    }}
                    className="shrink-0 p-1.5 rounded bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white cursor-pointer"
                    title="কপি"
                  >
                    {copiedHookIdx === i ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
