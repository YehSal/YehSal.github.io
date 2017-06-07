import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import promise from 'redux-promise';
import { scaleRotate as Menu } from 'react-burger-menu'
import { decorator as reduxBurgerMenu } from 'redux-burger-menu';

import reducers from './reducers';
import Navbar from './components/nav_bar';
import Home from './components/home';
import About from './components/about';
import Blog from './components/blog';
import ContactMe from './components/contact_me';
import Portfolio from './components/portfolio';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div id="outer-container">
        <Navbar />
        <main id="page-wrap">
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/blog" component={Blog} />
            <Route path="/contact_me" component={ContactMe} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/" component={Home} />
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
