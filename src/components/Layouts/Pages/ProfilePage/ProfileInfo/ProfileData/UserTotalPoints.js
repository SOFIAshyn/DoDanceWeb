import React from "react";

const UserTotalPoints = ({pointsTotal}) => (
    <div className={'bigProfileData'}>
        <p className={'profileDataBold'}>{pointsTotal[0]}{pointsTotal[1]}</p>
    </div>
);

export default UserTotalPoints;