import React, { useState } from "react";
import Color from "./Color";
import PropTypes from "prop-types";
import colorsHexData from "./colorsHex";
import "./Color.css";

function Colors(props) {
  const [active, setActive] = useState(null);
  const handleText = index => {
    const newColors = [...colorsHexData];
    setActive(index);
    props.onClick(newColors[index].hex);
  };

  return (
    <React.Fragment>
      <div className={`colors ${props.showPopin ? "active" : ""}`}>
        {colorsHexData.map((color, index) => (
          <Color
            key={index}
            hex={color.hex}
            handleClick={handleText.bind(this)}
            index={index}
            active={active}
          />
        ))}
      </div>
    </React.Fragment>
  );
}
Colors.propTypes = {
  onClick: PropTypes.func.isRequired
};
export default Colors;
