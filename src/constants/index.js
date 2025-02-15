import cactroCache from "../assets/projects/cactroCache.png";
import devSources from "../assets/projects/devSources.png";
import signsInterpreter from "../assets/projects/signsInterpreter.png";
import morseTranslator from "../assets/projects/morseTranslator.png";
import protfolioWebsite from "../assets/projects/protfolioWebsite.png";

export const HERO_CONTENT = `I am a passionate Java Developer and post graduate in Master of Computer Application with strong academic background and a zest for innovation. Join me as I share my projects and experiences, showcasing my dedication to creating impactful solutions and pushing the boundaries of what's possible in the tech world. `;

export const ABOUT_TEXT = `Hello! I’m a passionate Java Developer with 4+ Years of experience and post graduate in Master of Computer Application from Government College Of Engineering in Aurangabad, Maharashtra. My journey into programming started since my Graduation in BCA where I learned C++. This sparked my curiosity about how software works and led me to pursue MCA.

I have a strong foundation in Java tech stack including Spring Boot, Redis and Kafka. I exploring cloud platforms as developer. I also have familarity with tools like GIT, JIRA, MAVEN, DOCKER and CI/CD and frontend development using HTML/CSS. Additionally, I work with databases like SQL, DB2 and PosgreSql .

I’ve gained practical experience as Senior Software Engineer at Godigit Genereal Insurance, where I work on project for Motor Insurance API consumed by known Insurance plantforms like Cardekho, PolicyBazar of India. I enjoy solving coding challenges on platforms like LeetCode and HackerRank. I’m always eager to learn and explore new areas in software development.

I also participate in RnD activities in company and hold TOP-GUN award from Digit.`;

export const EXPERIENCES = [
  {
    year: "FEB 2021 - Present",
    role: "Senio Software Engineer",
    company: "Go Digit General Insurance",
    description: `Onboarded as a Graduate Trainee Engieer and promoted to SSE in last 4 Years. Here I specifically work on API developement built with JAVA/SPringBoot.By optimizing code and writing efficient scripts, I improved application performance by up to 30%. I maintain open communication with clients to understand and meet their evolving needs. Secured Prestigious TOP-GUN with other recognizations like Wall-Of-Awesomeess And Tech-Titan`,
    technologies: ["Java","Spring","SpringBoot","Redis","Kafka"],
	technologies2: ["Docker", "SQL", "DB2", "ABS", "MAVEN", "Git", "JIRA", "BitBucket"]
  }
];

export const EDUCATION = [
  {
    degree: "Master Of Computer Application",
    institution: "Government College Of Engineering, Aurangabad, Maharashtra",
    duration: "Aug 2017 - OCT 2020",
    description:
      "Post Graduated with a  understanding of core computer science fundamentals. Explored a wide range of topics including coding, app development, web development. Lived away from home in a hostel, where I made lasting friendships and created wonderful memories",
  },
  {
    degree: "Bachelors of Computer Application",
    institution: "SRTM University, Nanded",
    duration: "June 2014 - May 2017",
    description:
      "Studied Computer Science with a focus on Java. Developed a growing interest in programming, enjoyed memorable trips with friends, and cherished the final moments of college life.",
  },
  {
    degree: "12TH science",
    institution: "Dayanand College Of Science, Latur",
    duration: "April 2013 - May 2014",
    description:
      "Studied Physics, Chemistry, Biology, and Crop Production with a focus on Biology. Enjoyed memorable trips with friends, and cherished the final moments of school life.",
  },
]; 

export const PROJECTS = [
  {
    title: "Cactro Cache",
    image: cactroCache,
    description:
      "This project implements a simple Cache API using Spring and Docker. It provides basic caching functionalities (store, retrieve, and delete) with a predefined size limit on the cache. The application is containerized using Docker and deployed on Render for easy access. The API is live and accessible",
    technologies: ["JAVA", "SpringBoot", "Docker","CI/CD", "Maven" , "Render.com"],
    github : "https://github.com/shaikh-vms/cactro-cache",
    live : "https://cache-7kmf.onrender.com/" ,
  },
  {
    title:"Developer Sources Recommender",
    image: devSources,
    description:
    "Developed in begineer stage. This lists and recommends best resources available online for upcoming Web Developers.",
    technologies:["React","NodeJs","JavaScript","HTML","CSS"],
    github:"https://github.com/shaikh-vms/RecommendationApp",
    live:"https://dev-sources-recommendation.netlify.app/"
  },
  {
    title: "SIGNS INTERPRETER",
    image: signsInterpreter,
    description:
      "Developed in begineer stage. This Checks a icon submitted and iterpret its meaning and if interpreted message is sent returns relevant icons for same",
    technologies: ["React","NodeJs","JavaScript","HTML","CSS"],
    github : "https://github.com/shaikh-vms/Signs-iterpreter_ReactApp",
    live : "https://signs-iterpreter.netlify.app/" ,
  },
  {
    title: "Morse Translator",
    image: morseTranslator,
    description:
      "Developed in begineer stage. This application is live where one can convert morse code to readable text or vice versa",
    technologies:["React","NodeJs","JavaScript","HTML","CSS"],
    github : "https://github.com/shaikh-vms/Morse-Translator",
    live : "https://converter-morse.netlify.app/" ,
  },
  {
    title: "Portfolio Website",
    image: protfolioWebsite,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "Tailwind Css", "React",],
    github : "https://github.com/thegeek36/My-React-Portfolio",
    live : "#" ,
  },
];

export const CONTACT = {
  address: "Pune,India",
  phoneNo: "+91 8484xxxxxx",
  email: "shaikhvms@gmail.com",
};