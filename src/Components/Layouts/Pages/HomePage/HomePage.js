import React from 'react';
import Grid from '@material-ui/core/Grid';
import ProfileShort from "../HomePage/ProfileShort/ProfileShort";
import NewsVideo from "../HomePage/NewsFeed/NewsVideo";

export default class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: {}
        }
    }

    componentDidMount() {
        fetch('/profile').then(resp => {
            return resp.json();
        }).then( body => {
            this.setState({
                profile: body,
            })
        })
    }

    render() {
        return (
            <React.Fragment>
            <Grid container xs={12} spacing={1}>
                <Grid item xs={8} spacing={1}>
                    <NewsVideo profileInfo={this.state.profile} />
                </Grid>
                <ProfileShort key={this.state.profile.id} profileInfo={this.state.profile} />
            </Grid>
            </React.Fragment>
        )
    };
};