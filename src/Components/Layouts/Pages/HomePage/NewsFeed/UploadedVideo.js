import React from "react";
import Grid from '@material-ui/core/Grid';

const UploadedVideo = ({uploadLink}) => (
    <Grid item xs={8} spacing={1}>
        <iframe className={'videoUpload'} src={uploadLink}>
        </iframe>
    </Grid>
);

export default UploadedVideo;