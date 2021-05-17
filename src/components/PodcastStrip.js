import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import SoundWave from "../Assets/img/SoundWave.svg";
import { Link } from "react-router-dom";


const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    flexGrow: 1,
  },
  titleName: {
    paddingTop: '30px'
  },
});

function PodcastStrip() {
  const classes = useStyles();


    return (
        <div className="podcastStrip">
            <div class="footer-googlee">
                <div class="ddiv1"></div>
                <div class="ddiv2"></div>
                <div class="ddiv3"></div>
                <div class="ddiv4"></div>
            </div>

            <Grid container spacing={0}>
                <Grid item className="podcastStripImg" xs={9} sm={9} lg={9} md={9}>
                    <img align="left" className="PodcastStrip" src={SoundWave} alt="Podcast" width="100%" height="200px" />
                </Grid>

                <Grid item className="podcastStripButton" xs={3} sm={3} lg={3} md={3}>
                    <Typography align="center" className={classes.titleName}>
                        <Link to="/Podcasts">
                            <h3 className="eventsEventsPageButton">
                                <b>Podcasts</b>
                            </h3>
                        </Link>
                    </Typography>
                </Grid>
            </Grid>

            <div class="footer-googlee">
                <div class="ddiv1"></div>
                <div class="ddiv2"></div>
                <div class="ddiv3"></div>
                <div class="ddiv4"></div>
            </div>


        </div>
    )
}

export default PodcastStrip
