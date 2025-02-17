import React from "react";
import "./About.css";
import { Bounce } from "react-awesome-reveal";

function About() {
  return (
    <>
      <Bounce duration={3000}>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img src="/images/latif.png" alt="profile_pic" />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
                I am a passionate Web Developer with a strong foundation in
                building dynamic and responsive web applications. Having
                recently completed a Web Application Development course, I am
                skilled in modern technologies like React.js, Node.js, MongoDB,
                and Tailwind CSS. Alongside my technical expertise, I bring
                extensive professional experience from roles in a government
                organization as a Clerk and in hospitals as a Front Desk
                Officer, Computer Operator, Report Typist, and Administrative
                Assistant. This diverse background has equipped me with
                excellent organizational and problem-solving skills. I am now
                eager to combine my technical and administrative experience to
                contribute effectively in the field of web development.
              </p>
            </div>
          </div>
        </div>
      </Bounce>
    </>
  );
}

export default About;
