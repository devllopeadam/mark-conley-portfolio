import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

type SkillItem = {
  skill_name: string;
  image: string;
  width: number;
  height: number;
};

export const SKILL_DATA = [
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "React Native",
    image: "reactnative.png",
    width: 70,
    height: 70,
  },
] as const;

export const SOCIALS = [
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://instagram.com",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    link: "https://facebook.com",
  },
  {
    name: "Twitter",
    icon: RxTwitterLogo,
    link: "https://x.com/_sanidhyy",
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "HTML5",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS3",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Native",
    image: "reactnative.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Mobile-first Design",
    image: "mui.png",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
  },
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "React Native",
    image: "reactnative.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },
] as const;

export const OTHER_SKILL: SkillItem[] = [];

export const EXPERIENCE = [
  {
    period: "2019.10 - 2026.4",
    company: "LINGA POS System",
    role: "Software Developer",
    description:
      "Built scalable web and mobile applications using JavaScript, React, and Node.js, focusing on clean implementation, reliable delivery, and user-focused product experiences.",
  },
] as const;

export const CERTIFICATIONS = [
  {
    category: "AI",
    name: "Generative AI Model Specialization",
    provider: "Databricks",
    issued: "2022.5.16",
    description:
      "Specialized in generative AI models and building practical solutions with advanced AI technologies.",
  },
  {
    category: "AWS",
    name: "AWS Cloud Certification",
    provider: "Digital Cloud Training",
    issued: "2020.10.21",
    description:
      "Certified in AWS cloud architecture and core cloud services.",
  },
] as const;

export const EDUCATION = [
  {
    school: "Southern New Hampshire University",
    location: "Manchester, NH, United Status",
    duration: "2015.9 - 2019.6",
    degree: "Bachelor of Computer Science",
    subject: "Computer Science",
  },
] as const;

export const PROJECTS = [
  {
    title: "AI Automation Projects - Healthcare / Medical Consultation System",
    description:
      "Built an AI-powered healthcare consultation system for symptom submission, guided triage, appointment booking, provider communication, doctor dashboards, scheduling, analytics, and secure medical workflows.",
    image: "/projects/project-1.png",
    link: "https://virtualtriage.ai/",
  },
  {
    title: "RealEstate Management Project",
    description:
      "Built a real estate management platform for listings, tenants, leases, maintenance requests, payments, documents, communication, owner reporting, and admin-level portfolio management.",
    image: "/projects/project-2.png",
    link: "https://residen.io/",
  },
  {
    title: "B2B Cross-Border Payments System",
    description:
      "Built a secure fintech dashboard for sending, receiving, tracking, and reconciling international payments with multi-currency flows, beneficiary management, compliance checks, and payment monitoring.",
    image: "/projects/project-3.png",
    link: "https://www.transfi.com/",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "YouTube",
        icon: FaYoutube,
        link: "https://youtube.com",
      },
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com",
      },
      {
        name: "Discord",
        icon: RxDiscordLogo,
        link: "https://discord.com",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://instagram.com",
      },
      {
        name: "Twitter",
        icon: RxTwitterLogo,
        link: "https://x.com/_sanidhyy",
      },
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://linkedin.com",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "Become Sponsor",
        icon: null,
        link: "https://youtube.com",
      },
      {
        name: "Learning about me",
        icon: null,
        link: "https://example.com",
      },
      {
        name: "Contact Me",
        icon: null,
        link: "mailto:contact@example.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Experience",
    link: "#experience",
  },
  {
    title: "Projects",
    link: "#projects",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/sanidhyy/space-portfolio",
};
