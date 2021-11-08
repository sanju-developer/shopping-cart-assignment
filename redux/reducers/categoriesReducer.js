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
const CategoriesReducer = (state = initialstate, action) => {
  switch (action.type) {
    case `${ReducerName.CATEGORIES}_${IS_API_LOADING}`:
      return {
        ...state,
        isApiLoading: true,
      };
    case `${ReducerName.CATEGORIES}_${SET_API_DATA}`:
      return {
        ...state,
        isApiLoading: false,
        apiData: action.payload,
      };
    case `${ReducerName.CATEGORIES}_${SET_API_ERR}`:
      return {
        ...state,
        isApiLoading: false,
        apiErr: action.payload,
      };
    default:
      return { ...state };
  }
};

export default CategoriesReducer;
