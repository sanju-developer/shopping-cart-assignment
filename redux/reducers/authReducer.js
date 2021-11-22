import {
  IS_API_LOADING,
  ReducerName,
  SET_API_DATA,
  SET_API_ERR,
  CLEAR_API_DATA,
} from "../actionTypes";
const initialstate = {
  isLoggedIn: false,
  isApiLoading: false,
  apiErr: null,
};
const AuthReducer = (state = initialstate, action) => {
  switch (action.type) {
    case `${ReducerName.AUTH}_${IS_API_LOADING}`:
      return {
        ...state,
        isApiLoading: true,
      };
    case `${ReducerName.AUTH}_${SET_API_DATA}`:
      return {
        ...state,
        isApiLoading: false,
        isLoggedIn: action.payload,
      };
    case `${ReducerName.AUTH}_${SET_API_ERR}`:
      return {
        ...state,
        isApiLoading: false,
        apiErr: action.payload,
        isLoggedIn: false,
      };
    case `${ReducerName.AUTH}_${CLEAR_API_DATA}`:
      return {
        ...state,
        isApiLoading: false,
        apiErr: action.payload,
        isLoggedIn: false,
      };

    default:
      return { ...state };
  }
};

export default AuthReducer;
