// import { createStore } from "redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import contactsReducer from "./reducers/contactsReducer";

const rootReducer = combineReducers({  contacts:contactsReducer });
// const store = createStore(
//   reducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

const store = configureStore({
  reducer: rootReducer,
});


export default store;
