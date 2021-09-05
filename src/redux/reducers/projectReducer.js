// import storage from "local-storage-fallback";

import { projectInitialState } from "./initialState";
import * as ActionTypes from "../actions/actionTypes";

export const projectReducer = (state = projectInitialState, action) => {
  switch (action.type) {
    case ActionTypes.WEBSITES_START:
      return {
        ...state,
        websiteStart: true,
      };
    case ActionTypes.ADD_PROJECT_SUCCESS:
      if (action.payload.id) {
        return {
          ...state,
          projects: state.projects.map((project) =>
            project.id === action.payload.id ? action.payload : project
          ),
          addProjectStart: false,
        };
      } else {
        return {
          ...state,
          projects: [...state.projects, action.payload],
          addProjectStart: false,
        };
      }
    case ActionTypes.WEBSITES_ERROR:
      return {
        ...state,
        websiteErorr: action.payload,
        WEBSITES_START: false,
      };

    case ActionTypes.GET_PROJECTS_SUCCESS:
      return {
        ...state,
        projects: action.payload,
        websiteStart: false,
      };

    case ActionTypes.GET_SINGLE_PROJECTS_SUCCESS:
      return {
        ...state,
        singleProject: action.payload,
        websiteStart: false,
      };

    case ActionTypes.DELETE_PROJECT_SUCCESS:
      return {
        ...state,
        projects: [],
      };
    default:
      return state;
  }
};
