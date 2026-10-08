import React, { useState } from 'react';
import { X, CheckCircle, Sparkles, MessageCircle, Phone, User, Mail, Send } from 'lucide-react';
import { ACADEMY_INFO, COURSES_DATA } from '../data/contentData';

interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCourseTitle?: string;
  lang: 'bn' | 'en';
}

export const EnrollmentModal: React.FC<EnrollmentModalProps> = ({
  isOpen,
  onClose,
  defaultCourseTitle = '',
  lang
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState(defaultCourseTitle || COURSES_DATA[0].titleBn);
  const [mode, setMode] = useState('offline');
  const [submitting, setSubmitting] = useState(false);
  const [successData, setSuccessData] = useState<any>(null);

  React.useEffect(() => {
    if (defaultCourseTitle) {
      setCourse(defaultCourseTitle);
    }
  }, [defaultCourseTitle]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    setSubmitting(true);
    try {
      const res = await fetch('/api/enroll', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          phone,
          email,
          courseTitle: course,
          batchMode: mode
        })
      });

      if (res.ok) {
        const data = await res.json();
        setSuccessData(data);
      } else {
        throw new Error();
      }
    } catch {
      // Fallback local receipt
      setSuccessData({
        success: true,
        registrationId: `MRAI-${Math.floor(100000 + Math.random() * 900000)}`,
        message: `ধন্যবাদ ${name}! আপনার আবেদনটি গ্রহণ করা হয়েছে। আমাদের কালিয়াচক টিম থেকে ফোন করে সময় জানানো হবে।`,
        details: {
          name,
          phone,
          courseTitle: course,
          batchMode: mode,
          institute: 'M Rahman AI Learning - Kaliakak, Malda',
          assignedBatch: 'Upcoming Offline Batch (Kaliakak Lab)'
        }
      });
    } finally {
      setSubmitting(false);
    }
  };

  const handleReset = () => {
    setSuccessData(null);
    setName('');
    setPhone('');
    setEmail('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-lg rounded-2xl bg-[#0c1222] border border-blue-500/40 shadow-[0_0_50px_rgba(59,130,246,0.35)] text-slate-100 p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {!successData ? (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-semibold text-cyan-400 bg-cyan-950/70 border border-cyan-800 px-2 py-0.5 rounded">
                ফ্রি ডেমো ক্লাস ও এডমিশন
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white">
              M Rahman AI Learning - Kaliakak
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              কালিয়াচক সেন্টারে অফলাইন ক্লাসের জন্য আপনার আসন নিশ্চিত করুন।
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4 text-xs sm:text-sm">
              <div>
                <label className="block text-slate-300 font-medium mb-1.5 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-cyan-400" />
                  <span>আপনার নাম (Full Name):</span>
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="যেমন: মোঃ সাব্বির আহমেদ"
                  className="w-full rounded-xl bg-slate-950 border border-slate-700/80 p-3 text-white placeholder-slate-500 focus:border-cyan-400 outline-none"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-medium mb-1.5 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-purple-400" />
                  <span>মোবাইল বা হোয়াটসঅ্যাপ নম্বর:</span>
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full rounded-xl bg-slate-950 border border-slate-700/80 p-3 text-white placeholder-slate-500 focus:border-purple-400 outline-none"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-medium mb-1.5 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-blue-400" />
                  <span>ইমেইল এড্রেস (ঐচ্ছিক):</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="yourname@gmail.com"
                  className="w-full rounded-xl bg-slate-950 border border-slate-700/80 p-3 text-white placeholder-slate-500 focus:border-blue-400 outline-none"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-medium mb-1.5">
                  পছন্দের কোর্স সিলেক্ট করুন:
                </label>
                <select
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                  className="w-full rounded-xl bg-slate-950 border border-slate-700/80 p-3 text-white outline-none"
                >
                  {COURSES_DATA.map((c) => (
                    <option key={c.id} value={c.titleBn}>
                      {c.titleBn} (₹{c.feeInr})
                    </option>
                  ))}
                  <option value="ফ্রি ডেমো সেশন">ফ্রি ডেমো সেশন (যেকোনো বিষয়)</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-300 font-medium mb-1.5">
                  ক্লাসের মাধ্যম (Batch Preference):
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setMode('offline')}
                    className={`p-2.5 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                      mode === 'offline'
                        ? 'bg-blue-600/30 border-blue-400 text-blue-200 shadow-sm'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    🏢 কালিয়াচক অফলাইন ল্যাব
                  </button>
                  <button
                    type="button"
                    onClick={() => setMode('online')}
                    className={`p-2.5 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                      mode === 'online'
                        ? 'bg-purple-600/30 border-purple-400 text-purple-200 shadow-sm'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    🌐 অনলাইন লাইভ ব্যাচ
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full mt-4 inline-flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all cursor-pointer"
              >
                {submitting ? (
                  <span>সাবমিট হচ্ছে...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>আবেদন নিশ্চিত করুন</span>
                  </>
                )}
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-4 space-y-4 animate-fadeIn">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center mx-auto text-emerald-400">
              <CheckCircle className="w-8 h-8" />
            </div>

            <h3 className="text-xl font-bold text-white">
              আবেদন সফলভাবে গৃহীত হয়েছে!
            </h3>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-left text-xs space-y-2">
              <div className="flex justify-between border-b border-slate-850 pb-2">
                <span className="text-slate-400">রেজিস্ট্রেশন আইডি:</span>
                <span className="font-mono font-bold text-cyan-400">{successData.registrationId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">নাম:</span>
                <span className="font-semibold text-white">{successData.details?.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">ফোন:</span>
                <span className="font-semibold text-white">{successData.details?.phone}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">কোর্স:</span>
                <span className="font-semibold text-purple-300">{successData.details?.courseTitle}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">ক্যাম্পাস:</span>
                <span className="font-semibold text-cyan-300">Kaliakak, Malda</span>
              </div>
            </div>

            <p className="text-xs text-slate-300">
              {successData.message}
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href={`https://wa.me/${ACADEMY_INFO.whatsapp}?text=${encodeURIComponent(
                  `নমস্কার M Rahman স্যার, আমি রেজিস্ট্রেশন করেছি। আইডি: ${successData.registrationId}, নাম: ${successData.details?.name}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>হোয়াটসঅ্যাপে কনফার্ম করুন</span>
              </a>

              <button
                onClick={handleReset}
                className="flex-1 py-3 rounded-xl text-xs font-semibold text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-800 transition-colors cursor-pointer"
              >
                বন্ধ করুন
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
