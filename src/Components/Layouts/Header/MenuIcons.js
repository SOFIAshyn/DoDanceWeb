import React from "react";
import Grid from '@material-ui/core/Grid';
import Home from './Home.js';
import Search from './Search.js';
import Upload from './Upload.js';
import Profile from './Profile.js';
import Notification from './Notification.js';
import './Header.css';
import { Switch, Route, Link, NavLink } from "react-router-dom";


export default class MenuIcons extends React.Component {
     constructor() {
        super();
        this.state = {
            notifications: 4,
        };
    }

    render () {
         return (
            <React.Fragment>
            <Switch>
            <Grid container item xs={5} spacing={10}>
                <Grid item xs={1}>
                    <Route path={'/'}>
                        <Home/>
                    </Route>
                </Grid>
                <Grid item xs={1}>
                    <Search/>
                </Grid>
                <Grid item xs={1}>
                    <Upload/>
                </Grid>
                <Grid item xs={1}>
                    <Notification/>
                </Grid>
                <Grid item xs={1}>
                    <Profile/>
                </Grid>
            </Grid>
            </Switch>
            </React.Fragment>
         )
    }
}