import React, { Component } from "react";
// import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="lander">
          <h1>HAX Supplier Database</h1>
          <p>You need to login dude!</p>
          <p>
            Want access to this supplier database? You need to sign up first! If
            you ask Katie without signing up, she will send you this link and
            then not talk to you until you have followed it.
          </p>
        </div>
      </div>
    );
  }
}
