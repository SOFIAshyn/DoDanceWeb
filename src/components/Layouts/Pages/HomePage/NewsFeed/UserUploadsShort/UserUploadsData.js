import React from "react";

const ProfileData = ({name, surname}) => {

    return (
    <div className={'userShortProfile'}>
        <span className={'profileDataBold'}>{name} {surname}</span>
    </div>
    )
};

export default ProfileData;
