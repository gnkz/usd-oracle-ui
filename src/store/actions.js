import * as types from "./actionTypes";

export const updateClock = () => {
  return {
    type: types.UPDATE_CLOCK,
  };
};

export const updateRate = (rate, timestamp) => {
  return {
    type: types.UPDATE_RATE,
    rate,
    timestamp,
  };
};
