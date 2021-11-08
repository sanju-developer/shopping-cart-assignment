import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createWrapper } from "next-redux-wrapper";
import logger from "redux-logger";

import rootReducer from "./reducers";

const middleware = [thunk, logger];

const makeStore = () =>
  createStore(rootReducer, compose(applyMiddleware(...middleware)));

export const wrapper = createWrapper(makeStore);
