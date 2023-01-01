import React, { Component } from "react";
import About from "./about";
import Work from "./works";
import Career from "./career";
import Follow from "./follow";

class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <About />
        <Work />
        <Career />
        <Follow />
      </React.Fragment>
    );
  }
}

export default Main;
