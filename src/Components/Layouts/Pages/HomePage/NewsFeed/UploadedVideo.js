import React from "react";
import Grid from '@material-ui/core/Grid';

const UploadedVideo = (url) => (
    <iframe className={'videoUpload'} src={url}>
    </iframe>
);

export default UploadedVideo;