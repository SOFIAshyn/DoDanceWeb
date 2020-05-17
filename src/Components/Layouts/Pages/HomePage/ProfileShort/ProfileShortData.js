import React from "react";

const ProfileData = ({name, surname}) => {

    return (
    <div>
        <p className={'profileDataBold'}>{name} {surname}</p>
    </div>
    )
};

export default ProfileData;
