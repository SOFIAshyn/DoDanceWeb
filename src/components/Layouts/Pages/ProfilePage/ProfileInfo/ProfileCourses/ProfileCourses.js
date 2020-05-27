import React from "react";
import '../../ProfilePage.css'
import Grid from "@material-ui/core/Grid";
import CourseItem from "./CourseItem";


const ProfileCourses = (props) => {
        const {courses} = props;

        return (
        <Grid container xs={12} spacing={1}>
            {courses && courses.map((courseData) => (
                <React.Fragment>
                <Grid item xs={2}>
                    <div className={'totalCoursePoints totalPoints'}>
                        <img src={"/image/icons/points.png"} alt="Per Course Points"/>
                    </div>
                </Grid>
                <Grid item xs={10}>
                    <CourseItem points={courseData.value} name={courseData.courseName}/>
                </Grid>
                </React.Fragment>
            ))}
        </Grid>
        );
};

export default ProfileCourses;