import React from "react";
import Grid from '@material-ui/core/Grid';
import UserUploadsData from "./UserUploadsData";
import UserUploadsPhoto from "./UserUploadsPhoto";
import '../../HomePage.css'

const ProfileShort= (props) => {
    const {name, surname, photo} = props;

    return (
        <Grid container spacing={1}>
            <Grid item xs={1}>
                <UserUploadsPhoto photo={photo}/>
            </Grid>
            <Grid item xs={11}>
                <UserUploadsData name={name} surname={surname}/>
            </Grid>
        </Grid>
    );
};

export default ProfileShort;