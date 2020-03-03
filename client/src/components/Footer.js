import React, { Fragment } from "react";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <Fragment>
      <footer className="page-footer">
        <div className="container">
          <div className="row">
            <div className="col s6 offset-s4">
              <SocialIcon
                url="https://www.facebook.com/sharer/sharer.php?u=&t="
                bgColor="white"
              />
              <SocialIcon
                url="https://twitter.com/intent/tweet?source=&text=:%20"
                bgColor="white"
              />
              <SocialIcon
                url="https://plus.google.com/share?url="
                bgColor="white"
              />
              <SocialIcon
                url="http://www.linkedin.com/shareArticle?mini=true&url=&title=&summary=&source="
                bgColor="white"
              />
            </div>
          </div>
          <div className="footer-copyright darken-5 orange-text">
            <div className="container" style={{ textAlign: "center" }}>
              © 2020 Survey Service, All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
