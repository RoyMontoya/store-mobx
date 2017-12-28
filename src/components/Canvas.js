import React, {Component} from 'react';
import Dishes from './Dishes';
import UserOrders from './UserOrders'; 

class Canvas extends Component {
  render() {
    return (<div className="container">
      <div className="jumbotron">
        <h2>Nombre de Tienda</h2>
      </div>
      <Dishes/>
      <UserOrders/>
    </div>);
  }
}

export default Canvas;
