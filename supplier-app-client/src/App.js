import React, { Component, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
// Boostrap stuff
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Auth } from "aws-amplify";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import Routes from "./Routes.js";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false,
      isAuthenticating: true
    };
  }

  async componentDidMount() {
    try {
      if (await Auth.currentSession()) {
        this.userHasAuthenticated(true);
      }
    } catch (e) {
      if (e !== "No current user") {
        alert(e);
      }
    }

    this.setState({ isAuthenticating: false });
  }

  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  };

  handleLogout = async event => {
    await Auth.signOut();

    this.userHasAuthenticated(false);
    this.props.history.push("/login");
  };

  // <TextField
  //   id="with-placeholder"
  //   label="Email Address"
  //   placeholder="Email"
  //   margin="normal"
  // />
  // <TextField
  //   id="with-placeholder"
  //   label="Password"
  //   placeholder="Password"
  //   margin="normal"
  // />
  // <Button variant="contained" href="/signup">
  //   Sign Up
  // </Button>
  // <Button variant="contained" href="/login">
  //   Login
  // </Button>

  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated
    };

    return (
      !this.state.isAuthenticating && (
        <div className="App">
          <Navbar fluid collapseOnSelect>
            <Navbar.Collapse>
              <Nav>
                {this.state.isAuthenticated ? (
                  <div>
                    <Navbar.Brand>
                      <Link to="/loggedin">HAX</Link>
                    </Navbar.Brand>
                    <Fragment>
                      <LinkContainer to="/MySupplier">
                        <NavItem>Welcome XXX</NavItem>
                      </LinkContainer>
                      <NavItem onClick={this.handleLogout}>Logout</NavItem>
                    </Fragment>
                  </div>
                ) : (
                  <div>
                    <Navbar.Brand>
                      <Link to="/">HAX</Link>
                    </Navbar.Brand>
                    <Fragment>
                      <LinkContainer to="/signup">
                        <NavItem>Signup</NavItem>
                      </LinkContainer>
                      <LinkContainer to="/login">
                        <NavItem>Login</NavItem>
                      </LinkContainer>
                    </Fragment>
                  </div>
                )}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Routes childProps={childProps} />
        </div>
      )
    );
  }
}

export default withRouter(App);
