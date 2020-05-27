import React from 'react';
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
                <SearchUploads />
            </div>
        );
    }
};