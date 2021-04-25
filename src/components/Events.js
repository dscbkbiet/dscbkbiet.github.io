import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import ReactPlayer from "react-player/youtube";
import Grid from "@material-ui/core/Grid";
import { Switch, Route, Link } from "react-router-dom";


const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    flexGrow: 1,
  },
  titleName: {
    paddingTop: '30px'
  }
});

function Events() {
  const classes = useStyles();

  return (
    <>
      <Grid className="events" container spacing={3}>
        <Grid item xs={12} sm={12} lg={4} md={4}>
          <Card className={classes.root} variant="outlined" align="center">
            <ReactPlayer
              url="https://youtu.be/o7mES2kTtOs"
              width="100%"
              height="100%"
            />
            <CardContent>
              <Typography variant="h6" component="h2" >
                Solution Challenge Info Session
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={12} lg={4} md={4}>
          <Card className={classes.root} variant="outlined" align="center">
            <ReactPlayer
              url="https://youtu.be/wAYPxX80v-I"
              width="100%"
              height="100%"
            />
            <CardContent>
              <Typography variant="h5" component="h2">
                Learn to Code a Profile App
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={12} lg={4} md={4}>
          <Card className={classes.root} variant="outlined" align="center">
            <ReactPlayer
              url="https://youtu.be/lj5SJBTkmlU"
              width="100%"
              height="100%"
            />
            <CardContent>
              <Typography variant="h5" component="h2">
                Android Study Jams
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={12} lg={4} md={4}>
          <Card className={classes.root} variant="outlined" align="center">
            <ReactPlayer
              url="https://youtu.be/qw5RmBU1y7c"
              width="100%"
              height="100%"
            />
            <CardContent>
              <Typography variant="h6" component="h2">
                Android Study Jams | Info Session
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={12} lg={4} md={4}>
          <Card className={classes.root} variant="outlined" align="center">
            <ReactPlayer
              url="https://youtu.be/5hA25MI3u8Y"
              width="100%"
              height="100%"
            />
            <CardContent>
              <Typography variant="h5" component="h2">
                Hacktoberfest Days
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={12} lg={4} md={4}>
          <Card className={classes.root} variant="outlined" align="center">
            <ReactPlayer
              url="https://youtu.be/x3VyDASX7KU"
              width="100%"
              height="100%"
            />
            <CardContent>
              <Typography variant="h5" component="h2">
                DSC: The Beginning
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Typography
        align="center"
        className={classes.titleName}
      >
        <Link to="/dsc-bkbiet-events">
            <h3 className="eventsEventsPageButton">
              <b>See more</b>
            </h3>
        </Link>
      </Typography>
    

    </>
  );
}

export default Events;