
import { logoInitialState } from "./initialState";
import * as ActionTypes from "../actions/actionTypes";

export const logoReducer = (state = logoInitialState, action) => {
  switch (action.type) {
    case ActionTypes.LOGO_START:
      return {
        ...state,
        logoStart: true,
      };
    case ActionTypes.ADD_LOGO_SUCCESS:
      return {
        ...state,
        logos: [...state.logos, action.payload],
        logoStart: false,
      };
    case ActionTypes.GET_LOGO_SUCCESS:
      return {
        ...state,
        logos: action.payload,
        logoStart: false,
      };
    case ActionTypes.GET_SINGLE_LOGO_SUCCESS:
      return {
        ...state,
        singleLogo: action.payload,
        logoStart: false,
      };
    case ActionTypes.DELETE_LOGO_SUCCESS:
      return {
        ...state,
        logos: [],
      };
    case ActionTypes.LOGO_ERROR:
      return {
        ...state,
        logoError: action.payload,
        logoStart: false,
      };
    // case ActionTypes.GET_SINGLE_LOGOS_START:
    //   return {
    //     ...state,
    //     getLOGOStart: true,
    //   };

    // case ActionTypes.GET_SINGLE_LOGOS_ERROR:
    //   return {
    //     ...state,
    //     getLOGOErorr: action.payload,
    //     getLOGOStart: false,
    //   };

    // case ActionTypes.DELETE_LOGO_ERROR:
    //   return {
    //     ...state,
    //     deleteLOGOError: action.payload,
    //   };
    default:
      return state;
  }
};
