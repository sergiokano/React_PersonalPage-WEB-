import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";


const Navbar = () => {
  return (
    <>
      <nav>
        <span>theKano_dev//xXxx44xx_</span>
        <div>
          <Link to="/">
            <span>Home</span>
          </Link>
          <Link to="/Contact">
            <span>Contact</span>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
