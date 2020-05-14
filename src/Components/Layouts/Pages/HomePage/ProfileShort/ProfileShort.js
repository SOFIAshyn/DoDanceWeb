import React from "react";
import Grid from '@material-ui/core/Grid';
import ProfileShortPhoto from "./ProfileShortPhoto";
import ProfileShortData from "./ProfileShortData";
import '../HomePage.css'

const ProfileShort= (props) => {
    const {profileInfo} = props;

    return (
        <Grid container spacing={1}>
            <Grid item xs={2}>
                <ProfileShortPhoto photo={profileInfo.photo} />
            </Grid>
            <Grid item xs={10}>
                <ProfileShortData fullname={profileInfo.fullname} />
            </Grid>
        </Grid>
    )
};

export default ProfileShort;