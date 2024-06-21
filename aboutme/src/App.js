import "./App.css";
import myImage from "./Images/IMG_2196 (1).jpeg";
import { useState } from "react";
import { saveAs } from "file-saver";
import ImageSlider from "./ImageSlider.js";
import ProjectCard from "./ProjectCard.js";
import { slides, images } from "./data.js";
import DnDPic from "./Dungeon-and-Dragons-Logo-min.jpg";
import CapPic from "./user-hard-hat.png";
import ContactMe from "./ContactMe.js";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import Imagecarosel from "./imagecarosel.js";

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

  const DnDtitle = "Dungeons & Dragons Web applications";
  const DnDdescription =
    "Created a React web application that allows Dungeons and Dragons players to roll dice virtually as well as share story notes and game items";
  const Captitle = "Good Day Saftey App";
  const Capdescription =
    "Created a .net MAUI Mobil aplication that allowed construction workers to anonymously report safety concerns without fear or repercussions from their supervisors";
  return (
    <div className="App">
      <div className="first-section">
        <nav id="desktop-nav">
          <div className="menu-container">
            <div className="title">
              <t>Ben Eskro</t>
            </div>
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
          <div className="title">
            <t>Ben Eskro</t>
          </div>

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
                <a
                  href="https://www.linkedin.com/in/ben-eskro/"
                  target="_blank"
                >
                  <button class="smallbtn">
                    <FaLinkedinIn className="linkedicon" />
                  </button>
                </a>
                <button className="largebtn">Contact Me</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="aboutme-container">
        <t className="section_label2">About Me</t>
        <div>
          <Imagecarosel images={images}></Imagecarosel>
          <div className="bio">
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
        </div>
      </div>

      <div className="experience-container">
        <t className="section_label2">My Experience</t>
        <div className="class-container">
          <div className="classCard">
            <t> class Name1 </t>
            <p>-paragraph one</p>
          </div>
          <div className="classCard">
            <t> class Name2 </t>
            <p>-paragraph two</p>
          </div>
          <div className="classCard">
            <t> class Name3 </t>
            <p>-paragraph three</p>
          </div>
        </div>
        <t className="section_label2">My Projects</t>
        <div className="projectContainer">
          <ProjectCard
            title={DnDtitle}
            description={DnDdescription}
            picture={DnDPic}
          ></ProjectCard>
          <ProjectCard
            title={Captitle}
            description={Capdescription}
            picture={CapPic}
          ></ProjectCard>
        </div>
      </div>

      <div>
        {" "}
        <t className="section_label2">Contact Me</t>
        <ContactMe></ContactMe>
      </div>
    </div>
  );
}

export default App;
