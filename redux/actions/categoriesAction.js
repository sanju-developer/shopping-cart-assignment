import {
  IS_API_LOADING,
  ReducerName,
  SET_API_DATA,
  SET_API_ERR,
} from "../actionTypes";
import { categoriesApiService } from "../../service/homepage";
import { sortOnNumber } from "../../utils/helper";

const categoriesAction = () => async (dispatch) => {
  dispatch({
    type: `${ReducerName.CATEGORIES}_${IS_API_LOADING}`,
    payload: true,
  });
  try {
    const resp = await categoriesApiService();
    dispatch({
      type: `${ReducerName.CATEGORIES}_${IS_API_LOADING}`,
      payload: false,
    });
    dispatch({
      type: `${ReducerName.CATEGORIES}_${SET_API_DATA}`,
      payload: sortOnNumber("order", resp),
    });
  } catch (error) {
    dispatch({
      type: `${ReducerName.CATEGORIES}_${SET_API_ERR}`,
      payload: error,
    });
  }
};

export default categoriesAction;
