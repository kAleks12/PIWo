import React from 'react';
import Listing from './Listing/Listing';
import './ListingsList.css'

function ListingsList({ properties }) {
  let counter = 1;

  return (
    <div className="list-container">
      <div className="list">
        {properties.map((property) => (
            <Listing key={counter++} {...property} />
        ))}
      </div>
    </div>
  );
}

export default ListingsList;
