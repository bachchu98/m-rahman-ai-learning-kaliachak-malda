import { Category, Course, DailyTip, Testimonial, FaqItem } from '../types';

export const ACADEMY_INFO = {
  name: "M Rahman AI Learning",
  taglineBn: "AI শিখুন, ভবিষ্যৎ গড়ুন",
  taglineEn: "Master Artificial Intelligence, Build Your Future",
  location: "Kaliakak, Malda District, West Bengal, India - 732201",
  landmark: "Chowrasta Commercial Complex, Near NH-34, Kaliakak, Malda",
  phone: "+91 9851374847",
  whatsapp: "+91 9851374847",
  email: "mustafir9@gmail.com ",
  officeHoursBn: "সোম - শনি: সকাল ৯:০০ - রাত ৮:০০ (রবিবার স্পেশাল প্র্যাকটিস ব্যাচ)",
  officeHoursEn: "Mon - Sat: 9:00 AM - 8:00 PM (Sunday Special Practice Batch)",
  mentorName: "M Rahman",
  mentorRole: "AI Technologist & Lead Educator",
  mentorBioBn: "মালদা ও উত্তরবঙ্গের তরুণদের জন্য বিশ্বমানের টেকনোলজি ও আর্টিফিশিয়াল ইন্টেলিজেন্স শিক্ষায় অগ্রগামী শিক্ষক। ৫ বছরের অভিজ্ঞতা সম্পন্ন সফটওয়্যার ও AI বিশেষজ্ঞ যিনি স্থানীয় শিক্ষার্থীদের ফ্রিল্যান্সিং ও টেক ক্যারিয়ারে প্রতিষ্ঠিত করছেন।",
  mentorBioEn: "Pioneer in cutting-edge AI and practical tech education for the youth of Malda and North Bengal. Bringing Silicon-Valley grade tools to Kaliakak classroom.",
};

