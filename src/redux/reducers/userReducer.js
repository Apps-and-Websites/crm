import storage from "local-storage-fallback";

import { userInitialState } from "./initialState";
import * as ActionTypes from "../actions/actionTypes";

export const userReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case ActionTypes.USER_START:
      return {
        ...state,
        userStart: true,
      };
    case ActionTypes.LOGIN_USER_SUCCESS:
      return {
        ...state,
        userStart: false,
        ...action.payload,
      };
    case ActionTypes.USER_ERROR:
      return {
        ...state,
        userStart: false,
        userError: action.payload,
      };
    case ActionTypes.LOGOUT_USER_SUCCESS:
      return {
        ...state,
        token: "",
      };
    default:
      return state;
  }
};
