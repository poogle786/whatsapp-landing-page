import React, { useState } from "react";
import "./header.css";
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <div className="menu-wrapper">
        <div className={`mobile-menu only-mobile ${showMenu ? "overlay" : ""}`}>
          <div className="mobile-navar">
            <div className="mobile-nav-item">WHATSAPP WEB</div>
            <div className="mobile-nav-item">FEATURES</div>
            <div className="mobile-nav-item">DOWNLOAD</div>
            <div className="mobile-nav-item">SECURITY</div>
            <div className="mobile-nav-item">HELP CENTER</div>
          </div>
        </div>
        <div className="flex max-width header">
          <img
            className="header-logo"
            src="https://static.whatsapp.net/rsrc.php/ym/r/36B424nhiL4.svg"
            alt="WhatsApp Logo"
          />
          <div className="only-mobile mobile-menu-button-wrapper">
            <button
              class={`hamburger hamburger--spring ${
                showMenu ? "is-active" : ""
              }`}
              type="button"
              onClick={toggleMenu}
            >
              <span class="hamburger-box">
                <span class="hamburger-inner"></span>
              </span>
            </button>
          </div>
          <div className="flex non-mobile">
            <div className="header-nav-item">WHATSAPP WEB</div>
            <div className="header-nav-item">FEATURES</div>
            <div className="header-nav-item">DOWNLOAD</div>
            <div className="header-nav-item">SECURITY</div>
            <div className="header-nav-item">HELP CENTER</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
