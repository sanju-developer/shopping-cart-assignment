import {
  APPLY_FILTER,
  IS_API_LOADING,
  ReducerName,
  SET_API_DATA,
  SET_API_ERR,
} from "../actionTypes";
const initialstate = {
  apiData: null,
  isApiLoading: false,
  apiErr: null,
  masterData: null,
};
const ProductsReducer = (state = initialstate, action) => {
  switch (action.type) {
    case `${ReducerName.PRODUCT}_${IS_API_LOADING}`:
      return {
        ...state,
        isApiLoading: true,
      };
    case `${ReducerName.PRODUCT}_${SET_API_DATA}`:
      return {
        ...state,
        isApiLoading: false,
        masterData: action.payload,
        apiData: action.payload,
      };
    case `${ReducerName.PRODUCT}_${SET_API_ERR}`:
      return {
        ...state,
        isApiLoading: false,
        apiErr: action.payload,
      };
    case `${ReducerName.PRODUCT}_${APPLY_FILTER}`:
      return {
        ...state,
        isApiLoading: false,
        apiData: action.payload
          ? state.masterData?.filter(
              (product) => product.category === action.payload.id
            )
          : state.masterData,
      };
    default:
      return { ...state };
  }
};

export default ProductsReducer;
