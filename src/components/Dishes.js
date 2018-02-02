 import React, {Component} from 'react';
import '../styles/Dishes.css';
import logo from '../logo.svg';
import VarShopController from '../controllers/ShopController';
import Order from './Order';

class Dishes extends Component {
  render() {

    let dishes_div = [];

    const fill_dishes_array = VarShopController.dishes.forEach((value, index) =>
     (dishes_div.push(<div className="list-group-item" key={index}>
      <div className="panel-body">
        <img role="presentation" src={value.path} className="ImagenPlatillo"/>
        <h2 className="TitlePlatillo">{value.name}</h2>
        <div className="DescripcionPlatillo">{value.description}</div>
        <Order index={index} precio={value.precio} placeOrder={(dishI, event) => {
          VarShopController.placeOrder(dishI, event)}}/>
      </div>
    </div>)))

    return (<div className="container col-md-6">
      <div>
        <div className="panel panel-primary">
          <div className="list-group Platillo-Menu">
            {dishes_div}
          </div>
        </div>

      </div>
    </div>);
  }
}

export default Dishes;
