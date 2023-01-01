import React, { Component } from "react";
import { Link } from "react-scroll";

class Introduction extends Component {
  render() {
    return (
      <section id="introduction">
        <div className="container">
          <div className="inner-intro">
            <h2>Code for Impact.</h2>
            <div className="intro-des">
              Our technology drives supply chains, connects farmers and supports
              refugee camps.
            </div>
            <div id="intro-btn">
              <Link
                className="btn btn-outline-primary px-3 scrollto"
                to="career"
                smooth={true}
                offset={-150}
                duration={500}
              >
                JOIN US
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Introduction;
