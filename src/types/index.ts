export interface Category {
  id: string;
  titleBn: string;
  titleEn: string;
  descriptionBn: string;
  descriptionEn: string;
  iconName: string;
  badge: string;
  gradient: string;
  neonBorder: string;
  tools: string[];
  keyTopics: string[];
  projectIdea: string;
  samplePrompt: string;
}

export interface Course {
  id: string;
  titleBn: string;
  titleEn: string;
  level: string;
  duration: string;
  feeInr: number;
  originalFeeInr: number;
  mode: string;
  badge: string;
  rating: number;
  studentsCount: number;
  description: string;
  curriculum: {
    week: string;
    topicBn: string;
    topicEn: string;
    details: string[];
  }[];
  perks: string[];
}

export interface DailyTip {
  id: string;
  category: 'ChatGPT' | 'Video AI' | 'Web Design' | 'Image & Design' | 'Freelancing';
  titleBn: string;
  titleEn: string;
  descriptionBn: string;
  promptSnippet: string;
  tool: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Pro';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  textBn: string;
  avatarUrl: string;
  badge: string;
}

export interface FaqItem {
  id: string;
  questionBn: string;
  questionEn: string;
  answerBn: string;
  answerEn: string;
  category: string;
}
