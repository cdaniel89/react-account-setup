import React from "react";
import PropTypes from "prop-types";

function Color({ hex, index, handleClick, active }) {
  const style = {
    backgroundColor: "#" + hex
  };

  return (
    <span>
      <div
        value={hex}
        className={`color-item ${index === active ? "active" : ""} `}
        onClick={() => handleClick(index)}
        style={style}
      ></div>
    </span>
  );
}
Color.propTypes = {
  hex: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default Color;
