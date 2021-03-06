import React from "react";
import { connect } from "react-redux";

import PrivateRoute from "./utils/PrivateRoute";
import Admin from "./components/Admin";
import LoginForm from "./components/forms/loginForm";
import * as UserActions from "./redux/actions/userActions";

function App(props) {
  return (
    <PrivateRoute path="/">
      {props.token ? (
        <Admin />
      ) : (
        <div className="adminDashboard">
          <LoginForm userStart={props.userStart} loginUser={props.loginUser} />
        </div>
      )}
    </PrivateRoute>
  );
}

function mapStateToProps(state) {
  return {
    token: state.userReducer.token,
    userStart: state.userReducer.userStart,
  };
}

const mapDispatchToProps = {
  loginUser: UserActions.loginUser,
  logoutUser: UserActions.logoutUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
