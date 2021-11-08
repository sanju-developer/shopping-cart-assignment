import {
  IS_API_LOADING,
  ReducerName,
  SET_API_DATA,
  SET_API_ERR,
} from "../actionTypes";
const initialstate = {
  apiData: null,
  isApiLoading: false,
  apiErr: null,
};
const HomepageReducer = (state = initialstate, action) => {
  switch (action.type) {
    case `${ReducerName.HOME}_${IS_API_LOADING}`:
      return {
        ...state,
        isApiLoading: true,
      };
    case `${ReducerName.HOME}_${SET_API_DATA}`:
      return {
        ...state,
        isApiLoading: false,
        apiData: action.payload,
      };
    case `${ReducerName.HOME}_${SET_API_ERR}`:
      return {
        ...state,
        isApiLoading: false,
        apiErr: action.payload,
      };
    default:
      return { ...state };
  }
};

export default HomepageReducer;
