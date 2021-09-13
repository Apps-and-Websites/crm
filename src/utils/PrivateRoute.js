import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ component: Component, token, ...theRest }) => {
  return (
    <Route
      {...theRest}
      render={(props) => {
        if (token) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/" />;
        }
      }}
    />
  );
};

function mapStateToProps(state) {
  return {
    token: state.userReducer.token,
  };
}

export default connect(mapStateToProps)(PrivateRoute);
