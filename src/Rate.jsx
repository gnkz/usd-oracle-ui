import React from 'react';
import { connect } from "react-redux";
import { distanceInWords } from "date-fns";
import "./Rate.css";

const Rate = ({ usdPrice, timestamp, hasIncreased, clock }) => {
  const bg = hasIncreased ? null : "rate-bg-decreased";

  return (
    <div className={`rate ${bg}`}>
      <div className="rate-box">
        <h1 className="rate-heading">
          { usdPrice ? <span className="rate-heading-value">${ parseFloat(usdPrice / 100).toFixed(2) }</span> : null }
          { timestamp ? <span className="rate-heading-time">{ distanceInWords(clock, timestamp, { addSuffix: true }) }</span> : null }
        </h1>
      </div>
    </div>
  )
};

const mapStateToProps = state => {
  return {
    usdPrice: state.usdPrice,
    timestamp: state.timestamp,
    hasIncreased: state.hasIncreased,
    clock: state.clock,
  };
}

const RateConnector = connect(mapStateToProps)(Rate);

export default RateConnector;
