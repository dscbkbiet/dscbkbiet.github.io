import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import dscbkbietlogo from "../Assets/img/dscbkbietlogo.png";


const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    flexGrow: 1,
  },
  titleName: {
    paddingTop: '30px'
  },
});

function About() {
  const classes = useStyles();

    return (
        <div className="about">
            <Typography
                className={classes.titleName}
                variant="h3"
                component="h2"
                color="textSecondary"
                align="center"
            >About</Typography>

            <div align="center">
                <img className="aboutLogo" src={dscbkbietlogo} alt="Logo" />
            </div>

            <p>
                Developer Student Clubs (DSC) is a community where programmers meet to discuss and work with several Google developer resources and products. A DSC event has a diversified event portfolio, from just a few people meeting up to build products to large events with demos and lectures to conducting big hackathons.
            </p>

        </div>
    )
}

export default About;
