import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Professional Portfolio
          </Link>

          <div>
            <ul className="navbar-nav ml-auto">
              <li
                className={`nav-item  ${props.location.pathname === "/" ? "active" : ""
                  }`}
              >
                <Link className="nav-link" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li
                className={`nav-item  ${props.location.pathname === "/about" ? "active" : ""
                  }`}
              >
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li
                className={`nav-item  ${props.location.pathname === "/projects" ? "active" : ""
                  }`}
              >
                <Link className="nav-link" to="/projects">
                  Projects
                </Link>
              </li>
              <li
                className={`nav-item  ${props.location.pathname === "/skills" ? "active" : ""
                  }`}
              >
                <Link className="nav-link" to="/skills">
                  Skills
                </Link>
              </li>
              <li
                className={`nav-item  ${props.location.pathname === "/contact" ? "active" : ""
                  }`}
              >
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);
