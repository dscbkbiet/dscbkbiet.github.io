import React from "react";
import "../styles/Header.css";
import logo from "../Assets/img/logo1.png";
import { BrowserRouter as Router, Link } from "react-router-dom";

const RespMenu = () => {
  // This function is for making the navbar responsive
  var x = document.getElementById("myTopnav");
  if (x.className === "header__main") {
    x.className += " responsive"; //adds this class if the burger icon is clicked
  } else {
    x.className = "header__main";
  }
  var x = document.getElementById("myMenu");
  if (x.className === "header__menu") {
    x.className += " responsive";
  } else {
    x.className = "header__menu";
  }
};

const Header = () => {
  return (
    <>
      <div className="header__main" id="myTopnav">
        <div className="resp">
          <div className="header__logo">
            <img src={logo} />
          </div>
          <div className="header__burger" onClick={RespMenu}>
            <i class="fa fa-bars"></i>
          </div>
        </div>
        <div className="header__menu" id="myMenu" onClick={RespMenu}>
          <Link to="/" className="nav__links">
            <span>Home</span>
          </Link>
          <Link to="/Team" className="nav__links">
            <span>Team</span>
          </Link>
          <Link to="/dsc-bkbiet-events" className="nav__links">
            <span>Events</span>
          </Link>
          <Link to="/Blog" className="nav__links">
            <span>Blogs</span>
          </Link>
          <Link to="/Podcasts" className="nav__links">
            <span>Podcasts</span>
          </Link>
          <Link to="/contactUs" className="nav__links">
            <span>ContactUs</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
