import MyLogo from "./images/me.jpg";
import Chatbot from "./images/chatbot.png";
import Website from "./images/website.png";
import AIKYAM from "./images/aikyam.png";
import VSManage from "./images/vsmanage.png";
import Penguin from "./images/penguin.png";
import WARespond from "./images/waresponder.png";
import VS2018 from "./images/vs2018.png";
import Sathchalein from "./images/sathchalein.png";
import KYC from "./images/kyc.png";

export const personalInfo = {
  name: "Prathamesh Walawalkar",
  bio: "Master’s student in Data Science at the University of Guelph. I build AI-powered dashboards, reinforcement learning projects, and automation workflows—bridging data science, software engineering, and AI integration.",
  profileImage: MyLogo,
  resume: "/Resume.pdf",
  taglines: [
    'Master’s student in Data Science @ University of Guelph',
    'AI-powered dashboards',
    'Reinforcement learning',
    'Automation workflows',
    'Data science • software • AI integration'
  ],
  socialLinks: {
    email: "pr.walawalkar@gmail.com",
    github: "https://github.com/RenmoTC",
    linkedin: "https://www.linkedin.com/in/prathameshwalawalkar",
    twitter: "#",
    instagram: "#",
    youtube: "#",
    huggingface: "#",
  },
  skills: {
    langs: [
      {
        name: "Python",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      {
        name: "R",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg",
      },
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "HTML5",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg",
      },
      {
        name: "CSS3",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg",
      },
    ],
    technologies: [
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "TailwindCSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      },
      {
        name: "Playwright",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/playwright.svg",
      },
      {
        name: "Supabase",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
      },
      {
        name: "PostgreSQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "MySQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
      {
        name: "NumPy",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
      },
      {
        name: "Pandas",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
      },
    ],
    tools: [
      {
        name: "VSCode",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      },
      {
        name: "Github",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      },
      {
        name: "Jupyter",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg",
      },
      {
        name: "Docker",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      },
      {
        name: "AWS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      },
      {
        name: "Azure",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
      },
      {
        name: "ArcGIS",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/arcgis.svg",
      },
      {
        name: "n8n",
        icon: "https://raw.githubusercontent.com/n8n-io/n8n/master/assets/n8n-logo.png",
      },
      {
        name: "Burp Suite",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/portswigger.svg",
      },
      {
        name: "OSINT",
        icon: "https://placehold.co/64x64/0B1220/FFFFFF?text=OSINT",
      },
      {
        name: "Render",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/render.svg",
      },
      {
        name: "GitHub Pages",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/githubpages.svg",
      },
      {
        name: "Replicate",
        icon: "https://avatars.githubusercontent.com/u/60410876?s=200&v=4",
      },
    ],
  },
  experiences: [
    {
      date: "May 2025 - Aug 2025",
      title: "Data Scientist",
      subtitle: "Intelligent Environmental Solutions Foundry (IESF), Guelph, ON",
      description: "Led an interactive habitat inventory dashboard integrating Supabase, Microsoft LIDA AI, and geospatial visualizations; designed DB schema, ETL, analytics, and advanced data visualizations for researchers and kids.",
    },
    {
      date: "May 2024 - Jan 2025",
      title: "Market Research Analyst",
      subtitle: "Freelance — Remote (Sofia, Bulgaria)",
      description: "Generated ~100k high-quality business leads across 400+ UK cities; built efficient data scraping and management workflows to support targeted outreach.",
    }
  ],
};

export const education = [
  {
    date: "2024 - Present",
    title: "Master of Data Science",
    subtitle: "University of Guelph, Guelph, Ontario",
    description: "Graduate studies focused on data science, ML, AI integration, and scalable analytics.",
  },
  {
    date: "2019 - 2024",
    title: "Bachelor of Engineering in Computer Engineering",
    subtitle: "Rajiv Gandhi Institute of Technology, Mumbai, India",
    description: "Graduated in 2024 with 8.5 GPA; coursework in systems, databases, networks, algorithms, and software engineering.",
  }
];

export const blogPosts = [
  {
    title: 'Mastering React Hooks',
    slug: 'mastering-react-hooks',
    excerpt: 'A deep dive into React Hooks, their use cases, and best practices for modern React development.',
    date: 'Jun 12, 2025',
    readTime: '12 min read',
    tags: ['React', 'JavaScript', 'Web Development'],
  },
  {
    title: 'Restaurant Risk Prediction using ML',
    slug: 'restaurant-risk-prediction-using-ml',
    excerpt: 'Exploring the use of Machine Learning to predict the risk of a restaurant.', 
    date: 'Dec 1, 2022',
    readTime: '7 min read',
    tags: ['Machine Learning', 'Data Science', 'Python'],
    link: 'https://medium.com/@imkuldip/restaurant-risk-prediction-using-ml-9f6308cbf18d'
  },
  {
    title: 'BountyCon 2020 CTF — Anti What',
    slug: 'bountycon-2020-ctf-anti-what',
    excerpt: 'A writeup of CTF challenge Anti What from BountyCon 2020.',
    date: 'Feb 15, 2020',
    readTime: '4 min read',
    tags: ['CTF', 'Bug Bounty', 'InfoSec'],
    link: 'https://medium.com/bugbountywriteup/bountycon-2020-ctf-anti-what-5961293ab934'
  },
];

export const publications = [
  {
    title: "Road accident analysis and hotspot prediction",
    venue: "Copyright Office Government of India",
    details: "Diary Number: 10186/2024-CO/L (pending)",
    date: "Apr 03, 2024",
  },
  {
    title: "Olympics Sports Data Analysis",
    venue: "International Journal of Engineering and Technology (IRJET)",
    details: "Volume 10, Issue 11",
    date: "Nov 2023",
  },
];

export const projects = [
  {
    title: "Video-Gen AI Agent",
    description: "An AI-powered video generation pipeline using Replicate and multimodal models for automated content creation.",
    image: "https://placehold.co/600x400/000000/FFF?text=Video-Gen+AI+Agent",
    technologies: [
      "n8n",
      "Replicate",
      "Webhooks",
    ],
    links: {
      visit: "https://renmotc.github.io/video-gen-ai",
      github: "https://github.com/RenmoTC/video-gen-ai",
    }
  },
  {
    title: "London Crime Map",
    description: "An interactive Shiny app predicting crime hotspots in London using socioeconomic and historical crime data.",
    image: "https://placehold.co/600x400/000000/FFF?text=London+Crime+Map",
    technologies: [
      "R",
      "Shiny",
      "Geospatial",
    ],
    links: {
      github: "https://github.com/RenmoTC/London-Crime-Map",
    }
  },
  {
    title: "Sentinel AI SOC Dashboard",
    description: "A cybersecurity dashboard integrating VirusTotal, URLScan, and IBM X-Force for real-time threat monitoring.",
    image: "https://placehold.co/600x400/000000/FFF?text=Sentinel+AI+SOC",
    technologies: [
      "Python",
      "APIs",
      "Dashboards",
    ],
    links: {
      github: "https://github.com/RenmoTC/Sentinel-AI-SOC-Dashboard",
    }
  },
  {
    title: "SafeClick",
    description: "A browser extension that scores and flags unsafe URLs using entropy, heuristics, and sandbox checks.",
    image: "https://placehold.co/600x400/000000/FFF?text=SafeClick",
    technologies: [
      "JavaScript",
      "Browser Extension",
    ],
    links: {
      github: "https://github.com/RenmoTC/SafeClick",
    }
  },
  {
    title: "Password Strength Extension",
    description: "A Chrome extension that measures password entropy and provides real-time feedback on password strength.",
    image: "https://placehold.co/600x400/000000/FFF?text=Password+Strength",
    technologies: [
      "JavaScript",
      "Chrome Extension",
    ],
    links: {
      github: "https://github.com/RenmoTC/Password-Strength-Extension",
    }
  },
  {
    title: "IESF Dashboard",
    description: "Digitized and standardized 120k+ environmental records; built a Supabase/PostGIS-backed dashboard with AWS ingestion and geospatial visualizations.",
    image: "https://placehold.co/600x400/000000/FFF?text=IESF+Dashboard",
    technologies: [
      "Supabase",
      "PostgreSQL",
      "AWS",
      "Geospatial",
    ],
    links: {
      visit: "https://glittery-pavlova-c753fc.netlify.app/",
    }
  },
];
