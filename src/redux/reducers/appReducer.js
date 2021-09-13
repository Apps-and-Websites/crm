// import storage from "local-storage-fallback";

import { appInitialState } from "./initialState";
import * as ActionTypes from "../actions/actionTypes";

export const appReducer = (state = appInitialState, action) => {
  switch (action.type) {
    case ActionTypes.APP_START:
      return {
        ...state,
        appStart: true,
      };
    case ActionTypes.ADD_APP_SUCCESS:
      if (action.payload.id) {
        return {
          ...state,
          apps: state.apps.map((app) =>
            app.id === action.payload.id ? action.payload : app
          ),
          appStart: false,
        };
      } else {
        return {
          ...state,
          apps: [...state.apps, action.payload],
          appStart: false,
        };
      }
    case ActionTypes.APP_ERROR:
      return {
        ...state,
        appErorr: action.payload,
        appStart: false,
      };

    case ActionTypes.GET_APPS_SUCCESS:
      return {
        ...state,
        apps: action.payload,
        appStart: false,
      };

    case ActionTypes.GET_SINGLE_APP_SUCCESS:
      return {
        ...state,
        singleApp: action.payload,
        appStart: false,
      };

    case ActionTypes.DELETE_APP_SUCCESS:
      return {
        ...state,
        apps: [],
      };
    default:
      return state;
  }
};
