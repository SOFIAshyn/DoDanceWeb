import React from "react";
import Grid from '@material-ui/core/Grid';
import ProfilePhoto from "./ProfilePhoto/ProfilePhoto.js";
import ProfileData from "./ProfileData/ProfileData.js";
import ProfileCourses from "./ProfileCourses/ProfileCourses.js";
// // import '../ProfilePage.css'
//
const ProfileInfo = () => (
    <React.Fragment>
    <Grid container xs={12} >
        <Grid item xs={5}>
            <ProfilePhoto/>
        </Grid>
        <Grid item xs={7}>
            <ProfileData/>
        </Grid>
    </Grid>
    <div className={'iconDataTotalCourse'}>
        <ProfileCourses/>
    </div>
    </React.Fragment>
);

export default ProfileInfo;