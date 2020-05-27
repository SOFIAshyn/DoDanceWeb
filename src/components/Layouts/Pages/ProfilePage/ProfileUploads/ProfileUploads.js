import React from "react";
import Grid from '@material-ui/core/Grid';
import UploadItem from "./UploadItem";
import './ProfileUploads.css'


const ProfileUploads = (props) => {
    const {profileInfo} = props;

    return (
        <div className={'uploadsContainer'}>
        <Grid container xs={12} spacing={1}>
            {profileInfo.uploads && profileInfo.uploads.map((upload) => (
                <UploadItem key={upload.id} uploadURL={upload.uploadLink} />
            ))}
        </Grid>
        </div>
    )
};

export default ProfileUploads;