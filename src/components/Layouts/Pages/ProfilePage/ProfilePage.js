import React, { useEffect, useState } from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo.js';
import ProfileUploads from './ProfileUploads/ProfileUploads.js';
import { Route } from 'react-router-dom';
import './ProfilePage.css';
import {connect, useDispatch} from 'react-redux';
import { uploadProfile } from '../../../../_actions';

function ProfilePage(props) {
    useEffect(() => {
        if (props.profile)
            props.uploadProfile();
    }, []);

    console.log("here: ", props);

    return (
        <div className="mainProfileContainer">
            <ProfileInfo key={props.profile.id} profileInfo={props.profile} />
            <ProfileUploads key={props.profile.id} profileInfo={props.profile} />
        </div>
    )
}


const mapStateToProps = (state) => ({
    profile: state.profile ? state.profile.profileData : {}
});
const mapDispatchToProps = (dispatch) => ({
    uploadProfile: () => dispatch(uploadProfile())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfilePage)