import {
  IS_API_LOADING,
  ReducerName,
  SELECTED_PRODUCT,
  SET_API_DATA,
  SET_API_ERR,
  SET_OPEN_CLOSE_CART_STATE,
} from "../actionTypes";
const initialstate = {
  apiData: [],
  isApiLoading: false,
  apiErr: null,
  isCartOpen: false,
  isAddToCartApiLoading: false,
  isAddToCartApiSuccess: false,
  isAddToCartApiErr: null,
  selectedProduct: null,
};
const CartReducer = (state = initialstate, action) => {
  switch (action.type) {
    case `${ReducerName.CART}_${IS_API_LOADING}`:
      return {
        ...state,
        isApiLoading: true,
      };
    case `${ReducerName.CART}_${SET_API_DATA}`:
      return {
        ...state,
        isApiLoading: false,
        apiData: action.payload,
      };
    case `${ReducerName.CART}_${SET_API_ERR}`:
      return {
        ...state,
        isApiLoading: false,
        apiErr: action.payload,
        apiData: false,
      };
    case `${ReducerName.ADD_TO_CART}_${SELECTED_PRODUCT}`:
      return {
        ...state,
        selectedProduct: action.payload,
      };
    case `${ReducerName.ADD_TO_CART}_${IS_API_LOADING}`:
      return {
        ...state,
        isAddToCartApiLoading: true,
      };
    case `${ReducerName.ADD_TO_CART}_${SET_API_DATA}`:
      return {
        ...state,
        isAddToCartApiLoading: false,
        isAddToCartApiSuccess: action.payload,
        selectedProduct: null,
      };
    case `${ReducerName.ADD_TO_CART}_${SET_API_ERR}`:
      return {
        ...state,
        isAddToCartApiLoading: false,
        isAddToCartApiErr: action.payload,
        isAddToCartApiSuccess: false,
        selectedProduct: null,
      };
    case `${ReducerName.CART}_${SET_OPEN_CLOSE_CART_STATE}`:
      return {
        ...state,
        isCartOpen: action.payload,
      };
    default:
      return { ...state };
  }
};

export default CartReducer;
