import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  Send, 
  CheckCircle, 
  Navigation, 
  Compass, 
  GraduationCap, 
  ChevronDown, 
  ChevronUp, 
  Quote 
} from 'lucide-react';
import { ACADEMY_INFO, TESTIMONIALS_DATA, FAQS_DATA } from '../data/contentData';

interface AboutContactSectionProps {
  onOpenEnroll: () => void;
  lang: 'bn' | 'en';
}

export const AboutContactSection: React.FC<AboutContactSectionProps> = ({ onOpenEnroll, lang }) => {
  const [activeFaq, setActiveFaq] = useState<string | null>(FAQS_DATA[0].id);
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [contactSent, setContactSent] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName.trim() || !contactPhone.trim()) return;
    setContactSent(true);
    setTimeout(() => {
      setContactName('');
      setContactPhone('');
      setContactMessage('');
    }, 4000);
  };

  return (
    <section id="about-contact" className="py-16 md:py-24 relative overflow-hidden bg-[#070b14]">
      {/* Background neon elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-600/10 blur-[130px] -z-10 pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-blue-600/10 blur-[130px] -z-10 pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Part 1: About M Rahman & The Academy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm rounded-2xl p-1 bg-gradient-to-tr from-blue-600 via-purple-600 to-cyan-400 shadow-[0_0_35px_rgba(139,92,246,0.3)]">
              <div className="rounded-[15px] bg-[#0c1222] p-6 text-center space-y-4">
                <div className="relative w-32 h-32 mx-auto rounded-full p-1 bg-gradient-to-r from-cyan-400 to-purple-500 shadow-lg">
                  <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center overflow-hidden border-2 border-[#0c1222]">
                    <div className="w-full h-full bg-gradient-to-tr from-blue-900 to-purple-900 flex items-center justify-center text-4xl font-extrabold text-cyan-300">
                      MR
                    </div>
                  </div>
                  <div className="absolute bottom-1 right-2 w-6 h-6 rounded-full bg-emerald-500 border-2 border-slate-900 flex items-center justify-center">
                    <CheckCircle className="w-3.5 h-3.5 text-white" />
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white">
                    {ACADEMY_INFO.mentorName}
                  </h3>
                  <p className="text-xs font-semibold text-purple-400 mt-0.5">
                    {ACADEMY_INFO.mentorRole}
                  </p>
                  <p className="text-xs text-cyan-300 mt-1 flex items-center justify-center gap-1">
                    <MapPin className="w-3 h-3 text-cyan-400" />
                    <span>Kaliakak, Malda District, West Bengal</span>
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-800 grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="bg-slate-900/80 p-2 rounded-lg border border-slate-800">
                    <div className="font-bold text-cyan-400">৫+ বছর</div>
                    <div className="text-[10px] text-slate-400">অভিজ্ঞতা</div>
                  </div>
                  <div className="bg-slate-900/80 p-2 rounded-lg border border-slate-800">
                    <div className="font-bold text-purple-400">৮৫০+</div>
                    <div className="text-[10px] text-slate-400">শিক্ষার্থী</div>
                  </div>
                  <div className="bg-slate-900/80 p-2 rounded-lg border border-slate-800">
                    <div className="font-bold text-emerald-400">১০০%</div>
                    <div className="text-[10px] text-slate-400">প্র্যাকটিক্যাল</div>
                  </div>
                </div>

                <a
                  href={`https://wa.me/${ACADEMY_INFO.whatsapp}?text=${encodeURIComponent('হ্যালো M Rahman স্যার, আমি কালিয়াচকে আপনার সাথে সরাসরি দেখা করতে চাই।')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold text-emerald-300 bg-emerald-950/50 border border-emerald-800/60 hover:bg-emerald-900/60 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>মেন্টরের সাথে সরাসরি চ্যাট</span>
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-purple-500/30 text-purple-300 text-xs font-semibold">
              <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
              <span>আমাদের রূপরেখা ও মিশন</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              {lang === 'bn' ? (
                <>
                  মালদার তরুণদের{' '}
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                    গ্লোবাল AI বিপ্লবের সাথে
                  </span>{' '}
                  যুক্ত করাই আমাদের লক্ষ্য
                </>
              ) : (
                <>
                  Empowering Youth in Malda with{' '}
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                    World-Class AI Capabilities
                  </span>
                </>
              )}
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {ACADEMY_INFO.mentorBioBn}
            </p>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs sm:text-sm text-slate-300 space-y-2">
              <div className="flex items-center gap-2 text-cyan-300 font-semibold">
                <CheckCircle className="w-4 h-4 text-cyan-400" />
                <span>কালিয়াচকে আধুনিক কম্পিউটার ল্যাব ও ইন্টারঅ্যাক্টিভ ওয়ার্কস্টেশন</span>
              </div>
              <div className="flex items-center gap-2 text-purple-300 font-semibold">
                <CheckCircle className="w-4 h-4 text-purple-400" />
                <span>স্থানীয় শিক্ষার্থীদের জন্য বাংলা ভাষায় সহজ বোধগম্য প্রশিক্ষণ</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-300 font-semibold">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>মার্কেটপ্লেস ও ফ্রিল্যান্সিংয়ে প্রথম অর্ডার নিশ্চিত করার বাস্তব কৌশল</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenEnroll}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all cursor-pointer"
              >
                <span>কালিয়াচক সেন্টারে ফ্রি ডেমো বুক করুন</span>
              </button>
            </div>
          </div>
        </div>

        {/* Part 2: Address, Map Card & Contact Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Address & Direct Details */}
          <div className="lg:col-span-6 rounded-2xl bg-[#0c1222] border border-blue-500/30 p-6 sm:p-8 space-y-6 shadow-xl">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/70 border border-blue-500/30 text-xs font-semibold text-cyan-300 mb-2">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>অফিস ও ক্যাম্পাসের ঠিকানা</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                M Rahman AI Learning Centre
              </h3>
              <p className="text-xs text-purple-300 font-mono mt-0.5">
                Kaliakak, Malda District, West Bengal
              </p>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-3 bg-slate-900/70 p-3.5 rounded-xl border border-slate-800">
                <MapPin className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block text-sm">ঠিকানা (Campus Address):</strong>
                  <span>{ACADEMY_INFO.landmark}</span>
                  <div className="text-slate-400 text-xs mt-0.5">
                    কালিয়াচক চৌরস্তা, মালদা জেলা, পশ্চিমবঙ্গ — পিন: ৭৩২২০১
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-slate-900/70 p-3.5 rounded-xl border border-slate-800">
                <Clock className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block text-sm">ক্লাস ও অফিসের সময়সূচি:</strong>
                  <span>{ACADEMY_INFO.officeHoursBn}</span>
                  <div className="text-slate-400 text-xs mt-0.5">
                    (শুক্রবার ও রবিবার অতিরিক্ত প্র্যাকটিস সেশন)
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-slate-900/70 p-3.5 rounded-xl border border-slate-800">
                <Phone className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block text-sm">সরাসরি ফোন ও হোয়াটসঅ্যাপ:</strong>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="font-mono text-cyan-300 font-bold">{ACADEMY_INFO.phone}</span>
                    <a
                      href={`https://wa.me/${ACADEMY_INFO.whatsapp}?text=${encodeURIComponent('হ্যালো, আমি কালিয়াচক AI ট্রেনিং ক্লাসে ভর্তি হতে চাই।')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-1 rounded bg-emerald-950 border border-emerald-700 text-emerald-300 text-xs font-semibold hover:bg-emerald-900"
                    >
                      WhatsApp চ্যাট
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-slate-900/70 p-3.5 rounded-xl border border-slate-800">
                <Mail className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block text-sm">অফিশিয়াল ইমেইল:</strong>
                  <span className="font-mono text-slate-300">{ACADEMY_INFO.email}</span>
                </div>
              </div>
            </div>

            {/* Landmarks Navigation Guide */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs space-y-2">
              <div className="flex items-center gap-1.5 font-semibold text-cyan-300">
                <Compass className="w-4 h-4 text-cyan-400" />
                <span>কীভাবে আসবেন (Landmark Guide):</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                • কালিয়াচক থানা ও বাসস্ট্যান্ড থেকে মাত্র ৩ মিনিটের হাঁটা দূরত্ব।<br />
                • সুজাপুর থেকে টোটো বা বাসে কালিয়াচক চৌরস্তায় নেমে মেইন রোডেই অবস্থিত।<br />
                • মালদা টাউন স্টেশন থেকে সরাসরি কালিয়াচক গামী বাসে ২৫-৩০ মিনিটে পৌঁছানো যায়।
              </p>
            </div>
          </div>

          {/* Interactive Simulated Map & Quick Message Form */}
          <div className="lg:col-span-6 space-y-6">
            {/* Visual Simulated Map Card of Kaliakak, Malda */}
            <div className="rounded-2xl bg-[#0c1222] border border-purple-500/30 p-5 shadow-xl relative overflow-hidden">
              <div className="flex items-center justify-between mb-3 text-xs">
                <span className="font-semibold text-white flex items-center gap-1.5">
                  <Navigation className="w-4 h-4 text-purple-400" />
                  <span>Google Maps Landmark View — Kaliakak, Malda</span>
                </span>
                <span className="text-[11px] text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                  NH-34 Hub
                </span>
              </div>

              {/* Graphical radar / location display */}
              <div className="relative h-48 sm:h-56 rounded-xl bg-[#080d1a] border border-slate-800 flex items-center justify-center overflow-hidden">
                {/* Background grid */}
                <div 
                  className="absolute inset-0 opacity-20 pointer-events-none"
                  style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, #818cf8 1px, transparent 0)`,
                    backgroundSize: '24px 24px'
                  }}
                />

                {/* Animated Map Pin for M Rahman AI Learning */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-purple-500/20 border-2 border-purple-400 flex items-center justify-center animate-bounce shadow-[0_0_20px_rgba(168,85,247,0.8)]">
                    <MapPin className="w-7 h-7 text-cyan-300" />
                  </div>
                  <div className="mt-2 px-3 py-1 rounded-md bg-slate-900/90 border border-cyan-400/50 text-[11px] font-bold text-white shadow-lg text-center">
                    M Rahman AI Learning
                    <div className="text-[10px] text-cyan-300 font-normal">Kaliakak Chowrasta, Malda</div>
                  </div>
                </div>

                {/* Nearby area markers */}
                <div className="absolute top-4 left-4 text-[10px] text-slate-400 bg-slate-900/80 px-2 py-0.5 rounded border border-slate-800">
                  ← সুজাপুর (Sujapur)
                </div>
                <div className="absolute bottom-4 right-4 text-[10px] text-slate-400 bg-slate-900/80 px-2 py-0.5 rounded border border-slate-800">
                  বৈষ্ণবনগর (Baishnabnagar) →
                </div>
                <div className="absolute top-4 right-4 text-[10px] text-slate-400 bg-slate-900/80 px-2 py-0.5 rounded border border-slate-800">
                  ↑ মালদা টাউন (Malda Town)
                </div>
              </div>
            </div>

            {/* Quick Contact Form */}
            <div className="rounded-2xl bg-[#0c1222] border border-slate-800 p-5 sm:p-6 shadow-xl">
              <h4 className="text-base font-bold text-white mb-1">
                মেসেজ পাঠান অথবা প্রশ্ন করুন:
              </h4>
              <p className="text-xs text-slate-400 mb-4">
                আমাদের কালিয়াচক সাপোর্ট টিম থেকে দ্রুত উত্তর দেওয়া হবে।
              </p>

              {contactSent ? (
                <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-700 text-emerald-200 text-xs text-center space-y-1 animate-fadeIn">
                  <CheckCircle className="w-5 h-5 mx-auto text-emerald-400" />
                  <div className="font-bold">ধন্যবাদ! আপনার মেসেজটি সফলভাবে পৌঁছেছে।</div>
                  <div>আমরা খুব শীঘ্রই আপনার সাথে যোগাযোগ করব।</div>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-3 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      required
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder="আপনার নাম"
                      className="rounded-lg bg-slate-950 border border-slate-800 p-2.5 text-white placeholder-slate-500 focus:border-cyan-400 outline-none"
                    />
                    <input
                      type="tel"
                      required
                      value={contactPhone}
                      onChange={(e) => setContactPhone(e.target.value)}
                      placeholder="মোবাইল নম্বর"
                      className="rounded-lg bg-slate-950 border border-slate-800 p-2.5 text-white placeholder-slate-500 focus:border-purple-400 outline-none"
                    />
                  </div>

                  <textarea
                    rows={2}
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                    placeholder="আপনার প্রশ্ন বা মতামত লিখুন..."
                    className="w-full rounded-lg bg-slate-950 border border-slate-800 p-2.5 text-white placeholder-slate-500 focus:border-cyan-400 outline-none resize-none"
                  />

                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-lg text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 transition-colors cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>মেসেজ পাঠান</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Part 3: Testimonials from Malda Students */}
        <div className="pt-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-xl sm:text-3xl font-extrabold text-white">
              মালদা ও কালিয়াচকের শিক্ষার্থীদের অভিজ্ঞতা
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              আমাদের ল্যাব থেকে প্রশিক্ষণ নেওয়া সফল ছাত্র-ছাত্রীদের বাস্তব প্রতিক্রিয়া।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS_DATA.map((t) => (
              <div
                key={t.id}
                className="rounded-xl bg-slate-900/70 border border-slate-800 p-5 flex flex-col justify-between hover:border-purple-500/40 transition-all shadow-md"
              >
                <div>
                  <Quote className="w-6 h-6 text-purple-400/50 mb-3" />
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                    "{t.textBn}"
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-850 flex items-center gap-3">
                  <img
                    src={t.avatarUrl}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover border border-purple-400/50"
                  />
                  <div>
                    <h5 className="text-xs font-bold text-white">{t.name}</h5>
                    <div className="text-[11px] text-cyan-400">{t.role}</div>
                    <div className="text-[10px] text-slate-400">{t.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Part 4: Frequently Asked Questions */}
        <div className="pt-8 max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-3xl font-extrabold text-white">
              সাধারণ জিজ্ঞাসা (FAQ)
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              ভর্তি ও ক্লাস সম্পর্কিত সাধারণ প্রশ্নের উত্তর
            </p>
          </div>

          <div className="space-y-3">
            {FAQS_DATA.map((faq) => {
              const isOpen = activeFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-xl bg-slate-900/80 border border-slate-800 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : faq.id)}
                    className="w-full p-4 text-left flex items-center justify-between gap-3 text-xs sm:text-sm font-semibold text-white hover:text-cyan-300 transition-colors cursor-pointer"
                  >
                    <span>{faq.questionBn}</span>
                    {isOpen ? <ChevronUp className="w-4 h-4 text-purple-400 shrink-0" /> : <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />}
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-4 text-xs text-slate-300 leading-relaxed border-t border-slate-850 pt-3 animate-fadeIn">
                      {faq.answerBn}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
