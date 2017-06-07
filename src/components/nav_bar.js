import React, { Component } from 'react';
import { fallDown as Menu } from 'react-burger-menu'
import { decorator as reduxBurgerMenu } from 'redux-burger-menu';
import { BrowserRouter, Route, Link } from 'react-router-dom'


class Navbar extends Component {
  render() {
    return (
      <Menu pageWrapId={ "page-wrap" }>
        <header className="about-header">Yehia Saleh</header>
          <Link id="home" className="menu-item" to="/">
            <span className="glyphicon glyphicon-home"></span> Home
          </Link>
          <hr />
          <Link id="about" className="menu-item" to="/about">
            <span className="glyphicon glyphicon-user"></span> About
          </Link>
          <hr />
          <Link id="portfolio" className="menu-item" to="/portfolio">
            <span className="glyphicon glyphicon-folder-open"></span> Portfolio
          </Link>
          <hr />
          <Link id="portfolio" className="menu-item" to="/blog">
            <span className="glyphicon glyphicon-pencil"></span> Blog
          </Link>
          <hr />
          <div>
            <Link id="contact" className="menu-item" to="/contact_me">
              <span className="glyphicon glyphicon-envelope"></span> Contact Me
            </Link>
            <a href="https://www.facebook.com/yehia.saleh.73" className="fa fa-facebook-official fa-2x"></a>
            <a href="https://www.linkedin.com/in/yehia-saleh-4b2313122/" className="fa fa-linkedin-square fa-2x"></a>
            <a href="https://github.com/YehSal" className="fa fa-github fa-2x"></a>
          </div>
      </Menu>
    );
  }
}

export default Navbar;
