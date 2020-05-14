import React from 'react';
import Grid from '@material-ui/core/Grid';
import SearchForm from './SearchForm';
import SearchUploads from './SearchUploads';
import './ExplorePage.css'

export default class ExplorePage extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <div className="mainExploreUploadsContainer">
                <SearchForm />
                <Grid container spacing={1}>
                    {/*<SearchUploads />*/}
                </Grid>
            </div>
        );
    }
};