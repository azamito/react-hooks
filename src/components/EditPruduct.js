import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

function EditProduct() {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    getProductById();
  }, []);

  const getProductById = async (id) => {
    const response = await fetch(`http://localhost:8080/product/${id}`);
    const data = await response.json();
    setTitle(data.title);
    setPrice(data.price);
  }


  const updateProduct = async (e) => {
    e.preventDefault();
    const product = { title, price };
    await fetch(`http://localhost:8080/product/${id}`, {
      method: "PUT",
      body: JSON.stringify(product),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    history.push('/');
  }

  return (
    <div className="container">
      <form onSubmit={updateProduct}>
        <div className="field">
          <label className="label">Title</label>
          <div className="control">
            <input className="input" value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Title" />
          </div>
        </div>

        <div className="field">
          <label className="label">Price</label>
          <div className="control">
            <input className="input" value={price} onChange={(e) => setPrice(e.target.value)} type="number" placeholder="Price" />
          </div>
        </div>

        <div className="field">
          <div className="control">
            <button className="button is-primary" type="submit">Update</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default EditProduct

