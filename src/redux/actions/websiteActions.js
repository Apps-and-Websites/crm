import * as ActionTypes from "./actionTypes";
import axiosWithAuth from "../../utils/axioswithAuth";

export const getAllWebsites = () => (dispatch) => {
  dispatch({ type: ActionTypes.WEBSITES_START });

  axiosWithAuth()
    .get("/websites")
    .then((websiteList) => {
      dispatch({
        type: ActionTypes.GET_PROJECTS_SUCCESS,
        payload: websiteList.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: ActionTypes.WEBSITES_ERROR,
        payload: err,
      });
    });
};

export const getSingleWebsite = (id) => (dispatch) => {
  dispatch({ type: ActionTypes.WEBSITES_START });

  axiosWithAuth()
    .get(`/website/${id}`)
    .then((project) => {
      dispatch({
        type: ActionTypes.GET_SINGLE_PROJECTS_SUCCESS,
        payload: project.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: ActionTypes.WEBSITES_ERROR,
        payload: err,
      });
    });
};

export const addWebsite = (project) => (dispatch) => {
  dispatch({ type: ActionTypes.WEBSITES_START });

  let newProjectData = {};

  if (project.id) {
    newProjectData = {
      url: project.url,
      image: project.image,
      name: project.name,
      id: project.id,
      oldImage: project.oldImage,
    };
  } else {
    newProjectData = {
      url: project.url,
      image: project.image,
      name: project.name,
    };
  }

  // const newProjectData = {
  //   url: project.url,
  //   image: project.image,
  //   name: project.name,
  // };

  axiosWithAuth()
    .post("/auth/website", newProjectData)
    .then((newProject) => {
      dispatch({
        type: ActionTypes.ADD_PROJECT_SUCCESS,
        payload: newProject.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: ActionTypes.WEBSITES_ERROR,
        payload: err,
      });
    });
};

export const deleteWebsite = (id) => (dispatch) => {
  axiosWithAuth()
    .delete(`/auth/website/${id}`)
    .then((deleteProject) => {
      dispatch({
        type: ActionTypes.DELETE_PROJECT_SUCCESS,
        payload: deleteProject,
        id: id,
      });
    })
    .catch((err) =>
      dispatch({ type: ActionTypes.WEBSITES_ERROR, payrload: err })
    );
};
