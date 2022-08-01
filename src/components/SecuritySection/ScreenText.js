import React, { useEffect, useRef, useState } from "react";

const ScreenText = ({ screen, setCurrentImg, i }) => {
  const [showAnimation, setShowAnimation] = useState(false);
  const ref = useRef(null);
  const toggleAnimation = (e) => {
    if (e[0].isIntersecting) {
      setShowAnimation(true);
      setCurrentImg(i);
    }
  };
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.6,
  };
  useEffect(() => {
    const observer = new IntersectionObserver(toggleAnimation, options);
    const curr = ref.current;
    if (curr) {
      observer.observe(curr);
    }
    return () => {
      if (curr) {
        observer.unobserve(curr);
      }
    };
  });
  return (
    <div
      className={`screen-text ${showAnimation ? "text-visible" : ""}`}
      ref={ref}
    >
      <div className="screen-heading">{screen.heading}</div>
      <div className="mobile-mockup-wrapper only-mobile">
        <div className="mobile-mockup">
          <div className="mobile-mockup-screen flex absolute-center">
            <img
              src={screen.image}
              className="mobile-screen-img"
              alt="security-images"
            />
          </div>
        </div>
      </div>
      <div className="screen-desc">{screen.description}</div>
    </div>
  );
};

export default ScreenText;
