import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import FeatureSection from "./FeatureSection";
import CardSection from "./CardSection";
import Footer from "./Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <CardSection />
      <Footer />
    </div>
  );
};

export default App;
