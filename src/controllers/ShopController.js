import {extendObservable} from 'mobx';
import data from './FirebaseController';

class ShopController {
  constructor() {

    self = this;

    data.drinks.once('value').then(function(snapshot){
      snapshot.forEach(function(childSnapShot){
        const key = childSnapShot.key;
        const value = childSnapShot.val();
        self.drinks.push(value);
      })
    });

    data.dishes.once('value').then(function(snapshot){
      snapshot.forEach(function(childSnapShot){
        const key = childSnapShot.key;
        const value = childSnapShot.val();
        self.dishes.push(value);
      })
    });

    extendObservable(this, {
      dishes: [
      ],
      drinks: [
      ]
    });
  }

  placeOrder(dishIndex, dishQuantity) {
    this.dishes.forEach((value, index) => {
      if (dishIndex === index) {
        this.dishes[index].quantity = dishQuantity;
      }
    })
  }

  placeDrinkOrder(drinkIndex, drinkQuantity) {
    this.drinks.forEach((value, index) => {
      if (drinkIndex === index) {
        this.drinks[index].quantity = drinkQuantity;
      }
    })
  }

}

var VarShopController = new ShopController;

export default VarShopController;
