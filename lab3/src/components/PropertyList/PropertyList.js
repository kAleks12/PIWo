import React from 'react';
import Property from './Property/Property';

function PropertyList({ properties }) {
  let counter = 1;

  return (
    <div>
      {properties.map((property) => (
        <Property key={counter++} {...property} />
      ))}
    </div>
  );
}

export default PropertyList;
