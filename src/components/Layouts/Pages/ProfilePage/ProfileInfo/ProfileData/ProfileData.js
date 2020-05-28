import React from "react";
import Grid from '@material-ui/core/Grid';
import UserName from "./UserName";
import UserSocial from "./UserSocial";
import UserTotalPoints from "./UserTotalPoints";
// import ProfileData from "./ProfileData/ProfileData.js";
// import ProfileCourses from "./ProfileCourses/ProfileCourses.js";
import '../../ProfilePage.css'

export default class ProfileData extends React.Component {
    constructor() {
        super();
        this.social = {
            telegram: 'tg',
            instagram: 'inst'
        };
        this.state = {
            profile: {}
        }
    }

    componentDidMount() {
        fetch('/profile').then(resp => {
            return resp.json();
        }).then( body => {
            // console.log(body);
            this.setState({
                profile: body,
            })
        })
    }

    prepareProfileName() {
        return this.state.profile.name + " " + this.state.profile.surname
    }

    prepareSocial(socialNetwork) {
        return { socialData: socialNetwork.toUpperCase() + ": ", at: '@' }
    }

    prepareTotalPoints() {
        return ['POINTS: ', this.state.profile.total]
    }

    render() {
        return (
            <div className={'allProfileData'}>
                <UserName nameData={this.prepareProfileName()}/>
                <hr className={'totalDataBlue'}/>
                    <UserSocial {...this.prepareSocial(this.social.telegram)} userSocialData={this.state.profile.telegram} />
                    <UserSocial {...this.prepareSocial(this.social.instagram)} userSocialData={this.state.profile.instagram}/>
                <hr className={'totalDataRed'}/>
                <div className={'totalData'}>
                <Grid container xs={12} spacing={1}>
                    <Grid item xs={1}>
                        <div className={'totalPoints'}>
                            <img src={"/image/icons/points.png"} alt="Points"/>
                        </div>
                    </Grid>
                    <Grid item xs={11}>
                        <UserTotalPoints pointsTotal={this.prepareTotalPoints()} />
                    </Grid>
                </Grid>
                </div>
            </div>
        )
    }
};
