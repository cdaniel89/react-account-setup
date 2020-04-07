import React from 'react';
import { connect } from 'react-redux';
import { uploadPhoto } from '../../actions/userForm';


import PropTypes from 'prop-types';

const ProfileImage = (props) => {
    const photoUpload = (e) => {
        e.preventDefault();
        const reader = new FileReader();
        const file = e.target.files[0];
        reader.onloadend = () => {
            props.uploadPhoto(reader.result);
        };
        reader.readAsDataURL(file);
    };

    return (
        <div className="profile-image-wrapper">
            <div className="profile-image">
                <img src={props.imagePreviewUrl} alt="Profile" />
            </div>
            <div className="image-upload-container">
                <div className="top">
                    <h3>Profile Image</h3>
                    <p className="image-upload-info">JPG,PNG or GIF</p>
                </div>
                <div className="bottom">
                    <label className="btn" htmlFor="photo-upload">
                        UPLOAD
					</label>
                    <input
                        id="photo-upload"
                        type="file"
                        onChange={photoUpload}
                        accept="image/jpeg, image/png, image/gif"
                    />
                </div>
            </div>
        </div>
    );
};

ProfileImage.propTypes = {
    imagePreviewUrl: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
    imagePreviewUrl: state.user.imagePreviewUrl,
});
const mapDispatchToProps = (dispatch) => ({
    uploadPhoto: (imagePreviewUrl) => {
        dispatch(uploadPhoto(imagePreviewUrl));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileImage);


