import React from "react";
import ReactDOM from "react-dom/client";
//Redux and redux-toolkit
import { Provider } from "react-redux";
import { store } from "./store";
//Stilos
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
