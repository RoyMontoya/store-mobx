import React, {Component} from 'react';
import VarShopController from '../controllers/ShopController';
import {observer} from 'mobx-react';

class UserOrders extends Component {
  render() {
    let orderDishes = [];
    let orderDrinks = [];

    const fill_order_dishes = VarShopController.dishes.forEach((value, index) => {
      if (value.cantidad != 0) {
        orderDishes.push(<div className="list-group-item" key={index}>
          <div className="panel-body">
            <h4>{value.nombre}</h4><br/>
            <div className="APrecioCantidad">
              <span>Cantidad: {value.cantidad}</span>
              <span className="PrecioPlatillo">Precio: {value.cantidad * value.precio}</span>
            </div>
          </div>
        </div>)
      }
    })
    const fill_order_drinks = VarShopController.drinks.forEach((value, index) => {
      if (value.cantidad != 0) {
        orderDrinks.push(<div className="list-group-item" key={index}>
          <div className="panel-body">
            <h4>{value.nombre}</h4><br/>
            <div className="APrecioCantidad">
              <span>Cantidad: {value.cantidad}</span>
              <span className="PrecioPlatillo">Precio: {value.cantidad * value.precio}</span>
            </div>
          </div>
        </div>)
      }
    })

    return (<div className="container col-md-6">
      <div>
        <div className="panel panel-primary">
          <div className="list-group Pedidos-Menu">
            {orderDishes}
            {orderDrinks}
          </div>
        </div>
      </div>
    </div>);
  }
}

export default observer(UserOrders);
