import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch('http://localhost:8080/product');
    const data = await response.json();
    setProducts(data);
  }

  const deleteProduct = async (id) => {
    await fetch(`http://localhost:8080/product/${id}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      }
    })

    fetchData();
  }

  return (
    <div>
      <Link to="/add" className="button is-primary">Add New</Link>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id}>
              <td>{index + 1}</td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>
                <Link to={`/edit/${product.id}`} className="button is-small is-info">Edit</Link>
                <button onClick={() => deleteProduct(product.id)} className="button is-small is-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Product;
