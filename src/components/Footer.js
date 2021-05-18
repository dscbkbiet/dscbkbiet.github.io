import React from "react";
import "../styles/Footer.css";
import Home from "./Home";
import Events from "./Events";
import Team from "./Team";
import Blog from "./Blog";
import EventsPage from "./EventsPage";
import ContactUs from "./ContactUs";
import Podcasts from "./Podcasts";
import Header from "./Header";
import logo from "../Assets/img/logo.png";
import { Link } from "react-router-dom";

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
              <div className="footer__logo">
                <img src={logo} />
              </div>
            </div>
            <div className="col">
              <h3 id="Links">Quick Links</h3>
              <h5 className="list-unstyled">
                <li>
                  <Link to="/" className="list__links">
                    <span>Home</span>
                  </Link>
                </li>
                <li>
                  <Link to="/Team" className="list__links">
                    <span>Team</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dsc-bkbiet-events" className="list__links">
                    <span>Events</span>
                  </Link>
                </li>
                <li>
                  <Link to="/Blog" className="list__links">
                    <span>Blogs</span>
                  </Link>
                </li>
                <li>
                  <Link to="/Podcasts" className="list__links">
                    <span>Podcasts</span>
                  </Link>
                </li>
                <li>
                  <Link to="/contactUs" className="list__links">
                    <span>ContactUs</span>
                  </Link>
                </li>
              </h5>
            </div>
            <div className="col">
              <h3 id="Links">Social</h3>
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
                {/* Youtube */}
                <a href="https://www.youtube.com/channel/UC4KQF4Di1RWzTR0GLmLtlxQ">
                  <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTkuNjE1IDMuMTg0Yy0zLjYwNC0uMjQ2LTExLjYzMS0uMjQ1LTE1LjIzIDAtMy44OTcuMjY2LTQuMzU2IDIuNjItNC4zODUgOC44MTYuMDI5IDYuMTg1LjQ4NCA4LjU0OSA0LjM4NSA4LjgxNiAzLjYuMjQ1IDExLjYyNi4yNDYgMTUuMjMgMCAzLjg5Ny0uMjY2IDQuMzU2LTIuNjIgNC4zODUtOC44MTYtLjAyOS02LjE4NS0uNDg0LTguNTQ5LTQuMzg1LTguODE2em0tMTAuNjE1IDEyLjgxNnYtOGw4IDMuOTkzLTggNC4wMDd6Ii8+PC9zdmc+" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <hr className="hr" />
        <div className="copyright">
          <p>Copyright © 2021 | DSC-BKBIET</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
