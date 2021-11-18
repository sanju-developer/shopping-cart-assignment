import {
  addToCartItemApiService,
  getCartItemApiService,
  removeItemFromCartApiService,
} from "../../service/cart";
import {
  IS_API_LOADING,
  ReducerName,
  SET_API_DATA,
  SET_API_ERR,
  SET_OPEN_CLOSE_CART_STATE,
  SELECTED_PRODUCT,
} from "../actionTypes";

export const getCartItemsAction = () => async (dispatch) => {
  dispatch({
    type: `${ReducerName.CART}_${IS_API_LOADING}`,
    payload: true,
  });
  const resp = await getCartItemApiService();
  try {
    dispatch({
      type: `${ReducerName.CART}_${IS_API_LOADING}`,
      payload: false,
    });
    dispatch({
      type: `${ReducerName.CART}_${SET_API_DATA}`,
      payload: resp,
    });
  } catch (error) {
    dispatch({
      type: `${ReducerName.CART}_${SET_API_ERR}`,
      payload: error,
    });
  }
};

export const openCloseCartAction = (openCloseState) => async (dispatch) => {
  dispatch({
    type: `${ReducerName.CART}_${SET_OPEN_CLOSE_CART_STATE}`,
    payload: openCloseState,
  });
};

export const addRemoveToCartItemsAction = (item, type) => async (dispatch) => {
  dispatch({
    type: `${ReducerName.ADD_TO_CART}_${IS_API_LOADING}`,
    payload: true,
  });
  dispatch({
    type: `${ReducerName.ADD_TO_CART}_${SELECTED_PRODUCT}`,
    payload: item,
  });
  const resp =
    type === "remove"
      ? await removeItemFromCartApiService(item)
      : await addToCartItemApiService(item);
  try {
    dispatch({
      type: `${ReducerName.ADD_TO_CART}_${IS_API_LOADING}`,
      payload: false,
    });
    dispatch({
      type: `${ReducerName.ADD_TO_CART}_${SET_API_DATA}`,
      payload: resp,
    });
    dispatch(getCartItemsAction());
  } catch (error) {
    dispatch({
      type: `${ReducerName.ADD_TO_CART}_${SET_API_ERR}`,
      payload: error,
    });
  }
};
