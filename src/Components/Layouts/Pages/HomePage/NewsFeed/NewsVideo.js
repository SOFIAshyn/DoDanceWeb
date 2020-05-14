import React from "react";
import Grid from '@material-ui/core/Grid';
import '../HomePage.css';
import UploadedVideo from "./NewsVideo";
import UserUploadsShort from "./UserUploadsShort/UserUploadsShort";
import UploadedDesc from "./UploadedDesc";


export default class NewsVideo extends React.Component{
    constructor() {
        super();
        this.state = {
            profileNewsFeed: []
        }
    }

    componentDidMount() {
        fetch('/profileNewsFeed')
            .then(resp => { return resp.json(); })
            .then( body => {
            // console.log(body);
            this.setState({
                profileNewsFeed: body,
            })
        })
    }

    render() {
        return (
            <div className={'uploadsContainer'}>
            <Grid container xs={8} spacing={1}>
                {this.state.profileNewsFeed && this.state.profileNewsFeed.map((upload) => (
                    <React.Fragment>
                        <UserUploadsShort name={upload.name} surname={upload.surname} photo={upload.photo}/>
                        {/*<UploadedVideo uploadLink={upload.uploadLink} />*/}
                        {/*<iframe className={'videoUpload'} src={upload.uploadLink}>*/}
                        {/*</iframe>*/}
                        {/*<UploadedDesc description={upload.description} hashtags={upload.hashtags} />*/}
                    </React.Fragment>
                    )
                )}
            </Grid>
            </div>
        );
    }
}