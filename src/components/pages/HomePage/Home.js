import React from "react";
import HeroSection from "../../HeroSection";
import Pricing from "../../Pricing";
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from "./Data";

function Home() {
  return (
    <>
      <HeroSection {...homeObjOne}></HeroSection>
      <HeroSection {...homeObjThree}></HeroSection>
      <HeroSection {...homeObjTwo}></HeroSection>
      {/* <Pricing></Pricing> */}
      {/* <HeroSection {...homeObjFour}></HeroSection> */}
    </>
  );
}

export default Home;
