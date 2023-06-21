import { useColorMode } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";
import VK from "../../assets/vk.png";
import "./header.css";
import CV from "../../assets/Vinay-Kumar-Resume.pdf";

const Header = () => {
  const [Toggle, showMenu] = useState(false);
  const [font, setFont] = useState("var(--body-color)");
  const [activeSection, setActiveSection] = useState("#home");

  const { colorMode, toggleColorMode } = useColorMode();
  const [navColor, setnavColor] = useState("transparent");

  const listenScrollEvent = () => {
    const homeSection = document.querySelector("#home");
    const aboutSection = document.querySelector("#about");
    const skillsSection = document.querySelector("#skills");
    const projectsSection = document.querySelector("#projects");
    const githubSection = document.querySelector("#github");
    const contactSection = document.querySelector("#contact");
     const experienceSection = document.querySelector("#experience");

     if (
       window.scrollY >= homeSection.offsetTop &&
       window.scrollY < aboutSection.offsetTop
     ) {
       setActiveSection("#home");
     } else if (
       window.scrollY >= aboutSection.offsetTop &&
       window.scrollY < experienceSection.offsetTop
     ) {
       setActiveSection("#about");
     } else if (
       window.scrollY >= experienceSection.offsetTop &&
       window.scrollY < skillsSection.offsetTop
     ) {
       setActiveSection("#experience");
     } else if (
       window.scrollY >= skillsSection.offsetTop &&
       window.scrollY < projectsSection.offsetTop
     ) {
       setActiveSection("#skills");
     } else if (
       window.scrollY >= projectsSection.offsetTop &&
       window.scrollY < githubSection.offsetTop
     ) {
       setActiveSection("#projects");
     } else if (
       window.scrollY >= githubSection.offsetTop &&
       window.scrollY < contactSection.offsetTop
     ) {
       setActiveSection("#github");
     } else if (window.scrollY >= contactSection.offsetTop) {
       setActiveSection("#contact");
     }


    if (window.scrollY > 50) {
      setnavColor("#FFFFFF");
      setFont("var(--title-color-light)");
    } else {
      setnavColor("transparent");
      setFont("var(--body-color)");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });

  return (
    <header
      className="header"
      style={{ backgroundColor: navColor, color: font }}
    >
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          <img src={VK} alt="" width="30%" />
        </a>
        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => setActiveSection("#home")}
                className={
                  activeSection === "#home"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i class="uil uil-estate nav__icon"></i>Home
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#about"
                onClick={() => setActiveSection("#about")}
                className={
                  activeSection === "#about"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i class="uil uil-user nav__icon"></i>About
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#experience"
                onClick={() => setActiveSection("#experience")}
                className={
                  activeSection === "#experience"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-briefcase-alt nav__icon"></i>Experience
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#skills"
                onClick={() => setActiveSection("#skills")}
                className={
                  activeSection === "#skills"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i class="uil uil-file-alt nav__icon"></i>Skills
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#projects"
                onClick={() => setActiveSection("#projects")}
                className={
                  activeSection === "#projects"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i class="uil uil-briefcase-alt nav__icon"></i>Projects
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#github"
                onClick={() => setActiveSection("#github")}
                className={
                  activeSection === "#github"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i class="uil uil-scenery nav__icon"></i>Github
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#contact"
                onClick={() => setActiveSection("#contact")}
                className={
                  activeSection === "#contact"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i class="uil uil-scenery nav__icon"></i>Contact
              </a>
            </li>
            <li className="nav__item">
              <a href={CV} target="_blank">
                <button
                  style={{
                    backgroundColor: "rgb(233, 69, 96)",
                    padding: "0.1rem 0.5rem",
                    borderRadius: ".5rem",
                    color: "white",
                    width: "max-content",
                  }}
                >
                  <i class="uil uil-scenery nav__icon"></i> View Resume
                </button>
              </a>
            </li>
          </ul>
          <i
            class="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>
        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i class="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
