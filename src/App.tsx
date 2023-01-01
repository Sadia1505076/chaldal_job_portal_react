import React from "react";
import Navbar from "./components/navbar";
import Introduction from "./components/introduction";
import Main from "./components/main";
import Footer from "./components/footer";
import BackToTop from "./components/backToTop";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Introduction />
      <Main />
      <Footer />
      <BackToTop />
    </React.Fragment>
  );
}

export default App;
