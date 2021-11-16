import { combineReducers } from "redux";
import HomepageReducer from "./homepageReducer";
import CategoriesReducer from "./categoriesReducer";
import ProductsReducer from "./productsReducer";
import AuthReducer from "./authReducer";
import CartReducer from "./cartReducer";

const rootReducer = combineReducers({
  homepage: HomepageReducer,
  categories: CategoriesReducer,
  products: ProductsReducer,
  auth: AuthReducer,
  cart: CartReducer,
});

export default rootReducer;
