import Cepstrum from "../src/assets/images/Cepstrum.png";
import Helix from "../src/assets/images/helix.png";
import Ucp from "../src/assets/images/UCP2.jpg";
import Mantula from "../src/assets/images/mantula.png";
import Recipe from "../src/assets/images/recipeApp.png";

const logotext = "HS";
const meta = {
  title: "Hamza Siddiqui",
  description:
    "Computer Engineering undergraduat. I am a software and web developer in Pakistan",
};

const introdata = {
  title: "Hamza Siddiqui",
  animated: {
    first: "Software Developer",
    second: "Web Developer",
    third: "Computer Engineer",
  },
  description:
    "Computer Engineering undergrad, and software and web developer by passion.",
  your_img_url:
    "https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?size=626&ext=jpg&ga=GA1.1.367680715.1685245702&semt=ais",
};

const dataabout = {
  title: "About Me",
  aboutme:
    "Computer engineeing undergrad at Ghulam Ishaq Khan Institute (GIKI); I am a software and web devolper, who is also passionate about artificial intelligence. In my free time I love to code, draw, read, and play chess",
};
const worktimeline = [
  {
    jobtitle: "Residential Network Administrator",
    where: "NETRONiX (GIKI)",
    date: "May 23 - present",
  },
  {
    jobtitle: "Sofware Engineering Intern",
    where: "Mantula Solar",
    date: "July 22 - Aug 22",
  },
  {
    jobtitle: "Designer of week",
    where: "ALquds",
    date: "2019",
  },
];

const skills = [
  {
    name: "Web Development",
    value: 80,
  },
  {
    name: "Software Development",
    value: 80,
  },
  {
    name: "Artificial Inteligence",
    value: 50,
  },
];

const services = [
  {
    title: "Residential Network Administrator - NETRONiX (GIKI)",
    description: {
      1: "- Manage and Administer GIK Institute’s mixed topological residential network consisting of over 3500 nodes",
      2: "- Deliver tutorial sessions to junior members on computer networking topics including TCP/ IP, ARP requests routing fundamentals, resulting in an average score increase of 15%",
    },
  },
  {
    title: "Software Engineering Intern - Mantula Solar",
    description: {
      1: "- Collaborated with a team of five diverse individuals remotely, as a full-stack web developer, to develop Mantula’s web application using React.js and Firebase",
      2: "- Optimized key components of the application resulting in a 60% increase in rendering speed and reduced server requests, contributing to improved user experience",
      3: "- Implemented a decision tree price estimator in the UI components and connected APIs to meet customer preferences, providing a personalized experience for users",
    },
  },
];

const dataportfolio = [
  {
    img: Cepstrum,
    description:
      "Spoken digits recognition using cepstrum method. Implementation of cepstrum analysis and ANN model.",
    link: "#",
  },
  {
    img: Helix,
    description:
      "Web application for IoT-based personal voice assisstant/chatbot.",
    link: "#",
  },
  {
    img: Mantula,
    description:
      "Web application for Mantula Solar, with integrated price estimator.",
    link: "#",
  },
  {
    img: Ucp,
    description:
      "Web application for a university complaint portal.",
    link: "#",
  },
  {
    img: Recipe,
    description:
      "Recipe web application; get hundreds of cooking recipes instantly.",
    link: "#",
  },
];

const contactConfig = {
  YOUR_EMAIL: "hamza.eins@gmail.com",
  description:
    "Drop a message or connect with me on my socials. I am always looking for cool projects to work on!",
  // creat an emailjs.com account
  // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
  YOUR_SERVICE_ID: "service_j3bcdwx",
  YOUR_TEMPLATE_ID: "template_yz4epok",
  YOUR_USER_ID: "h6Z9zK5Iv27oBjCrk",
};

const socialprofils = {
  linkedin: "https://www.linkedin.com/in/-hamza-siddiqui/",
  github: "https://github.com/hamzaasiddiqui",
  resume: "https://drive.google.com/file/d/1KK6ZCAXuTALKAY55gt8opJKbs55J863A/view?usp=sharing",
};

const stacks = [
    {
      field: "Web Development",
    },
    {
      field: "Sofware Development",
    },
    {
      field: "Artificial Intelligence",
    },
  ];

export {
  meta,
  dataabout,
  dataportfolio,
  worktimeline,
  skills,
  services,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
  stacks,
};
