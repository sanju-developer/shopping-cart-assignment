import {
  IS_API_LOADING,
  ReducerName,
  SET_API_DATA,
  SET_API_ERR,
  SET_OPEN_CLOSE_CART_STATE,
} from "../actionTypes";

const AddToCartAction = () => async (dispatch) => {
  dispatch({
    type: `${ReducerName.CART}_${IS_API_LOADING}`,
    payload: true,
  });
  try {
    dispatch({
      type: `${ReducerName.CART}_${IS_API_LOADING}`,
      payload: false,
    });
    dispatch({
      type: `${ReducerName.CART}_${SET_API_DATA}`,
      payload: action.payload,
    });
  } catch (error) {
    dispatch({
      type: `${ReducerName.CART}_${SET_API_ERR}`,
      payload: action.payload,
    });
  }
};

export const openCloseCartAction = (openCloseState) => async (dispatch) => {
  dispatch({
    type: `${ReducerName.CART}_${SET_OPEN_CLOSE_CART_STATE}`,
    payload: openCloseState,
  });
};

export default AddToCartAction;
