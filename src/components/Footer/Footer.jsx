import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <a
        href="https://github.com/Priyanka-Sati?tab=repositories"
        className="footer-link"
        target="_blank"
        rel="noreferrer"
        style={{textDecoration: "none"}}
      >
        Github Link
      </a>
    </div>
  );
};

export default Footer;
