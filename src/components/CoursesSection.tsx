import React, { useState } from 'react';
import { GraduationCap, Clock, Award, Star, ArrowRight, Check, BookOpen } from 'lucide-react';
import { COURSES_DATA } from '../data/contentData';
import { Course } from '../types';
import { CourseModal } from './CourseModal';

interface CoursesSectionProps {
  onOpenEnroll: (courseTitle?: string) => void;
  lang: 'bn' | 'en';
}

export const CoursesSection: React.FC<CoursesSectionProps> = ({ onOpenEnroll, lang }) => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  return (
    <section id="courses" className="py-16 md:py-24 relative">
      {/* Background neon orb */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-purple-600/15 blur-[140px] -z-10 pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-600/15 blur-[140px] -z-10 pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-blue-500/30 text-blue-300 text-xs font-semibold mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
            <span>M Rahman AI Academy Admissions</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            {lang === 'bn' ? (
              <>
                প্র্যাকটিক্যাল{' '}
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-300 bg-clip-text text-transparent">
                  কোর্সসমূহ ও এডমিশন
                </span>
              </>
            ) : (
              <>
                Featured AI Courses &{' '}
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-300 bg-clip-text text-transparent">
                  Kaliakak Lab Batches
                </span>
              </>
            )}
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-300">
            {lang === 'bn'
              ? 'কালিয়াচক সেন্টারে কম্পিউটার ল্যাব প্র্যাকটিস, লাইভ প্রজেক্ট ও সার্টিফিকেট সহ আধুনিক সব কোর্স।'
              : 'Affordable, high-impact career courses with offline computer lab workstations in Kaliakak, Malda.'}
          </p>
        </div>

        {/* Courses Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {COURSES_DATA.map((course) => (
            <div
              key={course.id}
              className="relative rounded-2xl bg-gradient-to-b from-[#0c1326] to-[#070b14] border border-slate-800 hover:border-purple-500/50 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(59,130,246,0.25)] group"
            >
              <div>
                {/* Header row */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-cyan-400 bg-cyan-950/70 border border-cyan-800/80 px-2.5 py-1 rounded-md">
                    {course.badge}
                  </span>

                  <div className="flex items-center gap-1.5 text-xs text-amber-300 bg-amber-950/40 px-2 py-0.5 rounded border border-amber-800/40">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{course.rating}</span>
                    <span className="text-slate-400">({course.studentsCount}+ স্টুডেন্ট)</span>
                  </div>
                </div>

                {/* Course Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {lang === 'bn' ? course.titleBn : course.titleEn}
                </h3>
                <p className="text-xs font-mono text-purple-300/80 mt-1">
                  {course.titleEn}
                </p>

                {/* Description */}
                <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {course.description}
                </p>

                {/* Meta details */}
                <div className="mt-5 grid grid-cols-2 gap-2 text-xs text-slate-400 border-t border-b border-slate-800/80 py-3">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-purple-400" />
                    <span>লেভেল: {course.level}</span>
                  </div>
                </div>

                {/* Key takeaways */}
                <div className="mt-4 space-y-1.5">
                  {course.perks.slice(0, 3).map((perk, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{perk}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing and Action Buttons */}
              <div className="mt-8 pt-5 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="text-[11px] text-slate-400">কোর্স ফি (এককালীন):</div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-black text-white">₹{course.feeInr.toLocaleString('en-IN')}</span>
                    <span className="text-xs text-slate-500 line-through">₹{course.originalFeeInr.toLocaleString('en-IN')}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    onClick={() => setSelectedCourse(course)}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1 px-3 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 transition-colors cursor-pointer"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>সিলেবাস</span>
                  </button>

                  <button
                    onClick={() => onOpenEnroll(course.titleBn)}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-[0_0_15px_rgba(59,130,246,0.35)] transition-all cursor-pointer"
                  >
                    <span>ডেমো বুক করুন</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lab Guarantee Box */}
        <div className="mt-14 max-w-4xl mx-auto rounded-2xl bg-gradient-to-r from-blue-950/30 via-purple-950/30 to-slate-900 border border-purple-500/30 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-bold text-white">
              কালিয়াচক ও মালদার শিক্ষার্থীদের জন্য ১০০% মানি-ব্যাক সন্তুষ্টি
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              প্রথম ২টি ক্লাসের পর যদি আপনি সন্তুষ্ট না হন, তবে কোনো প্রশ্ন ছাড়াই সম্পূর্ণ ফি ফেরতযোগ্য।
            </p>
          </div>
          <button
            onClick={() => onOpenEnroll('স্কলারশিপ ও ভর্তি পরামর্শ')}
            className="shrink-0 px-6 py-3 rounded-xl text-xs font-bold text-white bg-cyan-600 hover:bg-cyan-500 transition-colors cursor-pointer shadow-lg"
          >
            এডমিশন হেল্পডেস্ক
          </button>
        </div>
      </div>

      {/* Curriculum Modal */}
      <CourseModal
        course={selectedCourse}
        onClose={() => setSelectedCourse(null)}
        onOpenEnroll={onOpenEnroll}
      />
    </section>
  );
};
