import React, { useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faFaucetDrip,
  faHome,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { faAddressBook } from "@fortawesome/free-regular-svg-icons";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const handleClickHam = () => {
    setClicked(!clicked);
  };

  const Menudata = [
    {
      title: "Home",
      url: "#Home",
      cName: "nav-links",
      icon: faHome,
    },
    {
      title: "About",
      url: "#About",
      cName: "nav-links",
      icon: faBriefcase,
    },
    {
      title: "Services",
      url: "#Services",
      cName: "nav-links",
      icon: faFaucetDrip,
    },
    {
      title: "Contact",
      url: "#Contact",
      cName: "nav-links",
      icon: faAddressBook,
    },
  ];
  return (
    <nav>
      <div className="navbar">
        <h1 className="logo">Zeal</h1>
        <div className="hamburgerMenu" onClick={handleClickHam}>
          {clicked ? (
            <FontAwesomeIcon className="hamburgerMenuIcon" icon={faTimes} />
          ) : (
            <FontAwesomeIcon className="hamburgerMenuIcon" icon={faBars} />
          )}
        </div>
        <ul className={clicked ? "all-links active" : "all-links"}>
          {Menudata.map((item, id) => {
            return (
              <li key={id} onClick={handleClickHam}>
                <a href={item.url} className={item.cName}>
                  <FontAwesomeIcon className="icons" icon={item.icon} />

                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div></div>
    </nav>
  );
};

export default Navbar;
