import * as ActionTypes from "./actionTypes";
import axiosWithAuth from "../../utils/axioswithAuth";

export const toggleLightMode = () => (dispatch) => {
  dispatch({ type: ActionTypes.TOGGLE_LIGHT_MODE });
};

export const sendEmail = (data) => (dispatch) => {
  axiosWithAuth()
    .post("/email", data)
    .then((emailSent) => {
      dispatch({ type: ActionTypes.SEND_EMAIL_SUCCESS, payload: emailSent });
    })
    .catch((err) => {
      dispatch({ type: ActionTypes.SEND_EMAIL_ERROR, payload: err });
    });
};
