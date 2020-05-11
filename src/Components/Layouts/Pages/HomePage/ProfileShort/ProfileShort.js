import React from "react";
import Grid from '@material-ui/core/Grid';
import ProfileShortPhoto from "./ProfileShortPhoto";
import ProfileShortData from "./ProfileShortData";
import '../HomePage.css'

const ProfileShort= (props) => {
    const {profileInfo} = props;

    return (
        <div className={'shortUserData'}>
        <Grid container xs={4}>
            <Grid item xs={2}>
                <ProfileShortPhoto photo={profileInfo.photo}/>
            </Grid>
            <Grid item xs={2}>
                <ProfileShortData name={profileInfo.name} surname={profileInfo.surname}/>
            </Grid>
        </Grid>
        </div>
    );
}

export default ProfileShort;