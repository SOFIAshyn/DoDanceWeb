import React from "react";
import './Header.css'

export default class Home extends React.Component {
    constructor() {
        super();
        this.selectedIcon = "/image/icons/home-black.png"; // TODO: change icon
        this.notSelectedIcon = "/image/icons/home-white.png";
    }

    render() {
        return (
            <div className={'headerImg'} id={'home'}>
                <img
                    className={'menuItem'}
                    src={this.notSelectedIcon}
                    alt="home"
                />
            </div>
        );
    }
};