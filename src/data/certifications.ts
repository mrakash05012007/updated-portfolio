export interface Certification {
  id: string;
  title: string;
  provider: string;
  year: string;
  month?: string;
  duration?: string;
  verifyUrl?: string; // Only add if genuine URL available
  category: 'AI/ML' | 'GenAI' | 'Web' | 'IoT' | 'Blockchain' | 'Data' | 'Other';
}

export const certifications: Certification[] = [
  {
    id: 'rag-ibm',
    title: 'Retrieval-Augmented Generation for Enhanced AI Outputs',
    provider: 'IBM SkillsBuild',
    year: '2026',
    category: 'GenAI',
  },
  {
    id: 'genai-data-analytics',
    title: 'Generative AI for Data Analytics',
    provider: 'Udemy',
    year: '2026',
    month: 'August',
    duration: '4.5 hours',
    category: 'GenAI',
  },
  {
    id: 'intro-ml',
    title: 'Introduction to Machine Learning',
    provider: 'Online Platform',
    year: '2026',
    category: 'AI/ML',
  },
  {
    id: 'nlp-python',
    title: 'NLP with Python & NLTK',
    provider: 'Online Platform',
    year: '2026',
    category: 'AI/ML',
  },
  {
    id: 'web-dev-infosys',
    title: 'Responsive Web Development with HTML5, CSS3, JavaScript',
    provider: 'Infosys Springboard',
    year: '2026',
    month: 'September',
    category: 'Web',
  },
  {
    id: 'blockchain-infosys',
    title: 'Blockchain & Hyperledger Fabric: An Overview of Blockchain Technology',
    provider: 'Infosys Springboard',
    year: '2026',
    month: 'August',
    category: 'Blockchain',
  },
  {
    id: 'iot-cisco',
    title: 'Introduction to Internet of Things',
    provider: 'Cisco Networking Academy',
    year: '2026',
    month: 'August',
    category: 'IoT',
  },
  {
    id: 'sensor-networks',
    title: 'Smart Sensor Networks (Advanced)',
    provider: 'FutureSkills Prime',
    year: '2026',
    month: 'August',
    category: 'IoT',
  },
  {
    id: 'r-programming',
    title: 'R Programming for Beginners',
    provider: 'Simplilearn SkillUp',
    year: '2026',
    month: 'August',
    category: 'Data',
  },
];
