import React, {Component} from 'react';
import Dishes from './Dishes';
import Drinks from './Drinks'
import UserOrders from './UserOrders';
import {Link} from 'react-router'

class Canvas extends Component {
  render() {
    return (<div className="container">
      <div className="jumbotron">
        <h2>Nombre de Tienda</h2>
      </div>
      <div>
        <ul className = "nav nav-pills ListMargin">
          <li role = "presentation" className = "active"><Link to = "/">Dishes</Link></li>
          <li role = "presentation" className = "active"><Link to = "drinks">Drinks</Link></li>
        </ul>
      </div>
      {this.props.children}
      <UserOrders/>
    </div>);
  }
}

export default Canvas;
