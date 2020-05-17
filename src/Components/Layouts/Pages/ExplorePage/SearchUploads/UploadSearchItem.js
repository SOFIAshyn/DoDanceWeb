import React from "react";
import Grid from '@material-ui/core/Grid';
import '../ExplorePage.css'

const UploadSearchItem = ({key, upload}) => (
    <Grid container spacing={1}>
         <Grid container item xs={4} spacing={1}>
            <Grid item xs={1}>
                <img className={'profileShortPhoto'} src={upload.user.photo} alt={'photo'} />
            </Grid>
            <Grid item xs={3}>
                <span>{upload.user.name} {upload.user.surname}</span>
            </Grid>
        </Grid>
        <Grid item xs={4} spacing={1}>
            <iframe className={'videoUpload'} src={upload.video}>
            </iframe>
        </Grid>
    </Grid>
);

export default UploadSearchItem;