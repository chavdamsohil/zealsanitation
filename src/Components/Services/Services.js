import React from "react";
import "./Services.css";
import bath1 from "./../../Assets/bath1.jpg";
import bath2 from "./../../Assets/bath2.jpg";

const Services = () => {
  return (
    <main className="section" id="Services">
      <section className="Services-Section1">
        <div className="heading-sec">
          <h2>Quality Services</h2>
          <p>We provide best quality plumbing services</p>
        </div>
        <div className="info-sec">
          <div className="info-des">
            <h3>Plumbing conseal & final fitting</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum,
              quis quia. Expedita, possimus corporis dolores vero ipsum eligendi
              dicta officia explicabo reiciendis earum voluptates architecto,
              eveniet, enim aspernatur. A, ipsa. Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Eum, quis quia. Expedita, possimus
              corporis dolores vero ipsum eligendi dicta officia explicabo
              reiciendis earum voluptates architecto, eveniet, enim aspernatur.
              A, ipsa.
            </p>
          </div>
          <div className="img-sec">
            <div>
              <img
                className="bath1"
                src={bath1}
                alt="bath image"
                width="250"
                height="270"
              />
            </div>
            <div>
              <img
                className="bath2"
                src={bath2}
                alt="bath image"
                width="250"
                height="270"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
