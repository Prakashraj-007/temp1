import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Bookstore() {

  const [inventory, setInventory] = useState([
    {
      id: 1,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      stock: 12,
      price: 10.5
    },
    {
      id: 2,
      title: '1984',
      author: 'George Orwell',
      stock: 8,
      price: 9.0
    },
    {
      id: 3,
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      stock: 15,
      price: 12.0
    }
  ]);

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [stock, setStock] = useState('');
  const [price, setPrice] = useState('');

  function handleAddBook(e) {
    e.preventDefault();

    if (
      title.trim() === '' ||
      author.trim() === '' ||
      stock.trim() === '' ||
      price.trim() === ''
    ) {
      alert('Please fill in all fields');
      return;
    }

    const newBook = {
      id: inventory.length + 1,
      title: title,
      author: author,
      stock: Number(stock),
      price: Number(price)
    };

    setInventory([...inventory, newBook]);

    setTitle('');
    setAuthor('');
    setStock('');
    setPrice('');
  }

  return (
    <div className="container my-5">

      <h1 className="text-primary text-center fw-bold mb-2 bookstore-title">
        Bookstore Inventory
      </h1>

      <p className="text-muted text-center mb-5">
        Manage your book collection with ease
      </p>

      <h2 className="text-success mb-4">
        Available Books
      </h2>

      <div className="row">

        {inventory.map(function (book) {
          return (
            <div className="col-md-4 mb-4" key={book.id}>

              <div className="card h-100 shadow-sm">

                <div className="card-body">

                  <h3 className="text-primary book-title">
                    {book.title}
                  </h3>

                  <p className="text-muted mb-2">
                    by {book.author}
                  </p>

                  <p className="book-info mb-1">
                    <span className="fw-bold">Stock:</span>{' '}
                    {book.stock}
                  </p>

                  <p className="book-info mb-0">
                    <span className="fw-bold">Price:</span>{' '}
                    ${book.price.toFixed(2)}
                  </p>

                </div>

                <div className="card-footer text-center">
                  <span className="badge bg-info text-dark">
                    ID: {book.id}
                  </span>
                </div>

              </div>
            </div>
          );
        })}

      </div>

      <h2 className="text-success mt-4 mb-4">
        Add a New Book
      </h2>

      <div className="card shadow-sm add-book-card">

        <form onSubmit={handleAddBook}>
          <div className="row g-3">

            <div className="col-md-3">
              <input
                type="text"
                className="form-control"
                placeholder="Book Title"
                value={title}
                onChange={function (e) {
                  setTitle(e.target.value);
                }}
              />
            </div>

            <div className="col-md-3">
              <input
                type="text"
                className="form-control"
                placeholder="Author"
                value={author}
                onChange={function (e) {
                  setAuthor(e.target.value);
                }}
              />
            </div>

            <div className="col-md-2">
              <input
                type="number"
                className="form-control"
                placeholder="Stock"
                value={stock}
                onChange={function (e) {
                  setStock(e.target.value);
                }}
                min="0"
              />
            </div>

            <div className="col-md-2">
              <input
                type="number"
                className="form-control"
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
                className="btn btn-success w-100"
              >
                Add Book
              </button>
            </div>

          </div>
        </form>

      </div>

    </div>
  );
}

export default Bookstore;