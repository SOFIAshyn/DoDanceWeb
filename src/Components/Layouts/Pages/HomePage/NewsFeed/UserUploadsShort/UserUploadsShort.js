import React from "react";
import Grid from '@material-ui/core/Grid';
import UserUploadsData from "./UserUploadsData";
import UserUploadsPhoto from "./UserUploadsPhoto";
import '../../HomePage.css'

const ProfileShort= (props) => {
    const {name, surname, photo} = props;

    return (
        <Grid container xs={8}>
            <Grid item xs={2}>
                <UserUploadsPhoto photo={photo}/>
            </Grid>
            <Grid item xs={6}>
                <UserUploadsData name={name} surname={surname}/>
            </Grid>
        </Grid>
    );
};

export default ProfileShort;