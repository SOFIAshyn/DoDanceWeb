import React from "react";

const UserSocial = ({socialData, at, userSocialData}) => (
    <div>
        <p><span className={'profileDataBold'}>{socialData}</span>{at}{userSocialData}</p>
    </div>
);

export default UserSocial;