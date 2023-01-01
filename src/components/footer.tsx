import React, { Component } from "react";

class Footer extends Component {
  render() {
    const footers = [
      { 
        title: "FAQ", 
        link:  "https://chaldal.com/t/Help" 
      },
      { 
        title: "Our Story", 
        link:  "https://chaldal.com/t/AboutUs" 
      },
      { 
        title: "Privacy Policy", 
        link:  "https://chaldal.com/t/PrivacyInfo" 
      },
      { 
        title: "Terms of Use", 
        link:  "https://chaldal.com/t/TermsOfUse" 
      },
      { 
        title: "Contact Us", 
        link:  "https://chaldal.com/t/ContactUs" 
      },
    ];
    return (
      <footer id="footer">
        <div className="container">
          <div id="bottom-links">
            <ul className="nav justify-content-center">
              {footers.map((f) => {
                return (
                  <li className="nav-item" key={f.title}>
                    <a
                      href={f.link}
                      className="nav-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {f.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
