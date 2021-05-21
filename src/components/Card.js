import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { IconButton, Link } from '@material-ui/core';
import ShareIcon from '@material-ui/icons/Share';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import FileCopyIcon from '@material-ui/icons/FileCopy';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    textDecoration: "none",

  },
  media: {
    height: 250,
    textDecoration: "none",

  },
  content: {
    textDecoration: "none",
  },
  share: {
    marginLeft: "230px",
  },
});



const Cards = ({ title, content, image, bLink }) => {


  const classes = useStyles();

  return (
    <Card className={classes.root}>

      <CardActionArea>
        <Link href={bLink} target="_blank">
          <CardMedia
            className={classes.media}
            image={image}
            title={title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" className={classes.content} >
              {content}
            </Typography>
          </CardContent>
        </Link>
        <IconButton aria-label="share" className={classes.share}>
          <Popup trigger={<ShareIcon />}>{bLink} <FileCopyIcon style={{ margin: "5px" }} /></Popup>
        </IconButton>
      </CardActionArea>


      {/* <CardActions>
        <IconButton aria-label="share">
          <Popup trigger={<ShareIcon />}>{bLink} <FileCopyIcon style={{margin: "5px"}} /></Popup>
        </IconButton>
      </CardActions> */}
    </Card>
  );
}

export default Cards;