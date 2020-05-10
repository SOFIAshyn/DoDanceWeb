import React from "react";
import points from "../../../../../../img/icons/points.png";
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
                id: 1,
                name: 'Sofiia',
                surname: 'Petryshyn',
                telegram: 'sofiyka',
                instagram: 'sofia.petryshyn',
                points: [58, 70]
        }

    }

    prepareProfileName() {
        return this.state.name.toUpperCase() + " " + this.state.surname.toUpperCase()
    }

    prepareSocial(socialNetwork) {
        return { socialData: socialNetwork.toUpperCase() + ": ", at: '@' }
    }

    prepareTotalPoints() {
        return ['POINTS: ', this.state.points.reduce((a, b) => a + b, 0)]
    }

    render() {
        return (
            <div className={'allProfileData'}>
                <UserName nameData={this.prepareProfileName()}/>
                <hr className={'totalDataBlue'}/>
                    <UserSocial {...this.prepareSocial(this.social.telegram)} userSocialData={this.state.telegram} />
                    <UserSocial {...this.prepareSocial(this.social.instagram)} userSocialData={this.state.instagram}/>
                <hr className={'totalDataRed'}/>
                <div className={'totalData'}>
                <Grid container xs={12} spacing={1}>
                    <Grid item xs={1}>
                        <div className={'totalPoints'}>
                            <img src={points} alt="Points"/>
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
