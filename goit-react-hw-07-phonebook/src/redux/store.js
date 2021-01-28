// import { createStore } from "redux";
import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import contactsReducer from "./reducers/contactsReducer";
import errorReducer from "./reducers/errorReducer";
import loaderReducer from "./reducers/loaderReducer";

const rootReducer = combineReducers({
  contacts: contactsReducer,
  loader: loaderReducer,
  netError: errorReducer,
});

// const store = createStore(
//   reducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

const defaultMiddleware = getDefaultMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: [...defaultMiddleware],
});

export default store;
