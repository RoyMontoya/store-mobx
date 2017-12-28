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

}

var VarShopController = new ShopController;

export default VarShopController;
