import React from "react";
import "./button.css";
const Button = ({ buttonText, onClick, customClass, prefix, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div
        className={`flex absolute-center button-wrapper ${customClass}`}
        onClick={onClick}
      >
        {prefix}
        {buttonText}
      </div>
    </a>
  );
};

export default Button;
