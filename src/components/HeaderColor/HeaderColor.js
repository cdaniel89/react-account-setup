import React, { useRef, useEffect } from "react";
import Colors from "../../components/ColorPicker/Colors";
import { connect } from "react-redux";
import { setColorPicker } from "../../actions/colorPicker";
import { setActiveColorPicker } from "../../actions/popinColor";
import PropTypes from "prop-types";

const HeaderColor = props => {
  const wrapperRef = useRef(null);
  const wrapperRef1 = useRef(null);
  // below is the same as componentDidMount and componentDidUnmount
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, false);
    return () => {
      document.removeEventListener("click", handleClickOutside, false);
    };
  });

  const handleClickOutside = event => {
    if (
      wrapperRef.current &&
      !wrapperRef.current.contains(event.target) &&
      wrapperRef1.current &&
      !wrapperRef1.current.contains(event.target)
    ) {
      hidePopin();
    }
  };

  const color1Style = {
    backgroundColor: "#" + props.color1
  };

  const color2Style = {
    backgroundColor: "#" + props.color2
  };
  const hidePopin = () => {
    if (props.colorBox1) {
      props.setActiveColorPicker("colorBox1", !props.colorBox1);
    }
    if (props.colorBox2) {
      props.setActiveColorPicker("colorBox2", !props.colorBox2);
    }
  };

  return (
    <React.Fragment>
      <p className="title">Header Color</p>
      <div className="color-picker">
        <div className="color">
          <span>Color 1</span>
          <div className="color-hex-wrapper">
            <span
              ref={wrapperRef}
              className="color-hex"
              style={color1Style}
              onClick={() => {
                props.setActiveColorPicker("colorBox1", !props.colorBox1);
                props.setActiveColorPicker("colorBox2", false);
              }}
            ></span>
            <Colors
              onClick={color => {
                props.setColorPicker("color1", color);
                // hidePopin();
              }}
              showPopin={props.colorBox1}
            />
          </div>
        </div>
        <div className="color">
          <span>Color 2</span>
          <div className="color-hex-wrapper">
            <span
              ref={wrapperRef1}
              className="color-hex"
              style={color2Style}
              onClick={() => {
                props.setActiveColorPicker("colorBox2", !props.colorBox2);
                props.setActiveColorPicker("colorBox1", false);
              }}
            ></span>
            <Colors
              onClick={color => {
                props.setColorPicker("color2", color);
                // hidePopin();
              }}
              showPopin={props.colorBox2}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
HeaderColor.propTypes = {
  color1: PropTypes.string.isRequired,
  color2: PropTypes.string.isRequired,
  colorBox1: PropTypes.bool.isRequired,
  colorBox2: PropTypes.bool.isRequired
};

HeaderColor.defaultProps = {
  color1: "7e57c2",
  color2: "5c6bc0",
  colorBox1: false,
  colorBox2: false
};
const mapStateToProps = state => ({
  color1: state.colorReducer.color1,
  color2: state.colorReducer.color2,
  colorBox1: state.popinReducer.colorBox1,
  colorBox2: state.popinReducer.colorBox2
});
const mapDispatchToProps = dispatch => ({
  setColorPicker: (colorProp, colorHex) => {
    dispatch(setColorPicker(colorProp, colorHex));
  },
  setActiveColorPicker: (colorProp, active) => {
    dispatch(setActiveColorPicker(colorProp, active));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderColor);
