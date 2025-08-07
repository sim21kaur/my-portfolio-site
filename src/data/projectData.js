// src/data/projects.js
import script1 from '../images/projectImages/catalog.png'
import script2 from "../images/projectImages/Build New Compound.png"
import script3 from "../images/projectImages/Compound.png"
import finance1 from "../images/projectImages/Login.png"
import finance2 from "../images/projectImages/simulation page.png"
import finance3 from "../images/projectImages/simulation page 2D.png"
import hopper1 from "../images/projectImages/hackathonPic.png"
import hopper2 from "../images/projectImages/finishGame.png"
import phreddit1 from "../images/projectImages/phredditHome.png"
import phreddit2 from "../images/projectImages/createCommunity.png"
import phreddit3 from "../images/projectImages/createPost.png"
import nourishd1 from "../images/projectImages/menu.png"
import nourishd2 from "../images/projectImages/iPhone 14.png"


const projects = [
  {
    id: 1,
    name: "Script EZ",
    description: "Developed a HIPAA-compliant web application that facilitates secure collaboration between physicians and pharmacists in creating and prescribing custom pharmaceutical compounds. The platform includes comprehensive compound formulation tools, allowing users to select and manage ingredients from an integrated drug database, ensuring accuracy and adherence to pharmaceutical standards. It features prescription refill management, real-time notifications, and strict user role controls. The system underwent rigorous testing and multiple approval phases with the DEA and government agencies to ensure full regulatory compliance. Currently utilized by multiple compounding pharmacy locations, the application has streamlined compound creation workflows and improved overall operational efficiency.",
    images: [script1, script2, script3],
    technologies: ["React", "Typescript", "HTML/CSS", "Flask", "Microsoft Azure", "MySQL", "Axios", "Node.js", "REST API", "JWT Authentication", "Third-Party API integration", " HIPAA Compliance", "DEA Regulatory Compliance", "UI/UX", "Figma"]
  },
  {
    id: 2,
    name: "Financial Stimulator",
    description: "This web-based Lifetime Financial Planner (LFP) is designed to help users navigate the complexities of long-term financial planning by simulating various investment and life scenarios. The application models key financial decisions including asset allocation, retirement age, and choice of retirement accounts, while incorporating life events such as marriage and having children. Utilizing Monte Carlo simulations, LFP probabilistically forecasts market behavior and tax impacts, providing users with insights into the likelihood of achieving their financial goals under different assumptions. The planner offers flexible customization of investment types, supports comparison across multiple financial scenarios, and presents results through an intuitive interface enriched with interactive charts and explanatory content. Additionally, users can securely save and share their financial plans, making it a practical tool for collaboration with family or financial advisors.",
    images: [finance1, finance2, finance3],
    technologies: ["React", "Javascript", "HTML/CSS", "Node.js", "Express.js", "MongoDB" , "Google OAuth", "React Plotly", "D3.js", "REST API", "Mongoose", "UI/UX", "Figma"]
  },
  {
    id: 3,
    name: "HopperHacks - Big Back Voyage",
    description: "Big Back Voyage is a playful, AI-assisted meal recommendation web app designed to help indecisive eaters land the perfect bite near or on Stony Brooks campus. Inspired by the classic game Akinator, the app uses a series of sensory, craving-focused questions—delivered by your guide, Pirate Wolfie—to help surface what users are truly in the mood for. Once a top cuisine is determined, the app filters a list of nearby restaurants and recommends spots that align with the user's current cravings.",
    images: [hopper1, hopper2],
    technologies: ["React", "Javascript", "HTML/CSS", "Node.js", "Express.js", "OpenAI API", "REST API", "CORS", "JSON"]
  },
  {
    id: 4,
    name: "Phreddit",
    description: "Phreddit is a full-stack recreation of Reddit, developed to mirror the platform’s core design and functionality. This project replicates essential features such as post creation, commenting, community-based discussions, link flairs, and user reputation. By rebuilding a widely used social platform from the ground up, this project offered hands-on experience with the architecture and Nourish’d logic behind large-scale web applications. It provided valuable insight into how familiar user interactions — like browsing posts or contributing to discussions — are supported through integrated front-end and back-end systems.",
    images: [phreddit1, phreddit2, phreddit3],
    technologies: ["React", "Javascript", "HTML/CSS", "MongoDB", "Node.js", "Express.js", "Axios", "REST API", "Mongoose" ]
  },
  {
    id: 5,
    name: "Nourish'd Cafe and Juiciery",
    description: "Contributed to making the website more user-friendly by optimizing the HTML structure, which improved page load speed and enhanced overall usability. Designed and implemented a secure login page with a strong focus on intuitive UI/UX and reliable authentication. Played a key role in developing a personalized mobile ordering app using React Native and Expo Go, integrated with Firebase to provide real-time order tracking, customizable menu options, and a rewards system. These improvements streamlined the customer experience, increased engagement, and supported higher sales and loyalty.",
    images: [nourishd1, nourishd2],
    technologies: ["React Native", "Javascript", "Expo Go", "Firebase", "HTML/CSS", "Figma", "UI/UX Design", "Authentication"]
  }
];

export default projects;
