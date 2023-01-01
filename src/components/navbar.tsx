import React, { Component } from "react";
import logo from "../img/logo.png";
import { Link } from "react-scroll";

class Navbar extends Component {
  render() {
    const navListItems = [
      { 
        title: "Home", 
        to:    "introduction" 
      },
      { 
        title: "About Us", 
        to:    "about" 
      },
      { 
        title: "Our Work", 
        to:    "our-work" 
      },
      { 
        title: "Careers", 
        to:    "career" 
      },
      { 
        title: "Chaldal.com", 
        to:    "https://chaldal.com/" 
      },
    ];
    return (
      <header>
        <nav className="navbar navbar-expand-sm navbar-dark fixed-top">
          <div className="container nav-container">
            <a className="navbar-brand" href="#introduction">
              <img src={logo} alt="logo" />
            </a>
            <button
              className="navbar-toggler navbar-dark"
              type="button"
              data-toggle="collapse"
              data-target="#main-navigation"
              aria-controls="main-navigation"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="main-navigation"
            >
              <ul className="navbar-nav">
                {navListItems.map((listItem) => {
                  return (
                    <li key={listItem.title} className="nav-item">
                      {listItem.title === "Chaldal.com" ? (
                        <a
                          className="nav-a nav-link"
                          href={listItem.to}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {listItem.title}
                        </a>
                      ) : (
                        <Link
                          className="nav-a nav-link"
                          to={listItem.to}
                          smooth={true}
                          spy={true}
                          offset={-150}
                          duration={500}
                        >
                          {listItem.title}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Navbar;
