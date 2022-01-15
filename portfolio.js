import emoji from "react-easy-emoji";

export const greetings = {
  name: "Prateek Mohanty",
  title: "Hi all, I'm Prateek",
  description:
    "Hello eveyone, Prateek here I am a backend developer with proficient knowledge in backend frameworks like Django/ flask / Nodejs/ Express. ",
  resumeLink: "https://cv.hanzla.ga",
};

export const openSource = {
  githubUserName: "prateekmohanty63",
};

export const contact = {};

export const socialLinks = {
  facebook: "https://www.facebook.com/1hanzla100",
  instagram: "https://www.instagram.com/prateekmohanty08/",
  twitter: "https://twitter.com/1hanzla100",
  github: "https://github.com/prateekmohanty63",
  linkedin: "https://www.linkedin.com/in/prateek-mohanty-160048165/",
};

export const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY BACK END DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    ),
  ],

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "vscode-icons:file-type-html",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "vscode-icons:file-type-css",
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "logos:sass",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "logos:javascript",
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "logos:typescript-icon",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "vscode-icons:file-type-reactjs",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "logos:nodejs-icon",
    },
    {
      skillName: "flutter",
      fontAwesomeClassname: "logos:flutter",
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "vscode-icons:file-type-swift",
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "vscode-icons:file-type-npm",
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "vscode-icons:file-type-sql",
    },
    {
      skillName: "mongoDB",
      fontAwesomeClassname: "vscode-icons:file-type-mongo",
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "logos:aws",
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "logos:firebase",
    },
    {
      skillName: "python",
      fontAwesomeClassname: "logos:python",
    },
    {
      skillName: "git",
      fontAwesomeClassname: "logos:git-icon",
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "logos:docker-icon",
    },
  ],
};

export const SkillBars = [
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "90", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "70",
  },
  {
    Stack: "Programming",
    progressPercentage: "60",
  },
];

export const educationInfo = [
  //   {
  //     schoolName: "Harvard University",
  //     subHeader: "Master of Science in Computer Science",
  //     duration: "September 2017 - April 2019",
  //     desc: "Participated in the research of XXX and published 3 papers.",
  //     descBullets: [
  //       "Lorem ipsum dolor sit amet, consectetur adipdfgiscing elit",
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  //     ],
  //   },
  {
    schoolName: "Vellore Institute of Technology,chennai",
    subHeader: "Bachelor of Science in Computer Science",
    duration: "September 2017 - April 2019",
    desc: "Participated in the research of XXX and published 3 papers.",
    descBullets: [
      "Lorem ipsum dolor sit amet, consectetfgur adipiscing elit",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    ],
  },
  {
    schoolName: "Bharatiya vidya bhavan",
    subHeader: "Completed my 10th standard",
    duration: "September 2013 - April 2017",
    desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
    descBullets: ["Lorem ipsum dolorfdg sit amet, consectetur adipiscing elit"],
  },
];

export const experience = [
  {
    role: "Tech Lead",
    company: "Reroute",
    companylogo: "/img/icons/common/Reroute.svg",
    date: "June 2018 – Present",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    descBullets: [
      "Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    ],
  },
  {
    role: "Technical Team",
    company: "OWASP",
    companylogo: "/img/icons/common/owasp-final.png",
    date: "May 2017 – May 2018",
    desc: "Lorem ipsum dolor sit amet, consefdctetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    role: "Technical Team",
    company: "Technocrat",
    companylogo: "/img/icons/common/technocrat.jfif",
    date: "Jan 2015 – Sep 2015",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export const projects = [
  {
    name: "Fitness Website for Reroute",
    desc: "Developed a Fitness Website for a bangalore based startup ",
    link: "https://github.com/prateekmohanty63/REROUTE-FINAL",
  },
  {
    name: "Quiz Portal",
    desc: "Developing a Quiz portal for students of varying fields",
    github: "https://github.com/technocrats-robotics/techno-quiz",
  },
  {
    name: "SQL INJECTION VUNREABILITY",
    desc: "A website giving viewers a understanding of SQL INJECTION and how it is used by mailcious users",
    github: "https://github.com/prateekmohanty63/SQL_Injection_Simulation",
    link: "https://example.com",
  },
  {
    name: "Student study portal",
    desc: "A one stop website for students,helping them to organize their work and making managing schedule easier",
    github: "https://github.com/prateekmohanty63/Student-Study-Portal",
    link: "https://example.com",
  },
];

export const feedbacks = [
  {
    name: "Hassan Mehmood",
    feedback:
      "We have been very happy with our new website! It looks professional and very easy to navigate. Our experience with the customer service at Hanzla tauqeer has been great. They handle things very efficiently and are available for any questions we have. They also keep us updated on daily reports so we know how our site is doing. I would recommend that u have choose hanzla web developer services for u.",
  },
  {
    name: "Maheen Altaf",
    feedback:
      "the website is very nice, everything was perfectly made as i need. it just loads in moments, without giving u the chance to wait. the quality is also very amazing. i am using it without any problem. great job",
  },
];

export const blogs = [
  {
    role: "Blog-1",
    company: "Reroute",
    companylogo: "/img/icons/common/Reroute.svg",
    date: "June 2018 – Present",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    descBullets: [
      "Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    ],
    link: "https://github.com/prateekmohanty63/REROUTE-FINAL",
  },
  {
    role: "Blog-2",
    company: "OWASP",
    companylogo: "/img/icons/common/owasp-final.png",
    date: "May 2017 – May 2018",
    desc: "Lorem ipsum dolor sit amet, consefdctetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "https://github.com/prateekmohanty63/REROUTE-FINAL",
  },
  {
    role: "Blog-3",
    company: "Technocrat",
    companylogo: "/img/icons/common/technocrat.jfif",
    date: "Jan 2015 – Sep 2015",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "https://github.com/prateekmohanty63/REROUTE-FINAL",
  },
];
