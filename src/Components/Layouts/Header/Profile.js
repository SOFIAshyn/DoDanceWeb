import React from "react";
import './Header.css'

export default class Profile extends React.Component {
    constructor() {
        super();
        this.selectedIcon = "/image/icons/profile-black.png"; // TODO: change icon
        this.notSelectedIcon = "/image/icons/profile-white.png";
    }

    render() {
        return (
            <div className={'headerImg'} id={'home'}>
                <img
                    className={'menuItem'}
                    src={this.notSelectedIcon}
                    alt="Notification"
                />
            </div>
        );
    }
};