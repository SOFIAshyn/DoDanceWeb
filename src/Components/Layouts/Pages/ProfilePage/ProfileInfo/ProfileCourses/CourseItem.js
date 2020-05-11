import React from "react";
import Grid from '@material-ui/core/Grid';
import '../../ProfilePage.css';


export default class CourseItem extends React.Component {
        constructor({points, name}) {
        super();
        this.state = {
            points: points,
            courseName: name
        };
    }

    render() {
        return(
            <div className={'courseTotalData'}>
                <span className={'profileDataBold'}>{this.state.points}</span>
                <span className={'profileDataNormal'}>{this.state.courseName}</span>
            </div>
        );
    }
}