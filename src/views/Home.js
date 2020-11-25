import React from "react";
// import sections
import Hero from "../components/sections/Hero";
import FeaturesTiles from "../components/sections/FeaturesTiles";
import AsSeen from "../components/sections/AsSeen";
import FeaturesSplit from "../components/sections/FeaturesSplit";
import Testimonial from "../components/sections/Testimonial";
import Cta from "../components/sections/Cta";
import TrustPilotReviews from "../components/sections/TrustPilotReviews";

const Home = () => {
  return (
    <>
      <Hero className="illustration-section-01" />
      <AsSeen />
      <FeaturesTiles />
      <FeaturesSplit
        invertMobile
        topDivider
        imageFill
        className="illustration-section-02"
      />
      <Testimonial topDivider />
      <TrustPilotReviews />
      <Cta split />
    </>
  );
};

export default Home;
