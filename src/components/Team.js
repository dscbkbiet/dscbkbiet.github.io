import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import React, { Fragment } from "react";

import teamData from "../Assets/data/teamData";

import Cards from "./Card";

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "40px",
    paddingRight: "30px",
    paddingTop: "20px",
  },
  titleName: { paddingTop: "40px" },
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
      >
        The Team
      </Typography>
      <Grid
        container
        spacing={4}
        className={classes.gridContainer}
        justify="space-evenly"
        alignItems="center"
        direction="row"
      >
        {teamData.map((data) => {
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
            </Grid>
          );
        })}
      </Grid>
    </Fragment>
  );
};

export default Team;
