import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import ReactTypingEffect from "react-typing-effect";
import "../styles/Home.css";
import About from "./About";

function Home() {
  return (
    <div>
      <div className="home__main h-screen">
        {/* Content */}
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
        </div>
        {/* Animation */}
        <div className="home__animation">
          <Player
            autoplay
            loop
            src="https://assets3.lottiefiles.com/packages/lf20_myykup2f.json"
            style={{ height: "500px", width: "400px" }}
          >
            <Controls visible={false} />
          </Player>
        </div>
      </div>
      <About />
    </div>
  );
}

export default Home;
