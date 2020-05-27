import React from 'react';
import Grid from '@material-ui/core/Grid';
import ProfileShort from "../HomePage/ProfileShort/ProfileShort";
import NewsVideo from "../HomePage/NewsFeed/NewsVideo";

export default class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: {}
        };
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
            <div className={'page'}>
            <Grid container spacing={1}>
                <Grid container item xs={8} spacing={1}>
                    <NewsVideo key={this.state.profile.id} profileInfo={this.state.profile} />
                </Grid>
                <Grid container item xs={4} spacing={1}>
                    <div className={'shortUserData'}>
                    <ProfileShort key={this.state.profile.id} profileInfo={this.state.profile} />
                    </div>
                </Grid>
            </Grid>
            </div>
        )
    };
};