import React from "react";
import "./features.css";

function Feature1({title, heading, body, image}) {
  return (
    <div className="feature">
      <div>
        <img src={image} alt="" className="feature__image"></img>
      </div>
      <div>
        <h1 className="feature__title">{title}</h1>
        <div className="feature__heading">{heading}</div>
        <div className="feature__body">{body}</div>
      </div>
    </div>
  );
};

export default Feature1;
