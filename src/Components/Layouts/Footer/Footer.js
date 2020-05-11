import React from 'react';
import Grid from '@material-ui/core/Grid';
import Licence from './Licence.js';
import FooterItems from './FooterItems.js';
import './Footer.css'

export default class Header extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <footer>
                <Grid container item xs={12} spacing={0}>
                    <Grid container item xs={8} spacing={0}>
                        <FooterItems/>
                    </Grid>
                    <Grid item xs={4}>
                        <Licence/>
                    </Grid>
                </Grid>
            </footer>
        )
    }
}