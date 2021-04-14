import React, { Component } from "react";
import { withRouter } from "react-router";
import bannerImage from "../assets/bannerImage.png";
class WalletDetails extends Component {
  render() {
    const { history } = this.props;

    return (
      <div class="flex-center">
        <img className="board" src={bannerImage} />
        <span className="board round-button">
          Wallet Balance: $<strong>{0}</strong> stats |{" "}
          <strong> $ {"0.0000"}</strong>
        </span>
        <input className="board round-button" />
        <button
          class="round-button confirm"
          onClick={() => history.push("/screen2")}
        >
          Confirm
        </button>
      </div>
    );
  }
}

export default withRouter(WalletDetails);
