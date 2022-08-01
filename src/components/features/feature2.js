import React from "react";
import "./features.css";

function Feature2({ title, heading, body, image }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-12 col-10 offset-1 offset-lg-0">
          <img className="feature__image" src={image} alt="" />
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
