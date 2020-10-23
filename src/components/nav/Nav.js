import React, { useState, useEffect } from "react";
import "./Nav.css";
const Nav = () => {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className='nav__logo'
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png'
        alt='Netflix Logo'
      />

      <img
        className='nav__avatar'
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRrEds1LHIOdzDU1uUzfJTN0n03YEp8Bp4YGA&usqp=CAU'
        alt='Nav Avatar'
      />
    </div>
  );
};

export default Nav;
