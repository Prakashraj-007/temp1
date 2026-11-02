import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function FoodOrder() {

  const [orders, setOrders] = useState([
    {
      id: 1,
      item: 'Burger',
      quantity: 2,
      price: 150
    },
    {
      id: 2,
      item: 'Pizza',
      quantity: 1,
      price: 300
    },
    {
      id: 3,
      item: 'Pasta',
      quantity: 3,
      price: 200
    }
  ]);

  const [item, setItem] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');

  function handleAddOrder(e) {
    e.preventDefault();

    if (
      item.trim() === '' ||
      quantity.trim() === '' ||
      price.trim() === ''
    ) {
      alert('Please fill in all fields');
      return;
    }


    const newOrder = {
      id: orders.length + 1,
      item: item,
      quantity: Number(quantity),
      price: Number(price)
    };

    setOrders([...orders, newOrder]);

    setItem('');
    setQuantity('');
    setPrice('');
  }

  return (
    <div className="container my-4">

      <h1 className="text-primary text-center mb-4">
        Food Order Management
      </h1>

      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Food Item</th>
            <th>Quantity</th>
            <th>Price ($)</th>
          </tr>
        </thead>

        <tbody>
          {orders.map(function (order) {
            return (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.item}</td>
                <td>{order.quantity}</td>
                <td>{order.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <h2 className="text-success text-center mt-5 mb-4">
        Add New Food Order
      </h2>

      <form onSubmit={handleAddOrder}>
        <div className="row">

          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="Food Item"
              value={item}
              onChange={function (e) {
                setItem(e.target.value);
              }}
            />
          </div>

          <div className="col-md-3">
            <input
              type="number"
              className="form-control"
              placeholder="Quantity"
              value={quantity}
              min="1"
              onChange={function (e) {
                setQuantity(e.target.value);
              }}
            />
          </div>

          <div className="col-md-3">
            <input
              type="number"
              step="0.01"
              min="0"
              className="form-control"
              placeholder="Price ($)"
              value={price}
              onChange={function (e) {
                setPrice(e.target.value);
              }}
            />
          </div>

          <div className="col-md-3">
            <button
              type="submit"
              className="btn btn-success w-100"
            >
              Add Order
            </button>
          </div>

        </div>
      </form>

    </div>
  );
}

export default FoodOrder;