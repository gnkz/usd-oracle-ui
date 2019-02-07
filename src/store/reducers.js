import { utils } from "ethers";
import * as types from "./actionTypes";

export const rateReducer = (state = {}, action) => {
  switch (action.type) {
    case types.UPDATE_CLOCK:
      return Object.assign({}, {
          ...state,
          clock: new Date(),
      });

    case types.UPDATE_RATE: {
      const oneEth = utils.bigNumberify("0xde0b6b3a7640000");
      const usdPrice = oneEth.div(action.rate).toNumber();

      let hasIncreased = state.hasIncreased;

      if (usdPrice !== state.usdPrice) {
        hasIncreased = usdPrice > state.usdPrice ? true : false;
      }

      return Object.assign({}, {
        ...state,
        usdPrice,
        timestamp: new Date(action.timestamp.toNumber() * 1000),
        hasIncreased,
      });
    }
    default:
      return state;
  }
};
