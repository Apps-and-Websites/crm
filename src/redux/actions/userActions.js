import storage from "local-storage-fallback";
import * as ActionTypes from "./actionTypes";
import axiosWithAuth from "../../utils/axioswithAuth";

export const loginUser = (userInfo) => (dispatch) => {
  dispatch({ type: ActionTypes.USER_START });

  return axiosWithAuth()
    .post("/users/login", userInfo)
    .then((res) => {
      storage.setItem("token", res.data.token);
      dispatch({ type: ActionTypes.LOGIN_USER_SUCCESS, payload: res.data });
      return res;
    })
    .catch((err) => {
      dispatch({ type: ActionTypes.USER_ERROR, payload: err });
      return err;
    });
};

export const logoutUser = () => (dispatch) => {
  storage.removeItem("token");
  dispatch({ type: ActionTypes.LOGOUT_USER_SUCCESS });
};
