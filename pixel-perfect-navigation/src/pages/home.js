import React, { Component } from "react";
import MoreDetails from "../components/MoreDetails";

export default class Home extends Component {
  render() {
    return (
      <body class="screen1-bg">
        <div class="blue-graphic">
          <section class="container">
            <MoreDetails />
          </section>
        </div>
      </body>
    );
  }
}
