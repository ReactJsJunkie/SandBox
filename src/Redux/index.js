import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";

const middlewares = [thunk];
const DevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const middlewareEnhancer = applyMiddleware(...middlewares);

export const Store = createStore(
  rootReducer,
  {},
  compose(
    middlewareEnhancer,
    DevTools
  )
);
