import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Intro from "../components/Intro";

const HomeView = () => {
    return (
        <>
            <Header />
            <Main>
                <Intro />
            </Main>
            <Footer />
        </>
    )
}

export default HomeView;