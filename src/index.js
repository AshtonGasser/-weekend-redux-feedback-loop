import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";

const feedbackReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_FEELING":
      return { ...state, feeling: action.payload };
    case "ADD_UNDERSTANDING":
      return { ...state, understanding: action.payload };
    case "ADD_SUPPORT":
      return { ...state, support: action.payload };
    case "ADD_COMMENT":
      return { ...state, comment: action.payload };
    case "SUBMIT":
      return {};

    default:
      return state;
  }
}; // end feedback reducer

//every case is a different feedback getting added

const store = createStore(
  combineReducers({
    feedbackReducer,
  }),
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
