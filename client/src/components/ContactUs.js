import React, { Fragment } from "react";

const ContactUs = () => {
  return (
    <Fragment>
      <div className="container section scrollspy" id="contactus">
        <div>
          <br></br>
          <h2 className="center contactUs lighten-1">Contact Us</h2>
          <p className="center lighten-2">
            Please fill the form to send us message.
          </p>
          <div className="row">
            <form className="col s8 offset-s2">
              <div className="row">
                <div className="input-field col s6">
                  <input id="name" type="text" className="validate" />
                  <label for="name">Your Name</label>
                </div>

                <div className="input-field col s6">
                  <input id="email" type="email" className="validate" />
                  <label for="email">Your Email</label>
                </div>
              </div>

              <div className="row">
                <div className="input-field col s12">
                  <input id="message-sub" type="email" className="validate" />
                  <label for="message-sub">Message Subject</label>
                </div>
              </div>

              <div className="row">
                <div className="input-field col s12">
                  <textarea
                    id="text_area"
                    className="materialize-textarea"
                  ></textarea>
                  <label for="text_area">Your Message</label>
                </div>
              </div>

              <div>
                <a
                  href="!#"
                  className="waves-effect waves-light btn orange"
                  style={{ color: "black" }}
                >
                  Send Message<i className="mdi-content-send right"></i>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ContactUs;
