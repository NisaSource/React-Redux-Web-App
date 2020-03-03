import React, { Fragment } from "react";
import aboutus from "./image/aboutus.png"; // Tell webpack this JS file uses this image

const AboutUs = () => {
  return (
    <Fragment>
      <div
        className="parallax-container section scrollspy valign-wrapper"
        id="aboutus"
      >
        <div className="section no-pad-bot">
          <div className="container">
            <div className="center row col s3">
              <h3 className="aboutUs orange-text">About Us</h3>
            </div>
            <div className="center row col s12" style={{ color: "black" }}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <img src={aboutus} alt="img" className="responsive-img" />
        </div>
      </div>
    </Fragment>
  );
};

export default AboutUs;
