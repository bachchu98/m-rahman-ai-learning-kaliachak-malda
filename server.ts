import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function main() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;
  const isProduction = process.env.NODE_ENV === 'production';

  app.use(express.json());

  // Initialize Gemini if key is provided
  const apiKey = process.env.GEMINI_API_KEY;
  let ai: GoogleGenAI | null = null;
  if (apiKey && apiKey !== 'MY_GEMINI_API_KEY') {
    try {
      ai = new GoogleGenAI({ apiKey });
    } catch (e) {
      console.warn('Could not initialize GoogleGenAI client:', e);
    }
  }

  // API Route: Question & Answer with AI
  app.post('/api/ai-qa', async (req, res) => {
    try {
      const { question, language = 'bn' } = req.body;
      if (!question || typeof question !== 'string') {
        return res.status(400).json({ error: 'Question is required' });
      }

      // If Gemini client is active, query Gemini 3.8 Flash
      if (ai) {
        try {
          const systemPrompt = `You are the lead AI Mentor & Academic Counselor at "M Rahman AI Learning", the premier AI education center located in Kaliakak (Kaliachak), Malda District, West Bengal.
Your audience: Students, youth, freelancers, job-seekers, and teachers from Malda, Murshidabad, and West Bengal.
Language preference: ${language === 'bn' ? 'Friendly, encouraging conversational Bengali (বাংলা) with common English tech terms in parentheses or natural phrasing' : 'Clear English with Bengali keywords'}.
Tone: Inspiring, highly practical, patient, educational, and structured.
Always provide:
1. Direct, crystal-clear explanation.
2. Step-by-step practical action item or exact prompt template to use.
3. Mention how M Rahman AI Learning in Kaliakak, Malda offers hands-on guidance on this exact topic.
Keep the answer concise (2-4 paragraphs max, or crisp bullet points).`;

          const response = await ai.models.generateContent({
            model: 'gemini-3.8-flash',
            contents: [
              {
                role: 'user',
                parts: [{ text: `${systemPrompt}\n\nStudent's Question: "${question}"` }],
              },
            ],
          });

          const answerText = response.text || 'ধন্যবাদ আপনার প্রশ্নের জন্য।';
          return res.json({ answer: answerText, source: 'gemini-3.8-flash' });
        } catch (apiError: any) {
          console.warn('Gemini API call failed, falling back to local mentor response:', apiError.message);
        }
      }

      // Offline / Fallback Intelligent Educational Engine
      const qLower = question.toLowerCase();
      let answer = '';

      if (qLower.includes('chatgpt') || qLower.includes('চ্যাটজিপিটি') || qLower.includes('ফ্রিল্যান্সিং')) {
        answer = `**ChatGPT ও AI দিয়ে ফ্রিল্যান্সিং শুরু করার সহজ গাইডলাইন:**
1. **কন্টেন্ট ও কপিরাইটিং:** ব্লগ পোস্ট, ফেসবুক ও ইউটিউব স্ক্রিপ্ট, ইমেইল মার্কেটিং এবং প্রোডাক্ট ডেসক্রিপশন লেখা শিখুন।
2. **প্রম্পট ইঞ্জিনিয়ারিং:** শুধু সাধারণ প্রশ্ন নয়, সুনির্দিষ্ট রোল (Role), কনটেক্সট (Context) এবং আউটপুট ফরম্যাট দিয়ে প্রম্পট দিন।
3. **মার্কেটপ্লেস:** ফাইবার (Fiverr) বা আপওয়ার্ক (Upwork)-এ 'AI Content Editor', 'Prompt Optimization' বা 'Virtual Assistant' হিসেবে কাজ শুরু করতে পারেন।

💡 *কালিয়াচক M Rahman AI সেন্টারে আমরা লাইভ ক্লায়েন্ট প্রজেক্ট ও অ্যাকাউন্ট তৈরি করে হাতে-কলমে ফ্রিল্যান্সিং শেখাই।*`;
      } else if (qLower.includes('ওয়েবসাইট') || qLower.includes('web') || qLower.includes('কোডিং')) {
        answer = `**AI দিয়ে ওয়েবসাইট তৈরিতে কি কোডিং জরুরি?**
না, ২০২৬ সালে AI-এর যুগে বেসিক কোডিং না জেনেও আধুনিক ওয়েবসাইট তৈরি সম্ভব! 
- **v0.dev, Cursor ও Lovable** দিয়ে মনের মতো প্রম্পট লিখে পুরো রেসপন্সিভ সাইটের কোড তৈরি করা যায়।
- ওয়ার্ডপ্রেস বা শপিফাইয়ের সাথে AI জেনারেটর ব্যবহার করে ৫ মিনিটে ল্যান্ডিং পেজ তৈরি করা যায়।
- তবে বেসিক HTML/CSS বুঝলে আপনি AI কোডকে দ্রুত কাস্টমাইজ করতে পারবেন।

💡 *M Rahman AI Learning কালিয়াচকে আমাদের 'Web Design with AI' কোর্সে কোনো পূর্ব অভিজ্ঞতা ছাড়াই সম্পূর্ণ ওয়েবসাইট বানানো শেখানো হয়।*`;
      } else if (qLower.includes('ভিডিও') || qLower.includes('video') || qLower.includes('ইউটিউব') || qLower.includes('reels')) {
        answer = `**AI ভিডিও ও রিলস মেকিং দিয়ে ইনকাম:**
1. **স্ক্রিপ্ট:** ChatGPT বা Gemini দিয়ে ভাইরাল হুক সহ স্ক্রিপ্ট লিখুন।
2. **ভয়েসওভার:** ElevenLabs দিয়ে প্রফেশনাল বাংলা বা ইংরেজি ভয়েস তৈরি করুন।
3. **ভিজুয়ালস:** Runway, Pika বা Midjourney দিয়ে সিনেমেটিক ফুটেজ জেনারেট করুন।
4. **এডিটিং ও সাবটাইটেল:** CapCut AI বা Auto-Captions দিয়ে দ্রুত রিলস রেডি করুন।

Faceless YouTube Channel বা Instagram Theme Page চালিয়ে মালদায় বসে বিশ্বজুড়ে ইনকাম সম্ভব!`;
      } else if (qLower.includes('ফি') || qLower.includes('fee') || qLower.includes('ভর্তি') || qLower.includes('ঠিকানা') || qLower.includes('কালিয়াচক') || qLower.includes('malda')) {
        answer = `**M Rahman AI Learning ইনস্টিটিউট সম্পর্কিত তথ্য:**
📍 **ঠিকানা:** চৌরস্তা মার্কেট কমপ্লেক্স, কালিয়াচক (Kaliakak), মালদা জেলা, পশ্চিমবঙ্গ - 732201।
📞 **যোগাযোগ ও হোয়াটসঅ্যাপ:** +91 98001 23456
⏰ **ব্যাচ:** অফলাইন ও অনলাইন হাইব্রিড ব্যাচ (শনি-রবিবার বিশেষ কর্মজীবী ও শিক্ষার্থীদের ব্যাচ রয়েছে)।
কোর্সের ফি শুরু মাত্র ₹১,৪৯৯/- থেকে (ফ্রি ডেমো ক্লাস বুক করার সুযোগ রয়েছে)।`;
      } else {
        answer = `**M Rahman AI Learning মেন্টর পরামর্শ:**
আপনার প্রশ্ন: "${question}"

AI শেখার প্রথম ধাপ হলো সঠিক টুল বাছাই করা ও প্র্যাকটিস করা। 
- টেক্সট ও রিসার্চের জন্য **Gemini & ChatGPT**
- গ্রাফিক ও ইমেজের জন্য **Midjourney & Canva AI**
- ওয়েব কোডিংয়ের জন্য **Cursor & v0**
- ভিডিও তৈরিতে **CapCut AI & ElevenLabs**

প্রতিদিন মাত্র ৩০ মিনিট যেকোনো একটি টুল নিয়মিত প্র্যাকটিস করলে ৩ মাসে আপনি বিশ্বমানের AI প্রফেশনাল হয়ে উঠতে পারেন। বিস্তারিত জানতে আমাদের কালিয়াচক সেন্টারে আসুন অথবা ফ্রি ডেমো ক্লাসে যোগ দিন!`;
      }

      return res.json({ answer, source: 'curated-mentor-kb' });
    } catch (err: any) {
      console.error('Error in /api/ai-qa:', err);
      return res.status(500).json({ error: 'Failed to process question' });
    }
  });

  // API Route: Prompt Enhancer Tool
  app.post('/api/enhance-prompt', async (req, res) => {
    try {
      const { prompt, type = 'general' } = req.body;
      if (!prompt) {
        return res.status(400).json({ error: 'Prompt is required' });
      }

      if (ai) {
        try {
          const response = await ai.models.generateContent({
            model: 'gemini-3.8-flash',
            contents: [
              {
                role: 'user',
                parts: [
                  {
                    text: `You are an expert prompt engineer. Take this basic prompt idea: "${prompt}" (Category: ${type}).
Return 2 things:
1. Enhanced Master Prompt (in crisp English, optimized with role, context, constraints, and rich parameters).
2. Pro Tip in Bengali on how to use it.`,
                  },
                ],
              },
            ],
          });
          return res.json({ enhancedPrompt: response.text });
        } catch (e: any) {
          console.warn('Gemini enhance failed, using template generator:', e.message);
        }
      }

      // Offline template generation
      const enhanced = `Act as a world-class expert in ${type}. Analyze: "${prompt}". 
Execute the task with step-by-step precision, high aesthetic fidelity, verified facts, and actionable insights. Output in clean markdown with structured headings and key takeaways. Avoid generic clichés.`;

      const tip = `প্রো টিপ: এই প্রম্পটটি ChatGPT 4o বা Gemini 2.5/3 তে পেস্ট করুন। সাথে আপনার কাঙ্ক্ষিত ফরম্যাট (যেমন: টেবিল বা বুলেট) উল্লেখ করুন।`;

      return res.json({ enhancedPrompt: `${enhanced}\n\n💡 **বাংলা টিপ:** ${tip}` });
    } catch (e: any) {
      return res.status(500).json({ error: 'Prompt enhancement failed' });
    }
  });

  // API Route: Instant Course Enrollment Inquiry
  app.post('/api/enroll', async (req, res) => {
    try {
      const { name, phone, courseTitle, batchMode = 'offline', email = '' } = req.body;
      if (!name || !phone) {
        return res.status(400).json({ error: 'Name and Phone are required' });
      }

      const registrationId = `MRAI-${Math.floor(100000 + Math.random() * 900000)}`;
      return res.json({
        success: true,
        registrationId,
        message: `ধন্যবাদ ${name}! আপনার আবেদনটি সফলভাবে গৃহীত হয়েছে। আমাদের কালিয়াচক অফিস থেকে দ্রুত আপনার সাথে যোগাযোগ করা হবে।`,
        details: {
          name,
          phone,
          courseTitle: courseTitle || 'AI Foundation Masterclass',
          batchMode,
          institute: 'M Rahman AI Learning - Kaliakak, Malda',
          assignedBatch: 'Upcoming Weekend Batch (Kaliakak Campus)',
        },
      });
    } catch (e) {
      return res.status(500).json({ error: 'Enrollment submission failed' });
    }
  });

  // Vite middleware in dev or static files in production
  if (!isProduction) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 M Rahman AI Learning Server running at http://0.0.0.0:${PORT}`);
  });
}

main().catch((err) => {
  console.error('Fatal server startup error:', err);
  process.exit(1);
});
