import { getCartItemApiService } from "../../service/cart";
import {
  IS_API_LOADING,
  ReducerName,
  SET_API_DATA,
  SET_API_ERR,
  SET_OPEN_CLOSE_CART_STATE,
} from "../actionTypes";

const GetCartItemsAction = () => async (dispatch) => {
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

export default GetCartItemsAction;
