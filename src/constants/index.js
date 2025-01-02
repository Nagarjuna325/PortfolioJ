import {
  mobile,
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
  Javai,
  pythoni,
  Springboot,
  hephium,
  download,
  Deloitte,
  carrent,
  jobit,
  tripguide,
  Oyesters,
} from "../assets";

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
    title: "Java Developer",
    icon: web,
  },
  {
    title: "Nodejs Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "AI/ML Developer",
    icon: creator,
  },
];

const technologies = [
  

  {
    name: "JavaScript",
    icon: javascript,
  },
  {
      name: "Java",
    icon: Javai,
  },
  {
    name: "Python",
    icon: pythoni,
  },
  {
    name: "Spring Boot",
    icon: Springboot,
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
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Hephium LLC",
    icon: hephium,
    iconBg: "#383E56",
    date: "Jan 2024 - Present",
    points: [
      "Developed and implemented 12+ REST APIs for real-time audit management and dynamic ticket template creation, using Java Spring Boot.",
      "Created Spring Data MongoDB to manage database interactions and fetch data efficiently, reducing fetch time from 22.7ms to 12.2ms.",
      "Built authentication flow and real-time chat messaging using JWT and WebSocket."
    ],
  },
  {
    title: "AI/ML Software Intern",
    company_name: " BUILD SYNC",
    icon: download,
    iconBg: "#E6DEDD",
    date: " Aug 2024 - Oct 2024",
    points: [
      "Conducted model performance analysis of SceneCraft and Text2BIM LLM based multi agent frameworks for AI agents, enabling the synthesis of 3D scene generation into Blender code for automated construction plan design based on user input measurements."
    ],
  },
  {
    title: " Software Developer",
    company_name: " Deloitte Consulting",
    icon: Deloitte,
    iconBg: "#383E56",
    date: "Aug 2021 - July 2022",
    points: [
      "Implemented an alert notification service for ELK using Spring Mail, reducing response time by 65% for transaction failures.",
      "Established the data storage using MySQL 8.0 and created session management using Redis as an in-memory session storage,reducing load time from 500ms to 290ms.",
      "Leveraged Docker for containerization and GitHub Actions for CI/CD, streamlining build processes and updates.",
      "Created reusable Data Access Objects (DAOs) using Spring and Hibernate to handle database operations across the project.",
      "Added error logging and email alerts for exceptions, reducing transaction errors and improving reliability.",
      "Created queries and joins using SQL for data manipulation, optimizing complex queries and minimizing query execution time to 2s",
      "Implemented communication authentication and authorization using Spring Security with OAuth2.0.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Oyesters",
    icon: Oyesters,
    iconBg: "#E6DEDD",
    date: "June 2020 - July 2021",
    points: [
      "Developed webservices in SpringMVC and UI/UX components in ReactJs for the debt collection domain in the Revenue Service Application portal.",
      "Utilized Spring Boot to integrate API services, enabling direct SMS and email push notifications that sends summary of tax debt.",
      "Written test cases for unit testing the modules functionality using JUnit5 framework.",
      "Leveraged React, Axios, Lodash, and jQuery to process JSON/XML and improved load time by 4 seconds",
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
