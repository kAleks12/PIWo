import React from 'react';
import Listing from './Listing/Listing';

function ListingsList({ properties }) {
  let counter = 1;

  return (
    <div>
      {properties.map((property) => (
        <Listing key={counter++} {...property} />
      ))}
    </div>
  );
}

export default ListingsList;
