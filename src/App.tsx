import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CategoriesGrid } from './components/CategoriesGrid';
import { FeaturesSection } from './components/FeaturesSection';
import { CoursesSection } from './components/CoursesSection';
import { AboutContactSection } from './components/AboutContactSection';
import { Footer } from './components/Footer';
import { EnrollmentModal } from './components/EnrollmentModal';
import { MessageCircle, Sparkles, MapPin } from 'lucide-react';
import { ACADEMY_INFO } from './data/contentData';

export default function App() {
  const [lang, setLang] = useState<'bn' | 'en'>('bn');
  const [enrollModalOpen, setEnrollModalOpen] = useState(false);
  const [enrollCourseTitle, setEnrollCourseTitle] = useState<string | undefined>(undefined);
  const [qaPromptPrefill, setQaPromptPrefill] = useState<string>('');

  const handleOpenEnroll = (courseTitle?: string) => {
    setEnrollCourseTitle(courseTitle);
    setEnrollModalOpen(true);
  };

  const handleSelectAskAi = (prompt: string) => {
    setQaPromptPrefill(prompt);
    const qaElement = document.getElementById('features-qa');
    if (qaElement) {
      qaElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 flex flex-col font-sans selection:bg-purple-500/30 selection:text-purple-200">
      {/* Navigation */}
      <Navbar
        onOpenEnroll={handleOpenEnroll}
        lang={lang}
        setLang={setLang}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onOpenEnroll={() => handleOpenEnroll('ফ্রি ডেমো ক্লাস')}
          lang={lang}
        />

        {/* 2. Categories Grid (6 Cards) */}
        <CategoriesGrid
          onSelectAskAi={handleSelectAskAi}
          onOpenEnroll={handleOpenEnroll}
          lang={lang}
        />

        {/* 3. Features: Questions & Answer with AI, Daily AI Tips, Live Tools Demo */}
        <FeaturesSection
          initialPrompt={qaPromptPrefill}
          lang={lang}
        />

        {/* 4. Courses Section */}
        <CoursesSection
          onOpenEnroll={handleOpenEnroll}
          lang={lang}
        />

        {/* 5. About & Contact - Kaliakak, Malda */}
        <AboutContactSection
          onOpenEnroll={() => handleOpenEnroll('কালিয়াচক ল্যাব ভিজিট')}
          lang={lang}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Course Enrollment & Demo Class Modal */}
      <EnrollmentModal
        isOpen={enrollModalOpen}
        onClose={() => setEnrollModalOpen(false)}
        defaultCourseTitle={enrollCourseTitle}
        lang={lang}
      />

      {/* Persistent Floating Quick Buttons (WhatsApp + Free Demo) */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
        <a
          href={`https://wa.me/${ACADEMY_INFO.whatsapp}?text=${encodeURIComponent(
            'নমস্কার M Rahman স্যার, আমি কালিয়াচক AI ট্রেনিং সম্পর্কে জানতে মেসেজ করেছি।'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.5)] transition-all cursor-pointer"
          title="WhatsApp এ সরাসরি কথা বলুন"
        >
          <MessageCircle className="w-5 h-5 fill-white" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap text-xs font-bold">
            WhatsApp হেল্পলাইন
          </span>
        </a>

        <button
          onClick={() => handleOpenEnroll('কুইক ডেমো সেশন')}
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white text-xs font-bold shadow-[0_0_25px_rgba(139,92,246,0.6)] hover:scale-105 transition-all cursor-pointer border border-purple-400/40"
        >
          <Sparkles className="w-4 h-4 text-cyan-300" />
          <span className="hidden sm:inline">ফ্রি ডেমো ক্লাস</span>
          <span className="sm:hidden">ডেমো ক্লাস</span>
        </button>
      </div>
    </div>
  );
}
