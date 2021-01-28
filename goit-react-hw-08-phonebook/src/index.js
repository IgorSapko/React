import React from "react";
import ReactDom from "react-dom";
import App from "./components/App/App";
import store from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react';
import {persistor} from './redux/store'

ReactDom.render(
  <Provider store={store}>
     <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
      <App />
    </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
