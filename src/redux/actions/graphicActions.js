import * as ActionTypes from "./actionTypes";
import axiosWithAuth from "../../utils/axioswithAuth";

export const addGraphic = (newGraphic) => (dispatch) => {
  dispatch({ type: ActionTypes.GRAPHIC_START });

  let newGraphicData = {};

  if (newGraphic.id) {
    newGraphicData = {
      graphic: newGraphic.graphic,
      oldGraphic: newGraphic.oldGraphic,
      id: newGraphic.id,
    };
  } else {
    newGraphicData = {
      graphic: newGraphic.graphic,
    };
  }

  axiosWithAuth()
    .post("/graphics", newGraphicData)
    .then((addedGraphic) => {
      dispatch({
        type: ActionTypes.ADD_GRAPHIC_SUCCESS,
        payload: addedGraphic.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: ActionTypes.GRAPHIC_ERROR,
        payload: err,
      });
    });
};

export const getAllGraphics = () => (dispatch) => {
  dispatch({ type: ActionTypes.GRAPHIC_START });

  axiosWithAuth()
    .get("/graphics")
    .then((graphicList) => {
      dispatch({
        type: ActionTypes.GET_GRAPHIC_SUCCESS,
        payload: graphicList.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: ActionTypes.GRAPHIC_ERROR,
        payload: err,
      });
    });
};

export const getSingleGraphic = (id) => (dispatch) => {
  dispatch({ type: ActionTypes.GRAPHIC_START });

  axiosWithAuth()
    .get(`/graphics/${id}`)
    .then((graphic) => {
      dispatch({
        type: ActionTypes.GET_SINGLE_GRAPHIC_SUCCESS,
        payload: graphic.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: ActionTypes.GRAPHIC_ERROR,
        payload: err,
      });
    });
};

export const deleteGraphic = (id) => (dispatch) => {
  axiosWithAuth()
    .delete(`/graphics/${id}`)
    .then((deleteGraphic) => {
      dispatch({
        type: ActionTypes.DELETE_GRAPHIC_SUCCESS,
        payload: deleteGraphic,
        id: id,
      });
    })
    .catch((err) =>
      dispatch({ type: ActionTypes.GRAPHIC_ERROR, payrload: err })
    );
};
