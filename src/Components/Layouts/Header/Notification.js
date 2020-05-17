import React from "react";
import './Header.css'

export default class Notification extends React.Component {
    constructor() {
        super();
        this.selectedIcon = "/image/icons/notify-black.png"; // TODO: change icon
        this.notSelectedIcon = "/image/icons/notify-white.png";
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