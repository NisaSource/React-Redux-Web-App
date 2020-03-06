import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import logo from "./image/logo.png"; // Tell webpack this JS file uses this image

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <a id="login" href="/auth/google" className="darken-5 orange-text">
            Login With Google
          </a>
        );
      default:
        return (
          <a id="logout" href="/api/logout" className="darken-5 orange-text">
            Logout
          </a>
        );
    }
  }

  render() {
    //console.log(this.props);
    return (
      <Fragment>
        <div className="black" style={{ margin: "0px", textAlign: "center" }}>
          <Link
            to={this.props.auth ? "/surveys" : "/"}
            className="center brand-logo"
          >
            <img id="logoimg" src={logo} alt="" className="logo-img" />
          </Link>
        </div>

        <nav className="black">
          <div className="nav-wrapper">
            <ul className="darken-5 orange-text">
              <li className="right">{this.renderContent()}</li>
              <li>
                <a
                  id="contact"
                  className="darken-5 orange-text"
                  href="contactus"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a id="about" className="darken-5 orange-text" href="aboutus">
                  About Us
                </a>
              </li>
              <li>
                <a
                  id="surveyList"
                  className="darken-5 orange-text right"
                  href="surveylist"
                >
                  Survey List
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </Fragment>
    );
  }
}

function mapStateToProps({ auth }) {
  //console.log("auth", auth);
  return {
    auth
  };
}

export default connect(mapStateToProps)(Header);
