import React from 'react';
import { Bot, MapPin, Phone, Mail, MessageCircle, Heart, ArrowUp } from 'lucide-react';
import { ACADEMY_INFO, CATEGORIES_DATA } from '../data/contentData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05080f] border-t border-slate-900 text-slate-400 text-xs pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-10 border-b border-slate-900">
          {/* Col 1 & 2: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-md">
                <Bot className="w-5 h-5 text-cyan-300" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white">
                  M Rahman AI Learning
                </h4>
                <div className="text-[11px] text-cyan-400 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-cyan-400" />
                  <span>Kaliakak, Malda District, West Bengal</span>
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed pr-4">
              কালিয়াচক ও মালদার তরুণ শিক্ষার্থীদের কৃত্রিম বুদ্ধিমত্তা (AI), ওয়েব ডিজাইন, আধুনিক ভিডিও এডিটিং ও গ্লোবাল ফ্রিল্যান্সিংয়ে স্বয়ংসম্পূর্ণ করার আধুনিকতম টেকনোলজি অ্যাকাডেমি।
            </p>

            <div className="space-y-1.5 text-slate-300">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-blue-400" />
                <span>{ACADEMY_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-purple-400" />
                <span>{ACADEMY_INFO.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>{ACADEMY_INFO.landmark}</span>
              </div>
            </div>
          </div>

          {/* Col 3: Courses & Categories */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              ক্যাটাগরিসমূহ (৬টি ট্র্যাক)
            </h5>
            <ul className="space-y-2">
              {CATEGORIES_DATA.map((cat) => (
                <li key={cat.id}>
                  <a href="#categories" className="hover:text-cyan-300 transition-colors">
                    {cat.titleBn.split('(')[0].trim()}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Interactive Features */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              ইন্টারেক্টিভ ল্যাব
            </h5>
            <ul className="space-y-2">
              <li>
                <a href="#features-qa" className="hover:text-purple-300 transition-colors">
                  AI প্রশ্ন ও উত্তর (Live Q&A)
                </a>
              </li>
              <li>
                <a href="#features-tips" className="hover:text-purple-300 transition-colors">
                  প্রতিদিনের AI টিপস ও ট্রিকস
                </a>
              </li>
              <li>
                <a href="#features-tools" className="hover:text-purple-300 transition-colors">
                  Prompt Enhancer ল্যাব
                </a>
              </li>
              <li>
                <a href="#features-tools" className="hover:text-purple-300 transition-colors">
                  বাংলা টু ইমেজ AI প্রম্পট
                </a>
              </li>
              <li>
                <a href="#features-tools" className="hover:text-purple-300 transition-colors">
                  ভাইরাল রিলস হুক জেনারেটর
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-purple-300 transition-colors">
                  কোর্স ফি ও স্কলারশিপ
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Location & WhatsApp Direct */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              সরাসরি যোগাযোগ
            </h5>
            <p className="text-xs text-slate-400 mb-3">
              কালিয়াচক সেন্টারে যে কোনো দিন সরাসরি আসুন অথবা হোয়াটসঅ্যাপে চ্যাট করুন।
            </p>
            <a
              href={`https://wa.me/${ACADEMY_INFO.whatsapp}?text=${encodeURIComponent('হ্যালো M Rahman AI Learning, আমি বিস্তারিত জানতে চাই।')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp চ্যাট</span>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div className="flex items-center gap-1">
            <span>© 2026 M Rahman AI Learning - Kaliakak, Malda. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-400">
              Made for the ambitious youth of Malda & West Bengal
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