export const CATEGORIES_DATA: Category[] = [
  {
    id: "ai-tools-knowledge",
    titleBn: "AI Tools Knowledge (AI টুলস পরিচিতি)",
    titleEn: "AI Tools Knowledge & Landscape",
    descriptionBn: "বর্তমান বিশ্বের শীর্ষস্থানীয় ২০০+ কৃত্রিম বুদ্ধিমত্তা টুলসের পরিচিতি, কোনটা কখন এবং কীভাবে কাজ করে তার পূর্ণাঙ্গ নির্দেশিকা।",
    descriptionEn: "Complete roadmap to 200+ industry-standard AI engines, LLMs, multimodal vision models, and productivity architectures.",
    iconName: "Cpu",
    badge: "Foundation",
    gradient: "from-blue-600/20 via-cyan-500/10 to-indigo-900/30",
    neonBorder: "border-blue-500/30 hover:border-blue-400 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]",
    tools: ["OpenAI ecosystem", "Google Gemini 2.5/3", "Anthropic Claude 3.7", "Perplexity Pro", "DeepSeek", "Hugging Face"],
    keyTopics: [
      "Large Language Models (LLM) কীভাবে চিন্তা করে",
      "ফ্রি ভার্সেস পেইড টুলসের পার্থক্য ও সঠিক নির্বাচন",
      "টোকেন, টেম্পারেচার এবং কনটেক্সট উইন্ডো বোঝা",
      "প্রতিদিনের পড়াশোনা ও অফিসে AI টুলসের প্রয়োগ"
    ],
    projectIdea: "আপনার নিজের প্রয়োজন অনুযায়ী একটি কাস্টম AI টুলস ডিরেক্টরি ও ওয়ার্কফ্লো শিট তৈরি করা।",
    samplePrompt: "Explain the architectural difference between Gemini 2.5 Flash and Claude 3.7 Sonnet in simple Bengali with practical use cases for a college student in Malda."
  },
  {
    id: "use-of-ai-tools",
    titleBn: "Use of AI Tools (ChatGPT, Gemini etc)",
    titleEn: "Mastering ChatGPT, Gemini & LLMs",
    descriptionBn: "ChatGPT ও Google Gemini-কে আপনার বিশ্বস্ত পার্সোনাল অ্যাসিস্ট্যান্ট হিসেবে ব্যবহার করার অ্যাডভান্সড প্রম্পট ইঞ্জিনিয়ারিং কৌশল।",
    descriptionEn: "Master enterprise prompt engineering, reasoning chains, structured output formats, and autonomous agent workflows.",
    iconName: "Sparkles",
    badge: "Most Popular",
    gradient: "from-purple-600/20 via-fuchsia-500/10 to-slate-900/40",
    neonBorder: "border-purple-500/30 hover:border-purple-400 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]",
    tools: ["ChatGPT-4o", "Google Gemini 3.8", "Claude 3.7 Sonnet", "Microsoft Copilot", "NotebookLM"],
    keyTopics: [
      "অ্যাডভান্সড প্রম্পট ফ্রেমওয়ার্ক (Role, Context, Goal, Output)",
      "Gemini দিয়ে রিয়েল-টাইম রিসার্চ ও ডেটা এনালাইসিস",
      "পিডিএফ, এক্সেল ও বড় ডকুমেন্টের ৫ সেকেন্ডে নিখুঁত সামারি",
      "ইমেইল, অফিশিয়াল লেটার ও অ্যাসাইনমেন্ট লেখা"
    ],
    projectIdea: "একটি পূর্ণাঙ্গ বিজনেস প্ল্যান ও সোশ্যাল মিডিয়া ক্যালেন্ডার তৈরি ChatGPT ও Gemini দিয়ে ৩০ মিনিটে।",
    samplePrompt: "Act as an experienced Indian tax & business advisor. Outline a step-by-step e-commerce launch checklist for Kaliakak mango merchants."
  },
  {
    id: "web-design-with-ai",
    titleBn: "Web Design with AI (ওয়েব ডিজাইন)",
    titleEn: "Web Design & Frontend with AI",
    descriptionBn: "এক লাইন জটিল কোডিং না শিখেও AI ব্যবহার করে সম্পূর্ণ আধুনিক, ফাস্ট ও রেসপন্সিভ ওয়েবসাইট তৈরির জাদুকরী পদ্ধতি।",
    descriptionEn: "Build high-converting responsive websites, landing pages, and web apps using v0, Cursor, Tailwind CSS, and AI generators.",
    iconName: "Layout",
    badge: "High Demand",
    gradient: "from-cyan-600/20 via-blue-500/10 to-emerald-900/30",
    neonBorder: "border-cyan-500/30 hover:border-cyan-400 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]",
    tools: ["v0.dev by Vercel", "Cursor AI", "Tailwind CSS", "Lovable", "Figma AI", "Bolt.new"],
    keyTopics: [
      "মনের মতো প্রম্পট দিয়ে রিয়েল রিঅ্যাক্ট ও এইচটিএমএল কোড জেনারেশন",
      "লোকাল বিজনেসের জন্য মোবাইল-রেডি পোর্টফোলিও ও ল্যান্ডিং পেজ",
      "AI দিয়ে কালার প্যালেট, ব্যানার ও UI এলিমেন্ট সাজানো",
      "ফ্রি হোস্টিংয়ে নিজের ওয়েবসাইট লাইভ করার সহজ টেকনিক"
    ],
    projectIdea: "কালিয়াচকের যেকোনো দোকানের জন্য একটি সম্পূর্ণ লাইভ প্রোডাক্ট ক্যাটালগ ও অনলাইন অর্ডার ওয়েবসাইট তৈরি।",
    samplePrompt: "Create a modern dark-mode responsive hero section for a Kaliakak tech coaching center with Tailwind CSS, neon purple accents, and a booking modal."
  },
  {
    id: "video-editing-with-ai",
    titleBn: "Video Editing with AI (AI ভিডিও ও রিলস)",
    titleEn: "AI Video & Viral Reels Production",
    descriptionBn: "ক্যামেরার সামনে না এসেও AI দিয়ে ভাইরাল ইউটিউব ভিডিও, ফেসবুক রিলস এবং সিনেমেটিক কন্টেন্ট তৈরির সম্পূর্ণ কোর্স।",
    descriptionEn: "Produce viral short-form reels, faceless YouTube channels, AI avatars, automated subtitles, and cinematic clips.",
    iconName: "Video",
    badge: "Trending",
    gradient: "from-pink-600/20 via-rose-500/10 to-purple-900/30",
    neonBorder: "border-pink-500/30 hover:border-pink-400 group-hover:shadow-[0_0_20px_rgba(244,63,94,0.3)]",
    tools: ["Runway Gen-3", "Pika Labs", "CapCut AI", "ElevenLabs Voice", "HeyGen", "Kling AI"],
    keyTopics: [
      "ফেসলেস (Faceless) ইউটিউব চ্যানেলের ভিডিও আইডিয়া ও স্ক্রিপ্টিং",
      "ElevenLabs দিয়ে প্রাকৃতিক বাংলা ও ইংরেজি AI ভয়েসওভার",
      "এক ক্লিকে অটোমেটিক ডায়নামিক ক্যাপশন ও মোশন ইফেক্ট",
      "টেক্সট টু ভিডিও ও ইমেজ টু ভিডিও এনিমেশন কৌশল"
    ],
    projectIdea: "ঐতিহাসিক মালদা জেলা ও গৌড়ের প্রাচীন ইতিহাস নিয়ে একটি সম্পূর্ণ ১ মিনিটের থ্রিডি এআই সিনেমেটিক রিল তৈরি।",
    samplePrompt: "Generate a cinematic 4K video prompt: Ancient Gour historical ruins in Malda at golden hour, hyper-realistic, dramatic lighting, 24fps filmic."
  },
  {
    id: "translation-language-tools",
    titleBn: "Translation & Language Tools (অনুবাদ ও ভাষা)",
    titleEn: "AI Translation & Language Mastery",
    descriptionBn: "বাংলা থেকে যেকোনো ভাষায় এবং বিদেশি ভাষা থেকে খাঁটি বাংলায় নিখুঁত অনুবাদ, ব্যাকরণ সংশোধন ও স্পোকেন ইংলিশ ট্রেনিং।",
    descriptionEn: "Accurate multi-lingual translation, Bengali dialect refinement, English fluency tutoring, and corporate document drafting.",
    iconName: "Languages",
    badge: "Essential",
    gradient: "from-emerald-600/20 via-teal-500/10 to-blue-900/30",
    neonBorder: "border-emerald-500/30 hover:border-emerald-400 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]",
    tools: ["DeepL Translate", "Google Translate AI", "ChatGPT Multilingual", "Grammarly AI", "Whisper Audio Transcribe"],
    keyTopics: [
      "আঞ্চলিক বাংলা ভাষার সূক্ষ্ম ভাবার্থ অক্ষুণ্ণ রেখে ইংরেজি অনুবাদ",
      "আন্তর্জাতিক বায়ারদের জন্য প্রফেশনাল প্রপোজাল ও কভার লেটার",
      "অডিও রেকর্ডিং থেকে নিমেষে টেক্সট ও সাবটাইটেল তৈরি",
      "AI টিউটরের সাথে প্রতিদিন ঘরে বসে স্পোকেন ইংলিশ অনুশীলন"
    ],
    projectIdea: "একটি বাংলা অডিও ইন্টারভিউ থেকে অটোমেটিক ইংরেজি আর্টিকেল ও সারাংশ তৈরি করা।",
    samplePrompt: "Translate this Bengali business inquiry into professional corporate English with polite executive tone for an export client in Dubai."
  },
  {
    id: "content-creator-tools",
    titleBn: "Content Creator Tools (কন্টেন্ট ক্রিয়েশন)",
    titleEn: "Content Creator & Freelancing Suite",
    descriptionBn: "ইউটিউবার, সোশ্যাল মিডিয়া ইনফ্লুয়েন্সার ও ফ্রিল্যান্সারদের জন্য থাম্বনেইল, গ্রাফিক্স, কপিরাইটিং ও মার্কেটিং টুলস।",
    descriptionEn: "Complete AI toolkit for YouTubers, digital marketers, graphic designers, copywriters, and freelance income.",
    iconName: "Flame",
    badge: "Income Ready",
    gradient: "from-amber-600/20 via-orange-500/10 to-purple-900/30",
    neonBorder: "border-amber-500/30 hover:border-amber-400 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.3)]",
    tools: ["Midjourney v6", "Canva Magic Studio", "Claude 3.7", "VidIQ AI", "Submagic", "Ideogram"],
    keyTopics: [
      "হাই-সিটিআর (CTR) ইউটিউব থাম্বনেইল আইডিয়া ও AI ইমেজ তৈরি",
      "ভাইরাল হুক, টাইটেল ও ট্রেন্ডিং হ্যাশট্যাগ রিসার্চ",
      "কপিরাইট ফ্রি ব্যাকগ্রাউন্ড মিউজিক ও সাউন্ড এফেক্ট জেনারেট",
      "Fiverr ও Upwork-এ AI সার্ভিস বিক্রি করে ফ্রিল্যান্সিং ক্যারিয়ার"
    ],
    projectIdea: "একটি নতুন ব্র্যান্ডের জন্য সম্পূর্ণ লোগো, পোস্ট টেম্পলেট, বায়ো ও ১০ দিনের কন্টেন্ট ক্যালেন্ডার ডিজাইন।",
    samplePrompt: "Design an ultra-clean high-converting YouTube thumbnail concept for 'How to Earn with AI in Malda 2026' with bold typography and neon contrast."
  }
];

