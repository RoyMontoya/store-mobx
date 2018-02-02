import React from 'react';
import ReactDOM from 'react-dom';
import Canvas from './components/Canvas'
import './index.css';
import 'bootstrap/dist/css/bootstrap.css'
import {BrowserRouter, Route} from 'react-router-dom';

const routerCanvas = (
  <BrowserRouter>
      <Route path = "/" component = {Canvas}/>
    </BrowserRouter>
);

ReactDOM.render(routerCanvas, document.getElementById('root'));
