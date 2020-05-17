import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo.js';
import ProfileUploads from './ProfileUploads/ProfileUploads.js';
import './ProfilePage.css'

export default class ProfilePage extends React.Component {
    constructor() {
        super();
        this.state = {
            profile: {}
        };
    }

    componentDidMount() {
        fetch('/profile').then(resp => {
            return resp.json();
        }).then( body => {
            this.setState({
                profile: body,
            })
        })
    }

    render() {
        return (
            <div className="mainProfileContainer">
                <ProfileInfo key={this.state.profile.id} profileInfo={this.state.profile} />
                <ProfileUploads key={this.state.profile.id} profileInfo={this.state.profile} />
            </div>
        )
    }
}