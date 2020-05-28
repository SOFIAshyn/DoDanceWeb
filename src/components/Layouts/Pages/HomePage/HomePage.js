import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import ProfileShort from "../HomePage/ProfileShort/ProfileShort";
import NewsVideo from "../HomePage/NewsFeed/NewsVideo";
import {connect} from 'react-redux';
import { uploadProfile } from '../../../../_actions';

function HomePage(props) {
    useEffect(() => {
        if (props.profile)
            props.uploadProfile();
    }, []);

    console.log('hh:', props);

    return (
        <div className={'page'}>
        <Grid container spacing={1}>
            <Grid container item xs={8} spacing={1}>
                <NewsVideo />
                 {/*key={props.profile.id} profileInfo={props.profile}*/}
            </Grid>
            <Grid container item xs={4} spacing={1}>
                <div className={'shortUserData'}>
                <ProfileShort key={props.profile.id} profileInfo={props.profile} />
                </div>
            </Grid>
        </Grid>
        </div>
    )
};

const mapStateToProps = (state) => ({
    profile: state.profile ? state.profile.profileData : {}
});
const mapDispatchToProps = (dispatch) => ({
    uploadProfile: () => dispatch(uploadProfile())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage);