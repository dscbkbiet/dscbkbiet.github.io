import React, { Fragment } from "react";
import Cards from "./Card"
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import {Link} from "react-router-dom";

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

const Blog = () => {
  const classes = useStyles();
  
  return (
    <Fragment>
      <Typography
        className={classes.titleName}
        variant="h3"
        component="h2"
        color="textSecondary"
        align="center"
        
      >Blog</Typography>
      <Grid
        container
        spacing={4}
        className={classes.gridContainer}
        justify="space-evenly"
        alignItems="center"
        direction="row"
      >
        
        <Grid item xs={12} sm={6} md={4}>
        <Cards
            title={"A beginner’s tour to What/Why/How of WSL!!"}
            content={"All the best people in life seem to like LINUX"}
            image={"https://miro.medium.com/max/1000/0*w_BHVyYyisexdMbM"}
            bLink={"https://medium.com/gdsc-bkbiet/a-beginners-tour-to-what-why-how-of-wsl-78dcd4cdea82"}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Cards
            title={"All About LinkedIn"}
            content={"“What is LinkedIn?”, “What is the use of LinkedIn?”, “How to use LinkedIn?”"}
            image={"https://miro.medium.com/max/1200/1*pSBmOi_3FtjkNf0-Gj1zBg.png"}
            bLink={"https://medium.com/gdsc-bkbiet/all-about-linkedin-ef06b7402881"}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Cards
            title={"A beginner’s tour to What/Why/How of WSL!!"}
            content={"All the best people in life seem to like LINUX"}
            image={"https://miro.medium.com/max/1000/0*w_BHVyYyisexdMbM"}
            bLink={"https://medium.com/gdsc-bkbiet/a-beginners-tour-to-what-why-how-of-wsl-78dcd4cdea82"}
          />
        </Grid>

        {/* <Typography
          align="center"
          className={classes.titleName}
        >
              <Link to="">
                <h3 className="eventsEventsPageButton">
                  <b>See more</b>
                </h3>
              </Link>
        </Typography> */}
        
        
      </Grid>
      </Fragment>
  );
};

export default Blog;