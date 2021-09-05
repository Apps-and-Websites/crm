import React from "react";
import { connect } from "react-redux";

import Admin from "./Admin";
import LoginForm from "./loginForm";
import * as UserActions from "../../redux/actions/userActions";

function DashboardAdmin(props) {
  return (
    <div>
      {props.token ? (
        <Admin />
      ) : (
        <div className="adminDashboard">
          {" "}
          <LoginForm userStart={props.userStart} loginUser={props.loginUser} />
        </div>
      )}
    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(DashboardAdmin);
