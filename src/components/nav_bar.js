import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu'
import { decorator as reduxBurgerMenu } from 'redux-burger-menu';


class Navbar extends Component {
  showSettings (event) {
    event.preventDefault();
  }

  constructor(props) {
    super(props);
    this.state = {
      isOpen: true,
      width: 280
    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <Menu isOpen={ this.state.isOpen } width={ this.state.width }>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
      </Menu>
    );
  }
}

export default reduxBurgerMenu(Menu);
