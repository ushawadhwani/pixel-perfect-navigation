import React, { Component } from "react";
import { withRouter } from "react-router";
import bannerImage from "../assets/bannerImage.png";
class WalletDetails extends Component {
  render() {
    return (
      <form class="user-profile-box">
        <div class="user-profile-section">
          <img src="https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg" />
          <div class="user-profile-details">
            <p class="user-profile-name">John Doe</p>
            <p class="user-profile-sign">@username</p>
          </div>
        </div>
        <div class="user-profile-wallet-details">
          <h2>Wallet</h2>
          <div
            class="w-100 d-flex justify-content-between"
            style={{ display: "flex" }}
          >
            <div>
              <span class="label">USD</span>
              <p class="value">155.21</p>
            </div>
            <div
              style={{
                marginLeft: "auto",
                order: 2,
              }}
            >
              <span class="label">BTC</span>
              <p class="value">0.012931</p>
            </div>
          </div>
        </div>
        <div class="user-profile-controls">
          <button class="btn" type="submit">
            Invites
          </button>
          <button class="btn m-auto" type="submit">
            Join Requests
          </button>
          <button class="btn" type="submit">
            Transfer
          </button>
          <button
            class="btn"
            type="submit"
            onClick={() => this.props.history.push("/")}
          >
            Redirect to screen1
          </button>
        </div>
      </form>
    );
  }
}

export default withRouter(WalletDetails);
