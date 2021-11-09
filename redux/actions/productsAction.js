import {
  IS_API_LOADING,
  APPLY_FILTER,
  ReducerName,
  SET_API_DATA,
  SET_API_ERR,
} from "../actionTypes";
import { productsApiService } from "../../service/products";

const productsAction = () => async (dispatch) => {
  dispatch({ type: `${ReducerName.PRODUCT}_${IS_API_LOADING}`, payload: true });
  try {
    const resp = await productsApiService();
    dispatch({
      type: `${ReducerName.PRODUCT}_${IS_API_LOADING}`,
      payload: false,
    });
    dispatch({ type: `${ReducerName.PRODUCT}_${SET_API_DATA}`, payload: resp });
  } catch (error) {
    dispatch({
      type: `${ReducerName.PRODUCT}_${SET_API_ERR}`,
      payload: error,
    });
  }
};

export default productsAction;

export const productFilter = (category) => async (dispatch) => {
  dispatch({
    type: `${ReducerName.PRODUCT}_${APPLY_FILTER}`,
    payload: category,
  });
};
