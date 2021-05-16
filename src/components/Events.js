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
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    flexGrow: 1,
  },
  titleName: {
    paddingTop: '30px'
  },
  media: {
    height: 60,
    paddingTop: '56.25%', // 16:9
  },
});

function Events() {
  const classes = useStyles();

  return (
    <>
      <Typography
        className={classes.titleName}
        variant="h3"
        component="h2"
        color="textSecondary"
        align="center"
      >Events</Typography>

      <Grid className="events" container spacing={3}>
        <Grid item xs={12} sm={12} lg={4} md={4}>
        <a href="https://youtu.be/o7mES2kTtOs" target="_blank">
          <Card className={classes.root} variant="outlined" align="center">
            <CardMedia
              className={classes.media}
              image="https://media-exp1.licdn.com/dms/image/C4D22AQFL_vzRmMGrUg/feedshare-shrink_1280/0/1612794843887?e=1623888000&v=beta&t=3Lxjxx2PqWyx5WLu5DjCoPHzoUOWIWMW4IHSbvCeM4g"
              title="Solution Challenge Info Session"
            />
            <CardContent>
              <Typography variant="h5" component="h2" >
                Solution Challenge Info Session
              </Typography>
            </CardContent>
          </Card>
        </a>
        </Grid>

        <Grid item xs={12} sm={12} lg={4} md={4}>
        <a href="https://youtu.be/wAYPxX80v-I" target="_blank">
          <Card className={classes.root} variant="outlined" align="center">
            <CardMedia
              className={classes.media}
              image="https://media-exp1.licdn.com/dms/image/C4E22AQHTtDSlso2ZyA/feedshare-shrink_800/0/1609847351322?e=1623888000&v=beta&t=JdsRpTRAAUpi7G1tx1BQEEgU8WlMzC-8DTZZ2BcDSUs"
              title="Learn to Code a Profile App"
            />
            <CardContent>
              <Typography variant="h5" component="h2">
                Learn to Code a Profile App
              </Typography>
            </CardContent>
          </Card>
        </a>
        </Grid>

        <Grid item xs={12} sm={12} lg={4} md={4}>
        <a href="https://youtu.be/lj5SJBTkmlU" target="_blank">
          <Card className={classes.root} variant="outlined" align="center">
            <CardMedia
              className={classes.media}
              image="https://media-exp1.licdn.com/dms/image/C4E22AQGmpQkNkdxXcQ/feedshare-shrink_1280/0/1608308491916?e=1623888000&v=beta&t=bCXKFxiffO-BiD7Tk-sQxB0QBBt0uEBxjmHMeIZnm7Y"
              title="Android Study Jams"
            />
            <CardContent>
              <Typography variant="h5" component="h2">
                Android Study Jams
              </Typography>
            </CardContent>
          </Card>
        </a>
        </Grid>

        <Grid item xs={12} sm={12} lg={4} md={4}>
        <a href="https://youtu.be/qw5RmBU1y7c" target="_blank">
          <Card className={classes.root} variant="outlined" align="center">
            <CardMedia
              className={classes.media}
              image="https://media-exp1.licdn.com/dms/image/C4E22AQGxQeH7Ip0xSA/feedshare-shrink_1280/0/1606290912728?e=1623888000&v=beta&t=tJzuYM89-ukgtF93eoIHyamyFIeY-vXzsEW6doH7kiM"
              title="Android Study Jams | Info Session"
            />
            <CardContent>
              <Typography variant="h6" component="h2">
                Android Study Jams | Info Session
              </Typography>
            </CardContent>
          </Card>
        </a>
        </Grid>

        <Grid item xs={12} sm={12} lg={4} md={4}>
        <a href="https://youtu.be/5hA25MI3u8Y" target="_blank">
          <Card className={classes.root} variant="outlined" align="center">
            <CardMedia
              className={classes.media}
              image="https://media-exp1.licdn.com/dms/image/C5622AQFFk9UeA_IlTg/feedshare-shrink_1280/0/1602171668769?e=1623888000&v=beta&t=u-h7aVYLsTyIWhw7dlU5tbsEO_LoGEuYhlC-ZIlzqJ0"
              title="Hacktoberfest Days"
            />
            <CardContent>
              <Typography variant="h5" component="h2">
                Hacktoberfest Days
              </Typography>
            </CardContent>
          </Card>
        </a>
        </Grid>

        <Grid item xs={12} sm={12} lg={4} md={4}>
        <a href="https://youtu.be/x3VyDASX7KU" target="_blank">
          <Card className={classes.root} variant="outlined" align="center">
            <CardMedia
              className={classes.media}
              image="https://media-exp1.licdn.com/dms/image/C4E22AQGQAgcVFTh5hA/feedshare-shrink_1280/0/1601607381202?e=1623888000&v=beta&t=AGPehsAUX4HHQYiTH5i3DioIRIRTnMrVmRVqvMT0fh8"
              title="DSC: The Beginning"
            />
            <CardContent>
              <Typography variant="h5" component="h2">
                DSC: The Beginning
              </Typography>
            </CardContent>
          </Card>
        </a>
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