export const COURSES_DATA: Course[] = [
  {
    id: "ai-foundation",
    titleBn: "AI ফাউন্ডেশন ও দৈনন্দিন প্রোডাক্টিভিটি",
    titleEn: "AI Foundation & Daily Productivity Masterclass",
    level: "সকলের জন্য (Beginner)",
    duration: "৪ সপ্তাহ (১২টি প্র্যাকটিক্যাল ক্লাস)",
    feeInr: 1499,
    originalFeeInr: 2999,
    mode: "অফলাইন (কালিয়াচক ল্যাব) + অনলাইন ব্যাকআপ",
    badge: "সেরা সূচনা কোর্স",
    rating: 4.9,
    studentsCount: 340,
    description: "কোনো পূর্ব টেকনিক্যাল জ্ঞান ছাড়াই কম্পিউটার ও মোবাইলে ChatGPT, Gemini এবং সেরা ২০টি AI টুল দিয়ে যেকোনো কাজ ১০ গুণ দ্রুত করার সহজ শিক্ষা।",
    curriculum: [
      {
        week: "সপ্তাহ ১",
        topicBn: "AI সূচনা ও সেরা টুলস পরিচিতি",
        topicEn: "Introduction to AI Ecosystem",
        details: ["AI কীভাবে কাজ করে", "ChatGPT ও Gemini ফ্রি অ্যাকাউন্ট সেটআপ", "প্রথম সঠিক প্রম্পট লেখার ৫টি গোল্ডেন রুলস"]
      },
      {
        week: "সপ্তাহ ২",
        topicBn: "ডকুমেন্টেশন, ইমেইল ও পড়াশোনায় AI",
        topicEn: "Study & Office Productivity with AI",
        details: ["বই ও নোটসের ৫ সেকেন্ডে সামারি", "স্মার্ট প্রেজেন্টেশন ও টেবিল তৈরি", "স্পোকেন ইংলিশ পার্টনার হিসেবে AI"]
      },
      {
        week: "সপ্তাহ ৩",
        topicBn: "AI ইমেজ তৈরি ও ক্যানভা ম্যাজিক",
        topicEn: "Image Generation & Canva Magic",
        details: ["Midjourney ও Ideogram প্রম্পটিং", "সোশ্যাল মিডিয়া ব্যানার ও পোস্টার ডিজাইন", "ব্যাকগ্রাউন্ড রিমুভ ও ইমেজ এনহ্যান্স"]
      },
      {
        week: "সপ্তাহ ৪",
        topicBn: "রিয়েল লাইফ প্রজেক্ট ও সার্টিফিকেট এক্সাম",
        topicEn: "Capstone Project & Certification",
        details: ["পার্সোনাল AI ওয়ার্কস্পেস রেডি করা", "সার্টিফিকেশন টেস্ট ও অ্যাসেসমেন্ট", "লাইফটাইম সাপোর্ট গ্রুপ অ্যাক্সেস"]
      }
    ],
    perks: [
      "কালিয়াচক ল্যাবে কম্পিউটার অ্যাক্সেস",
      "ক্লাস রেকর্ডিং ও প্রম্পট চিটশিট",
      "ইনস্টিটিউট থেকে ভেরিফাইড সার্টিফিকেট",
      "হোয়াটসঅ্যাপ স্টুডেন্ট সাপোর্ট গ্রুপ"
    ]
  },
  {
    id: "ai-video-content-freelancing",
    titleBn: "AI ভিডিও এডিটিং, রিলস ও ফ্রিল্যান্সিং",
    titleEn: "AI Video Editing, Reels & Freelancing",
    level: "ইন্টারমিডিয়েট (Intermediate)",
    duration: "৬ সপ্তাহ (১৮টি ল্যাব ক্লাস)",
    feeInr: 2999,
    originalFeeInr: 5999,
    mode: "অফলাইন হ্যান্ডস-অন প্র্যাকটিস (কালিয়াচক)",
    badge: "ইনকাম ওরিয়েন্টেড",
    rating: 4.95,
    studentsCount: 285,
    description: "ক্যামেরা ফেস না করেই প্রফেশনাল AI ভিডিও, শর্টস ও ভয়েসওভার তৈরি করে ইউটিউব অটোমেশন এবং মার্কেটপ্লেসে ইনকাম শুরুর পূর্ণাঙ্গ প্যাকেজ।",
    curriculum: [
      {
        week: "সপ্তাহ ১-২",
        topicBn: "ভাইরাল স্ক্রিপ্ট ও কনভার্সেশন ডিজাইন",
        topicEn: "Viral Scriptwriting & Storyboarding",
        details: ["ChatGPT ও Claude দিয়ে হুক তৈরি", "স্টোরিটেলিং আর্কিটেকচার", "ইউটিউব ও রিলস ট্রেন্ড অ্যানালাইসিস"]
      },
      {
        week: "সপ্তাহ ৩-৪",
        topicBn: "সিনেমেটিক AI ফুটেজ ও ভয়েস জেনারেশন",
        topicEn: "Cinematic Footage & Bengali Voice",
        details: ["Runway Gen-3 ও Kling AI মাস্টারক্লাস", "ElevenLabs বাংলা ও ইংলিশ ভয়েস ক্লোনিং", "কপিরাইট ফ্রি সাউন্ড এফেক্টস"]
      },
      {
        week: "সপ্তাহ ৫",
        topicBn: "CapCut ও প্রিমিয়ার প্রো AI এডিটিং",
        topicEn: "Modern Video Editing Workflows",
        details: ["স্মার্ট অটো-ক্যাপশন ও ট্রানজিশন", "৪কে রেজোলিউশনে এক্সপোর্ট", "থাম্বনেইল প্রম্পট ডিজাইন"]
      },
      {
        week: "সপ্তাহ ৬",
        topicBn: "Fiverr, Upwork ও ক্লায়েন্ট হান্টিং",
        topicEn: "Freelancing & Client Acquisition",
        details: ["মার্কেটপ্লেস গিগ অপটিমাইজেশন", "ইন্টারন্যাশনাল পেমেন্ট সেটআপ", "লাইভ ক্লায়েন্ট কমিউনিকেশন ট্রিকস"]
      }
    ],
    perks: [
      "প্রিমিয়াম AI টুলসের ডিসকাউন্ট অ্যাক্সেস",
      "১০+ রেডিমেড ভাইরাল ভিডিও টেম্পলেট",
      "ক্লায়েন্ট গিগ রিভিউ ও পোর্টফোলিও বিল্ডিং",
      "১-অন-১ মেন্টর সেশন M Rahman-এর সাথে"
    ]
  },
  {
    id: "web-design-frontend-ai",
    titleBn: "AI দিয়ে নো-কোড ও ফুলস্ট্যাক ওয়েব ডিজাইন",
    titleEn: "Web Design & Frontend Development with AI",
    level: "অ্যাডভান্সড (Job & Business Ready)",
    duration: "৮ সপ্তাহ (২৪টি ইনটেনসিভ ক্লাস)",
    feeInr: 4499,
    originalFeeInr: 8999,
    mode: "অফলাইন প্রজেক্ট ল্যাব (কালিয়াচক)",
    badge: "সর্বোচ্চ ক্যারিয়ার ভ্যালু",
    rating: 4.9,
    studentsCount: 160,
    description: "Cursor AI, v0 ও Tailwind দিয়ে কয়েক ঘণ্টায় ক্লায়েন্ট-কোয়ালিটি আধুনিক ওয়েবসাইট ও ওয়েব অ্যাপ্লিকেশন তৈরির যুগান্তকারী কোর্স।",
    curriculum: [
      {
        week: "সপ্তাহ ১-২",
        topicBn: "ওয়েবের মূল কাঠামো ও আধুনিক AI বিল্ডার",
        topicEn: "Web Fundamentals & Modern AI Builders",
        details: ["HTML5 ও CSS3 কনসেপ্ট রিভিশন", "v0.dev দিয়ে কম্পোনেন্ট জেনারেশন", "Tailwind CSS দিয়ে আল্ট্রা-মডার্ন ডিজাইন"]
      },
      {
        week: "সপ্তাহ ৩-৪",
        topicBn: "Cursor AI ও কোড ইন্টেলিজেন্স",
        topicEn: "Mastering Cursor AI Code Editor",
        details: ["Cursor এডিটর সেটআপ ও শর্টকাট", "প্রম্পট দিয়ে বাগ ফিক্স ও ফিচার যোগ", "রিঅ্যাক্ট প্রজেক্ট স্ট্রাকচার"]
      },
      {
        week: "সপ্তাহ ৫-৬",
        topicBn: "লোকাল বিজনেসের জন্য ফুল ওয়েবসাইট ডেভেলপমেন্ট",
        topicEn: "Client Website Projects",
        details: ["রেস্তোরাঁ, ডাক্তার, দোকানের জন্য ওয়েবসাইট", "হোয়াটসঅ্যাপ অর্ডারিং সিস্টেম ইন্টিগ্রেশন", "এসইও ও মেটাট্যাগ সেটআপ"]
      },
      {
        week: "সপ্তাহ ৭-৮",
        topicBn: "লাইভ ডিপ্লয়মেন্ট ও এজেন্সি মডেল",
        topicEn: "Hosting, Domain & Agency Business",
        details: ["Vercel ও Netlify-তে ফ্রি লাইভ হোস্টিং", "ডোমেইন কানেকশন", "মালদায় নিজের ওয়েব এজেন্সি শুরু করার রূপরেখা"]
      }
    ],
    perks: [
      "নিজের তৈরি ৩টি লাইভ পোর্টফোলিও ওয়েবসাইট",
      "Cursor Pro ওয়ার্কফ্লো গাইড",
      "ক্লায়েন্ট কন্ট্রাক্ট ও কোটেশন টেমপ্লেট",
      "ইন্টার্নশিপ ও প্লেসমেন্ট সুযোগ"
    ]
  },
  {
    id: "prompt-engineering-pro",
    titleBn: "প্রফেশনাল প্রম্পট ইঞ্জিনিয়ারিং ও অটোমেশন",
    titleEn: "Professional Prompt Engineering & Automation",
    level: "সকলের জন্য (All Levels)",
    duration: "৪ সপ্তাহ (১২টি ল্যাব সেশন)",
    feeInr: 2499,
    originalFeeInr: 4999,
    mode: "অফলাইন + অনলাইন হাইব্রিড",
    badge: "ফিউচার স্কিল",
    rating: 4.88,
    studentsCount: 195,
    description: "AI-কে দিয়ে ঠিক যেটা চান ঠিক সেটাই করিয়ে নেওয়ার শিল্প। যেকোনো পেশাজীবীর জন্য সবচেয়ে মূল্যবান ভবিষ্যৎ দক্ষতা।",
    curriculum: [
      {
        week: "সপ্তাহ ১",
        topicBn: "বেসিক থেকে মেটা-প্রম্পটিং",
        topicEn: "Foundations to Meta-Prompting",
        details: ["Few-Shot ও Zero-Shot প্রম্পটিং", "Chain-of-Thought লজিক্যাল রিজনিং", "হ্যালুসিনেশন কমানোর প্রমাণিত টেকনিক"]
      },
      {
        week: "সপ্তাহ ২",
        topicBn: "বিজনেস ও মার্কেটিং অটোমেশন",
        topicEn: "Business & Marketing Prompting",
        details: ["কাস্টমার সাপোর্ট অটোমেশন প্রম্পট", "প্রোডাক্ট ডেসক্রিপশন ইঞ্জিন", "মার্কেট রিসার্চ ফ্রেমওয়ার্ক"]
      },
      {
        week: "সপ্তাহ ৩",
        topicBn: "ইমেজ ও মিডজার্নি ডিরেকশন প্রম্পটিং",
        topicEn: "Visual Prompt Engineering",
        details: ["ক্যামেরা লেন্স, আলো ও আর্ট স্টাইল প্যারামিটার", "নেগেটিভ প্রম্পটিং ও অ্যাসপেক্ট রেশিও", "ফটোরিয়েলিজম টেকনিক"]
      },
      {
        week: "সপ্তাহ ৪",
        topicBn: "নো-কোড AI অটোমেশন (Make / Zapier)",
        topicEn: "No-Code AI Automation",
        details: ["জিমেইল ও হোয়াটসঅ্যাপ অটোমেটিক রিপ্লাই", "অটোপাইলট ডেটা এন্ট্রি", "চূড়ান্ত প্রজেক্ট ও সার্টিফিকেট"]
      }
    ],
    perks: [
      "৫০০+ কিউরেটেড প্রফেশনাল প্রম্পট লাইব্রেরি",
      "পার্সোনাল প্রম্পট নোটবুক অ্যাক্সেস",
      "প্রম্পট অডিট ও ফিডব্যাক সেশন",
      "কোর্স সার্টিফিকেট"
    ]
  }
];

