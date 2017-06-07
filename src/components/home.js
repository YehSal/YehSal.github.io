import React, { Component } from 'react';
require("!style-loader!css-loader!sass-loader!../../style/style.scss");


class Home extends Component {
  componentDidMount() {
    this.renderTextAnimation();
  }

  render() {
    return (
      <div className="text-container">
        <span className="reg-text">Yehia Saleh</span>
        <span className="letter">.</span>
        <span className="letter">c</span>
        <span className="letter">o</span>
        <span className="letter">m</span>
      </div>
    );
  }

  renderTextAnimation() {
    setTimeout(function () {
        $('.letter').addClass('loaded');
        $('.reg-text').addClass('loaded');
    }, 1000);
  }
}

export default Home;
