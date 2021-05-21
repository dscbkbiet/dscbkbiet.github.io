import React, { Fragment } from "react";
// import Cards from "./Card";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import teamData from "../Assets/data/teamData";
import { Typography } from "@material-ui/core";
import CardTeam from "./CardTeam";
// import "../styles/Team.css";

const useStyles = makeStyles({
  gridContainer: {
    maxWidth: "193vh",
    paddingLeft: "40px",
    paddingRight: "30px",
    paddingTop: "20px",
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    // justify: "space-evenly",
    alignItems: "center",
  },
  titleName: {
    paddingTop: "20px",
  },
});

const Team = () => {
  const classes = useStyles();

  return (
    <div>
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
      >
        
        {teamData.map((data) => {
          return (
            <Grid item xs={12} sm={4} md={3} lg={3}>
              <CardTeam
                name={data.name}
                position={data.position}
                iLink={data.iLink}
                lLink={data.lLink}
                tLink={data.tLink}
                image={data.image}
                about={data.about}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Team;
