import React from "react";
import "./features1.css";

function Feature3({title, heading, body, image}) {
  return (
    <div className="feature1">
      <div>
        <h1 className="feature1__title">{title}</h1>
        <div className="feature1__heading">{heading}</div>
        <div className="feature1__body">{body}</div>
      </div>
      <div>
        <img src={image} alt="" className="feature1__image"></img>
      </div>
    </div>
  );
};

export default Feature3;
