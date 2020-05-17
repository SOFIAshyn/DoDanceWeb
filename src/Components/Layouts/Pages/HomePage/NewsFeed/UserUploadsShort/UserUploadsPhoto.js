import React from "react";

const UserUploadsPhoto = (props) => {
    const {photo} = props;

    return (
        <img className={'profileShortPhoto'} src={photo} alt="Profile Photo"/>
    );
};

export default UserUploadsPhoto;