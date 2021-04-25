import React from "react";
import "../styles/ContactUs.css";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Paper from "@material-ui/core/Paper";
import { Card } from "@material-ui/core";

function ContactUs() {
  return (
    <>
      <Grid className="ContactUs" container spacing={2}>
        <Grid item xs={12} sm={12} lg={4} md={4}>
          <Card className="Card" variant="outlined" align="center">
            <h1>Contact Information</h1>
            <p>Email: dscbkbiet@gmail.com </p>
            <p>Phone: +91 9828687900</p>
            <p>Address: BKBIET Campus, CEERI Road, Pilani – 333031</p>

            <a href="https://discord.gg">
              <img src="https://discord.com/assets/41484d92c876f76b20c7f746221e8151.svg" />
            </a>
          </Card>
        </Grid>

        <Grid item xs={12} sm={12} lg={4} md={4}>
          <Card className="Card" variant="outlined" align="center">
            <form>
              <input name="Email" placeholder="Enter your email"></input>
              <input name="Name" placeholder="Enter your name"></input>
              <input
                name="Your Message"
                placeholder="Enter your message"
                style={{ height: '160px' }}
              ></input>
              <button type="submit">Submit</button>
            </form>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default ContactUs;
