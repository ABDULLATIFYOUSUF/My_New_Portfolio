import React from "react";
import { useTheme } from "../../context/ThemeContext";
import "./Home.css";
import Typewriter from "typewriter-effect";
import Resume from "../../assets/docs/resume.pdf";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { Fade } from "react-awesome-reveal";

const Home = () => {
  const [theme, setTheme] = useTheme();
  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };
  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="theme-btn" onClick={handleTheme}>
          {theme === "light" ? (
            <BsFillMoonStarsFill size={30} />
          ) : (
            <BsFillSunFill size={30} />
          )}
        </div>
        <div className="container home-content">
          <Fade direction="right">
            <h2>Hi 👋 I'm a</h2>
            <h1>
              {" "}
              <Typewriter
                options={{
                  strings: [
                    "Frontend Developer!",
                    "React.js Developer!",
                    "MERN Stack Developer!",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />{" "}
            </h1>
          </Fade>
          <Fade direction="bottom">
            <div className="home-buttons">
              <a
                href="https://api.whatsapp.com/send?phone=03002902939"
                rel="noreferrer"
                target="_blank"
                className="btn btn-hire"
              >
                Hire Me
              </a>
              <a
                className="btn btn-cv"
                href={Resume}
                download="Abdul Latif.pdf"
              >
                My Resume
              </a>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Home;
