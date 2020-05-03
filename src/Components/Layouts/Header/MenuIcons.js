import React from "react";
import Grid from '@material-ui/core/Grid';
import Home from './Home.js';
import Search from './Search.js';
import Upload from './Upload.js';
import Profile from './Profile.js';
import Notification from './Notification.js';
import './Header.css'


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
                <Grid item xs={1}>
                    <Home/>
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
            </React.Fragment>
         )
    }
}