import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faMapLocation,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className="section" id="Contact">
      <div className="heading-sec">
        <h2>Contact</h2>
        <p>Please contact us </p>
      </div>
      <main className="contact-sec">
        <section className="address-sec">
          <div className="info">
            <FontAwesomeIcon
              icon={faMapLocation}
              className="icon"
            ></FontAwesomeIcon>
            <h4>Address</h4>
            <p>
              C9 c225 snehaddep sector-2 <br></br>charkop kandivali west
              <br></br>
              Mumbai-400067
            </p>
          </div>
        </section>
        <section className="address-sec">
          <div className="info">
            <FontAwesomeIcon icon={faPhone} className="icon"></FontAwesomeIcon>
            <h4>Phone no</h4>
            <p>Sohil: 9768034407</p>
            <p>Malde Chawada:9322517263</p>
          </div>
        </section>
        <section className="address-sec">
          <div className="info">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="icon"
            ></FontAwesomeIcon>
            <h4>Email</h4>
            <p>chavdamsohil@gmail.com</p>
            <p>poojasenitation@gmail.com</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;
