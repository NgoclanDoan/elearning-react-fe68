import React from "react";
import ReactDOM from "react-dom";

import "antd/dist/antd.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import "./index.css";

import App from "./App";
import { Provider } from "react-redux";

import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
