import React from "react";
import './Header.css';
import { Link } from "react-router-dom";

const Logo = () => (
    <Link to={'/'}>
    <div className={'headerImg'}>
        <img className={'doDanceNameLogo'} src={"/image/icons/name-white.png"} alt="Logo" />
    </div>
    </Link>
);

export default Logo;