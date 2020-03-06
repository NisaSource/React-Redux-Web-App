import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import Header from "./Header";
import Landing from "./landing/Landing";
import Footer from "./Footer";
import ContactUs from "./ContactUs";
import AboutUs from "./AboutUs";
import Dashboard from "./Dashboard";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="container">
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/contactus" component={ContactUs} />
            <Route exact path="/aboutus" component={AboutUs} />
            <Route exact path="/surveys" component={Dashboard} />
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
