import React from "react";
import profilePhoto from "../../../../../../img/profile.jpeg";
import '../../ProfilePage.css'

const ProfilePhoto = () => (
    <img className={'profileMainPhoto'} src={profilePhoto} alt="Profile Main Photo"/>
);

export default ProfilePhoto;