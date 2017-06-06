import { combineReducers, createStore } from 'redux';
import { reducer as burgerMenu } from 'redux-burger-menu';

const rootReducer = combineReducers({
  burgerMenu: burgerMenu,
});

export default rootReducer;
