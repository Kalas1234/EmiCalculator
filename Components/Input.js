import React from "react";
const Input = ({ title, state, setState, className }) => {
  return (
    <>
      <span className={className}> {title}</span>
      <input
        className=""
        type="number"
        placeholder={title}
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
    </>
  );
};

export default Input;
