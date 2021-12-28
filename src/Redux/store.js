import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import { createStore } from "redux";
import articleReducer from './Reducers/ArticleReducer';

const rootReducer=combineReducers({articleReducer});
const store=createStore(rootReducer,applyMiddleware(thunk));
export default store;