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
    jobtitle: "Software Developer Intern",
    where: "Keystone consulting",
    date: "June 23 - Aug 23",
  },
  {
    jobtitle: "Sofware Engineering Intern",
    where: "Mantula Solar",
    date: "July 22 - Aug 22",
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
      1: "- Manage GIK Institute’s residential network compromising of 3500+ nodes, ensuring robust performance.",
      2: "- Designed and conducted comprehensive training sessions and workshops on computer networking for students.",
      3: "- Provide and maintain peer-to-peer file sharing and IPTV services for 3000+ residents of GIK Institute.",
    },
  },
  {
    title: "Software Developer Intern - Keystone Consulting",
    description: {
      1: "- Led the development of an advanced business intelligence visualization application leveraging Natural Language Processing techniques, enhancing data interpretability and decision-making processes.",
      2: "- Employed Flask, Python, React.js, and Next.js; contributing to a seamless UI and efficient back-end functionality.",
      3: "- Integrated LangChain and OpenAI technologies, and authored multiple Python scripts to create a sophisticated chatbot interface, elevating user interaction and automating responses.",
    },
  },
  {
    title: "Software Engineering Intern - Mantula Solar",
    description: {
      1: "- Collaborated with a team of 5 full-stack web developers to engineer Mantula’s web application, utilizing React.js and Firebase, enhancing the product’s functionality and user interface.",
      2: "- Developed and integrated a decision tree-based price estimator, along with connecting APIs to align with customer preferences, offering a tailored and engaging user experience.",
      3: "- Leveraged various NPM packages, contributing to a sophisticated and seamless user experience and documented the software development lifecycle, paving the way for future enhancements and maintenance.",
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
  resume: "https://drive.google.com/file/d/121oLDVB7UkkPDZpZ_2R-_4qkV6xpmTJs/view?usp=sharing",
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
