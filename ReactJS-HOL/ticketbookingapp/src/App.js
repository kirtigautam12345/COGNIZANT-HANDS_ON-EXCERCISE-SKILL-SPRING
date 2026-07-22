import React, { Component } from "react";

import GuestPage from "./GuestPage";
import UserPage from "./UserPage";
import Login from "./Login";
import Logout from "./Logout";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  login = () => {
    this.setState({
      isLoggedIn: true,
    });
  };

  logout = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    let button;
    let page;

    if (this.state.isLoggedIn) {
      button = <Logout logout={this.logout} />;
      page = <UserPage />;
    } else {
      button = <Login login={this.login} />;
      page = <GuestPage />;
    }

    return (
      <div style={{ marginLeft: "20px" }}>
        <h1>Ticket Booking App</h1>

        {button}

        <hr />

        {page}
      </div>
    );
  }
}

export default App;
