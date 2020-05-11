import React from "react";
import logo from "../../../img/icons/name-white.png";
import './Header.css'

const Logo = () => (
    <div className={'headerImg'}>
        <img className={'doDanceNameLogo'} src={logo} alt="Logo" />
    </div>
);

export default Logo;