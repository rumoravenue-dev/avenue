import React from "react";

import Header from "../../components/header";
import TakeALook from "../../components/takeALook/takeALook";
import Footer from "../../components/footer";
import "./portfolio.css";

function Portfolio() {
  const home = true;
  return (
    <>
      <Header />
      <TakeALook home={home}/>
      <Footer />
    </>
  );
}

export default Portfolio;
