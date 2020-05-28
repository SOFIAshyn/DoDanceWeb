import React from 'react';
import './ExplorePage.css'
import UploadSearchItem from "./SearchUploads/UploadSearchItem";
import UploadShortUser from "./SearchUploads/UploadShortUser"
import {Container} from "react-grid-system";

export default class SearchUploads extends React.Component {
    constructor() {
        super();
        this.state = {
            searchUploads: []
        };
    }

    componentDidMount() {
        fetch('/searchUploads').then(resp => { return resp.json();})
            .then( body => {
            console.log(body);
            this.setState({
                searchUploads: body,
            })
        })
    }

    render() {
        return (
            <div className={'uploadsContainer'}>
                <Container fluid>
                {this.state.searchUploads && this.state.searchUploads.map((upload) => (

                <div className={'uploadsSearchSubContainer'}>
                    {/*<UploadShortUser key={upload.id} name={upload.name} surname={upload.surname} photo={upload.photo}/>*/}
                    <UploadSearchItem key={upload.id} upload={upload} />
                </div>
                ))}
                </Container>
            </div>
        )
    }
}