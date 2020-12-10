import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Businesses from "./components/Businesses";
import BusinessDetails from "./components/BusinessDetails";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import { Route, Redirect } from "react-router-dom";

class App extends React.Component {
  state = {
    user: this.props.user,
  };

  setUser = (user) => {
    this.setState({
      user: user,
    });
  };

  render() {
    return (
      <div className="App">
        <Navbar user={this.state.user} setUser={this.setUser} />
        <Route
          exact
          path="/businesses"
          // component={Businesses}
          render={(props) => {
            if (this.state.user) {
              return <Businesses {...props} />;
            } else {
              return <Redirect to="/" />;
            }
          }}
        />
        <Route
          exact
          path="/businesses/:id"
          render={(props) => (
            <BusinessDetails user={this.state.user} {...props} />
          )}
        />
        <Route
          exact
          path="/signup"
          render={(props) => <Signup setUser={this.setUser} {...props} />}
        />
        <Route
          exact
          path="/login"
          render={(props) => <Login setUser={this.setUser} {...props} />}
        />
      </div>
    );
  }
}

export default App;
