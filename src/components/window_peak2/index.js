import React from "react";
import "./window_peak2.css";
const openInNewTab = (url) => {
  window.open(url, "_blank", "noopener,noreferrer");
};
const WindowPeak2 = () => {
  return (
    <>
      <div
        className="window-peak2"
        onClick={() => openInNewTab("https://blog.whatsapp.com/")}
      ></div>
      ;
    </>
  );
};

export default WindowPeak2;
