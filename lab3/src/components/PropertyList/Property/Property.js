import React from 'react';
import pic from "./house4.jpg";
import './Property.css';

function Property({ image, price, bedrooms, description, address }) {
  return (
    <div>
      <img src={pic} alt="property" className="property-image" />
      <p>{price} zł</p>
      <p>{bedrooms} pokoje</p>
      <p>{description}</p>
      <p>{address}</p>
    </div>
  );
}

export default Property;
