import React from "react";
import Grid from "@material-ui/core/Grid";


export default class FooterItems extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render () {
         return (
            <React.Fragment>
                <Grid item xs={2}>
                    <a id={'firstFooterEl'} href='https://about.instagram.com/about-us'>ABOUT</a>
                </Grid>
                <Grid item xs={2}>
                    <a href='https://help.instagram.com/'>HELP</a>
                </Grid>
                <Grid item xs={2}>
                    <a href='https://www.instagram.com/developer/'>API</a>
                </Grid>
            </React.Fragment>
         )
    }
}