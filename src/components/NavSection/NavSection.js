import React from "react";
import style from "./NavSection.module.css";

const NavSection = () => {
  return (
    <div className={`${style.nav_main}`}>
      <div>
        <img src="/images/logo.png" alt="logo" />
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default NavSection;
