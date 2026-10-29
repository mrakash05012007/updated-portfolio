export interface Achievement {
  id: string;
  event: string;
  organization: string;
  year: string;
  description: string;
  highlight?: boolean; // true = won / special distinction
  status: 'Won' | 'Participated' | 'Submitted' | 'Currently Participating';
}

export const achievements: Achievement[] = [
  {
    id: 'sih-2026-win',
    event: 'Smart India Hackathon (SIH) 2026',
    organization: 'Internal Hackathon — Vel Tech High Tech Engineering College',
    year: '2026',
    description:
      'Won the internal hackathon by developing and presenting a solution for an SIH 2026 problem statement.',
    highlight: true,
    status: 'Won',
  },
  {
    id: 'singularity-2026',
    event: 'Singularity Hackathon',
    organization: 'AJ Institute of Engineering & Technology',
    year: '2026',
    description:
      'Currently participating, collaborating with team members to develop an innovative technology-based solution.',
    status: 'Currently Participating',
  },
  {
    id: 'antariksh-2026',
    event: 'Bharatiya Antariksh Hackathon 2026',
    organization: 'ISRO',
    year: '2026',
    description:
      'Successfully submitted an idea addressing a real-world space-related challenge.',
    status: 'Submitted',
  },
  {
    id: 'zyren-2026',
    event: 'Zyren Hackathon 2026',
    organization: 'SRM Ramapuram',
    year: '2026',
    description: 'Participated in a competitive hackathon and developed a technology-driven solution.',
    status: 'Participated',
  },
  {
    id: 'astrava-2026',
    event: 'Astrava Hackathon 2026',
    organization: 'Dr. Ambedkar Institute of Technology',
    year: '2026',
    description: 'Participated in the hackathon.',
    status: 'Participated',
  },
  {
    id: 'sih-2025',
    event: 'Smart India Hackathon (SIH) 2025',
    organization: 'Internal Round — Vel Tech High Tech Engineering College',
    year: '2025',
    description: 'Selected as a participant and presented an idea in the Internal SIH round at Vel Tech.',
    status: 'Participated',
  },
  {
    id: 'mechgust-25',
    event: "MECHGUST'25",
    organization: 'Chennai Institute of Technology',
    year: '2025',
    description: 'Participated in the technical event.',
    status: 'Participated',
  },
  {
    id: 'quizocalypse',
    event: 'QUIZOCALYPSE',
    organization: 'Rajalakshmi Engineering College',
    year: '2025',
    description: 'Participated in the competitive quiz event.',
    status: 'Participated',
  },
];
