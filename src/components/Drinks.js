import React, {Component} from 'react';
import '../styles/Dishes.css';
import logo from '../logo.svg';
import VarShopController from '../controllers/ShopController';
import Order from './Order';

class Drinks extends Component {
  render() {

    let drinks_div = [];

    const fill_drinks_array = VarShopController.drinks.forEach((value, index) =>
     (drinks_div.push(<div className="list-group-item" key={index}>
      <div className="panel-body">
        <img role="presentation" src={value.path} className="ImagenPlatillo"/>
        <h2 className="TitlePlatillo">{value.name}</h2>
        <div className="DescripcionPlatillo">{value.description}</div>
        <Order index={index} precio={value.precio} placeOrder={(drinkI, event) => {
          VarShopController.placeDrinkOrder(drinkI, event)}}/>
      </div>
    </div>)))

    return (<div className="container col-md-6">
      <div>
        <div className="panel panel-primary">
          <div className="list-group Platillo-Menu">
            {drinks_div}
          </div>
        </div>

      </div>
    </div>);
  }
}

export default Drinks;
