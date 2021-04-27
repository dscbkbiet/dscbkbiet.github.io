import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <>
      {/* Fancy Google Footer . Dont change */}
      <div class="footer-google">
        <div class="ddiv1"></div>
        <div class="ddiv2"></div>
        <div class="ddiv3"></div>
        <div class="ddiv4"></div>
      </div>
      {/* Main Footer */}
      <div className="Main-Footer">
        <div className="container">
          <div className="row">
            {/* Column 1 */}
            <div className="col">
              <h4 id="Links">Links</h4>
              <h1 className="list-unstyled">
                <li>Home</li>
                <li>Team</li>
                <li>Events</li>
                <li>Blogs</li>
                <li>Podcasts</li>
                <li>Contact Us</li>
              </h1>
            </div>
            {/* Column 2 */}
            {/* This contains all the icons with hyperlink. */}
          </div>
        </div>
        <div className="row" id="row2">
          {/* Discord */}
          <a href="https://discord.gg">
            <img src="https://discord.com/assets/41484d92c876f76b20c7f746221e8151.svg" />
          </a>
          {/* Twitter */}
          <a href="https://twitter.com/dscbkbiet">
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjQgNC41NTdjLS44ODMuMzkyLTEuODMyLjY1Ni0yLjgyOC43NzUgMS4wMTctLjYwOSAxLjc5OC0xLjU3NCAyLjE2NS0yLjcyNC0uOTUxLjU2NC0yLjAwNS45NzQtMy4xMjcgMS4xOTUtLjg5Ny0uOTU3LTIuMTc4LTEuNTU1LTMuNTk0LTEuNTU1LTMuMTc5IDAtNS41MTUgMi45NjYtNC43OTcgNi4wNDUtNC4wOTEtLjIwNS03LjcxOS0yLjE2NS0xMC4xNDgtNS4xNDQtMS4yOSAyLjIxMy0uNjY5IDUuMTA4IDEuNTIzIDYuNTc0LS44MDYtLjAyNi0xLjU2Ni0uMjQ3LTIuMjI5LS42MTYtLjA1NCAyLjI4MSAxLjU4MSA0LjQxNSAzLjk0OSA0Ljg5LS42OTMuMTg4LTEuNDUyLjIzMi0yLjIyNC4wODQuNjI2IDEuOTU2IDIuNDQ0IDMuMzc5IDQuNiAzLjQxOS0yLjA3IDEuNjIzLTQuNjc4IDIuMzQ4LTcuMjkgMi4wNCAyLjE3OSAxLjM5NyA0Ljc2OCAyLjIxMiA3LjU0OCAyLjIxMiA5LjE0MiAwIDE0LjMwNy03LjcyMSAxMy45OTUtMTQuNjQ2Ljk2Mi0uNjk1IDEuNzk3LTEuNTYyIDIuNDU3LTIuNTQ5eiIvPjwvc3ZnPg==" />
          </a>
          {/* Linkedin */}
          <a href="https://www.linkedin.com/company/dsc-bkbiet">
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTkgMGgtMTRjLTIuNzYxIDAtNSAyLjIzOS01IDV2MTRjMCAyLjc2MSAyLjIzOSA1IDUgNWgxNGMyLjc2MiAwIDUtMi4yMzkgNS01di0xNGMwLTIuNzYxLTIuMjM4LTUtNS01em0tMTEgMTloLTN2LTExaDN2MTF6bS0xLjUtMTIuMjY4Yy0uOTY2IDAtMS43NS0uNzktMS43NS0xLjc2NHMuNzg0LTEuNzY0IDEuNzUtMS43NjQgMS43NS43OSAxLjc1IDEuNzY0LS43ODMgMS43NjQtMS43NSAxLjc2NHptMTMuNSAxMi4yNjhoLTN2LTUuNjA0YzAtMy4zNjgtNC0zLjExMy00IDB2NS42MDRoLTN2LTExaDN2MS43NjVjMS4zOTYtMi41ODYgNy0yLjc3NyA3IDIuNDc2djYuNzU5eiIvPjwvc3ZnPg==" />
          </a>
          {/* DSC.Community.Dev */}
          {/* Might not be the same icon of DSC because its svg is yet to be found. */}
          <a href="https://dsc.community.dev/bk-birla-institute-of-engineering-and-technology-pilani/">
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTkgMGgtMTRjLTIuNzYxIDAtNSAyLjIzOS01IDV2MTRjMCAyLjc2MSAyLjIzOSA1IDUgNWgxNGMyLjc2MiAwIDUtMi4yMzkgNS01di0xNGMwLTIuNzYxLTIuMjM4LTUtNS01em0tOCAxMC4xOTlsLTMuNjQgMS44MDEgMy42NCAxLjc5NnYyLjIwNGwtNi0yLjkzNXYtMi4xMzFsNi0yLjkzNHYyLjE5OXptOCAyLjg2NmwtNiAyLjkzNXYtMi4yMDRsMy42NC0xLjc5Ni0zLjY0LTEuODAxdi0yLjE5OWw2IDIuOTM1djIuMTN6Ii8+PC9zdmc+" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
