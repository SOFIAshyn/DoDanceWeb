import React from "react";
import points from "../../../../../../img/icons/points.png";
import '../../ProfilePage.css'
import Grid from "@material-ui/core/Grid";
import CourseItem from "./CourseItem";

export default class ProfileCourses extends React.Component {
    constructor() {
        super();
        this.state = [{
                id: 1,
                courseName: 'danceAddiction2',
                points: 78
            }, {
                id: 0,
                courseName: 'danceAddiction1',
                points: 50
            }
        ];
    }

    preparePoints(courseData) {
        return courseData.points.toString() + " - ";
    }

    prepareCourseName(courseData) {
        return '#' + courseData.courseName;
    }

    render() {
        return (
            <Grid container xs={12}>
                {this.state.map((courseData) => (
                    <React.Fragment>
                    <Grid item xs={2}>
                        <div className={'totalCoursePoints totalPoints'}>
                            <img src={points} alt="Per Course Points"/>
                        </div>
                    </Grid>
                    <Grid item xs={10}>
                        <CourseItem points={this.preparePoints(courseData)} name={this.prepareCourseName(courseData)}/>
                    </Grid>
                    </React.Fragment>
                ))}
            </Grid>
        );
    }
};