import { combineReducers } from "redux";
import HomepageReducer from "./homepageReducer";
import CategoriesReducer from "./categoriesReducer";

const rootReducer = combineReducers({
  homepage: HomepageReducer,
  categories: CategoriesReducer,
});

export default rootReducer;
