import React, { Fragment } from "react";
import landing from "../image/landing3.png"; // Tell webpack this JS file uses this image

const Landing = () => {
  return (
    <Fragment>
      <div className="row">
        <div className="col s12 m12 l12 no-padding">
          <img
            src={landing}
            className="responsive-img"
            alt="Survey Service Img 1"
            style={{ marginBottom: "0px" }}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Landing;
