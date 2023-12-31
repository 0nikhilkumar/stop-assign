import React from "react";
import "./Navbar.css";
import { FaMobileScreenButton } from "react-icons/fa6";


const Navbar = () => {
  return (
    <>
      <div className="main-nav">
        <div className="navbar">
          <div className="left-navbar">
            <h2>Assessment</h2>
          </div>
          <div className="right-navbar">
            <h4>My Assessment</h4>
            <FaMobileScreenButton className="mobile"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
