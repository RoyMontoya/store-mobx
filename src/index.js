import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import Canvas from './components/Canvas'
import Dishes from './components/Dishes'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css'

const tabs = (<Router  history = {browserHistory}>
  <Route path = "/" component= {Canvas} >
    <IndexRoute component = {Dishes}></IndexRoute>
  </Route>
</Router>);

ReactDOM.render(
  tabs,
  document.getElementById('root')
);
