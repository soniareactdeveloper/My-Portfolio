// import images
import Hero_person from "./assets/images/Hero/person.png";

import figma from "./assets/images/Skills/figma.png";
import reactjs from "./assets/images/Skills/react.png";
import html from "./assets/images/Skills/html.png";
import css from "./assets/images/Skills/css.png";
import js from "./assets/images/Skills/js.png";
import mongodb from "./assets/images/Skills/mongodb.png";
import node from "./assets/images/Skills/node.png";
import tailwind from "./assets/images/Skills/tailwind.png";
import redux from "./assets/images/Skills/redux.png";
import firebase from "./assets/images/Skills/firebase.png";
import git from "./assets/images/Skills/git.png";
import express from "./assets/images/Skills/express.png";



import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";



// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Web Developer",
    firstName: "SONIA",
    LastName: "AKTER",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "3+",
        text: "Years of Experience in Web development",
      },
      {
        count: "10+",
        text: "Projects Worked in my career",
      },
    ],
  },
  // skills
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "HTML",
        para: "Structure, Tags, Semantics, Accessibility",
        logo: html,
      },
      {
        name: "CSS",
        para: "Styling, Layout, Animations, Responsive Design",
        logo: css,
      },
      {
        name: "JavaScript",
        para: "Functions, Events, Objects, Interactivity",
        logo: js,
      },
      {
        name: "React JS",
        para: "Components, Hooks, State Management, Routing",
        logo: reactjs,
      },
      {
        name: "Redux",
        para: "State Management, Middleware, Store, Actions",
        logo: redux,
      },
      {
        name: "Tailwind CSS",
        para: "Utility Classes, Customization, Responsive Styling",
        logo: tailwind,
      },
      {
        name: "Figma",
        para: "Prototyping, Wireframes, Collaboration, Design Systems",
        logo: figma,
      },
      {
        name: "Git & GitHub",
        para: "Version Control, Branching, Collaboration, Commits",
        logo: git,
      },
      {
        name: "Firebase",
        para: "Authentication, Firestore, Hosting, Realtime Database",
        logo: firebase,
      },
      // 🔥 Backend starts here 🔥
      {
        name: "Node.js",
        para: "Server-side JS, APIs, Middleware, Event-driven",
        logo: node,
      },
      {
        name: "Express.js",
        para: "Routing, Middleware, RESTful APIs, Backend Logic",
        logo: express,
      },
      {
        name: "MongoDB",
        para: "NoSQL, Schemas, CRUD Operations, Mongoose",
        logo: mongodb,
      },
    ],
    icon: MdArrowForward,
  },
  // services
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "I offer expert web development with clean, efficient code, responsive design, interactive features, and optimized performance for engaging, user-friendly websites that adapt seamlessly across devices.",
        logo: services_logo1,
      },
      {
        title: "UI / UX Design",
        para: "I provide exceptional UI/UX design with intuitive interfaces, user-centered designs, seamless navigation, and engaging visuals, ensuring enhanced user satisfaction and usability.",
        logo: services_logo2,
      },
      {
        title: "Backend Development",
        para: "I specialize in building robust backend systems using Node.js, Express, and MongoDB, with secure APIs, efficient database management, and server-side logic to power scalable web applications.",
        logo: services_logo1,
      },
      {
        title: "Full-stack Development",
        para: "I offer end-to-end full-stack development, integrating frontend technologies like React with backend solutions like Node.js, ensuring seamless data flow, secure authentication, and dynamic web applications.",
        logo: services_logo2,
      },
      {
        title: "Database Management",
        para: "I provide optimized database solutions, including MongoDB and SQL databases, for structured and unstructured data storage, with powerful queries and scalability for your application needs.",
        logo: services_logo1,
      },
      {
        title: "API Development & Integration",
        para: "I develop custom RESTful APIs, integrate third-party services, and ensure smooth data exchange between the frontend and backend for enhanced functionality and performance.",
        logo: services_logo2,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    project_content : [
      {
          title: "Logistics Company Website",
          image: "img src="https://i.ibb.co.com/wr66Qj8w/Screenshot-2025-09-11-071221.png",
          liveLink: 'https://swift.commercialtirerepairllc.com/',
        },
        {
          title: "Amazon Affiliate Website",
          image: "https://i.ibb.co.com/LzkN3yMx/Screenshot-2025-09-11-070211.png",
          liveLink: 'https://bestfitnessshop.com/',
        },
      {
        title: "E-commerce Website",
        image: "https://img.freepik.com/free-vector/online-shopping-concept-landing-page_52683-11069.jpg?t=st=1744179775~exp=1744183375~hmac=529729f739ec3617883ee1aa78bc34bc17b8287fa8a08e17a7cbafc67a713441&w=1380", 
        liveLink: 'https://florist-weld.vercel.app/',
      },
      {
        
      {
        title: "To-Do list",
        image: "https://i.ibb.co.com/0rMvvms/imgOne.jpg",
        liveLink: 'https://todo-list-chi-ten-25.vercel.app/',
      },
      {
        title: "Authentication",
        image: "https://www.onelogin.com/blog/wp-content/uploads/2023/05/advanced-authentication-blog-image.jpg.optimal.jpg",
        liveLink: 'https://auth-frontend-xv37.onrender.com',
      },
      {
        title: "Creative Website",
        image: "https://i.ibb.co.com/tZ0zcdW/imgThree.jpg",
        liveLink: 'https://smart-n-otes.vercel.app/',
      }
    ]
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    para: "Innovative React developer with expertise in both frontend and backend technologies, specializing in building responsive, dynamic web applications with seamless animations and cutting-edge design. Let's bring your ideas to life with modern, user-friendly interfaces and robust backend solutions.",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contact Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "soniareactdeveloper@gmail.com",
        icon: GrMail,
        link: "mailto:soniareactdeveloper@gmail.com",
      },
      {
        text: "+8801894071353",
        icon: MdCall,
        link: "https://web.whatsapp.com/",
      },
      {
        text: "soniareactdeveloper",
        icon: FaGithub,
        link: "https://github.com/soniareactdeveloper",
      },
    ],
  },
};
