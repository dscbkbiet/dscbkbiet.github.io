import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  titleName: {
    paddingTop: '30px'
  },
});


function Podcasts() {
  const classes = useStyles();

    return (
        <div align="center" className="podcasts">
            <Typography
                className={classes.titleName}
                variant="h3"
                component="h2"
                color="textSecondary"
                align="center"
            >Podcasts</Typography>

            <iframe className="podcast" src="https://open.spotify.com/embed-podcast/episode/0ES0BKqi1cLx9dDlDtGH8N" width="80%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            <iframe className="podcast" src="https://open.spotify.com/embed-podcast/episode/3NeElWpCH3GkV8YC0skcgZ" width="80%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
    )
}

export default Podcasts;
