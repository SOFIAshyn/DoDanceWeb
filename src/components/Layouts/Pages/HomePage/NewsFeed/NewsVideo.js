import React, {useEffect} from "react";
import '../HomePage.css';
import UploadedVideo from "./UploadedVideo";
import UserUploadsShort from "./UserUploadsShort/UserUploadsShort";
import UploadedDesc from "./UploadedDesc";
import {connect} from 'react-redux';
import { uploadProfileNews } from '../../../../../_actions';


function NewsVideo(props) {
    useEffect(() => {
        // if (props.profileNewsFeed)
        props.uploadProfileNews();
    }, []);

    console.log("heere: ", props.profileNews);

    return (
        <div className={'uploadsContainer'}>
        {props.profileNews && props.profileNews.map((upload) => (
            <div className={'uploadsSubContainer'}>
                <UserUploadsShort key={upload.id} name={upload.name} surname={upload.surname} photo={upload.photo}/>
                <UploadedVideo key={upload.id} uploadLink={upload.uploadLink} />
                <UploadedDesc key={upload.id} description={upload.description} hashtags={upload.hashtags} />
            </div>
            )
        )}
        </div>
    );
}

const mapStateToProps = (state) => ({
    profileNews: state.news ? state.news.profileDataNews : []
});
const mapDispatchToProps = (dispatch) => ({
    uploadProfileNews: () => dispatch(uploadProfileNews())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewsVideo);