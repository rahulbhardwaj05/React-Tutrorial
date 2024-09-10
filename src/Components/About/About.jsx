import React from "react";
import "./About.css";
import profile_img from "../../assets/profime_img/ProfileIMG.jpg";

function About() {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About Me</h1>
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am an experienced Frontend Developer with over a decade of
              professional expertise in the field. Throughout my career, I have
              had the privilege of collaborating with prestigious organizations,
              contributing to their success and growth.{" "}
            </p>
            <p>
              My passion for frontend development is not only reflected in my
              extensive experience but also in the enthusiasm and dedication I
              bring to each project.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}} /></div>
            <div className="about-skill"><p>JAVASCRIPT</p><hr style={{width:"70%"}} /></div>
            <div className="about-skill"><p>REACT JS</p><hr style={{width:"60%"}} /></div>
            <div className="about-skill"><p>NEXT JS</p><hr style={{width:"50%"}} /></div>
            {/* <div className="about-skill"><p>TAILWIND CSS </p><hr style={{width:"70%"}} /></div> */}
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievment">
            <h1>2+</h1>
            <p>YEAR OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievment">
            <h1>5+</h1>
            <p>PROJECT COMPLETED</p>
        </div>
      </div>

    </div>
  );
}

export default About;
