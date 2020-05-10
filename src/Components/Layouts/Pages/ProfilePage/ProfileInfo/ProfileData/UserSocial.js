import React from "react";

const UserSocial = ({socialData, at, userSocialData}) => (
    <div>
        <p>
            <span className={'profileDataBold'}>{socialData}</span>
            <span className={'profileDataNormal'}>{at}{userSocialData}</span>
        </p>
    </div>
);

export default UserSocial;