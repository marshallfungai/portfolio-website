import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import netHouseAppGif from "@/public/nethouse-app.gif";
import skyborneTravelImg from "@/public/Skyborne-Travel-Agency.png";
import mutupoWineCollectionImg from "@/public/Mutupo-Wine-Collection.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/marshallfungai/",
    icon: React.createElement(FaReact),
  },
  {
    name: "GitHub",
    url: ""
  }
] as const;

export const experiencesData = [
  {
    title: "Full Stack Developer",
    location: "Johannesburg Gauteng, South Africa",
    company: "Photon Organization",
    description: "Energy company specializing in solar installations. Developed in-house software for management purposes, managed and coordinated system architecture, played a role in application security, used technologies like JavaScript, PHP, MySQL, Flutter, and Python, integrated third-party software, provided consultation on security to develop Cybersecurity policy including Acceptable Use Policy, and assisted in server and network management.",
    date: "June 2021 - Present",
    icon: React.createElement(FaReact),
  },
  {
    title: "Software Developer",
    location: "Nicosia, North Cyprus",
    company: "Nethouse Networks",
    description:"The largest ISP provider in North Cyprus. I developed modern front-end interfaces using React, Redux, PHP, and React Native. I also utilized Flutter (Dart framework) for mobile app development and participated in red-teaming to test web application security.",
    date: "October 2019 - February 2021",
    icon: React.createElement(CgWorkAlt),
  },
  {
    title: "Full Stack Developer",
    location: "Nicosia, North Cyprus",
    company: "Kibrisonline Networks",
    description:" A digital agency specializing in brand management and social media marketing. Responsibilities included website design, API integration, Joomla/WordPress theme development, Search Engine Optimizations (SEO), web app maintenance and upgrade, security reviews, user management, and photoshop designs for social media clients.",
    date: "November 2015 - September 2019",
    icon: React.createElement(LuGraduationCap),
  },
  {
    title: "Data Entry (Part-time)",
    location: "Sanayi Bogesi/Industrial Complex, North Cyprus",
    company: "ASEL GRP OF COMPANIES",
    description: " Performed data entry clerical tasks for the company’s micro-database system (custom database for their products) under a 4-month contract.",
    date: "4-month Contract",
    icon: React.createElement(FaReact),
  },
  {
    title: "Junior Web Developer (Temporary)",
    company: "Innovia Digital",
    location: "Nicosia, North Cyprus",
    description: "Worked on multiple projects, debugging apps, implementing designs, and creating scripts to accomplish repetitive tasks.",
    date: "May 2015 - October 2015",
    icon: React.createElement(LuGraduationCap),
  },
] as const;

export const projectsData = [
  {
    title: "Skyborne Travel Agency",
    description:
      "A travel booking website built on Laravel and MySQL. Responsible for setup and continued maintenance work.",
    tags: ["Travel", "Laravel", "MySQL", "Website"],
    imageUrl: skyborneTravelImg,
    projectUrl: "https://skybornetravel.com",
  },
  {
    title: "Nethouse and Kibrisonline Mobile Application",
    description:
      "Worked as the team lead to create two mobile apps for sister ISP companies. Developed for IOS and Android using Flutter.",
    tags: ["Mobile App", "Flutter", "iOS", "Android"],
    imageUrl: netHouseAppGif,
    projectUrl: "https://play.google.com/store/apps/details?id=netonline.nethouse.hesabim.nethouse_hesabim_app",
  },
  {
    title: "Mutupo Wıne Collectıon",
    description:
      "Mutopo wıne collection website is built with react and redux. It is a wine collection website that allows users to view and purchase wine. It is built with react and redux.",
    tags: ["e-commerce", "react", "redux"],
    imageUrl: mutupoWineCollectionImg,
    projectUrl: "https://mutupowinecollection.com/",
  },
  // {
  //   title: "Dradis Framework dashboard",
  //   description:
  //     "An in-house security dashboard for Photon Organization. It collects and reports security issues. Collaborated with a diverse team to meet software development cycle targets. Early development version available on GitHub as a concept.",
  //   tags: ["Security", "Dashboard", "JavaScript", "Collaboration"],
  //   imageUrl: wordanalyticsImg,
  //   projectUrl: "https://github.com/marshallfungai/dradis-ce",
  // },
] as const;


export const skillsData = [
  "MySQL",
  "PostgreSQL",
  "Google FireBase",
  "Redis",
  "Memcache",
  "MongoDB",
  "ES5",
  "ES6",
  "ES7",
  "jQuery",
  "PHP",
  "React Native",
  "React",
  "Express JS (NodeJS)",
  "Flutter (DART)",
  "HTML",
  "CSS3",
  "Bash",
  "Python",
  "Laravel",
  "TypeScript",
  "JWT",
  "C#",
  ".Net",
  "AngularJS",
  "Linux Configurations",
  "GIT",
  "Vagrant",
  "Google Analytics",
  "Search Engine Optimization (SEO)",
  "Cloud Deployment (Digital Ocean)",
  "Wordpress theme and plugin development",
  "OpenAI Integration",
  "Open Source LLM integration",
  "Docker/Kubernetes",
  "SAST/DAST concepts",
  "Web Penetration testing",
  "Security Reporting",
  "Risk Management",
  "Endpoint Security",
  "Disaster Recovery",
] as const;