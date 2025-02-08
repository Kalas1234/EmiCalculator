import React from "react";
import { numberSeparatedWithCommas } from "../src/utils/config";

const Slider = ({
  title,
  min,
  max,
  state,
  setState,
  labelStart,
  labelEnd,
  total,
}) => {
  return (
    <React.Fragment>
      <span className="title">{title}</span>
      <span className="title" style={{ textDecoration: "underline" }}>
        {total}
      </span>
      <div>
        <input
          type="range"
          className="slider"
          min={min}
          max={max}
          value={state}
          onChange={setState}
        />
        <div className="label">
          <label> {labelStart} </label>
          <b>Rs {numberSeparatedWithCommas(state)}</b>
          <label> {labelEnd} </label>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Slider;
// {
//   `Total DownPayment - Rs ${numberSeparatedWithCommas(
//     (Number(downPayment) + (cost - downPayment) * (fee / 100)).toFixed(0)
//   )}`;
// }

// {`Total Loan Amount - Rs ${numberSeparatedWithCommas(
//   (Number(emi) * tenure).toFixed(0)
// )}`}
