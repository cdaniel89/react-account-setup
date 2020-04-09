import React from 'react';
import { connect } from 'react-redux';
import Colors from '../../components/ColorPicker/Colors';
import PropTypes from 'prop-types';

const PopinBox = (props) => {
    const colorStyle = {
        color1: { backgroundColor: '#' + props.color1 },
        color2: { backgroundColor: '#' + props.color2 },
    };

    return (
        <div className="color">
            <span>{props.title}</span>
            <div className="color-hex-wrapper">
                <span
                    className="color-hex"
                    style={colorStyle[props.selector]}
                    onClick={() => props.displayColorBox(props.selector)}
                ></span>
                <Colors
                    onClick={(color) => {
                        props.setColor(props.selector, color);
                    }}
                    showPopin={props.colorBox === props.selector ? true : false}
                />
            </div>
        </div>
    );
};

PopinBox.propTypes = {
    color1: PropTypes.string.isRequired,
    color2: PropTypes.string.isRequired,
    colorBox: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
    color1: state.color.color1,
    color2: state.color.color2,
});

export default connect(mapStateToProps)(PopinBox);
