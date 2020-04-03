import React from "react";
import "./AccountPreview.css";

import { connect } from "react-redux";
import PropTypes from "prop-types";

const AccountPreview = props => {
  const style = {
    backgroundImage: `linear-gradient(to right, #${props.color1}, #${props.color2})`
  };

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
    </div>
  );
};

AccountPreview.propTypes = {
  imagePreviewUrl: PropTypes.string.isRequired,
  color1: PropTypes.string.isRequired,
  color2: PropTypes.string.isRequired
};
AccountPreview.defaultProps = {
  color1: "7e57c2",
  color2: "5c6bc0"
};
const mapStateToProps = state => ({
  imagePreviewUrl: state.imageReducer.imagePreviewUrl,
  color1: state.colorReducer.color1,
  color2: state.colorReducer.color2,

  name: state.userReducer.name,
  description: state.userReducer.description,
  title: state.userReducer.title,
  level: state.userReducer.level,
  phone: state.userReducer.phone,
  address: state.userReducer.address
});

export default connect(mapStateToProps)(AccountPreview);