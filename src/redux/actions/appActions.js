import * as ActionTypes from "./actionTypes";
import axiosWithAuth from "../../utils/axioswithAuth";

export const getAllApps = () => (dispatch) => {
  dispatch({ type: ActionTypes.APP_START });

  axiosWithAuth()
    .get("/apps")
    .then((apps) => {
      dispatch({
        type: ActionTypes.GET_APPS_SUCCESS,
        payload: apps.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: ActionTypes.APP_ERROR,
        payload: err,
      });
    });
};

export const getSingleApp = (id) => (dispatch) => {
  dispatch({ type: ActionTypes.APP_START });

  axiosWithAuth()
    .get(`/apps/${id}`)
    .then((app) => {
      dispatch({
        type: ActionTypes.GET_SINGLE_APP_SUCCESS,
        payload: app.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: ActionTypes.APP_ERROR,
        payload: err,
      });
    });
};

export const addApp = (app) => (dispatch) => {
  dispatch({ type: ActionTypes.APP_START });

  let newAppData = {};

  if (app.id) {
    newAppData = {
      url: app.url,
      image: app.image,
      name: app.name,
      id: app.id,
      oldImage: app.oldImage,
    };
  } else {
    newAppData = {
      url: app.url,
      image: app.image,
      name: app.name,
    };
  }

  // const newAppData = {
  //   url: project.url,
  //   image: project.image,
  //   name: project.name,
  // };

  axiosWithAuth()
    .post("/apps", newAppData)
    .then((newProject) => {
      dispatch({
        type: ActionTypes.ADD_APP_SUCCESS,
        payload: newProject.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: ActionTypes.APP_ERROR,
        payload: err,
      });
    });
};

export const deleteApp = (id) => (dispatch) => {
  axiosWithAuth()
    .delete(`/apps/${id}`)
    .then((deleteApp) => {
      dispatch({
        type: ActionTypes.DELETE_APP_SUCCESS,
        payload: deleteApp,
        id: id,
      });
    })
    .catch((err) => dispatch({ type: ActionTypes.APP_ERROR, payrload: err }));
};
