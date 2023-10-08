import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";

import { configureStore } from "@reduxjs/toolkit";
import { Provider as ReduxProvider } from "react-redux";
import Crud_Reducer from "./Reducer/Crud_Reducer";

export const store = configureStore({
  reducer: {
    user_crud: Crud_Reducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>
);