export const DAILY_TIPS_DATA: DailyTip[] = [
  {
    id: "tip-1",
    category: "ChatGPT",
    titleBn: "ChatGPT দিয়ে নিখুঁত গবেষণার 'রিভার্স প্রম্পট' কৌশল",
    titleEn: "The Reverse Prompting Secret for Flawless Output",
    descriptionBn: "ChatGPT-কে সরাসরি উত্তর দিতে না বলে আগে আপনার কাছে ৫টি প্রশ্ন করতে বলুন। এতে উত্তর অবিশ্বাস্য রকমের নিখুঁত ও কাস্টমাইজড হবে।",
    promptSnippet: "I want to launch a tech learning center in Malda. Before providing the plan, interview me by asking the top 5 most critical clarifying questions one by one.",
    tool: "ChatGPT / Gemini",
    difficulty: "Beginner"
  },
  {
    id: "tip-2",
    category: "Video AI",
    titleBn: "ElevenLabs দিয়ে প্রাকৃতিক বাংলা ভয়েস তৈরির সিক্রেট",
    titleEn: "Natural Bengali Voiceover with ElevenLabs",
    descriptionBn: "ভয়েসওভারে স্বাভাবিক মানুষের মতো দম নেওয়া বা বিরতি বোঝাতে টেক্সটের মাঝে তিনটি ডট (...) বা হাইফেন (-) ব্যবহার করুন।",
    promptSnippet: "স্বাগতম সবাইকে... আজ আমরা শিখব কীভাবে ঘরে বসে — হ্যাঁ, নিজের মোবাইলেই — AI দিয়ে দারুণ ভিডিও বানাবেন!",
    tool: "ElevenLabs Voice",
    difficulty: "Intermediate"
  },
  {
    id: "tip-3",
    category: "Web Design",
    titleBn: "v0.dev এ এক প্রম্পটেই পারফেক্ট ডার্ক-মোড ল্যান্ডিং পেজ",
    titleEn: "v0 Instant Dark Mode Landing Section Prompt",
    descriptionBn: "সবসময় ডিভাইসের প্রস্থ, কালার কোড ও বাটন অ্যাকশন উল্লেখ করে প্রম্পট দিলে ভেরসেল v0 সবচেয়ে প্রফেশনাল কোড জেনারেট করে।",
    promptSnippet: "Build a responsive dark-mode hero section for an institute in Kaliakak. Use slate-950 background, cyan-400 glowing accents, 2 primary CTA buttons, and responsive grid stats.",
    tool: "v0.dev / Cursor",
    difficulty: "Pro"
  },
  {
    id: "tip-4",
    category: "Image & Design",
    titleBn: "মিডজার্নিতে ফটোরিয়ালিস্টিক ছবির ৫টি গোল্ডেন প্যারামিটার",
    titleEn: "Midjourney Photorealism Formula",
    descriptionBn: "ছবির শেষে সবসময় ক্যামেরা লেন্স ও লাইটিং স্টাইল লিখুন, যেমন: 85mm f/1.4 lens, natural morning diffused light, cinematic bokeh, --ar 16:9 --v 6.0।",
    promptSnippet: "A young Bengali student working with modern holographic AI monitors inside a tech academy in Malda, 85mm lens, rim lighting, 8k resolution, cinematic atmosphere --ar 16:9 --v 6.0",
    tool: "Midjourney v6",
    difficulty: "Intermediate"
  },
  {
    id: "tip-5",
    category: "Freelancing",
    titleBn: "Fiverr-এ ক্লায়েন্টকে প্রপোজাল পাঠানোর AI জাদুকরী ফরম্যাট",
    titleEn: "Fiverr AI Winning Proposal Blueprint",
    descriptionBn: "জেনারেল কভার লেটার বাদ দিন। ক্লায়েন্টের সমস্যার ৩টি সুনির্দিষ্ট সমাধান ও ১টি ফ্রি স্যাম্বল অফার দিয়ে শুরু করুন।",
    promptSnippet: "Based on this client job description: [PASTE JOB]. Write a 120-word crisp proposal addressing their core pain point in sentence 1, offering a quick mockup sample, with zero AI fluff.",
    tool: "Claude 3.7 / ChatGPT",
    difficulty: "Intermediate"
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "test-1",
    name: "তানভীর আহমেদ (Tanveer Ahmed)",
    role: "AI Freelance Video Creator",
    location: "Kaliachak-1, Malda",
    textBn: "কালিয়াচকে M Rahman স্যারের কাছে AI ভিডিও এডিটিং শেখার পর আমি ফেসলেস ইউটিউব চ্যানেল শুরু করি। এখন মাসে ঘরে বসেই সম্মানজনক উপার্জন করছি। অফলাইনে হাতে ধরে শেখানোর কোনো তুলনা হয় না!",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    badge: "ভিডিও ব্যাচ ২ গ্র্যাজুয়েট"
  },
  {
    id: "test-2",
    name: "মৌমিতা সাহা (Moumita Saha)",
    role: "কলেজ ছাত্রী ও কন্টেন্ট ডিজাইনার",
    location: "Sujapur, Malda",
    textBn: "আমি ভেবেছিলাম AI শিখতে হয়তো বড় কোনো কম্পিউটার ইঞ্জিনিয়ার হতে হয়। কিন্তু রহমান স্যার এত সহজ বাংলায় বুঝিয়েছেন যে এখন আমি নিজেই কলেজের জন্য সুন্দর ওয়েবসাইট ও পোস্টার ডিজাইন করি।",
    avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    badge: "AI ফাউন্ডেশন কোর্স"
  },
  {
    id: "test-3",
    name: "আব্দুল বাসিত (Abdul Basit)",
    role: "স্থানীয় ব্যবসায়ী ও ফ্রিল্যান্সার",
    location: "Kaliakak Chowrasta, Malda",
    textBn: "আমাদের কালিয়াচকের আমের ব্যবসার জন্য অনলাইন অর্ডার সিস্টেম ও ক্যাটালগ আমি AI দিয়ে নিজে তৈরি করেছি। আগে যেখানে হাজার টাকা খরচ হতো, এখন নিজেই সব মেইনটেইন করি। অসাধারণ ইনিশিয়েটিভ!",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    badge: "ওয়েব ডিজাইন উইথ AI"
  }
];

