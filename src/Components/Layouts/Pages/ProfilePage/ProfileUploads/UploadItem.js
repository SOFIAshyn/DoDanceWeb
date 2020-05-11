import React from "react";
import Grid from '@material-ui/core/Grid';
import './ProfileUploads.css'

const UploadItem = ({key, uploadURL, status}) => (
    <Grid item xs={4} spacing={1}>
        <iframe className={'videoUpload'} src={uploadURL}>
        </iframe>
    </Grid>
);

export default UploadItem;