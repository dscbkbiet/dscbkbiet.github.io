import {Link} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import React from "react";

const useStyles = makeStyles({
  root : {
    maxWidth : 345,

  },
  media : {
    height : 250,

  },
});

const Cards = ({name, position, image, iLink, tLink, lLink}) => {


  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {position}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link href={iLink}>
          <InstagramIcon/>
        </Link>
        <Link href={lLink}>
          <LinkedInIcon />
        </Link>
        <Link href={tLink}>
          <TwitterIcon />
        </Link>
      </CardActions>
    </Card>
  );
}

export default Cards;