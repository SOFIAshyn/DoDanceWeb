import React from "react";
import Grid from '@material-ui/core/Grid';
import UploadItem from "./UploadItem";
import './ProfileUploads.css'

export default class ProfileData extends React.Component {
    constructor() {
        super();
        this.state = {
            id: 1,
            uploads: [
                {id: 7, url: "https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=0", status: 'public'},
                {id: 6, url: "https://www.youtube.com/embed/Eb5dsG7L7lo?autoplay=0", status: 'private'},
                {id: 5, url: "https://www.youtube.com/embed/Eb5dsG7L7lo?autoplay=0", status: 'public'},
                {id: 4, url: "https://www.youtube.com/embed/Eb5dsG7L7lo?autoplay=0", status: 'private'},
                {id: 3, url: "https://www.youtube.com/embed/Eb5dsG7L7lo?autoplay=0", status: 'public'},
                {id: 2, url: "https://www.youtube.com/embed/Eb5dsG7L7lo?autoplay=0", status: 'public'},
                {id: 1, url: "https://www.youtube.com/embed/Eb5dsG7L7lo?autoplay=0", status: 'public'},
                {id: 0, url: "https://www.youtube.com/embed/Eb5dsG7L7lo?autoplay=0", status: 'public'},
            ]
        }

    }

    render() {
        return (
            <div className={'uploadsContainer'}>
            <Grid container xs={12} spacing={1}>
                {this.state.uploads.map((upload) => (
                    <UploadItem key={upload.id} uploadURL={upload.url} status={upload.status}/>
                ))}
            </Grid>
            </div>
        )
    }
};
