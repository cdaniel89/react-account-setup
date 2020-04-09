import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PopinBox from '../../components/PopinBox/PopinBox';
import { setColorPicker } from '../../actions/colorPicker';
import { setActiveColorBox } from '../../actions/popinColor';
import PropTypes from 'prop-types';

const HeaderColor = (props) => {
    const clickClass = 'color-hex';

    useEffect(() => {
        if (props.colorBox) {
            document.addEventListener('click', handleClickOutside, false);
            return () => {
                document.removeEventListener(
                    'click',
                    handleClickOutside,
                    false
                );
            };
        }
    });

    const handleClickOutside = (e) => {
        if (e.target.classList.contains(clickClass)) {
            return;
        }
        hidePopin();
    };

    const hidePopin = () => {
        props.setActiveColorBox('');
    };

    const displayColorBox = (colorBox) => {
        props.setActiveColorBox(colorBox);
    };

    const setColor = (colorBox, color) => {
        props.setColorPicker(colorBox, color);
    };

    return (
        <React.Fragment>
            <p className="title">Header Color</p>
            <div className="color-picker">
                <PopinBox
                    selector="color1"
                    title="Color 1"
                    displayColorBox={displayColorBox}
                    setColor={setColor}
                    colorBox={props.colorBox}
                />
                <PopinBox
                    selector="color2"
                    title="Color 2"
                    displayColorBox={displayColorBox}
                    setColor={setColor}
                    colorBox={props.colorBox}
                />
            </div>
        </React.Fragment>
    );
};

HeaderColor.propTypes = {
    colorBox: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
    colorBox: state.popin.colorBox,
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
