import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Intro from "../components/Intro";
import Career from "../components/Career";
import Education from "../components/Education";
import About from "../components/About";

const HomeView = () => {
  return (
    <>
      <Header />
      <Main>
        <Intro />
        <Career />
        <Education />
        <About />
      </Main>
      <Footer />
    </>
  )
}

export default HomeView;