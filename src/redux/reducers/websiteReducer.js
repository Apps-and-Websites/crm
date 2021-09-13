// import storage from "local-storage-fallback";

import { websiteInitialState } from "./initialState";
import * as ActionTypes from "../actions/actionTypes";

export const websiteReducer = (state = websiteInitialState, action) => {
  switch (action.type) {
    case ActionTypes.WEBSITE_START:
      return {
        ...state,
        websiteStart: true,
      };
    case ActionTypes.ADD_WEBSITE_SUCCESS:
      if (action.payload.id) {
        return {
          ...state,
          websites: state.websites.map((website) =>
            website.id === action.payload.id ? action.payload : website
          ),
          websiteStart: false,
        };
      } else {
        return {
          ...state,
          websites: [...state.websites, action.payload],
          websiteStart: false,
        };
      }
    case ActionTypes.WEBSITE_ERROR:
      return {
        ...state,
        websiteErorr: action.payload,
        websiteStart: false,
      };

    case ActionTypes.GET_WEBSITES_SUCCESS:
      return {
        ...state,
        websites: action.payload,
        websiteStart: false,
      };

    case ActionTypes.GET_SINGLE_WEBSITE_SUCCESS:
      return {
        ...state,
        singleWebsite: action.payload,
        websiteStart: false,
      };

    case ActionTypes.DELETE_WEBSITE_SUCCESS:
      return {
        ...state,
        websites: [],
      };
    default:
      return state;
  }
};
