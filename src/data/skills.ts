export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: 'Programming',
    icon: 'Code2',
    skills: [
      { name: 'Python' },
      { name: 'Java' },
      { name: 'JavaScript' },
      { name: 'HTML' },
      { name: 'CSS' },
    ],
  },
  {
    category: 'AI & Machine Learning',
    icon: 'Brain',
    skills: [
      { name: 'Machine Learning' },
      { name: 'Deep Learning' },
      { name: 'Natural Language Processing' },
      { name: 'Computer Vision' },
    ],
  },
  {
    category: 'Generative AI',
    icon: 'Sparkles',
    skills: [
      { name: 'Generative AI' },
      { name: 'LLM Concepts' },
      { name: 'Retrieval-Augmented Generation' },
      { name: 'Prompt Engineering' },
    ],
  },
  {
    category: 'Frameworks & Libraries',
    icon: 'Layers',
    skills: [
      { name: 'Scikit-learn' },
      { name: 'XGBoost' },
      { name: 'TensorFlow' },
      { name: 'Pandas' },
      { name: 'NumPy' },
      { name: 'Flask' },
      { name: 'FastAPI' },
      { name: 'Streamlit' },
      { name: 'React' },
    ],
  },
  {
    category: 'Databases',
    icon: 'Database',
    skills: [
      { name: 'MySQL' },
      { name: 'MongoDB' },
      { name: 'NoSQL' },
    ],
  },
  {
    category: 'Tools & Platforms',
    icon: 'Wrench',
    skills: [
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'VS Code' },
      { name: 'Google Colab' },
    ],
  },
];
