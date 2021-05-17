import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import ReactTypingEffect from "react-typing-effect";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

function Home() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.root}>
        <Grid container>
          {/* Content */}
          <Grid item xs={12} sm={6} lg={6} md={6} align="left">
            <div className="homeContent">
              <h1>Google Developer Student Club BKBIET</h1>
              <h3>
                Together We{" "}
                <ReactTypingEffect
                  text={["Learn", "Build", "Solve", "Transcend"]}
                  speed={100}
                  eraseDelay={500}
                />
              </h3>
              <Grid container>
                <Grid item xs={12} sm={6} lg={4} md={4}>
                  <a
                    href="https://discord.gg/7cAesm9H"
                    className="homeButtonDiscord"
                  >
                    Join on Discord
                  </a>
                </Grid>
                <Grid item xs={12} sm={6} lg={4} md={4}>
                  <a
                    href="https://dsc.community.dev/accounts/login/?next=/bk-birla-institute-of-engineering-and-technology-pilani/"
                    className="homeButtonPortal"
                  >
                    Join Us
                  </a>
                </Grid>
              </Grid>
            </div>
          </Grid>
          {/* Animation */}
          <Grid item xs={12} sm={6} lg={6} md={6}>
            <Player
              autoplay
              loop
              src="https://assets3.lottiefiles.com/packages/lf20_myykup2f.json"
              style={{ height: "500px", width: "400px" }}
            >
              <Controls visible={false} />
            </Player>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Home;
