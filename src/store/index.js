import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducer as homeReducers } from "../containers/Home/store/";
import { reducer as headerReducers } from "../containers/Header/store/";

const reducer = combineReducers({
  home: homeReducers,
  header: headerReducers,
});

export const getServerStore = () => {
  return createStore(reducer, applyMiddleware(thunk));
};
export const getClientStore = () => {
  const defaultState = window.context.state;
  return createStore(reducer, defaultState, applyMiddleware(thunk));
};
