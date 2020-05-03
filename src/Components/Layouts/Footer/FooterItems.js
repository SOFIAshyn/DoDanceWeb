import React from "react";
import Grid from "@material-ui/core/Grid";


export default class FooterItems extends React.Component {
     constructor() {
        super();
        this.state = {
            about: 'https://about.instagram.com/about-us',
            help: 'https://help.instagram.com/',
            api: 'https://www.instagram.com/developer/'
        };
    }

    render () {
         return (
            <React.Fragment>
                <Grid item xs={3}>
                    <a href={this.state.about}>ABOUT</a>
                </Grid>
                <Grid item xs={3}>
                    <a href={this.state.help}>HELP</a>
                </Grid>
                <Grid item xs={2}>
                    <a href={this.state.api}>API</a>
                </Grid>
            </React.Fragment>
         )
    }
}