import React from "react";
import Home from "./../pages/Home.js";
import Footer from './../components/Footer.js'
import HomeHeader from "./../components/HomeHeader.js";

const HomeContainer = () => {
  return (
    <div>
      <HomeHeader></HomeHeader>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
};

export default HomeContainer;
