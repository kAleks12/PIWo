import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddListing.css';

function AddProperty({handler}) {
  const navigate = useNavigate();
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    if (!city || !address || !bedrooms || !price || !description) {
      return;
    }

    const newProperty = {
      address: address,
      city: city,
      bedrooms: parseInt(bedrooms),
      price: parseInt(price),
      description: description
    };

    handler(newProperty);
    navigate('/');
  };

  return (
    <div>
      <h1>Add new property</h1>
      <form className="property-form" onSubmit={handleSubmit}>
        <label className="label-form">
          City:
          <input type="text" value={city} onChange={(event) => setCity(event.target.value)} />
        </label>
        <label className="label-form">
          Address:
          <input type="text" value={address} onChange={(event) => setAddress(event.target.value)} />
        </label>
        <label className="label-form">
          Number of bedrooms:
          <input type="number" value={bedrooms} min="0" onChange={(event) => setBedrooms(event.target.value)} />
        </label>
        <label className="label-form">
          Price:
          <input type="number" value={price} min="0" onChange={(event) => setPrice(event.target.value)} />
        </label>
        <label className="label-form">
          Description:
          <textarea value={description} onChange={(event) => setDescription(event.target.value)} />
        </label>
        <button type="submit" className="btn btn-outline-dark" onClick={handleSubmit}>Add</button>
      </form>
    </div>
  );
}

export default AddProperty;
