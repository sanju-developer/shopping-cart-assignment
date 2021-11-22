import {
  IS_API_LOADING,
  ReducerName,
  SET_API_DATA,
  CLEAR_API_DATA,
  SET_API_ERR,
} from "../actionTypes";
import { clearUserSession, setAccessToken } from "../../utils/storageUtils";

const loginAction = () => async (dispatch) => {
  dispatch({
    type: `${ReducerName.AUTH}_${IS_API_LOADING}`,
    payload: true,
  });
  try {
    setAccessToken("asda##jh08@KJsdfs9d8");
    dispatch({
      type: `${ReducerName.AUTH}_${IS_API_LOADING}`,
      payload: false,
    });
    dispatch({
      type: `${ReducerName.AUTH}_${SET_API_DATA}`,
      payload: true,
    });
  } catch (error) {
    dispatch({
      type: `${ReducerName.AUTH}_${SET_API_ERR}`,
      payload: "Error occured in authentication." + error,
    });
  }
};

export default loginAction;

export const logoutAction = () => async (dispatch) => {
  clearUserSession();
  dispatch({
    type: `${ReducerName.AUTH}_${CLEAR_API_DATA}`,
    payload: true,
  });
};
