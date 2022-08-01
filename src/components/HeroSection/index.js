import React from "react";
import Button from "../common/Button";
import "./heroSection.css";

function HeroSection() {
  return (
    <div className="hero-section-wrapper">
      <div className="flex flex-col absolute-center hero-section max-width">
        <div className="hero-heading">
          <span>Simple. Secure. Reliable messaging.</span>
        </div>
        <div className="hero-subheading">
          <span>
            With WhatsApp, you'll get fast, simple, secure messaging and calling
            for free, available on phones all over the world.
          </span>
        </div>
        <Button buttonText={"Download"} />
      </div>
    </div>
  );
}

export default HeroSection;
