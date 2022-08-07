import React from "react";
import Button from "../common/Button";
import "./appRating.css";

const getIosPrefix = () => {
  return (
    <img
      src="https://web-images.credcdn.in/_next/assets/images/home-page/apple-store-logo.png"
      className="app-rating-icon"
      alt=""
    />
  );
};

const getAndroidPrefix = () => {
  return (
    <img
      src="https://web-images.credcdn.in/_next/assets/images/home-page/play-store-logo.png"
      className="app-rating-icon"
      alt=""
    />
  );
};
const AppRating = () => {
  return (
    <div className="max-width app-rating flex " id="ratings">
      <div className="flex app-rating-block flex-col">
        <div className="flex">
          <div className="app-rating-value flex flex-col">
            4.8
            <img
              src="https://web-images.credcdn.in/_next/assets/images/home-page/rating-ios.png"
              className="app-rating-stars"
              alt=""
            />
          </div>
          <div className="app-rating-platform">
            app <br /> store
          </div>
        </div>
        <div className="non-mobile">
          <Button
            prefix={getIosPrefix()}
            buttonText="Download the app"
            customClass="app-rating-button"
            link="https://apps.apple.com/in/app/whatsapp-messenger/id310633997"
          />
        </div>
      </div>
      <div className="flex app-rating-block flex-col">
        <div className="flex">
          <div className="app-rating-value flex flex-col">
            4.7
            <img
              src="https://web-images.credcdn.in/_next/assets/images/home-page/rating-android.png"
              className="app-rating-stars"
              alt=""
            />
          </div>
          <div className="app-rating-platform">
            play <br /> store
          </div>
        </div>
        <div className="non-mobile">
          <Button
            prefix={getAndroidPrefix()}
            buttonText="Download the app"
            customClass="app-rating-button"
            link="https://play.google.com/store/apps/details?id=com.whatsapp&hl=en_IN&gl=US"
          />
        </div>
      </div>
      <div className="only-mobile">
        <Button buttonText="Download the app" />
      </div>
    </div>
  );
};

export default AppRating;
