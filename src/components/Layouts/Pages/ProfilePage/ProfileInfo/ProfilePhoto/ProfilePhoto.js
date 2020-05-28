import React from "react";
import '../../ProfilePage.css';

const ProfilePhoto = (props) => {
    const {photo} = props;

    return (
        <React.Fragment>
            <img className={'profileMainPhoto'} src={photo} alt={'Profile Photo'}/>
        </React.Fragment>
    );
};

export default ProfilePhoto;