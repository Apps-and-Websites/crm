import * as ActionTypes from "./actionTypes";
import axiosWithAuth from "../../utils/axioswithAuth";

export const addLogo = (newLogo) => (dispatch) => {
  dispatch({ type: ActionTypes.LOGO_START });

  let newLogoData = {};

  if (newLogo.id) {
    newLogoData = {
      logo: newLogo.logo,
      oldLogo: newLogo.oldLogo,
      id: newLogo.id,
    };
  } else {
    newLogoData = {
      logo: newLogo.logo,
    };
  }

  // const newLogoData = {
  //   logo: newLogo.logo,
  //   oldLogo: newLogo.oldLogo,
  //   id: newLogo.id,
  // };

  axiosWithAuth()
    .post("/auth/logos", newLogoData)
    .then((addedLogo) => {
      dispatch({
        type: ActionTypes.ADD_LOGO_SUCCESS,
        payload: addedLogo.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: ActionTypes.LOGO_ERROR,
        payload: err,
      });
    });
};

export const getAllLogos = () => (dispatch) => {
  dispatch({ type: ActionTypes.LOGO_START });

  axiosWithAuth()
    .get("/logos")
    .then((logoList) => {
      dispatch({
        type: ActionTypes.GET_LOGO_SUCCESS,
        payload: logoList.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: ActionTypes.LOGO_ERROR,
        payload: err,
      });
    });
};

export const getSingleLogo = (id) => (dispatch) => {
  dispatch({ type: ActionTypes.LOGO_START });

  axiosWithAuth()
    .get(`/logos/${id}`)
    .then((logo) => {
      dispatch({
        type: ActionTypes.GET_SINGLE_LOGO_SUCCESS,
        payload: logo.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: ActionTypes.LOGO_ERROR,
        payload: err,
      });
    });
};

export const deleteLogo = (id) => (dispatch) => {
  axiosWithAuth()
    .delete(`/auth/logos/${id}`)
    .then((deleteLogo) => {
      dispatch({
        type: ActionTypes.DELETE_LOGO_SUCCESS,
        payload: deleteLogo,
        id: id,
      });
    })
    .catch((err) => dispatch({ type: ActionTypes.LOGO_ERROR, payrload: err }));
};
