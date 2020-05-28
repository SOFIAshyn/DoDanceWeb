import React from "react";
import Grid from '@material-ui/core/Grid';


const SearchForm = (props) => {
    const {profileInfo} = props;

    return (
        <Grid container spacing={0} alignItems="center" justify="center">
            <Grid item xs={1}>
                <img id={"searchIcon"} src={"/image/icons/search-white.png"} />
            </Grid>
            <Grid item xs={6}>
                <form>
                    <input type="text" className="input" placeholder="Search..." />
                </form>
            </Grid>
        </Grid>
    )
};

export default SearchForm;