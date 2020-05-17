import React from "react";
import Grid from '@material-ui/core/Grid';
import Home from './Home.js';
import Search from './Search.js';
import Upload from './Upload.js';
import Profile from './Profile.js';
import Notification from './Notification.js';
import './Header.css';
import { NavLink } from "react-router-dom";


export default class MenuIcons extends React.Component {

    render () {
         return (
            <React.Fragment>
            <Grid container item xs={5} spacing={10}>
                <Grid item xs={1}>
                    <NavLink exact to="/" activeClassName={'selected'}>
                        <Home/>
                    </NavLink>
                </Grid>
                <Grid item xs={1}>
                    <NavLink exact to="/explore" activeClassName={'selected'}>
                        <Search/>
                    </NavLink>
                </Grid>
                <Grid item xs={1}>
                    <NavLink exact to="/upload" activeClassName={'selected'}>
                        <Upload/>
                    </NavLink>
                </Grid>
                <Grid item xs={1}>
                    <NavLink exact to="/notifications" activeClassName={'selected'}>
                        <Notification/>
                    </NavLink>
                </Grid>
                <Grid item xs={1}>
                    <NavLink exact to="/profile" activeClassName={'selected'}>
                        <Profile/>
                    </NavLink>
                </Grid>
            </Grid>
            </React.Fragment>
         )
    }
}