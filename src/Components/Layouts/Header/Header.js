import React from 'react';
import Grid from '@material-ui/core/Grid';
import Logo from './Logo.js';
import MenuIcons from './MenuIcons.js';
import './Header.css';

export default class Header extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div className="mainMenu">
                <Grid container spacing={1}>
                    <Grid item xs={8}>
                        <Logo/>
                    </Grid>
                    <MenuIcons/>
                </Grid>
            </div>
        )
    }
}