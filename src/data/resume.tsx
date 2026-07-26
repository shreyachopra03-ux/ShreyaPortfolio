import type { ReactNode } from "react";
import { Icons } from "@/components/icons";
import { GitBranch, HomeIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Csharp } from "@/components/ui/svgs/csharp";

type Hackathon = {
  title: string;
  dates?: string;
  location?: string;
  description?: string;
  image?: string;
  links?: Array<{ href: string; title: string; icon: ReactNode }>;
};

type ProjectLink = {
  type: string;
  href: string;
  icon: ReactNode;
};

type Project = {
  title: string;
  href: string;
  dates: string;
  active: boolean;
  description: string;
  technologies: string[];
  links: ProjectLink[];
  image?: string;
  video?: string;
};

export const DATA = {
  name: "Shreya Chopra",
  initials: "SC",
  url: "https://shreya-portfolio.vercel.app",
  location: "Delhi, India",
  description: "Full Stack Developer specializing in MERN, TypeScript, and Tailwind CSS. I build scalable web apps end-to-end, from backend architecture to pixel-perfect, luxury UI/UX.",
  summary:
    "Full Stack Developer specializing in MERN, TypeScript, and Tailwind CSS. I build scalable web apps end-to-end, from backend architecture to pixel-perfect, luxury UI/UX. Currently diving deep into AI integration to build smarter, more powerful products.",
  avatarUrl: "/me.png",
  skills: [
    // Languages
    { name: "C/C++", icon: Csharp },
    { name: "JavaScript" },
    { name: "TypeScript", icon: Typescript },
    // Frontend
    { name: "React", icon: ReactLight },
    { name: "Redux" },
    { name: "Tailwind CSS" },
    { name: "HTML/CSS" },
    // Backend & Databases
    { name: "Node.js", icon: Nodejs },
    { name: "Express.js" },
    { name: "MongoDB" },
    { name: "Firebase" },
    { name: "REST APIs" },
    // AI/LLM
    { name: "LangChain" },
    { name: "RAG" },
    // Tools & Services
    { name: "FFmpeg" },
    { name: "Clerk Auth" },
    { name: "Cloudinary" },
    { name: "Git", icon: GitBranch },
    { name: "GitHub" },
  ],
  hackathons: [
    {
      title: "Smart India Hackathon (SIH)",
      description: "Participated in Smart India Hackathon, one of India's largest national-level hackathons.",
    },
    {
      title: "Build with India Hackathon",
      description: "Participated in the Build with India Hackathon.",
    },
    {
      title: "Deloitte Technology Job Simulation (Forage)",
      description: "Completed practical tasks in Coding and Development as part of Deloitte's Technology Job Simulation on Forage.",
    },
    {
      title: "PCB Design Workshop",
      location: "CDAC Noida",
      description: "Completed PCB Design Workshop at CDAC Noida.",
    },
    {
      title: "Machine Learning Certification",
      description: "Completed Machine Learning Certification from NIELIT.",
    },
  ] as Hackathon[],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "chopra.shreya003@gmail.com",
    tel: "+917982456121",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/shreyachopra03-ux",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/shreya-chopra03/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/chopra_shreya03",
        icon: Icons.x,
        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:chopra.shreya003@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [],
  education: [
    {
      school: "Guru Tegh Bahadur Institute of Technology",
      href: "https://www.gtbit.ac.in/",
      degree: "Bachelor of Technology in Electronics and Communication",
      logoUrl: "/gtbit.png",
      start: "2022",
      end: "2026",
    },
    {
      school: "JM International School",
      href: "",
      degree: "XII (CBSE) — 88%",
      logoUrl: "/jmis.png",
      start: "2020",
      end: "2021",
    },
  ],
  projects: [
    {
      title: "Archive",
      href: "https://timeline-project-eosin.vercel.app/login",
      dates: "2025",
      active: true,
      description:
        "Architected a full-stack media management platform using MongoDB, Express, React, and Node.js (MERN), with TypeScript across the entire pipeline. Engineered an asynchronous server-side video assembly pipeline utilizing FFmpeg, handling end-to-end media uploads via Cloudinary. Integrated secure user authentication using Clerk and designed a premium, warm archive-themed UI using Tailwind CSS.",
      technologies: ["MERN Stack", "TypeScript", "Cloudinary", "Clerk", "FFmpeg", "MongoDB", "Express", "React", "Node.js", "Tailwind CSS"],
      links: [
        {
          type: "Website",
          href: "https://timeline-project-eosin.vercel.app/login",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/shreyachopra03-ux/Timeline_Project",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Sandburgs",
      href: "https://namaste-react-series-pi.vercel.app/",
      dates: "2025",
      active: true,
      description:
        "Engineered a high-performance Food Delivery Web App using React and TypeScript, ensuring type safety and scalable architecture. Implemented centralized state management using Redux Toolkit for real-time cart updates. Optimized performance with lazy loading and custom hooks, significantly reducing initial load times.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Redux Toolkit"],
      links: [
        {
          type: "Website",
          href: "https://namaste-react-series-pi.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/shreyachopra03-ux/Namaste-React-Series",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/sandburgs.png",
      video: "",
    },
    {
      title: "FlixVerse",
      href: "https://netflixproject-mu.vercel.app/",
      dates: "2025",
      active: true,
      description:
        "Developed a Movie Discovery Platform using React and TMDB API, featuring dynamic data fetching and horizontal scrolling. Integrated OpenAI GPT API to build a custom AI Movie Suggestion feature for personalized recommendations. Secured user data with Firebase authentication.",
      technologies: ["React", "Firebase", "TMDB API", "OpenAI GPT API", "Tailwind CSS"],
      links: [
        {
          type: "Website",
          href: "https://netflixproject-mu.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/shreyachopra03-ux/netflix_project",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/flixVerse.png",
      video: "",
    },
  ] as Project[],
} as const;
