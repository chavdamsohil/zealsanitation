import React from "react";
import "./About.css";
import owner1 from "../../Assets/owner1.png";
import owner2 from "../../Assets/owner2.png";

const About = () => {
  return (
    <div className="section About" id="About">
      <div className="heading-sec">
        <h2>About</h2>
        <p>We provide best quality plumbing services</p>
      </div>
      <section className="owner-section">
        <div className="owner1 upper">
          <div className="owner-img1">
            <img className="img" src={owner1} alt="malde chawada" />
          </div>
          <article className="owner-info1">
            <h2>Malde Chawada</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              corrupti harum, architecto ducimus
            </p>
          </article>
        </div>
        <div className="owner1 lower">
          <div className="owner-img2">
            <img className="img" src={owner2} alt="sohil chawada" />
          </div>
          <article className="owner-info1">
            <h2>Sohil Chawada</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              corrupti harum, architecto ducimus
            </p>
          </article>
        </div>
      </section>
    </div>
  );
};

export default About;
