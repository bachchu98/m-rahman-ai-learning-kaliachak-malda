import React from 'react';
import { X, CheckCircle, Clock, Calendar, Users, Award, ArrowRight } from 'lucide-react';
import { Course } from '../types';

interface CourseModalProps {
  course: Course | null;
  onClose: () => void;
  onOpenEnroll: (courseTitle: string) => void;
}

export const CourseModal: React.FC<CourseModalProps> = ({ course, onClose, onOpenEnroll }) => {
  if (!course) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0c1222] border border-slate-750 shadow-[0_0_50px_rgba(139,92,246,0.3)] text-slate-100 p-6 sm:p-8"
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
            <span className="text-xs font-semibold text-purple-400 uppercase tracking-wider">
              {course.badge}
            </span>
            <span className="text-slate-600">·</span>
            <span className="text-xs text-cyan-400">{course.level}</span>
          </div>

          <h3 className="text-2xl font-bold text-white">
            {course.titleBn}
          </h3>
          <p className="text-xs font-mono text-slate-400 mt-1">
            {course.titleEn}
          </p>
        </div>

        {/* Meta summary badges */}
        <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          <div className="bg-slate-900 border border-slate-800 rounded-lg p-2.5 text-center">
            <Clock className="w-4 h-4 text-cyan-400 mx-auto mb-1" />
            <div className="text-[11px] text-slate-400">সময়কাল</div>
            <div className="text-xs font-semibold text-white">{course.duration}</div>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-lg p-2.5 text-center">
            <Calendar className="w-4 h-4 text-purple-400 mx-auto mb-1" />
            <div className="text-[11px] text-slate-400">ক্লাস মোড</div>
            <div className="text-xs font-semibold text-white">অফলাইন + অনলাইন</div>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-lg p-2.5 text-center">
            <Users className="w-4 h-4 text-blue-400 mx-auto mb-1" />
            <div className="text-[11px] text-slate-400">ব্যাচ সাইজ</div>
            <div className="text-xs font-semibold text-white">সীমিত ১৫ জন/ব্যাচ</div>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-lg p-2.5 text-center">
            <Award className="w-4 h-4 text-emerald-400 mx-auto mb-1" />
            <div className="text-[11px] text-slate-400">সার্টিফিকেট</div>
            <div className="text-xs font-semibold text-white">ভেরিফায়েড</div>
          </div>
        </div>

        {/* Description */}
        <p className="mt-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-b border-slate-800 pb-5">
          {course.description}
        </p>

        {/* Weekly Curriculum Breakdown */}
        <div className="mt-6">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
            সপ্তাহভিত্তিক বিস্তারিত সিলেবাস:
          </h4>
          <div className="space-y-3">
            {course.curriculum.map((week, idx) => (
              <div key={idx} className="rounded-xl bg-slate-900/80 border border-slate-800 p-3.5">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800">
                      {week.week}
                    </span>
                    <span className="text-xs font-semibold text-white">
                      {week.topicBn}
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-500 hidden sm:inline">
                    {week.topicEn}
                  </span>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pl-1">
                  {week.details.map((item, dIdx) => (
                    <li key={dIdx} className="text-xs text-slate-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Course Perks */}
        <div className="mt-6">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2.5">
            কোর্সের সাথে যা যা পাচ্ছেন:
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {course.perks.map((perk, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-slate-300 bg-slate-900/50 p-2 rounded-lg border border-slate-800">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{perk}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Pricing & CTA */}
        <div className="mt-8 pt-5 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <div className="text-xs text-slate-400">এককালীন স্পেশাল কোর্স ফি:</div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-black text-white">₹{course.feeInr.toLocaleString('en-IN')}</span>
              <span className="text-xs text-slate-500 line-through">₹{course.originalFeeInr.toLocaleString('en-IN')}</span>
              <span className="text-xs font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded">৫০% স্কলারশিপ</span>
            </div>
          </div>

          <button
            onClick={() => {
              onClose();
              onOpenEnroll(course.titleBn);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all cursor-pointer"
          >
            <span>এই কোর্সে ফ্রি ডেমো বুক করুন</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
