import React from "react";
import homeWhite from "../../../img/icons/home-white.png";
import './Header.css'

const Home = () => (
    <div className={'headerImg'}>
        <img className={'menuItem'} src={homeWhite} alt="home" />
    </div>
);

export default Home;