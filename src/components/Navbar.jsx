import React from "react";
import "../styles/Navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";

const Navbar = ({ navColor, subbtn, setSubBtn }) => {
  const [menuStyle, setMenuStyle] = useState();
  function showMenu() {
    if (!menuStyle) {
      setMenuStyle({ display: "flex" });
      setTimeout(() => {
        setMenuStyle({ translate: "0", display: "flex" });
      }, 1);
    } else {
      setMenuStyle({ translate: "100%", display: "flex" });
      setTimeout(() => {
        setMenuStyle();
      }, 100);
    }
  }
  return (
    <nav style={{ backgroundColor: navColor }} id="navbar">
      <div className="nav container">
        <Link
          to={"/"}
        >
          {" "}
          <img
            className="h1"
            src="../../images/simple_A_png.png"
            alt=""
          />
        </Link>
        <div id="links" style={menuStyle} className="container">
          <Link
            id="about-nav"
            to="https://aleo.org/ecosystems/"
          >
            About Aleo
          </Link>
          <Link
            style={{ color: "white" }}
            to={"https://twitter.com/Aleo_Global"}
          >
            <FontAwesomeIcon icon={faXTwitter} beat/>
          </Link>
          <Link
            id="submit-nav"
            style={subbtn}
            to={"/Form"}
          >
            Submit Project
          </Link>
        </div>
        <button className="menu-button" onClick={showMenu}>
          ≡
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
