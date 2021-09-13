import * as ActionTypes from "./actionTypes";
import axiosWithAuth from "../../utils/axioswithAuth";

export const getAllWebsites = () => (dispatch) => {
  dispatch({ type: ActionTypes.WEBSITE_START });

  axiosWithAuth()
    .get("/websites")
    .then((websiteList) => {
      dispatch({
        type: ActionTypes.GET_WEBSITES_SUCCESS,
        payload: websiteList.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: ActionTypes.WEBSITE_ERROR,
        payload: err,
      });
    });
};

export const getSingleWebsite = (id) => (dispatch) => {
  dispatch({ type: ActionTypes.WEBSITE_START });

  axiosWithAuth()
    .get(`/websites/${id}`)
    .then((project) => {
      dispatch({
        type: ActionTypes.GET_SINGLE_WEBSITE_SUCCESS,
        payload: project.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: ActionTypes.WEBSITE_ERROR,
        payload: err,
      });
    });
};

export const addWebsite = (project) => (dispatch) => {
  dispatch({ type: ActionTypes.WEBSITE_START });

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
    .post("/websites", newProjectData)
    .then((newProject) => {
      dispatch({
        type: ActionTypes.ADD_WEBSITE_SUCCESS,
        payload: newProject.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: ActionTypes.WEBSITE_ERROR,
        payload: err,
      });
    });
};

export const deleteWebsite = (id) => (dispatch) => {
  axiosWithAuth()
    .delete(`/websites/${id}`)
    .then((deleteProject) => {
      dispatch({
        type: ActionTypes.DELETE_WEBSITE_SUCCESS,
        payload: deleteProject,
        id: id,
      });
    })
    .catch((err) =>
      dispatch({ type: ActionTypes.WEBSITE_ERROR, payrload: err })
    );
};
