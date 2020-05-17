import React from "react";
import Grid from '@material-ui/core/Grid';

const UploadedVideo = ({uploadLink}) => (
    <div className={'iFrameNewsContainer'}>
    <iframe src={uploadLink}>
    </iframe>
    </div>
);

export default UploadedVideo;