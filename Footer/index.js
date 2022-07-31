import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <footer>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="col-6 col-lg-3">
                  <h4>WHATSAPP</h4>
                  <ul>
                    <li>
                      <a href="/feature2.js">Features</a>
                    </li>
                    <li>
                      <a href="https://www.whatsapp.com/download">Download</a>
                    </li>
                    <li>
                      <a href="/security.js">Security</a>
                    </li>
                    <li>
                      <a href="https://faq.whatsapp.com/">Help Center</a>
                    </li>
                  </ul>
                </div>

                <div className="col-6 col-lg-3">
                  <h4>COMPANY</h4>
                  <ul>
                    <li>
                      <a href="https://www.whatsapp.com/about">About</a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/brand/resources/whatsapp/whatsapp-brand">Brand Center</a>
                    </li>
                    <li>
                      <a href="https://blog.whatsapp.com/">Blogs</a>
                    </li>
                    <li>
                      <a href="https://blog.whatsapp.com/">Articles</a>
                    </li>
                  </ul>
                </div>

                <div className="col-6 col-lg-3">
                  <h4>DOWNLOAD</h4>
                  <ul>
                    <li>
                      <a href="https://www.whatsapp.com/download">PC</a>
                    </li>
                    <li>
                      <a href="https://www.whatsapp.com/android">ANDROID</a>
                    </li>
                    {/* <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">About</a>
                    </li> */}
                  </ul>
                </div>

                <div className="col-6 col-lg-3">
                  <h4>Help</h4>
                  <ul>
                    <li>
                      <a href="https://faq.whatsapp.com/">Help Center</a>
                    </li>
                    <li>
                      <a href="https://twitter.com/whatsapp">Twitter</a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/WhatsApp">Facebook</a>
                    </li>
                    <li>
                      <a href="https://www.whatsapp.com/coronavirus">Coronavirus</a>
                    </li>
                  </ul>
                  {/* <div className="row">
                    <div className="col-3 mx-auto">
                      <i class="fab fa-facebook-f fontawesome-style"></i>
                    </div>
                    <div className="col-3 mx-auto">
                      <a
                        href="https://www.instagram.com/thapatechnical/"
                        target="_thapa">
                        <i class="fab fa-instagram fontawesome-style"></i>
                      </a>
                    </div>
                    <div className="col-3 mx-auto">
                      <i class="fab fa-youtube fontawesome-style"></i>
                    </div>
                    <div className="col-3 mx-auto">
                      <i class="fab fa-twitter fontawesome-style"></i>
                    </div>
                  </div> */}
                </div>
              </div>
              <hr />
              <div className="mt-5">
                <p className="main-hero-para text-center w-100">
                  Copyright @ 2022 WhatsApp. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    
  );
};

export default Footer;