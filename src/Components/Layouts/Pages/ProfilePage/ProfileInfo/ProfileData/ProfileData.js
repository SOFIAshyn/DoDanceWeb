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
            tg: 'tg',
            inst: 'inst'
        };
        this.state = {
                id: 1,
                name: 'Sofiia',
                surname: 'Petryshyn',
                tg: 'sofiyka',
                inst: 'sofia.petryshyn',
                points: [58, 70]
        }

    }

    prepareProfileName() {
        return this.state.name.toUpperCase() + " " + this.state.surname.toUpperCase()
    }

    prepareSocial(socialNetwork) {
        return [socialNetwork.toUpperCase() + ": ", '@']
    }

    prepareTotalPoints() {
        return ['POINTS: ', this.state.points.reduce((a, b) => a + b, 0)]
    }

    render() {
        return (
            <div className={'allProfileData'}>
                <UserName nameData={this.prepareProfileName()}/>
                <hr className={'totalDataBlue'}/>
                    <UserSocial socialData={this.prepareSocial(this.social.tg)[0]} at={this.prepareSocial(this.social.tg)[1]} userSocialData={this.state.tg}/>
                    <UserSocial socialData={this.prepareSocial(this.social.inst)[0]} at={this.prepareSocial(this.social.tg)[1]} userSocialData={this.state.inst}/>
                <hr className={'totalDataRed'}/>
                <div className={'totalData'}>
                <Grid container xs={12} spacing={1}>
                    <Grid item xs={1}>
                        <img className={'totalPoints'} src={points} alt="Points"/>
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
