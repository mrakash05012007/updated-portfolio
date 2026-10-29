export interface Experience {
  id: string;
  role: string;
  organization: string;
  duration: string;
  type: 'freelance' | 'internship' | 'fulltime';
  responsibilities: string[];
  location?: string;
}

export const experiences: Experience[] = [
  {
    id: 'freelance-ai-dev',
    role: 'Freelance AI & Software Developer',
    organization: 'Independent',
    duration: '2025 – Present',
    type: 'freelance',
    responsibilities: [
      'Develop AI/ML and software prototypes based on real-world problem requirements.',
      'Build web-based applications, AI prediction systems, dashboards, and automation solutions using Python and modern development frameworks.',
      'Work across project planning, development, testing, debugging, and deployment.',
      'Translate functional requirements into practical, user-focused software solutions.',
    ],
  },
  {
    id: 'nsic-cv-intern',
    role: 'Computer Vision Intern',
    organization: 'NSIC Technical Services Centre',
    duration: 'Jun 2025 – Jul 2025',
    type: 'internship',
    location: 'Chennai, Tamil Nadu',
    responsibilities: [
      'Worked on image detection, feature extraction, and real-time object recognition pipelines.',
      'Applied supervised machine learning concepts and CNN-based models through hands-on mini-projects.',
    ],
  },
];

export interface Education {
  id: string;
  degree: string;
  institution: string;
  duration: string;
  score: string;
  scoreLabel: string;
}

export const education: Education[] = [
  {
    id: 'btech',
    degree: 'B.Tech — Artificial Intelligence & Data Science',
    institution: 'Vel Tech High Tech Engineering College',
    duration: '2026 – Present',
    score: '7.8 / 10',
    scoreLabel: 'CGPA',
  },
  {
    id: 'hsc',
    degree: 'Higher Secondary (Class XII)',
    institution: 'Adarsh Matric Higher Secondary School',
    duration: '2023 – 2024',
    score: '80%',
    scoreLabel: 'Score',
  },
  {
    id: 'sslc',
    degree: 'SSLC (Class X)',
    institution: 'Adarsh Matric Higher Secondary School',
    duration: '2021 – 2022',
    score: '75.2%',
    scoreLabel: 'Score',
  },
];
