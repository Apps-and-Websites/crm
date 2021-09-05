
import { graphicInitialState } from "./initialState";
import * as ActionTypes from "../actions/actionTypes";

export const graphicReducer = (state = graphicInitialState, action) => {
  switch (action.type) {
    case ActionTypes.GRAPHIC_START:
      return {
        ...state,
        graphicStart: true,
      };
    case ActionTypes.ADD_GRAPHIC_SUCCESS:
      return {
        ...state,
        graphics: [...state.graphics, action.payload],
        graphicStart: false,
      };
    case ActionTypes.GET_GRAPHIC_SUCCESS:
      return {
        ...state,
        graphics: action.payload,
        graphicStart: false,
      };
    case ActionTypes.GET_SINGLE_GRAPHIC_SUCCESS:
      return {
        ...state,
        singleGraphic: action.payload,
        graphicStart: false,
      };
    case ActionTypes.DELETE_GRAPHIC_SUCCESS:
      return {
        ...state,
        graphics: [],
      };
    case ActionTypes.LOGO_ERROR:
      return {
        ...state,
        logoError: action.payload,
        graphicStart: false,
      };
    default:
      return state;
  }
};
