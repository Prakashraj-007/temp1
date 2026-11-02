import React, { useState } from "react";

function MedicalShop() {
  const [medicines, setMedicines] = useState([
    {
      id: 1,
      name: "Paracetamol",
      quantity: 50,
      price: 2.5,
    },
    {
      id: 2,
      name: "Aspirin",
      quantity: 30,
      price: 3,
    },
    {
      id: 3,
      name: "Band-Aid",
      quantity: 100,
      price: 1,
    },
  ]);

  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  const addMedicine = (e) => {
    e.preventDefault();

    if (
      name.trim() === "" ||
      quantity.trim() === "" ||
      price.trim() === ""
    ) {
      global.alert("Please fill in all fields");
      return;
    }

    const newMedicine = {
      id: medicines.length + 1,
      name: name,
      quantity: Number(quantity),
      price: Number(price),
    };

    setMedicines([...medicines, newMedicine]);

    setName("");
    setQuantity("");
    setPrice("");
  };

  return (
    <div className="container my-4">

      <h1 className="text-primary text-center mb-4">
        Medical Shop Inventory
      </h1>

      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
          {medicines.map((medicine) => (
            <tr key={medicine.id}>
              <td>{medicine.id}</td>
              <td>{medicine.name}</td>
              <td>{medicine.quantity}</td>
              <td>{medicine.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 className="text-success text-center mt-5 mb-4">
        Add New Medicine
      </h2>

      <form onSubmit={addMedicine}>
        <div className="row">

          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="col-md-3">
            <input
              type="number"
              className="form-control"
              placeholder="Quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>

          <div className="col-md-3">
            <input
              type="number"
              step="0.1"
              className="form-control"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className="col-md-3">
            <button
              type="submit"
              className="btn btn-success w-100"
            >
              Add Medicine
            </button>
          </div>

        </div>
      </form>

    </div>
  );
}

export default MedicalShop;
