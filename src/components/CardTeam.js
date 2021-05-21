import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import { Avatar, Link } from "@material-ui/core";
import { Opacity, SportsRugbySharp } from "@material-ui/icons";
import My_picture from "../Assets/img/My_picture.jpg";

const useStyles = makeStyles({
  root: {
    maxWidth: "345px",
    borderTop: "1px solid blue",
    borderRight: "1px solid red",
    borderBottom: "1px solid yellow",
    borderLeft: "1px solid green",
  },
  media: {
    height: "200px",
    backgroundColor: "rgba(0 0 0 0.4)",
    borderBottom: "0px",
    opacity: "0",
    overflow: "hidden",

    "&:hover": {
      boxSizing: "border-box",
      filter: "blur(30px)",
      opacity: "90",
      backgroundSize: "cover",
      transition: "0.3s",
      transform: "scale(0.9)",
    },
  },
  avatar: {
    height: "110px",
    width: "110px",
    boxShadow: "0 8px 8px rgb(0 0 0 / 20%)",
    borderRadius: "50%",
    objectFit: "cover",
    transform: "translateX(70px) translateY(-160px)",
  },
  title: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderBottom: "1px solid gray",
    transform: "translateY(-140px)",
  },
  about: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    transform: "translateY(-100px)",
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
      <CardContent className={classes.title}>
        <Typography
          gutterBottom
          variant="h6"
          component="h2"
          style={{ fontStyle: "bold" }}
        >
          {name}
        </Typography>
        <Typography variant="caption" color="textPrimary" component="p">
          {position}
        </Typography>
      </CardContent>
      <CardContent className={classes.about}>
        <Typography variant="caption" color="textPrimary" component="p">
          {about}
        </Typography>
      </CardContent>

      <CardActions style={{ paddingTop: "0px" }}>
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
