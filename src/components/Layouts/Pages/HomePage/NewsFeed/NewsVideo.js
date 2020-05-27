import React from "react";
import '../HomePage.css';
import UploadedVideo from "./UploadedVideo";
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
        fetch('/profileNewsFeed').then(resp => { return resp.json(); }).then( body => {
            // console.log(body);
            this.setState({
                profileNewsFeed: body,
            })
        })
    }

    render() {
        return (
            <div className={'uploadsContainer'}>
            {this.state.profileNewsFeed && this.state.profileNewsFeed.map((upload) => (
                <div className={'uploadsSubContainer'}>
                    <UserUploadsShort key={upload.id} name={upload.name} surname={upload.surname} photo={upload.photo}/>
                    <UploadedVideo key={upload.id} uploadLink={upload.uploadLink} />
                    <UploadedDesc key={upload.id} description={upload.description} hashtags={upload.hashtags} />
                </div>
                )
            )}
            </div>
        );
    }
}