import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Vinay</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a href="#github" className="footer__link">
              Github
            </a>
          </li>
        </ul>
        <div className="footer__social">
          <a
            href="https://www.gmail.com"
            className="footer__social-icon"
            target="_blank"
          >
            <i className="bx bxl-gmail"></i>
          </a>
          <a
            href="https://github.com/VinayKumar1801"
            className="footer__social-icon"
            target="_blank"
          >
            <i className="bx bxl-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/vinaykumar1801/"
            className="footer__social-icon"
            target="_blank"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
        </div>
        <span className="footer__copy">&#169; Vinay. All right reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
