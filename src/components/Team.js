import React, { Fragment } from "react";
import Cards from "./Card"
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';
import teamData from "../Assets/data/teamData";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: '40px',
    paddingRight: '30px',
    paddingTop: '20px'
  },
  titleName: {
    paddingTop: '40px'
  }
});

const Team = () => {
  const classes = useStyles();
  
  return (
    <Fragment>
      <Typography
        className={classes.titleName}
        variant="h3"
        component="h2"
        color="textSecondary"
        align="center"
        
      >The Team</Typography>
      <Grid
        container
        spacing={4}
        className={classes.gridContainer}
        justify="space-evenly"
        alignItems="center"
        direction="row"
      >
        {teamData.map(data => {
          return (
            <Grid item xs={12} sm={4} md={3}>
              <Cards
              name={data.name}
                position={data.position}
                iLink={data.iLink}
                lLink={data.lLink}
                tLink={data.tLink}
                image={data.image}
              />
            </Grid>)
        })}

        
        {/* <Grid item xs={12} sm={6} md={4}>
          <Cards
            name={"Sameer Saini"}
            position={"DSC Lead"}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Cards
            name={"Vaibhav Vyas"}
            position={"Tech Lead"}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Cards
            name={"Mayank Gaur"}
            position={"DevOps/Cloud Geek"}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Cards
            name={"Ramakrishna Chhipa"}
            position={"Python/ML Lead"}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Cards
            name={"Anshika Gupta"}
            position={"Web-Dev/ Social Media Handler"}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Cards
            name={"Aniket Kumar Sinha"}
            position={"Web Dev / UI/UX Designer Lead"}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Cards
            name={"Khushi Tulsiyan"}
            position={"Data Science / Chief Editor"}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Cards
            name={"Shekar Aggarwal"}
            position={"App Dev Lead"}
          />
        </Grid> */}
      </Grid>
      </Fragment>
  );
};

export default Team;


