import React, { Component } from 'react';
import { fallDown as Menu } from 'react-burger-menu'
import { decorator as reduxBurgerMenu } from 'redux-burger-menu';
import { BrowserRouter, Route, Link } from 'react-router-dom'


class Navbar extends Component {
  render() {
    return (
      <Menu pageWrapId={ "page-wrap" }>
        <header>Yehia Saleh</header>
          <Link id="home" className="menu-item" to="/">
            <span className="glyphicon glyphicon-home"></span> Home
          </Link>
          <Link id="about" className="menu-item" to="/about">
            <span className="glyphicon glyphicon-user"></span> About
          </Link>
          <Link id="portfolio" className="menu-item" to="/portfolio">
            <span className="glyphicon glyphicon-folder-open"></span> Portfolio
          </Link>
          <Link id="portfolio" className="menu-item" to="/blog">
            <span className="glyphicon glyphicon-pencil"></span> Blog
          </Link>
          <Link id="contact" className="menu-item" to="/contact_me">
            <span className="glyphicon glyphicon-envelope"></span> Contact Me
          </Link>
      </Menu>
    );
  }
}

export default Navbar;
