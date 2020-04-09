import React from 'react';
import './Asside.css';

import ProfileImage from '../ProfileImage/ProfileImage';
import HeaderColor from '../HeaderColor/HeaderColor';
import UserInfo from '../UserInfo/UserInfo';

const Asside = () => {
    return (
        <div className="account-setup aside">
            <h2>Account Setup</h2>
            <div className="scrollable-wrapper">
                <div className="scrollable">
                    <div className="box headers-setup">
                        <ProfileImage />
                        <HeaderColor />
                    </div>
                    <UserInfo />
                </div>
            </div>
        </div>
    );
};

export default Asside;
