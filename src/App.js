import React from "react";
import Header from "./components/common/Header";
import HeroSection from "./components/HeroSection";
import Feature from "./components/features/feature";
import Mockups from "./components/MockSection";
import Security from "./components/SecuritySection";
import Footer from "./components/common/Footer";
import AppRating from "./components/ratings";
import WindowPeak from "./components/window_peak";
import WindowPeak2 from "./components/window_peak2";
import Vsection from "./components/videosSection";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <Mockups />
      <Feature />
      <Vsection />
      <div className="non-mobile">
        <WindowPeak2 />
      </div>
      <Security />
      <div className="non-mobile">
        <WindowPeak />
      </div>
      <AppRating />
      <Footer />
    </>
  );
}

export default App;
