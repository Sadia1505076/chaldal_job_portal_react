import React, { Component } from "react";

class Follow extends Component {
  render() {
    const socialMedias = [
      {
        link:  "https://www.facebook.com/chaldalcom",
        class: "facebook",
      },
      {
        link:  "https://www.linkedin.com/company/chaldal-com",
        class: "linkedin",
      },
      {
        link:  "https://www.instagram.com/chaldal_bd/",
        class: "instagram",
      },
      { 
        link:  "https://twitter.com/chaldal", 
        class: "twitter" 
      },
      {
        link:  "https://www.youtube.com/channel/UCbMfF6hcthzQ2swy4R0wk-g",
        class: "youtube",
      },
    ];
    return (
      <section id="follow">
        <div className="container">
          <div className="hr-divider mt-5 mb-5 ml-2">
            <div className="hr-divider-content hr-divider-heading">
              <span>FOLLOW CHALDAL</span>
            </div>
          </div>
          <div className="row justify-content-center wow fadeInUp">
            <div className="social-media">
              {socialMedias.map((media) => {
                return (
                  <a
                    className="social-link"
                    key={media.class}
                    href={media.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className={"icon icon-" + media.class}></span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Follow;