export const FAQS_DATA: FaqItem[] = [
  {
    id: "faq-1",
    category: "General",
    questionBn: "আমার কোনো পূর্ব কোডিং বা টেকনিক্যাল জ্ঞান নেই, আমি কি শিখতে পারব?",
    questionEn: "I have zero coding background. Can I learn AI tools?",
    answerBn: "অবশ্যই! আমাদের প্রতিটি কোর্স একদম জিরো থেকে ডিজাইন করা। শুধু স্মার্টফোন বা বেসিক কম্পিউটার চালাতে জানলেই আপনি সহজেই AI টুলস ব্যবহার করে প্রোডাক্টিভ হতে পারবেন।",
    answerEn: "Yes! All courses start from ground zero. Basic smartphone or PC literacy is all you need."
  },
  {
    id: "faq-2",
    category: "Classes",
    questionBn: "ক্লাসগুলো কি কালিয়াচকে সরাসরি অফলাইনে হয় নাকি অনলাইনে?",
    questionEn: "Are classes conducted offline in Kaliakak or online?",
    answerBn: "আমাদের কালিয়াচক চৌরস্তা ল্যাবে সরাসরি অফলাইন প্র্যাকটিক্যাল ক্লাস অনুষ্ঠিত হয়। এর সাথে প্রতিটি ক্লাসের ফুল এইচডি রেকর্ডিং ও অনলাইনে লাইভ সাপোর্ট দেওয়া হয়। যারা দূরবর্তী শিক্ষার্থী তারা সম্পূর্ণ অনলাইনেও অংশ নিতে পারেন।",
    answerEn: "We conduct hands-on offline practical labs at our Kaliakak center, supplemented by online recordings and live WhatsApp mentoring."
  },
  {
    id: "faq-3",
    category: "Equipment",
    questionBn: "আমার কি নিজের ল্যাপটপ থাকা বাধ্যতামূলক?",
    questionEn: "Is having a personal laptop mandatory?",
    answerBn: "না, বাধ্যতামূলক নয়। কালিয়াচক সেন্টারে আমাদের ল্যাবে প্র্যাকটিসের জন্য পর্যাপ্ত কম্পিউটারের ব্যবস্থা রয়েছে। তবে বাড়িতে প্র্যাকটিস করার জন্য ল্যাপটপ বা অন্তত একটি স্মার্টফোন থাকা ভালো।",
    answerEn: "Not mandatory. Our Kaliakak lab has workstations for classroom practice. A smartphone or home PC helps for revision."
  },
  {
    id: "faq-4",
    category: "Certificate",
    questionBn: "কোর্স শেষে কি সার্টিফিকেট ও জব সাপোর্ট দেওয়া হবে?",
    questionEn: "Will I receive a certificate and freelance support?",
    answerBn: "হ্যাঁ, প্রতিটি সফল শিক্ষার্থী কোর্স শেষে M Rahman AI Learning-এর ভেরিফায়েড সার্টিফিকেট পাবেন। সাথে ফ্রিল্যান্সিং প্রোফাইল তৈরি ও লোকাল ক্লায়েন্ট প্রজেক্টে মেন্টরশিপ সাপোর্ট থাকবে।",
    answerEn: "Yes, you get an institute verified completion certificate along with freelance portfolio building and marketplace mentorship."
  }
];
