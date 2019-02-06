import { createStore } from "redux";
import { rateReducer } from "./reducers";

const store = createStore(rateReducer, {
  usdPrice: 0,
  timestamp: null,
  hasIncreased: true,
  clock: new Date(),
});

export default store;
