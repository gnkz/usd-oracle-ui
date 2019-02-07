import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import './index.css';
import App from './App';
import contract from "./eth/contract";
import store from "./store";
import { updateRate, updateClock } from "./store/actions";

Promise.all([
  contract.currentRate(),
  contract.updatedAt(),
])
.then(res => {
  const rate = res[0];
  const updatedAt = res[1];

  store.dispatch(updateRate(rate, updatedAt));
});

setInterval(() => {
  store.dispatch(updateClock());
}, 5000);

contract.on("RateUpdated", (rate, updatedAt) => {
  store.dispatch(updateClock());
  store.dispatch(updateRate(rate, updatedAt));
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
