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
                <Grid container spacing={1}>
                    <Grid container item xs={8}>
                        <FooterItems/>
                    </Grid>
                    <Grid item xs={3}>
                        <Licence/>
                    </Grid>
                </Grid>
            </footer>
        )
    }
}