import React, { useState } from 'react';
import { Bot, MapPin, Sparkles, MessageCircle, Menu, X, GraduationCap, PhoneCall } from 'lucide-react';
import { ACADEMY_INFO } from '../data/contentData';

interface NavbarProps {
  onOpenEnroll: (courseTitle?: string) => void;
  lang: 'bn' | 'en';
  setLang: (lang: 'bn' | 'en') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnroll, lang, setLang }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-[#070b14]/85 border-b border-slate-800/80 transition-all">
      {/* Top micro banner */}
      <div className="bg-gradient-to-r from-blue-900/60 via-purple-900/50 to-blue-950/60 border-b border-blue-500/20 text-xs py-1.5 px-4 text-center">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 mx-auto sm:mx-0 text-slate-300">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-medium text-blue-200">
              {lang === 'bn' ? 'নতুন ব্যাচ অ্যাডমিশন চলছে' : 'New Batch Admissions Open'}
            </span>
            <span className="text-slate-500">|</span>
            <span className="hidden sm:inline text-slate-400">
              {lang === 'bn' ? 'কালিয়াচক, মালদা সেন্টারে ফ্রি ডেমো ক্লাস বুক করুন' : 'Book Free Demo Class at Kaliakak Campus'}
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-3 text-xs text-slate-300">
            <a 
              href={`https://wa.me/${ACADEMY_INFO.whatsapp}?text=${encodeURIComponent('নমস্কার, আমি M Rahman AI Learning কালিয়াচকের কোর্স সম্পর্কে জানতে আগ্রহী।')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp হেল্পলাইন</span>
            </a>
            <span className="text-slate-600">·</span>
            <span className="flex items-center gap-1 text-slate-400">
              <PhoneCall className="w-3 h-3 text-blue-400" />
              <span>{ACADEMY_INFO.phone}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 p-[1px] shadow-[0_0_15px_rgba(59,130,246,0.5)]">
            <div className="w-full h-full bg-[#070b14] rounded-[11px] flex items-center justify-center">
              <Bot className="w-6 h-6 text-cyan-400 group-hover:scale-110 group-hover:text-purple-300 transition-transform" />
            </div>
            <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-500 border-2 border-[#070b14] rounded-full"></div>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-lg sm:text-xl font-bold tracking-tight bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                M Rahman AI Learning
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-slate-400">
              <MapPin className="w-3 h-3 text-cyan-400" />
              <span>Kaliakak, Malda</span>
              <span className="text-slate-600">•</span>
              <span className="text-purple-400 font-medium">West Bengal</span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300">
          <a href="#categories" className="hover:text-cyan-400 transition-colors py-1">
            {lang === 'bn' ? 'ক্যাটাগরি' : 'Categories'}
          </a>
          <a href="#features-qa" className="hover:text-purple-400 transition-colors py-1 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>{lang === 'bn' ? 'AI প্রশ্নোত্তর' : 'Ask AI'}</span>
          </a>
          <a href="#features-tips" className="hover:text-blue-400 transition-colors py-1">
            {lang === 'bn' ? 'প্রতিদিনের টিপস' : 'Daily Tips'}
          </a>
          <a href="#features-tools" className="hover:text-cyan-400 transition-colors py-1">
            {lang === 'bn' ? 'লাইভ টুলস ডেমো' : 'Live Tools'}
          </a>
          <a href="#courses" className="hover:text-purple-400 transition-colors py-1">
            {lang === 'bn' ? 'কোর্সসমূহ' : 'Courses'}
          </a>
          <a href="#about-contact" className="hover:text-blue-400 transition-colors py-1">
            {lang === 'bn' ? 'ঠিকানা ও যোগাযোগ' : 'About & Contact'}
          </a>
        </nav>

        {/* Action Controls & Language */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Language Switcher */}
          <div className="flex items-center bg-slate-900 border border-slate-800 rounded-lg p-0.5 text-xs">
            <button
              onClick={() => setLang('bn')}
              className={`px-2.5 py-1 rounded transition-colors font-medium ${
                lang === 'bn'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              বাংলা
            </button>
            <button
              onClick={() => setLang('en')}
              className={`px-2.5 py-1 rounded transition-colors font-medium ${
                lang === 'en'
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              EN
            </button>
          </div>

          {/* Direct CTA */}
          <button
            onClick={() => onOpenEnroll()}
            className="relative inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-[0_0_20px_rgba(139,92,246,0.35)] hover:shadow-[0_0_25px_rgba(139,92,246,0.55)] transition-all cursor-pointer"
          >
            <GraduationCap className="w-4 h-4" />
            <span>{lang === 'bn' ? 'ফ্রি ডেমো ক্লাস' : 'Free Demo Class'}</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 lg:hidden">
          <div className="flex items-center bg-slate-900 border border-slate-800 rounded-lg p-0.5 text-xs">
            <button
              onClick={() => setLang('bn')}
              className={`px-2 py-0.5 rounded text-xs ${lang === 'bn' ? 'bg-blue-600 text-white' : 'text-slate-400'}`}
            >
              বাং
            </button>
            <button
              onClick={() => setLang('en')}
              className={`px-2 py-0.5 rounded text-xs ${lang === 'en' ? 'bg-purple-600 text-white' : 'text-slate-400'}`}
            >
              EN
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0f1d] border-b border-slate-800 px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2 text-sm font-medium text-slate-300">
            <a
              href="#categories"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-800 hover:text-cyan-400"
            >
              {lang === 'bn' ? 'ক্যাটাগরি (৬টি বিষয়)' : 'Categories Grid'}
            </a>
            <a
              href="#features-qa"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-800 hover:text-purple-400"
            >
              {lang === 'bn' ? 'AI প্রশ্ন ও উত্তর (লাইভ চ্যাট)' : 'Ask AI Questions'}
            </a>
            <a
              href="#features-tips"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-800 hover:text-blue-400"
            >
              {lang === 'bn' ? 'প্রতিদিনের AI টিপস' : 'Daily AI Tips'}
            </a>
            <a
              href="#features-tools"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-800 hover:text-cyan-400"
            >
              {lang === 'bn' ? 'লাইভ টুলস ডেমো ও প্রম্পট' : 'Live Tools Demo'}
            </a>
            <a
              href="#courses"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-800 hover:text-purple-400"
            >
              {lang === 'bn' ? 'কোর্স ও সিলেবাস' : 'Courses & Fees'}
            </a>
            <a
              href="#about-contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-800 hover:text-blue-400"
            >
              {lang === 'bn' ? 'ঠিকানা ও যোগাযোগ (কালিয়াচক)' : 'About & Contact (Kaliakak)'}
            </a>
          </nav>

          <div className="pt-2 border-t border-slate-800/80 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnroll();
              }}
              className="w-full text-center py-2.5 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-[0_0_15px_rgba(139,92,246,0.4)]"
            >
              {lang === 'bn' ? 'ফ্রি ডেমো ক্লাস বুক করুন' : 'Book Free Demo Class'}
            </button>
            <a
              href={`https://wa.me/${ACADEMY_INFO.whatsapp}?text=${encodeURIComponent('নমস্কার, আমি M Rahman AI Learning কালিয়াচকে ভর্তি হতে চাই।')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-medium text-emerald-400 bg-emerald-950/40 border border-emerald-800/50"
            >
              <MessageCircle className="w-4 h-4" />
              <span>হোয়াটসঅ্যাপে চ্যাট করুন</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
