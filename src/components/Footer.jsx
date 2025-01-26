import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer container">
        <img src="../images/AleoGlobalWTransparent2.png" alt="" />
        <div className="footer-links container">
          <h3>Quick Links</h3>
          <Link className="footer-link" to={"https://aleo.org/ecosystems/"}>
            About Aleo
          </Link>
          <Link className="footer-link" to={"Form"}>
            Submit Project
          </Link>
          <Link className="footer-link" to={"https://galxe.com/AleoGlobal"}>
            Galxe
          </Link>
        </div>
        <div className="footer-links container">
          <h3>Socials</h3>
          <Link className="footer-link" to={"https://twitter.com/Aleo_Global"}>
            Twitter
          </Link>
          <Link className="footer-link" to={"https://t.me/AleoGlobalAnn"}>
            Telegram
          </Link>
          <Link className="footer-link" to={"https://discord.gg/T5AEbCbK3s"}>
            Discord
          </Link>
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;
