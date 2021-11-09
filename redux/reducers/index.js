import { combineReducers } from "redux";
import HomepageReducer from "./homepageReducer";
import CategoriesReducer from "./categoriesReducer";
import ProductsReducer from "./productsReducer";

const rootReducer = combineReducers({
  homepage: HomepageReducer,
  categories: CategoriesReducer,
  products: ProductsReducer,
});

export default rootReducer;
