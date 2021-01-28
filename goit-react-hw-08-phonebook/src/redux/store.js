// import { createStore } from "redux";
import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import contactsReducer from "./reducers/contactsReducer";
import errorReducer from "./reducers/errorReducer";
import loaderReducer from "./reducers/loaderReducer";
import authReducer from "./reducers/authReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "auth",
  storage,
  blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, authReducer);

const rootReducer = combineReducers({
  contacts: contactsReducer,
  loader: loaderReducer,
  netError: errorReducer,
  auth: persistedReducer,
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
export const persistor = persistStore(store);
