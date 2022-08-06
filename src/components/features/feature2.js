import React, { useEffect, useRef, useState } from "react";
import "./features.css";

function Feature2({ title, heading, body, image }) {
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
    <div className="container">
      <div className="row">
        <div
          className={`non-mobile col-lg-6 col-md-12 col-10 offset-1 offset-lg-0 ${
            showAnimation ? "scale-in-bottom" : ""
          }`}
          ref={ref}
        >
          {showAnimation && (
            <img className="feature__image" src={image} alt="" />
          )}
        </div>
        <div className="feature__text col-lg-6 col-md-12 col-12">
          <h2 className="feature__title">{title}</h2>
          <h1 className="feature__heading">{heading}</h1>
          <h5 className="feature__body">{body}</h5>
        </div>
      </div>
    </div>
  );
}

export default Feature2;
