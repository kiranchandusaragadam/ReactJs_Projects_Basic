import React from "react";

const NavSection = () => {
  return (
    <div className="container">
      <nav className="nav-main">
        <div className="logo">
          <img src="/images/brand_logo.png" alt="brand_logo" />
        </div>
        <div className="nav-list">
          <ul>
            <li>Menu</li>
            <li>Location</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <button className="login-btn">Login</button>
      </nav>
    </div>
  );
};

export default NavSection;
