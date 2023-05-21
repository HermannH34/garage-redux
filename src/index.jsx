import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createHistory as history } from 'history';
import { reducer as formReducer } from 'redux-form'

import carsReducer from './reducers/cars_reducer.js'
import carsIndex from './containers/cars_index.jsx';
import CarNew from './containers/car_new.jsx';

import '../assets/stylesheets/application.scss';

const reducers = combineReducers({
  cars: carsReducer,
  form: formReducer,
});

const middlewares = applyMiddleware(reduxPromise, logger);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, {}, middlewares)}>
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={carsIndex} />
        <Route path="/cars/new" exact component={CarNew} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
