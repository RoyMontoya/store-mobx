import React, {Component} from 'react';
import Dishes from './Dishes';
import Drinks from './Drinks'
import UserOrders from './UserOrders';
import {BrowserRouter, Route, Link} from 'react-router-dom';

class Canvas extends Component {
  render() {
    return (<div className="container">
      <div className="jumbotron">
        <h2>Nombre de Tienda</h2>
      </div>
      <div>
        <div>
          <div>
            <ul className="nav nav-pills">
              <li role="presentation" className="active">
                <Link to="/dishes">Dishes</Link>
              </li>
              <li role="presentation" className="active">
                <Link to="/drinks">Drinks</Link>
              </li>
            </ul>
          </div>
          <Route path="/dishes" component={Dishes}/>
          <Route path="/drinks" component={Drinks}/>
        </div>
      </div>
      <UserOrders/>
    </div>);
  }
}

export default Canvas;
