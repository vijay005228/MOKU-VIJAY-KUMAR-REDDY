import { Project, Education, Certification, SkillCategory, Language } from "./types";

export const PERSONAL_INFO = {
  fullName: "MOKU VIJAY KUMAR REDDY",
  titles: ["Software Engineer", "Full Stack Developer", "AI Enthusiast"],
  location: "Hyderabad, India",
  email: "vijaykumarreddyyyyyy@gmail.com",
  linkedin: "https://www.linkedin.com/in/moku-vijay-kumar-reddy",
  github: "https://github.com/moku-vijay-kumar-reddy",
  aboutMe: [
    "I am a passionate Software Developer with experience in Full Stack Development and AI-driven applications. I enjoy building scalable web applications, working with machine learning models, and solving real-world problems through technology.",
    "My expertise includes MERN Stack development, Python programming, AI/ML integration, REST APIs, and database management. I am particularly interested in creating impactful solutions in agriculture, automation, and intelligent systems."
  ]
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Python", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "Java", level: 75 },
      { name: "C", level: 70 }
    ]
  },
  {
    category: "Frontend Dev",
    skills: [
      { name: "React.js", level: 85 },
      { name: "HTML5", level: 90 },
      { name: "CSS3", level: 85 },
      { name: "Tailwind CSS", level: 90 }
    ]
  },
  {
    category: "Backend Dev",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 80 },
      { name: "Flask", level: 75 }
    ]
  },
  {
    category: "Databases",
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "MySQL", level: 80 },
      { name: "SQL", level: 80 }
    ]
  },
  {
    category: "AI & Machine Learning",
    skills: [
      { name: "TensorFlow", level: 80 },
      { name: "Keras", level: 75 },
      { name: "OpenCV", level: 80 },
      { name: "CNN", level: 85 },
      { name: "Computer Vision", level: 80 }
    ]
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "Git", level: 85 },
      { name: "GitHub", level: 90 },
      { name: "Docker", level: 70 },
      { name: "Postman", level: 80 },
      { name: "VS Code", level: 95 },
      { name: "SWE Bench", level: 75 },
      { name: "Terminal Bench", level: 75 }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "crop-disease",
    title: "AI Powered Crop Disease Detection & Forecasting System",
    category: "ai",
    overview: "Developed an AI-powered system capable of detecting crop diseases from leaf images using Convolutional Neural Networks (CNN). The application also predicts disease risk using weather-based forecasting.",
    features: [
      "Image-based disease detection using CNN models",
      "Flask framework-driven lightweight web application",
      "Real-time weather API integration for localized environmental conditions",
      "Dynamic risk prediction reporting with agricultural guidance"
    ],
    techStack: ["Python", "TensorFlow", "OpenCV", "Flask", "HTML", "CSS"]
  },
  {
    id: "agro-marketing",
    title: "Agro Culture Marketing System",
    category: "web",
    overview: "Built a full-stack MERN platform connecting farmers directly with agricultural consumers, eliminating the dependency on intermediate middlemen and stabilizing produce pricing.",
    features: [
      "Secure user authentication (Farmers, Buyers, and Admin roles)",
      "Dynamic agricultural product listings with real-time weights and prices",
      "Interactive cart functionality and secure session management",
      "Comprehensive transparent order management system",
      "Responsive and adaptive layouts for rural mobile network users"
    ],
    techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS"]
  },
  {
    id: "yt-downloader",
    title: "YouTube Video Downloader",
    category: "utility",
    overview: "Created a Python-based CLI and desktop GUI application to download YouTube video streams with selectable resolution thresholds and optimized multi-threaded download performance.",
    features: [
      "Multiple format resolution and bitrate options (1080p, 720p, 480p, MP3 audio)",
      "Unified Graphical User Interface (GUI) and Command-Line Interface (CLI)",
      "High-speed concurrent stream chunk slicing and merging support",
      "Robust format and media container standard handling"
    ],
    techStack: ["Python", "pytube", "yt-dlp", "Tkinter"]
  }
];

export const EDUCATION_LIST: Education[] = [
  {
    institution: "Teegala Krishna Reddy Engineering College",
    degree: "Bachelor of Technology (B.Tech) – Information Technology",
    duration: "2023 – Present",
    details: "Currently focusing on advanced data structures, web application architectures, machine learning methodologies, and database systems."
  },
  {
    institution: "Indur Institute of Engineering & Technology",
    degree: "Diploma in Engineering",
    duration: "2020 – 2023",
    details: "Groundwork in logical programming, computer systems engineering, database fundamentals, and software life cycle principles."
  }
];

export const CERTIFICATIONS: Certification[] = [
  { name: "MongoDB Certified Developer Associate" },
  { name: "MERN Stack Development Specialist" },
  { name: "ServiceNow Certified System Administrator (CSA)" },
  { name: "IBM Enterprise Design Thinking Practitioner" }
];

export const LANGUAGES: Language[] = [
  { name: "English", proficiency: "Professional Proficiency" },
  { name: "Telugu", proficiency: "Native / Bilingual" },
  { name: "Hindi", proficiency: "Working Proficiency" }
];
