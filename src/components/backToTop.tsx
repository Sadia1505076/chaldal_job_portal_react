import React, { Component } from "react";
import { Link } from "react-scroll";
var classNames = require("classnames");

interface BackToTopState {
  isOnTop: boolean;
}

class BackToTop extends Component<{}, BackToTopState> {
  state = {
    isOnTop: true,
  };

  componentDidMount() {
    window.addEventListener("scroll", this.checkScrollTop);
  }

  checkScrollTop = () => {
    if (window.pageYOffset < 100) {
      this.setState({ isOnTop: true });
    } else {
      this.setState({ isOnTop: false });
    }
  };

  render() {
    let classesForBackToTop: string = classNames({
      "back-to-top": true,
      "fadeOut":     this.state.isOnTop,
      "fadeIn":      !this.state.isOnTop,
    });

    return (
      <Link
        className={classesForBackToTop}
        to="introduction"
        smooth={true}
        offset={-150}
        duration={500}
      >
        Back to Top
      </Link>
    );
  }
}

export default BackToTop;
