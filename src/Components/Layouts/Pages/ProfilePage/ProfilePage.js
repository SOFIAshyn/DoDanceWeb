import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo.js';
import ProfileUploads from './ProfileUploads/ProfileUploads.js';
import './ProfilePage.css'

export default class ProfilePage extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div className="mainProfileContainer">
                <ProfileInfo/>
                <ProfileUploads/>
            </div>
        )
    }
}