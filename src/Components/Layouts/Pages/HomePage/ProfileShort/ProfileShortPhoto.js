import React from "react";

const ProfileShortPhoto = (props) => {
    const {photo} = props;

    return (
        <img className={'profileShortPhoto'} src={photo} alt="Profile Photo"/>
    );
};

export default ProfileShortPhoto;