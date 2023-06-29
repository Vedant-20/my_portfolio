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
    meta,
    starbucks,
    tesla,
    shopify,
    ssc,
    be,
    fusionstack,
    carrent,
    jobit,
    tripguide,
    threejs,
    flutter,
    fit,
    nextjs,
    c,
    cpp,
    firebase,
    express,
    dart,
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: reactjs,
    },
    {
      title: "Backend Developer",
      icon: nodejs,
    },
    {
      title: "Flutter Developer",
      icon: flutter,
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
      name: "Flutter",
      icon: flutter,
    },
    {
      name: "Dart",
      icon: dart
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
      name: "Firebase",
      icon: firebase,
    },
    {
      name: "Express",
      icon: express
    },
    {
      name: "Figma",
      icon: figma,
    },
    {
      name: "Docker",
      icon: docker,
    },
    {
      name: 'Nextjs',
      icon: nextjs,
    },
    {
      name: 'C',
      icon: c,
    },
    {
      name: 'CPP',
      icon: cpp,
    }
  ];
  
  const experiences = [
    {
      title: "SSC",
      company_name: "School",
      icon: ssc,
      iconBg: "#383E56",
      date: "June 2015 - May 2016",
      points: [
        "Passed the 10th Board exam",
        "Percentage : 94.20",
        "School Name : Sanjuba High School",
        "City : Nagpur",
      ],
    },
    {
      title: "HSC",
      company_name: "Junior College",
      icon: ssc,
      iconBg: "#E6DEDD",
      date: "May 2017 - May 2018",
      points: [
        "Passed the 12th Board exam",
        "Percentage : 84.62",
        "College Name : St. Paul Junior College",
        "City : Nagpur",
      ],
    },
    {
      title: "Bachelor of Engineering",
      company_name: "RTMNU",
      icon: be,
      iconBg: "#383E56",
      date: "August 2019 - August 2023",
      points: [
        "Passed the B.E exam",
        "CGPA : 6.8",
        "College Name : St. Vincent Pallotti College of Engineering and Technology",
        "City : Nagpur",
      ],
    },
    {
      title: "Flutter Developer Intern",
      company_name: "First Impression Technologies",
      icon: fit,
      iconBg: "#E6DEDD",
      date: "June 2022 - November 2022",
      points: [
        "Developing and maintaining android applications using Flutter and other related technologies.",
        "Implemented the Cloud Firestore and Provider in Project.",
        "Implementing responsive design.",
        "Participating in code reviews.",
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