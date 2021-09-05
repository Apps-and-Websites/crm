import storage from "local-storage-fallback";

import { initialState } from "./initialState";
import * as ActionTypes from "../actions/actionTypes";

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.TOGGLE_LIGHT_MODE:
      storage.setItem("isLight", !state.isLight);
      return {
        ...state,
        isLight: !state.isLight,
      };
    default:
      return state;
  }
};
