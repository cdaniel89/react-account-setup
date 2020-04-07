import React from 'react';
import './AccountPreview.css';
import { setUserFormErrors, removeErrorItem } from '../../actions/errorForm';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const AccountPreview = (props) => {
    const style = {
        backgroundImage: `linear-gradient(to right, #${props.color1}, #${props.color2})`,
    };

    const removeError = index => {
        props.removeErrorItem(index);
    }

    return (
        <div className="account-preview main-content">
            <div className="user-top" style={style}>
                <div className="user-image">
                    <img src={props.imagePreviewUrl} alt="Profile" />
                </div>
                <div className="user-header">
                    <h2 className="user-name">{props.name}</h2>
                    <p className="user-description">{props.description}</p>
                </div>
            </div>
            <div className="user-bottom">
                <div className="user-image">
                    <img src={props.imagePreviewUrl} alt="Profile" />
                </div>
                <div className="user-info">
                    <div className="user-info-row">
                        <p className="preview-label">Current Job</p>
                        <p className="preview-detail">{props.title}</p>
                    </div>
                    <div className="user-info-row">
                        <p className="preview-label">Level</p>
                        <p className="preview-detail">{props.level}</p>
                    </div>
                    <div className="user-info-row">
                        <p className="preview-label">Phone number</p>
                        <p className="preview-detail">{props.phone}</p>
                    </div>
                    <div className="user-info-row">
                        <p className="preview-label">Address</p>
                        <p className="preview-detail">{props.address} </p>
                    </div>
                </div>
            </div>
            <ul className="errors">
                {props.currentFormErrors.errors.map((error, index) => (
                    <li key={index} className={index}>
                        <span>{error}</span>
                        <span
                            onClick={() => removeError(index)}
                            className="delete"
                        >
                            x
						</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

AccountPreview.propTypes = {
    imagePreviewUrl: PropTypes.string.isRequired,
    color1: PropTypes.string.isRequired,
    color2: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
    imagePreviewUrl: state.user.imagePreviewUrl,
    color1: state.color.color1,
    color2: state.color.color2,

    name: state.user.userDetails.name,
    description: state.user.userDetails.description,
    title: state.user.userDetails.title,
    level: state.user.userDetails.level,
    phone: state.user.userDetails.phone,
    address: state.user.userDetails.address,

    currentFormErrors: state.error,
});

const mapDispatchToProps = (dispatch) => ({
    setUserFormErrors: (errors) => {
        dispatch(setUserFormErrors(errors));
    },
    removeErrorItem: (index) => {
        dispatch(removeErrorItem(index));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountPreview);
