import emoji from "react-easy-emoji";

export const greetings = {
  name: "Prateek Mohanty",
  title: "Hi all, I'm Prateek",
  description:
    "Hello eveyone, Prateek here I am a backend developer with proficient knowledge in backend frameworks like Django/ flask / Nodejs/ Express. ",
  resumeLink:
    "https://novoresume.com/editor/resume/cba735d0-3bb3-11eb-98cc-f7b8c2f9ecf4",
};

export const openSource = {
  githubUserName: "prateekmohanty63",
};

export const contact = {};

export const socialLinks = {
  // facebook: "https://www.facebook.com/1hanzla100",
  instagram: "https://www.instagram.com/prateekmohanty08/",
  // twitter: "https://twitter.com/1hanzla100",
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
    progressPercentage: "70", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "90",
  },
  {
    Stack: "Programming",
    progressPercentage: "80",
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
    duration: "September 2020 - May 2024",
    desc: "",
    descBullets: [
      "Pursuing Computer Science in Vellore Institute of Technology ",
      "Currently in 2nd Year of Graduation",
    ],
  },
  {
    schoolName: "Bharatiya vidya bhavan",
    subHeader: "Completed my 10th standard",
    duration: "September 2017 - April 2018",
    desc: "Represented the school in National Green Building Competetion ",
    descBullets: ["Took part in many extra-ciricular activities"],
  },
];

export const experience = [
  {
    role: "Tech Lead",
    company: "Reroute",
    companylogo: "/img/icons/common/Reroute.svg",
    date: "June 2020 – Present",
    desc: "Working towards building a platform for the startup to expand its reach",
    descBullets: [
      "Leaded the Project",
      "Taking care of the backend development",
    ],
  },
  {
    role: "Technical Team",
    company: "OWASP",
    companylogo: "/img/icons/common/owasp-final.png",
    date: "September 2020 – Present",
    desc: "In OWASP we work towards making internet a much safer place by spreading awarness among people about internet and technology best practices",
  },
  {
    role: "Technical Team",
    company: "Technocrat",
    companylogo: "/img/icons/common/technocrat.jfif",
    date: "Sept 2020 – Present",
    desc: "In techocrat we built Robots which can help the humanity and society become a better place",
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
    name: "Ritwik",
    feedback:
      "We have been very happy with our new website! It looks professional and very easy to navigate. Our experience with the customer service at Hanzla tauqeer has been great. They handle things very efficiently and are available for any questions we have. They also keep us updated on daily reports so we know how our site is doing. I would recommend that u have choose hanzla web developer services for u.",
  },
  {
    name: "Sandeep shah",
    feedback:
      "the website is very nice, everything was perfectly made as i need. it just loads in moments, without giving u the chance to wait. the quality is also very amazing. i am using it without any problem. great job",
  },
];

export const blogs = [
  {
    role: "Blog-1",
    company: "To Cloud or Not to Cloud: How should you store your data?",
    companylogo: "/img/icons/common/Reroute.svg",
    date: "June 2018 – Present",
    desc: "To Cloud or Not to Cloud: How should you store your data?",
    descBullets: [
      "Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    ],
    link: "https://lnkd.in/gK7Bgix5",
  },
  {
    role: "Blog-2",
    company: "OWASP",
    companylogo: "/img/icons/common/owasp-final.png",
    date: "May 2017 – May 2018",
    desc: "Pegasus: A Spyware developed by the Israeli cyberarms firm, NSO Group",
    link: "https://lnkd.in/gMG7Z35w",
  },
  {
    role: "Blog-3",
    company: "Technocrat",
    companylogo: "/img/icons/common/technocrat.jfif",
    date: "Jan 2015 – Sep 2015",
    desc: "Data Loss Prevention: An Introduction",
    link: "https://blog.owaspvit.com/2021/01/data-loss-prevention-introduction.html",
  },
  {
    role: "Blog-4",
    company: "Technocrat",
    companylogo: "/img/icons/common/technocrat.jfif",
    date: "Jan 2015 – Sep 2015",
    desc: "CORS POLICY",
    link: "https://blog.owaspvit.com/2021/06/cors-policy.html",
  },
];

export const Competative_programming_info = [
  {
    role: "2 STARS",
    company: "LeetCode",
    companylogo: "/img/icons/common/leetcode.png",
    date: "",
    desc: "OVER 100 QUESTIONS SOLVED",
    descBullets: [
      "300 SUBMISSIONS IN THE LAST YEAR",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    ],
  },
  {
    role: "5 STAR IN C++ AND PYTHON",
    company: "Hackerrank",
    companylogo: "/img/icons/common/hackerrank.png",
    date: "May 2017 – May 2018",
    desc: "ALL QUESTIONS OF C++ AND PYTHON SOLVED",
  },
  {
    role: "365 RATING",
    company: "Code Forces",
    companylogo: "/img/icons/common/codeforces.jfif",
    date: "Jan 2015 – Sep 2015",
    desc: "1 MONTH STREAK",
  },
];
