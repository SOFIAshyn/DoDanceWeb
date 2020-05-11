import React from "react";
import notification from "../../../img/icons/notify-white.png";
import './Header.css'

const Notification = () => (
    <div className={'headerImg'}>
        <img className={'menuItem'} src={notification} alt="Notification" />
    </div>
);

export default Notification;