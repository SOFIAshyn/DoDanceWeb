import React from "react";
import searchWhite from "../../../img/icons/search-white.png";
import './Header.css'

const Search = () => (
    <div className={'headerImg'}>
        <img className={'menuItem'} src={searchWhite} alt="search" />
    </div>
);

export default Search;