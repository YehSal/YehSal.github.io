import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import { scaleRotate as Menu } from 'react-burger-menu'
import { decorator as reduxBurgerMenu } from 'redux-burger-menu';




import reducers from './reducers';
import Navbar from './components/nav_bar.js';
import Home from './components/home.js';
import About from './components/about.js';
import Blog from './components/blog.js';
import ContactMe from './components/contact_me.js';
import Portfolio from './components/portfolio.js';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div id="outer-container">
        <Navbar />
        <main id="page-wrap">
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
