export type ProjectStatus = 'In Development' | 'Completed' | 'Prototype';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  problem: string;
  solution: string;
  technologies: string[];
  category: 'AI/ML' | 'Computer Vision' | 'Generative AI' | 'Web Application' | 'NLP' | 'Smart Automation';
  status: ProjectStatus;
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
  keyFeatures: string[];
  image?: string;
}

export const projects: Project[] = [
  {
    id: 'h2s-dosimeter-wristband',
    title: 'Passive Colorimetric H2S Exposure-Dosimeter Wristband With AI-Based Quantitative Reading',
    subtitle: 'Smart Wearable Hardware & Optical AI Gas Quantitation',
    description:
      'A smart wearable chemical exposure monitoring wristband that pairs passive colorimetric chemical strips with computer vision AI to quantitatively calculate real-time toxic H2S gas dosage in PPM for occupational worker safety.',
    longDescription:
      'This smart automation hardware project integrates material science with embedded computer vision to safeguard industrial personnel in hazardous environments. Workers wear a durable, passive chemical-sensing wristband that undergoes visible color shifts upon exposure to Hydrogen Sulfide (H2S). An integrated AI optical quantitation model normalizes ambient illumination, extracts colorimetric channel gradients, and calculates precise exposure concentration (PPM) and cumulative time-weighted dosage, triggering automated industrial safety workflows.',
    problem:
      'Conventional electronic gas detectors are bulky, battery-dependent, and prone to sensor poisoning, while manual chemical color strips only provide rough, subjective estimates without digital dosage logging.',
    solution:
      'Combines lightweight passive colorimetric dosimeters with an AI-driven optical readout algorithm that automatically calculates parts-per-million (PPM) concentration and logs safety compliance metrics to a central smart telemetry dashboard.',
    technologies: ['Python', 'OpenCV', 'Computer Vision', 'IoT & Hardware', 'Colorimetric Sensing', 'Embedded AI'],
    category: 'Smart Automation',
    status: 'Completed',
    githubUrl: '', // Configure when repository is available
    liveUrl: '',
    featured: true,
    image: '/projects/h2s-dosimeter-wristband.jpg',
    keyFeatures: [
      'Passive chemical colorimetric strip matrix for H2S gas detection',
      'AI-based optical calibration and quantitative PPM concentration calculation',
      'Ambient lighting color-normalization and white-balance compensation',
      'Cumulative time-weighted average (TWA) dosage tracking',
      'Wearable ergonomic form factor tailored for hazardous industrial zones',
      'Automated exposure alerts and occupational safety compliance logging',
    ],
  },
  {
    id: 'autotwin-qi',
    title: 'AutoTwin-QI',
    subtitle: 'Digital Twin for Industrial Quality Inspection',
    description:
      'An AI-assisted industrial quality inspection platform designed to support component defect assessment, engineering compliance checks, quality-risk scoring, reporting, root-cause analysis, and CAPA workflows.',
    longDescription:
      'AutoTwin-QI is a full-stack AI-powered industrial quality inspection platform that integrates computer vision, digital twin visualization, and engineering workflow management. It enables quality engineers to assess defects, run compliance checks, and manage corrective actions from a single unified interface.',
    problem:
      'Industrial quality inspection is time-consuming, error-prone, and lacks real-time visibility into defect patterns and engineering compliance.',
    solution:
      'A modular FastAPI backend paired with a React frontend and 3D digital-twin interface enables real-time defect detection, risk scoring, root-cause analysis, and CAPA workflow management — all integrated into one platform.',
    technologies: ['Python', 'FastAPI', 'React', 'YOLO', 'Computer Vision', 'Three.js', 'PostgreSQL'],
    category: 'Computer Vision',
    status: 'In Development',
    githubUrl: 'https://github.com/mrakash05012007/Team_Knockout',
    liveUrl: '',
    featured: true,
    image: '/projects/autotwin-qi.jpg',
    keyFeatures: [
      'AI-assisted defect detection using YOLO',
      'Engineering compliance checks and quality-risk scoring',
      '3D digital-twin interface for defect visualization',
      'What-if simulation for process-risk scenarios',
      'Root-cause analysis and CAPA workflow management',
      'Automated inspection reports',
    ],
  },
  {
    id: 'crop-recommendation',
    title: 'AI-Based Crop Recommendation System',
    subtitle: 'ML-Powered Agricultural Intelligence',
    description:
      'An ML-powered application that recommends suitable crops using soil, weather, and agricultural parameters, with a Flask-based backend for real-time predictions.',
    longDescription:
      'This system uses machine learning models trained on agricultural datasets to recommend the most suitable crop for a given set of soil parameters, environmental conditions, and seasonal factors. It provides real-time predictions through a Flask API.',
    problem:
      'Farmers often lack data-driven guidance on which crops to plant, leading to suboptimal yields and resource wastage.',
    solution:
      'A trained ML classifier analyses soil composition, climate, and agricultural data to recommend optimal crops, accessible via a web-based Flask interface.',
    technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Flask'],
    category: 'AI/ML',
    status: 'Completed',
    githubUrl: 'https://github.com/mrakash05012007/farming-technology-with-AI',
    liveUrl: '',
    featured: true,
    image: '/projects/crop-recommendation.jpg',
    keyFeatures: [
      'Multi-parameter crop recommendation (soil, weather, nutrients)',
      'Trained ML classification model',
      'Data preprocessing and feature engineering pipeline',
      'Flask REST API for real-time predictions',
      'Interactive web interface',
    ],
  },
  {
    id: 'nlp-symptom-checker',
    title: 'NLP Healthcare Symptom Checker',
    subtitle: 'Intelligent Health Information Assistant',
    description:
      'An NLP-based application that processes user-provided symptoms and provides preliminary health-related information using natural language processing and ML techniques.',
    longDescription:
      'This application uses NLP techniques to parse and understand symptom descriptions provided in natural language. It applies text processing, classification, and information retrieval to return relevant health information and guidance.',
    problem:
      'Patients often struggle to find relevant health information quickly without professional medical access.',
    solution:
      'An NLP pipeline processes symptom text, applies classification, and retrieves structured health information — providing preliminary guidance while clearly indicating it is not medical advice.',
    technologies: ['Python', 'NLP', 'Machine Learning', 'Streamlit', 'Flask'],
    category: 'NLP',
    status: 'Completed',
    githubUrl: 'https://github.com/mrakash05012007/ARSE_SYMPTOM_CHECKER',
    liveUrl: '',
    featured: true,
    image: '/projects/nlp-symptom-checker.jpg',
    keyFeatures: [
      'Natural language symptom input processing',
      'NLP-based text classification',
      'Structured health information retrieval',
      'Interactive Streamlit/Flask interface',
      'Clear medical disclaimer and guidance',
    ],
  },
  {
    id: 'ai-attendance-system',
    title: 'AI Attendance System & Student Management',
    subtitle: 'Face Recognition-Based Automation',
    description:
      'A face-recognition-based attendance application designed to automate attendance tracking, student record management, and report generation using computer vision techniques.',
    longDescription:
      'This system uses OpenCV and computer vision to detect and recognize student faces in real time, automatically recording attendance. It includes a student management module and generates attendance reports, reducing manual tracking overhead.',
    problem:
      'Manual attendance tracking in educational institutions is time-consuming, error-prone, and difficult to audit.',
    solution:
      'A face recognition pipeline built with OpenCV automates attendance capture. A management module stores student records and generates exportable attendance reports.',
    technologies: ['Python', 'OpenCV', 'Computer Vision'],
    category: 'Computer Vision',
    status: 'Completed',
    githubUrl: 'https://github.com/mrakash05012007/Smart_Attendance_system',
    liveUrl: '',
    featured: true,
    image: '/projects/ai-attendance-system.jpg',
    keyFeatures: [
      'Real-time face detection and recognition',
      'Automated attendance recording',
      'Student record management module',
      'Attendance report generation',
      'Designed to reduce manual record keeping',
    ],
  },
];

export const projectCategories = ['All', 'Smart Automation', 'AI/ML', 'Computer Vision', 'NLP', 'Generative AI', 'Web Application'] as const;
export type ProjectCategory = (typeof projectCategories)[number];
