import React, {Component} from 'react';

class Order extends Component {

  updateQuantity(e) {
    this.props.placeOrder(this.props.index, e.target.value);
  }

  render() {
    return (<div>
      <br/>
      <label>
        Cantidad:
      </label>
      <input type="number" onChange={this.updateQuantity.bind(this)}
        min="0" max="20"/>
      <label className="EspacioPlatillo">Precio: {this.props.precio}</label>
    </div>);
  }
}

export default Order;
