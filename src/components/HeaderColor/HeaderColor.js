import React, { useRef, useEffect } from 'react';
import Colors from '../../components/ColorPicker/Colors';
import { connect } from 'react-redux';
import { setColorPicker } from '../../actions/colorPicker';
import { setActiveColorBox } from '../../actions/popinColor';
import PropTypes from 'prop-types';

const COLOR1 = 'color1';
const COLOR2 = 'color2';

const HeaderColor = (props) => {
    const color1 = useRef(null);
    const color2 = useRef(null);
    useEffect(() => {
        document.addEventListener('click', handleClickOutside, false);
        return () => {
            document.removeEventListener('click', handleClickOutside, false);
        };
    });

    const handleClickOutside = (event) => {
        if (
            color1.current &&
            !color1.current.contains(event.target) &&
            color2.current &&
            !color2.current.contains(event.target)
        ) {
            hidePopin();
        }
    };

    const colorStyle = {
        color1: { backgroundColor: '#' + props.color1 },
        color2: { backgroundColor: '#' + props.color2 },
    };

    const hidePopin = () => {
        props.setActiveColorBox('');
    };

    const displayColorBox = (colorBox) => {
        props.setActiveColorBox(colorBox);
    }

    const setColor = (colorBox, color) => {
        props.setColorPicker(colorBox, color);
    }

    // const colorComponents = [
    //     {
    //         id: 1,
    //         color: 'color1',
    //         title: 'Color 1',
    //     },
    //     {
    //         id: 2,
    //         color: 'color2',
    //         title: 'Color 2',
    //     },
    // ]

    return (
        <React.Fragment>
            <p className="title">Header Color</p>
            <div className="color-picker">
                {/* {colorComponents.map((component) =>
                    <div key={component.id} className="color">
                        <span>{component.title}</span>
                        <div className="color-hex-wrapper">
                            <span
                                ref={eval(component.color)}
                                className="color-hex"
                                style={colorStyle[component.color]}
                                onClick={() => displayColorBox(component.color)}
                            ></span>
                            <Colors
                                onClick={(color) => {
                                    setColor(component.color, color)
                                }}
                                showPopin={props.colorBox === component.color ? true : false}
                            />
                        </div>
                    </div>
                )} */}
                <div className="color">
                    <span>Color 1</span>
                    <div className="color-hex-wrapper">
                        <span
                            ref={color1}
                            className="color-hex"
                            style={colorStyle[COLOR1]}
                            onClick={() => displayColorBox(COLOR1)}
                        ></span>
                        <Colors
                            onClick={(color) => {
                                setColor(COLOR1, color)
                            }}
                            showPopin={props.colorBox === COLOR1 ? true : false}
                        />
                    </div>
                </div>
                <div className="color">
                    <span>Color 2</span>
                    <div className="color-hex-wrapper">
                        <span
                            ref={color2}
                            className="color-hex"
                            style={colorStyle[COLOR2]}
                            onClick={() => displayColorBox(COLOR2)}
                        ></span>
                        <Colors
                            onClick={(color) => {
                                setColor(COLOR2, color)
                            }}
                            showPopin={props.colorBox === COLOR2 ? true : false}
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
    colorBox: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
    color1: state.color.color1,
    color2: state.color.color2,
    colorBox: state.popin.colorBox
});
const mapDispatchToProps = (dispatch) => ({
    setColorPicker: (colorProp, colorHex) => {
        dispatch(setColorPicker(colorProp, colorHex));
    },
    setActiveColorBox: (colorBox) => {
        dispatch(setActiveColorBox(colorBox));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderColor);
