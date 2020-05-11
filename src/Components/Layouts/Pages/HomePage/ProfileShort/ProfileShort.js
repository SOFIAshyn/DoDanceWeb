import React from "react";
import Grid from '@material-ui/core/Grid';
import ProfileShortPhoto from "./ProfileShortPhoto";
import ProfileShortData from "./ProfileShortData";
import '../HomePage.css'

const ProfileInfo = () => (
    <React.Fragment>
    <Grid container xs={5} >
        <Grid item xs={2}>
            <ProfileShortPhoto/>
        </Grid>
        <Grid item xs={3}>
            <ProfileShortData/>
        </Grid>
    </Grid>
    </React.Fragment>
);

export default ProfileInfo;