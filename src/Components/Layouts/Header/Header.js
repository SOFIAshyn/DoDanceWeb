import React from 'react';
import Grid from '@material-ui/core/Grid';
import Logo from './Logo.js';
import MenuIcons from './MenuIcons.js'
import './Header.css'

export default class Header extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div className="mainMenu">
                <Grid container item xs={12} spacing={1}>
                    <Grid item xs={7}>
                        <Logo/>
                    </Grid>
                    <Grid container item xs={5} spacing={10}>
                        <MenuIcons/>
                    </Grid>
                </Grid>
            </div>
        )
    }
}