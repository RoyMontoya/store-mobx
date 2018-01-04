import {extendObservable} from 'mobx';

class ShopController {
  constructor() {
    extendObservable(this, {
      dishes: [
        {
          nombre: "primerPlatillo",
          descripcion: "rico",
          precio: 100,
          cantidad: 0
        }, {
          nombre: "segundoPlatillo",
          descripcion: "rico",
          precio: 150,
          cantidad: 0
        }, {
          nombre: "tercerPlatillo",
          descripcion: "rico",
          precio: 200,
          cantidad: 0
        }
      ],
      drinks: [
        {
          nombre: "primerDrink",
          descripcion: "rico",
          precio: 20,
          cantidad: 0
        }, {
          nombre: "segundoDrink",
          descripcion: "rico",
          precio: 30,
          cantidad: 0
        }, {
          nombre: "tercerDrink",
          descripcion: "rico",
          precio: 40,
          cantidad: 0
        }
      ]
    });
  }

  placeOrder(dishIndex, dishQuantity) {
    this.dishes.forEach((value, index) => {
      if (dishIndex === index) {
        this.dishes[index].cantidad = dishQuantity;
      }
    })
  }

  placeDrinkOrder(drinkIndex, drinkQuantity) {
    this.drinks.forEach((value, index) => {
      if (drinkIndex === index) {
        this.drinks[index].cantidad = drinkQuantity;
      }
    })
  }

}

var VarShopController = new ShopController;

export default VarShopController;
