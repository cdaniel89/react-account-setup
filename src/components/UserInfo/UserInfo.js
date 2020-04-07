import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setUserFormErrors } from '../../actions/errorForm';
import { submitUserForm } from '../../actions/userForm';

import { userFormValidate } from './UserFormValidation';

import './UserInfo.css';

const UserInfo = (props) => {
    const optionsTitle = [
        'Fullstack web developer',
        'Frontend developer',
        'Backend developer',
        'Mobile app developer',
        'Devops Engineer',
        'Software developer',
    ];
    const optionsLevel = [
        'Junior 1',
        'Junior 2',
        'Junior 3',
        'Middle 1',
        'Middle 2',
        'Middle 3',
        'Senior 1',
        'Senior 2',
    ];

    const [formData, updateFormData] = useState(props.userData);

    const handleChange = (e) => {
        updateFormData({
            ...formData,

            // Trimming any whitespace
            [e.target.name]: e.target.value.trim(),
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = userFormValidate(formData);
        if (formErrors.length > 0) {
            props.setUserFormErrors({ errors: formErrors });

            setTimeout(function () {
                props.setUserFormErrors({ errors: [] });
            }, 5000);

            return;
        }
        props.sendProps(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="box">
                <label className="title" htmlFor="name">
                    Name
				</label>
                <span className="error"></span>
                <input
                    name="name"
                    type="text"
                    className="input"
                    defaultValue={props.name}
                    placeholder="Insert name"
                    onChange={handleChange}
                />
                <label className="title" htmlFor="textarea">
                    Description
				</label>
                <span className="error"></span>

                <textarea
                    name="description"
                    className="input"
                    defaultValue={props.description}
                    placeholder="Insert description"
                    maxLength="250"
                    onChange={handleChange}
                />
                <span>max 250 characters</span>
            </div>
            <div className="box">
                <label className="title" htmlFor="title">
                    Job Title
				</label>
                <select
                    className="input"
                    name="title"
                    onChange={handleChange}
                    defaultValue={props.title}
                >
                    {optionsTitle.map((title, index) => (
                        <option key={index} value={title}>
                            {title}
                        </option>
                    ))}
                </select>
                <label className="title" htmlFor="level">
                    Job Level
				</label>
                <select
                    name="level"
                    className="input"
                    onChange={handleChange}
                    defaultValue={props.level}
                >
                    {optionsLevel.map((level, index) => (
                        <option key={index} value={level}>
                            {level}
                        </option>
                    ))}
                </select>
            </div>
            <div className="box m-0">
                <label className="title" htmlFor="phone">
                    Phone number
				</label>
                <span className="error"></span>

                <input
                    name="phone"
                    type="text"
                    className="input"
                    defaultValue={props.phone}
                    placeholder="Insert phone nr"
                    onChange={handleChange}
                />
                <label className="title" htmlFor="address">
                    Address
				</label>
                <span className="error"></span>

                <input
                    name="address"
                    type="text"
                    className="input"
                    defaultValue={props.address}
                    placeholder="Insert Address"
                    onChange={handleChange}
                />
            </div>

            <div className="fixed-button">
                <button type="submit" className="btn">
                    SAVE
				</button>
            </div>
        </form>
    );
};

UserInfo.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
    name: state.user.userDetails.name,
    description: state.user.userDetails.description,
    title: state.user.userDetails.title,
    level: state.user.userDetails.level,
    phone: state.user.userDetails.phone,
    address: state.user.userDetails.address,
    userData: state.user.userDetails,
    currentFormErrors: state.error,
});

const mapDispatchToProps = (dispatch) => ({
    setUserFormErrors: (errors) => {
        dispatch(setUserFormErrors(errors));
    },
    sendProps: (formData) => {
        dispatch(submitUserForm(formData));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
