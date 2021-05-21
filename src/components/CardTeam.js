import { Avatar, Link } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Opacity, SportsRugbySharp } from "@material-ui/icons";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import React from "react";

// import "../styles/CardTeam.css"
import My_picture from "../Assets/img/My_picture.jpg";

const useStyles = makeStyles({
  root: {
    maxWidth: "345",
    borderTop: "1px solid blue",
    borderRight: "1px solid red",
    borderBottom: "1px solid yellow",
    borderLeft: "1px solid green",
  },
  media: {
    height: 200,
    backgroundColor: "rgba(0 0 0 0.4)",
    borderBottom: "1px solid rgb(0 0 0 / 20%)",
    opacity: "0",

    "&:hover": {
      boxSizing: "border-box",
      filter: "blur(25px)",
      opacity: "50",
      backgroundSize: "cover",
      transition: "0.5s",
    },
  },
  cardCover: {
    boxShadow: "0 8px 8px rgb(0 0 0 / 20%)",
    backgroundPosition: "50%",
    marginTop: "5px",
  },
  avatar: {
    height: "120px",
    width: "120px",
    boxShadow: "0 8px 8px rgb(0 0 0 / 20%)",
    borderRadius: "50%",
    objectFit: "cover",
    transform: "translateX(70px) translateY(-160px)",
  },
});

const CardTeam = ({ name, position, about, image, iLink, tLink, lLink }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title={name}
        ></CardMedia>
      </CardActionArea>

      <Avatar className={classes.avatar} alt={name} src={image} />
      <Typography classes={classes.cardCover}></Typography>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {name}
        </Typography>
        <Typography variant="body2" color="textPrimary" component="p">
          {position}
        </Typography>
        <Typography variant="h5" color="textPrimary" component="p">
          {about}
        </Typography>
      </CardContent>

      <CardActions>
        <Link href={iLink}>
          <InstagramIcon />
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
};

export default CardTeam;
