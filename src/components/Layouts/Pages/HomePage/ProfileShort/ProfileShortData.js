import React from "react";

const ProfileData = ({fullname}) => {
    return (
    <div className={'userShortProfile'}>
        <span className={'profileDataBold'}>{fullname}</span>
    </div>
    )
};

export default ProfileData;
