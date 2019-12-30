import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from "react-redux";
import rootReducer from "./reducers/rootReducer.js";

// import MyComponent from '';
// import MyComponent from './components/LandingPage/Mycomponent';
const store = createStore(rootReducer,applyMiddleware(thunk));

// import FetchRandomUser from './components/LandingPage/Mycomponent';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
