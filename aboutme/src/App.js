import "./App.css";
import myImage from "./Images/IMG_2196 (1).jpeg";
import { useState } from "react";
import { saveAs } from "file-saver";
import ProjectCard from "./ProjectCard.js";
import { images } from "./data.js";
import DnDPic from "./Dungeon-and-Dragons-Logo-min.jpg";
import CapPic from "./user-hard-hat.png";
import MessagePic from "./Images/message-image.webp";
import image3 from "./Images/IMG_5186.jpg";
import ContactMe from "./ContactMe.js";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import Imagecarosel from "./imagecarosel.js";
import Skills from "./Skills.js";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { FaJava } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { SiSpring } from "react-icons/si";

function App() {
  const [menuOpen, changeMenuOpen] = useState(false);

  function toggleMenu(e) {
    changeMenuOpen(!menuOpen);
    console.log(menuOpen);
  }

  const handleDownload = () => {
    const resumeUrl = "/Resume%206.4.pdf";
    console.log("attempt to download:", resumeUrl);
    saveAs(resumeUrl, "Bens_Resume.pdf");
  };
  /*Technical Skills

Languages: Java, JavaScript, HTML/CSS, Python, C#
Frameworks/Tools: React, Angular, .NET, GitHub, Visual Studio Code
Platforms: Microsoft Azure, Workday, Slack
Software: Microsoft Office 365, Google Suite
*/
  const DnDtitle = "Dungeons & Dragons App";
  const DnDdescription =
    "React Web Application Enabling Dungeons and Dragons players to roll dice virtually as well as share story notes, game items and character information.";
  const DnDLink = "https://github.com/beskro2/DnD_project";
  const Captitle = "Good Day Safety App";
  const Capdescription =
    "Mobil application enabling anonymous Safety Hazard reports for construction workers. Project includes a .Net Maui front End and Azure Backend.";
  const CapLink = "https://github.com/aehrmantraut/GoodDaySafetyApp";
  const MessageTitle = "Social Media Blog API";
  const MessageDescription =
    "Backend to a hypothetical social media app. Application Includes endpoint creation, data persistence, and conventional data manipulation logic.";
  const MessageLink = "https://github.com/beskro2/beskro2-pep-spring-project";
  const codeskills = [
    {
      icon: FaHtml5,
      title: "HTML",
      description:
        "Standard markup language for documents designed to be displayed in a web browser.",
    },
    {
      icon: IoLogoCss3,
      title: "CSS",
      description:
        "Style sheet language used for specifying the presentation and styling of a document.",
    },
    {
      icon: IoLogoJavascript,
      title: "Javascript",
      description:
        "Versatile programming language used for adding interactivity and dynamic behavior to web pages.",
    },
    {
      icon: FaJava,
      title: "Java",
      description:
        "High-level, class-based, object-oriented programming language.",
    },
    {
      icon: FaDatabase,
      title: "SQL",
      description:
        "Structured Query Language is used to manage data especially in a relational database management system.",
    },
    {
      icon: FaGitAlt,
      title: "GIT",
      description:
        "Git is a distributed version control system that tracks versions of files.",
    },
    {
      icon: FaReact,
      title: "React",
      description: "Front-end JavaScript library for building user interfaces.",
    },
    {
      icon: SiSpring,
      title: "Spring",
      description:
        "Application framework and inversion of control container for the Java platform.",
    },
  ];

  return (
    <div className="App">
      <nav id="desktop-nav">
        <div className="menu-container">
          <h1 className="barTitle">Ben Eskro</h1>

          <div>
            <ul className="nav-links">
              <li>
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="nav-link" href="#experience">
                  Experience
                </a>
              </li>
              <li>
                <a className="nav-link" href="#projects">
                  Projects
                </a>
              </li>
              <li>
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <nav id="hamburger-nav">
        <h1 className="burgerTitle">Ben Eskro</h1>

        <label class="burger" for="burger">
          <input
            type="checkbox"
            checked={menuOpen}
            id="burger"
            onChange={toggleMenu}
          />
          <span></span>
          <span></span>
          <span></span>
        </label>
        {/* */}
      </nav>
      {menuOpen && (
        <ul className="hamburgerNav-links">
          <li>
            <a className="nav-link" href="#about" onClick={toggleMenu}>
              About
            </a>
          </li>
          <li>
            <a className="nav-link" href="#experience" onClick={toggleMenu}>
              Experience
            </a>
          </li>
          <li>
            <a className="nav-link" href="#projects" onClick={toggleMenu}>
              Projects
            </a>
          </li>
          <li>
            <a className="nav-link" href="#contact" onClick={toggleMenu}>
              Contact
            </a>
          </li>
        </ul>
      )}

      <div className="intro-container">
        <div className="image-container">
          <img
            src={myImage}
            className="circle-image"
            alt="professional headshot"
          />
        </div>

        <div className="info-container">
          <h1 className="textone">Hello, I'm</h1>
          <h1 className="texttwo">Ben Eskro</h1>
          <h1 className="textthree">Software Developer</h1>

          <div className="butContainer">
            <div className="upperbutton">
              <button className="largebtn" onClick={handleDownload}>
                Download Resume
              </button>

              <a href="https://github.com/beskro2" target="_blank">
                <button class="smallbtn">
                  <FaGithub className="giticon" />
                </button>
              </a>
            </div>

            <div className="lowerbuttons">
              <a href="https://www.linkedin.com/in/ben-eskro/" target="_blank">
                <button class="smallbtn">
                  <FaLinkedinIn className="linkedicon" />
                </button>
              </a>
              <button className="largebtn">Contact Me</button>
            </div>
          </div>
        </div>
      </div>

      <div id="about" className="aboutme-container">
        <div className="bioOrganizer">
          <div className="biocard">
            <h1 className="section_label1">About Me</h1>
            <p>
              Hello and welcome to my website. I’m Ben Eskro, a recent college
              graduate with a passion for solving real world problems with
              software solutions. Through my studies at North Dakota State
              University, I developed a passion for creating user friendly
              applications and honed my skills in front-end software
              development. My evolution as a developer can be attributed to my
              love for learning new things and my persistance in the face of
              failure. When I’m not coding, you can find me gearing up to
              explore the outdoors or playing boardgames with my friends.
            </p>
          </div>

          <Imagecarosel className="imageCarosel" images={images}></Imagecarosel>
        </div>
      </div>

      <div id="experience" className="experience-container">
        <h1 className="section_label3">Experience</h1>

        <div className="skillsbox">
          {codeskills.map((skill, index) => (
            <Skills
              icon={skill.icon}
              title={skill.title}
              description={skill.description}
              key={index}
            ></Skills>
          ))}
        </div>
      </div>

      <div id="projects" className="project-container">
        <h1 className="section_label3">Projects</h1>
        <div className="projectContainer">
          <ProjectCard
            title={DnDtitle}
            description={DnDdescription}
            picture={DnDPic}
            link={DnDLink}
          ></ProjectCard>
          <ProjectCard
            title={Captitle}
            description={Capdescription}
            picture={CapPic}
            link={CapLink}
          ></ProjectCard>
          <ProjectCard
            title={MessageTitle}
            description={MessageDescription}
            picture={MessagePic}
            link={MessageLink}
          ></ProjectCard>
        </div>
      </div>

      <div id="contact" className="contact-container">
        {" "}
        <h1 id="contact" className="section_label2">
          Contact Me
        </h1>
        <ContactMe />
      </div>
    </div>
  );
}

export default App;
