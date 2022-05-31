import React, { useEffect, useRef, useState } from "react";
import "./mocks.css";
import el from "./mockups/el.png";
import l from "./mockups/l.png";
import c from "./mockups/c.png";
import r from "./mockups/r.png";
import er from "./mockups/er.png";

const Mockups = () => {
  const [showAnimation, setShowAnimation] = useState(false);
  const ref = useRef(null);
  const toggleAnimation = (e) => {
    if (e[0].isIntersecting) {
      setShowAnimation(true);
    }
  };
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };
  useEffect(() => {
    const observer = new IntersectionObserver(toggleAnimation, options);
    const curr = ref.current;
    if (!showAnimation) {
      if (curr) {
        observer.observe(curr);
      }
    }
    return () => {
      if (curr) {
        observer.unobserve(curr);
      }
    };
  });
  return (
    <div
      className={`mockup-showcase ${showAnimation ? "scale-up-bottom" : ""}`}
      ref={ref}
    >
      {showAnimation && (
        <div className="mockup-wrapper">
          <img src={el} alt="extreme-left" className="mockup-ui el" />
          <img src={l} alt="left" className="mockup-ui l" />
          <img src={c} alt="center" className="mockup-ui c" />
          <img src={r} alt="right" className="mockup-ui r" />
          <img src={er} alt="extreme-rightcls" className="mockup-ui er" />
        </div>
      )}
    </div>
  );
};
export default Mockups;
