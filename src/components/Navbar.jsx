import React, { useState } from "react";
import { useScrollPosition } from "../hooks/useScrollPosition";
import useResizeObserver from "../hooks/useResizeObserver";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
<<<<<<< HEAD
import { mainBody, repos, about, skills } from "../editable-stuff/config.js";
=======
import { mainBody, about, skills } from "../editable-stuff/config.js";
>>>>>>> d04f68f (Initial commit)
import { NavLink } from "./home/migration";

const Navigation = React.forwardRef((props, ref) => {
  // const { showBlog, FirstName } = config;
  const [isTop, setIsTop] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const navbarMenuRef = React.useRef();
  const navbarDimensions = useResizeObserver(navbarMenuRef);
  const navBottom = navbarDimensions ? navbarDimensions.bottom : 0;
<<<<<<< HEAD
=======

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

>>>>>>> d04f68f (Initial commit)
  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!navbarDimensions) return;
      currPos.y + ref.current.offsetTop - navbarDimensions.bottom > 5
        ? setIsTop(true)
        : setIsTop(false);
      setScrollPosition(currPos.y);
    },
    [navBottom]
  );

  React.useEffect(() => {
    if (!navbarDimensions) return;
    navBottom - scrollPosition >= ref.current.offsetTop
      ? setIsTop(false)
      : setIsTop(true);
  }, [navBottom, navbarDimensions, ref, scrollPosition]);

  return (
    <Navbar
      ref={navbarMenuRef}
      className={`px-3 fixed-top  ${!isTop ? "navbar-white" : "navbar-transparent"
        }`}
      expand="lg"
    >
<<<<<<< HEAD
      <Navbar.Brand className="navbar-brand" href={process.env.PUBLIC_URL + "/#home"}>
=======
      <Navbar.Brand className="navbar-brand" onClick={() => scrollToSection('home')} style={{ cursor: 'pointer' }}>
>>>>>>> d04f68f (Initial commit)
        {`<${mainBody.firstName} />`}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="navbar-nav mr-auto">
          {/* {
            <NavLink className="nav-item lead">
              <Link to={process.env.PUBLIC_URL + "/blog"}>Blog</Link>
            </NavLink>
          } */}
<<<<<<< HEAD
          {repos.show && (

            <NavLink
              href={process.env.PUBLIC_URL + "/#projects"}
            >
              Projects
=======
          {about.show && (
            <NavLink
              className="nav-item lead"
              href="#aboutme"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('aboutme');
              }}
            >
              About
            </NavLink>
          )}
          <NavLink
            href="#experiences"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('experiences');
            }}
          >
            Experiences
          </NavLink>
          <NavLink
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('projects');
            }}
          >
            Projects
          </NavLink>
          {skills.show && (
            <NavLink
              className="nav-item lead"
              href="#skills"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('skills');
              }}
            >
              Skills
>>>>>>> d04f68f (Initial commit)
            </NavLink>
          )}
          <NavLink
            className="nav-item lead"
            href={about.resume}
            target="_blank"
            rel="noreferrer noopener"
          >
            Resume
          </NavLink>
<<<<<<< HEAD
          {about.show && (
            <NavLink
              className="nav-item lead"
              href={process.env.PUBLIC_URL + "/#aboutme"}
            >
              About
            </NavLink>
          )}
          {skills.show && (
            <NavLink
              className="nav-item lead"
              href={process.env.PUBLIC_URL + "/#skills"}
            >
              Skills
            </NavLink>
          )}
=======
>>>>>>> d04f68f (Initial commit)
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
});

export default Navigation;
