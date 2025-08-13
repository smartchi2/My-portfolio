

const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 15, suffix: "+", label: "Years of Experience" },
  { value: 200, suffix: "+", label: "Satisfied Clients" },
  { value: 108, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/billpay.png",
  },
  {
    imgPath: "/images/naharaMedia.png",
  },
  {
    imgPath: "/images/NaharaTechnologiesWhite.png",
  },
  {
    imgPath: "/images/sabipredict.jpg",
  },
  {
    imgPath: "/images/smu.png",
  },
  {
    imgPath: "/images/smartmedia.png",
  },
  {
    imgPath: "/images/smutech.png",
  },
  {
    imgPath: "/images/billpay.png",
  },
  {
    imgPath: "/images/sabipredict.jpg",
  },
  {
    imgPath: "/images/naharaMedia.png",
  },
  {
    imgPath: "/images/smutech.png",
  },
];

const abilities = [
  {
    imgPath: "/images/qu.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/Reliable.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/react_logo.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/python_logo.png",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/java_logo.png",
  },
  {
    name: "CMS",
    imgPath: "/images/wordpress_logo.png",
  },
   {
    name: "Backend Developer",
    imgPath: "/images/node.png",
  },
  
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "Smart Sunday brought creativity and backend expertise to the team, significantly improving our system’s performance. His work has been invaluable in delivering faster and more reliable experiences.",
    imgPath: "/images/exp.png",
    logoPath: "/images/naharaMedia.png",
    title: "Full-stack",
    date: " Software Engineer, 02/1/2025 - present",
    responsibilities: [
      "End-to-End Development: Building and maintaining full-stack applications using Java, Spring Boot, Node.js, React, and Next.js, enabling faster product delivery cycles and improved system performance by 25%",
      "API Design: Developed and documented RESTful APIs for key business features, reducing client-server communication issues and improving data consistency across services by 30%",
      "Authentication & Security: Implemented secure user authentication and role-based access control using JWT and Spring Security, reducing unauthorized access incidents by 40% and enhancing overall application security compliance.",
      "Cross-Functional Collaboration: Collaborated with designers and product managers to convert user requirements into scalable front-end solutions using React.js and Next.js. Accelerated feature delivery by 25% and improved user satisfaction scores through enhanced UI/UX consistency.",
      "API Integration: Integrated multiple APIs to streamline data retrieval, reducing load times by 30% and increasing UI responsiveness by 20%."
    ],
  },
  {
    review: "Smart Sunday’s contributions to Nahara Technologies PLC’s web applications have been outstanding. He approaches challenges with a strong problem-solving mindset..",
    imgPath: "/images/.png",
    logoPath: "/images/NaharaIcon2.png",
    title: "Software Engineering Intern",
    date: "01/05/2024–30/12/2025 ",
    responsibilities: [
      "API Development: Designed and implemented scalable REST APIs using Spring Boot, improving content delivery speeds by 25% across multiple client platforms.",
      "System Architecture: Built and maintained a scalable backend system for managing digital media assets, resulting in a 35% improvement in asset retrieval time and streamlined content organization via structured metadata tagging.",
      "Version Control: Leveraged Git and GitHub for version control and code reviews, achieving 95% successful merge rates and significantly reducing deployment issues through continuous integration best practices."
    ],
  },
  {
    review: "Smart Sunday’s work on Psallmbill’s mobile app brought exceptional quality and efficiency. He delivered solutions that enhanced our mobile payment experience and aligned with our product goals..",
    imgPath: "/images/exp3.png",
    logoPath: "/images/psallbill.jpeg",
    title: "Software Engineering",
    date: "01/05/2022–30/12/2024",
      responsibilities: [
      "Feature Development: Built a mobile wallet application with save, spend, and lock features using Java and Android tools; improved user financial management by 20%.",
      "Software Design: Created UML diagrams and applied design patterns such as Singleton and Factory to increase code clarity and maintainability by 15%.",
      "Team Collaboration: Actively participated in Agile ceremonies (daily standups, sprint planning, retrospectives), contributing to a 30% improvement in sprint velocity and delivering functional prototypes within project deadlines",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/.png",
  },
  {
    name: "logo2",
    imgPath: "/images/.png",
  },
  {
    name: "logo3",
    imgPath: "/images/.png",
  },
];

const testimonials = [
 {
  name: "Psallm",
  title: "CEO of Psallm Digital",
  mentions: "@psallm",
  review:
    "I can’t say enough good things about Smart Sunday. He took our complex payment platform requirements and transformed them into a seamless, high-performing solution. His problem-solving skills and ability to simplify complexity are remarkable.",
  imgPath: "/images/client1.png",
},
{
  name: "Doris",
  title: "Co-founder, Nahara Technologies PLC",
  mentions: "@doris",
  review:
    "Working with Smart Sunday was a fantastic experience. He modernized our systems, making them faster and more user-friendly. His attention to detail and dedication to delivering quality are second to none.",
  imgPath: "/images/client3.png",
},
{
  name: "Dean",
  title: "CEO of Hostmadean",
  mentions: "@dean",
  review:
    "Collaborating with Smart Sunday was a pleasure. His professionalism, speed, and commitment to excellence were clear from start to finish. He brings enthusiasm and expertise to every project.",
  imgPath: "/images/client2.png",
},
{
  name: "Maria Bennett",
  title: "Founder of Bennett Creative Solutions",
  mentions: "@mariabennett",
  review:
    "Smart Sunday was a joy to work with. He redefined our outdated platform into something intuitive, modern, and efficient. The transformation was beyond what we expected.",
  imgPath: "/images/client5.png",
},
{
  name: "James Carter",
  title: "CTO of BrightPay Technologies",
  mentions: "@jamescarter",
  review:
    "Smart Sunday’s technical expertise is outstanding. He delivered a scalable and secure backend solution for our e-commerce operations, which has significantly boosted our online sales. A true professional.",
  imgPath: "/images/client4.png",
},
{
  name: "Linda Okafor",
  title: "Operations Director, Okafor & Co.",
  mentions: "@lindaokafor",
  review:
    "Smart Sunday understood our needs perfectly and built a platform that exceeded every expectation. His skills across both backend and frontend are world-class.",
  imgPath: "/images/client6.png",
},

];

const socialImgs = [
  // {
  //   name: "insta",
  //   imgPath: "/images/insta.png",
  // },
  {
    name: "fb",
    imgPath: "/images/facebook_logo.webp",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};