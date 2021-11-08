import {
  IS_API_LOADING,
  ReducerName,
  SET_API_DATA,
  SET_API_ERR,
} from "../actionTypes";
import { homePageApiService } from "../../service/homepage";

const homepageAction = () => async (dispatch) => {
  dispatch({ type: `${ReducerName.HOME}_${IS_API_LOADING}`, payload: true });
  try {
    const resp = await homePageApiService();
    dispatch({
      type: `${ReducerName.HOME}_${IS_API_LOADING}`,
      payload: false,
    });
    dispatch({ type: `${ReducerName.HOME}_${SET_API_DATA}`, payload: resp });
  } catch (error) {
    dispatch({
      type: `${ReducerName.HOME}_${SET_API_ERR}`,
      payload: error,
    });
  }
};

export default homepageAction;
