import React from "react";
import profileWhite from "../../../img/icons/profile-white.png";
import './Header.css'

const Profile = () => (
    <div className={'headerImg'}>
        <img className={'menuItem'} src={profileWhite} alt="search" />
    </div>
);

export default Profile;