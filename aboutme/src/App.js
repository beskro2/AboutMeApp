import "./App.css";
import myImage from "./Images/IMG_2196 (1).jpeg";
import { useState } from "react";
import { saveAs } from "file-saver";
import ImageSlider from "./ImageSlider.js";
import ProjectCard from "./ProjectCard.js";
import { slides } from "./data.js";

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
  const DnDgoals = [
    "Familiarize myself with react framework",
    "Practice creating and manipulating components",
    "Create solution for commen Dungeons and Dragons problems",
  ];
  const Captitle = "Good Day Saftey App";
  const Capdescription =
    "Created a .net MAUI Mobil aplication that allowed construction workers to anonymously report safety concerns without fear or repercussions from their supervisors";
  const Capgoals = [
    "Practice .net Moui framework",
    "Create Azure API",
    "Create solution for construction workers",
  ];
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
            <t className="textone">Hello, I'm</t>
            <t className="texttwo">Ben Eskro</t>
            <t className="textthree">Software Developer</t>

            <div className="butContainer">
              <div className="upperbutton">
                <button className="largebtn" onClick={handleDownload}>
                  Download Resume
                </button>

                <a
                  href="https://github.com/beskro2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button class="smallbtn">
                    <span class="svgContainer">
                      <svg fill="white" viewBox="0 0 496 512" height="1.6em">
                        <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                      </svg>
                    </span>
                    <span class="BG"></span>
                  </button>
                </a>
              </div>

              <div className="lowerbuttons">
                <a
                  href="https://www.linkedin.com/in/ben-eskro"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button class="smallbtn">
                    <span class="svgContainer">
                      <svg
                        viewBox="0 0 448 512"
                        xmlns="http://www.w3.org/2000/svg"
                        height=" 1.6em"
                      >
                        <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"></path>
                      </svg>
                    </span>
                    <span class="BG"></span>
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

        <div className="organization">
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

          <div className="slidercontainer">
            <ImageSlider images={slides} />
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
        <div className="projectContainer">
          <ProjectCard
            title={DnDtitle}
            description={DnDdescription}
            goal={DnDgoals}
          ></ProjectCard>
          <ProjectCard
            title={Captitle}
            description={Capdescription}
            goal={Capgoals}
          ></ProjectCard>
        </div>
      </div>
    </div>
  );
}

export default App;
