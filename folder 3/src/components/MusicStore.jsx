import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function MusicStore() {

  const [inventory, setInventory] = useState([
    {
      id: 1,
      name: 'Acoustic Guitar',
      quantity: 10,
      price: 150
    },
    {
      id: 2,
      name: 'Electric Keyboard',
      quantity: 5,
      price: 300
    },
    {
      id: 3,
      name: 'Drum Set',
      quantity: 3,
      price: 500
    }
  ]);

  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');

  function handleAddItem(e) {
    e.preventDefault();

    if (
      name.trim() === '' ||
      quantity.trim() === '' ||
      price.trim() === ''
    ) {
      alert('Please fill in all fields');
      return;
    }


    const newItem = {
      id: inventory.length + 1,
      name: name,
      quantity: Number(quantity),
      price: Number(price)
    };

    setInventory([...inventory, newItem]);

    setName('');
    setQuantity('');
    setPrice('');
  }

  return (
    <div className="container my-4">

      <div className="card h-100 shadow-sm">

        <div className="card-header bg-dark text-center">
          <h1 className="text-warning fw-bold mb-0">
            Music Store Inventory
          </h1>
        </div>

        <div className="card-body">

          <table className="table table-bordered table-hover shadow-sm">

            <thead className="table-warning">
              <tr>
                <th>ID</th>
                <th>Instrument / Album</th>
                <th>Quantity</th>
                <th>Price ($)</th>
              </tr>
            </thead>

            <tbody>
              {inventory.map(function (item) {
                return (
                  <tr key={item.id}>
                    <td>
                      <span className="badge text-dark">
                        {item.id}
                      </span>
                    </td>

                    <td className="fw-bold">
                      {item.name}
                    </td>

                    <td>{item.quantity}</td>

                    <td className="text-success">
                      ${item.price.toFixed(2)}
                    </td>
                  </tr>
                );
              })}
            </tbody>

          </table>

          <h2 className="text-info text-center mt-5 mb-4">
            Add New Instrument
          </h2>

          <form onSubmit={handleAddItem}>
            <div className="row g-3">

              <div className="col-md-4">
                <input
                  type="text"
                  className="form-control border-info"
                  placeholder="Instrument / Album Name"
                  value={name}
                  onChange={function (e) {
                    setName(e.target.value);
                  }}
                />
              </div>

              <div className="col-md-3">
                <input
                  type="number"
                  className="form-control border-info"
                  placeholder="Quantity"
                  value={quantity}
                  onChange={function (e) {
                    setQuantity(e.target.value);
                  }}
                  min="0"
                />
              </div>

              <div className="col-md-3">
                <input
                  type="number"
                  className="form-control border-info"
                  placeholder="Price ($)"
                  value={price}
                  onChange={function (e) {
                    setPrice(e.target.value);
                  }}
                  step="0.01"
                  min="0"
                />
              </div>

              <div className="col-md-2">
                <button
                  type="submit"
                  className="btn btn-warning w-100 fw-bold"
                >
                  Add Item
                </button>
              </div>

            </div>
          </form>

        </div>
      </div>
    </div>
  );
}

export default MusicStore;