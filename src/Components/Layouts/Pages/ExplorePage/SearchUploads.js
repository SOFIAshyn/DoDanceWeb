import React from 'react';
import './ExplorePage.css'

export default class ProfilePage extends React.Component {
    constructor() {
        super();
        this.state = {
            searchUploads: []
        };
    }

    componentDidMount() {
        fetch('/searchUploads').then(resp => {
            return resp.json();
        }).then( body => {
            this.setState({
                profile: body,
            })
        })
    }

    render() {
        return (
            <div></div>
        )
    }
}