import {
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  starbucks,
  tesla,
  jobit,
  tripguide,
  meta,
  threejs,
} from "../assets";
import Port1 from "../assets/Port1.png";
import eduwork from "../assets/eduwork.png";
import oochi from "../assets/oochi.png";
import Risc from "../assets/Risc.jpg";
import shell from "../assets/shell.jpg";
import chatportfolio from "../assets/chatportfolio.jpg";
import ogo from "../assets/company/ogo.avif";
import logo from "../assets/company/logo.png";
import heydo from "../assets/company/heydo.jpeg";
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: " Fronted Developer",
    icon: web,
  },
  // {
  //   title: "Aspiring React Native Developer",
  //   icon: mobile,
  // },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Competitive Programmer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Fronted Developer Intern",
    company_name: "Heydo Tech (StartUp)",
    icon: heydo,
    iconBg: "#383E56",
    date: "May 2024 - July 2024",
    points: [
      "Worked with the Founder to design and develop responsive,user-friendly web interfaces using React.js.",
      "Integrated APIs, optimized frontend performance, and ensured cross-browser compatibility for enhanced user experience.",
      "Gained hands-on experience in the startup environment, learning to prioritize tasks and meet tight deadlines while maintaining high-quality standards.",
    ],
  },
  {
    title: "MENTOR",
    company_name: "Physics Wallah",
    icon: ogo,
    iconBg: "#E6DEDD",
    date: "Jul 2024 - Present",
    points: [
      "Guiding over 1500+ students at PW, I deliver high-impact mentorship for JEE exam mastery and career direction.",
      "My commitment is reflected in a stellar 95%+ audit score and a 4.8+ student rating out of 5, empowering students to achieve their highest potential and realize their career aspirations.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "E-Cell IIIT-DELHI",
    icon: logo,
    iconBg: "#E6DEDD",
    date: "Sep 2024 - Present",
    points: [
      "As a Web Developer in the E-Cell club, I am responsible for managing and maintaining the college websites, ensuring smooth functionality and user experience. ",
      "I also organize and support hackathon events, driving innovation and fostering a collaborative environment for aspiring entrepreneurs and tech enthusiasts.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "AngryBird Game",
    description:
      "Developed a GUI based Angry Bird game using crossPlatform Java Game Development Framework and using OOPS Concept",
    tags: [
      {
        name: "JAVA",
        color: "blue-text-gradient",
      },
      {
        name: "LibGDX",
        color: "green-text-gradient",
      },
      {
        name: "OOPS",
        color: "pink-text-gradient",
      },
    ],
    image: Port1,
    source_code_link: "https://github.com/akshatIIIT/MyAngryBird-Game",
  },
  {
    name: "EduWorks Platform",
    description:
      "Created an online platform to manage and showcase student projects, serving as a central hub for collaboration, progress tracking, and resource sharing, empowering students to bring their ideas to life.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: eduwork,
    source_code_link: "https://github.com/akshatIIIT/HackathonProject",
  },
  {
    name: "OurChattingAPP",
    description:
      "Developed a real-time chat app with Bcrypt authentication and AI-powered Question and Answer using OpenAI API and real-time communication with Socket.io",
    tags: [
      {
        name: "Node.js",
        color: "white-text-gradient",
      },
      {
        name: "EJS",
        color: "green-text-gradient",
      },
      {
        name: "Socket.io",
        color: "pink-text-gradient",
      },
      {
        name: "restAPI",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "white-text-gradient",
      },
    ],
    image: chatportfolio,
    source_code_link: "https://github.com/akshatIIIT/basic-chattingAPP",
  },
  {
    name: "Fronted clone",
    description:
      "frontend clone of the Ochi website, designed to replicate its layout, design, and responsiveness. The was the first learning project to demonstrate proficiency in modern frontend technologies and design principles.",
    tags: [
      {
        name: "react.js",
        color: "white-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "green-text-gradient",
      },
      {
        name: "GSAP",
        color: "pink-text-gradient",
      },
    ],
    image: oochi,
    source_code_link: "https://github.com/akshatIIIT/...ochi",
  },
  {
    name: "Assembler and Simulator based on RISC-V",
    description:
      "Developed Python Programming-based Assembler and Simulator, which is centered on RISC V Instruction Set Architecture",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
    ],
    image: Risc,
    source_code_link: "https://github.com/akshatIIIT/basic-chattingAPP",
  },
  {
    name: "Simple Shell",
    description:
      "Developed a custom SimpleShell in C to execute user commands, handle pipes,      maintain history, and support command execution details with error handling.",
    tags: [
      {
        name: "C",
        color: "green-text-gradient",
      },
    ],
    image: shell,
    source_code_link: "https://github.com/akshatIIIT/basic-chattingAPP",
  },
];

export { services, technologies, experiences, testimonials, projects };
