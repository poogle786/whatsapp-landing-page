import React from "react";
import Button from "../common/Button";
import "./heroSection.css";
import Typewriter from "typewriter-effect";

function HeroSection() {
  return (
    <div className="hero-section-wrapper">
      <div className="flex flex-col absolute-center hero-section max-width">
        <div className="hero-heading">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Simple. ")
                .pauseFor(1000)
                .typeString("Secure.")
                .pauseFor(1000)
                .typeString(" Reliable messaging. ")
                // .pauseFor(1000)
                // .typeString("Simple. Secure. Reliable messaging.")
                .start();
            }}
          />
        </div>
        <div className="hero-subheading">
          <span>
            With WhatsApp, you'll get fast, simple, secure messaging and calling
            for free, available on phones all over the world.
          </span>
        </div>
        <Button buttonText={"Download"} link={"https://web.whatsapp.com/"} />
      </div>
    </div>
  );
}

export default HeroSection;
