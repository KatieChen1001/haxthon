import React from "react";
import { Switch } from "react-router-dom";
import AppliedRoute from "./components/AppliedRoute";
import Home from "./containers/Home.js";
import Login from "./containers/Login.js";
import Signup from "./containers/Signup.js";
import NewSupplier from "./containers/NewSupplier.js";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";
import Loggedin from "./containers/Loggedin.js";
import MySupplier from "./containers/MySupplier.js";
import Supplier from "./containers/Supplier.js";

export default ({ childProps }) => (
  <Switch>
    <AppliedRoute path="/" exact component={Home} props={childProps} />
    <UnauthenticatedRoute
      path="/login"
      exact
      component={Login}
      props={childProps}
    />
    <AppliedRoute path="/signup" exact component={Signup} props={childProps} />

    <AuthenticatedRoute
      path="/loggedin"
      exact
      component={Loggedin}
      props={childProps}
    />
    <AuthenticatedRoute
      path="/MySupplier"
      exact
      component={MySupplier}
      props={childProps}
    />
    <AppliedRoute
      exact
      path="/supplier/new"
      exact
      component={NewSupplier}
      props={childProps}
    />
    <AppliedRoute
      path="/supplier/:id"
      exact
      component={Supplier}
      props={childProps}
    />

    {/* Finally, catch all unmatched routes */}
  </Switch>
);
