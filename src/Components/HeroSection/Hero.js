import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section width="1920" className="heroSection">
      <div className="intro">
        <h1>
          Welcome to
          <br />
          Zeal Sanitation
          <br />
          Complete Bathing
        </h1>
        <p>
          Complete plumbing solution <br />
          for your Residential <br />
          and commercial projects.
        </p>
        <a href="#">Our work</a>
      </div>
      <div className="quotes">
        {/* <blockquote>
          <p>
            “A plumber is an adventurer <br />
            who traces leaky pipes to their source.”
            <cite> - Arthur Baer</cite>
          </p>
        </blockquote> */}
        <blockquote>
          <p>
            “I bet you have never seen <br /> a plumber bite his nails while
            working ”<br />
            <cite> - sohil chawada</cite>
          </p>
        </blockquote>
      </div>
    </section>
  );
};

export default Hero;
