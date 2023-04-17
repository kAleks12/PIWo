import React from 'react';

import pic from "./house4.jpg";
import './Listing.css';
import {BiMoneyWithdraw} from "react-icons/bi";
import {BsGeoAltFill, BsHousesFill} from "react-icons/bs";
import {MdOutlineDescription} from "react-icons/md";

function Listing({ price, bedrooms, description, address, city }) {
  return (
    <div className="listing-container">
      <img src={pic} alt="property" className="property-image" />
      <div className="listing-details">
          <p>
              <BiMoneyWithdraw /> {price} zł
          </p>
          <p>
              <BsHousesFill /> {bedrooms}
          </p>
          <p>
              <BsGeoAltFill/> {address} {city}
          </p>
          <span> <MdOutlineDescription/> {description}</span>
      </div>
    </div>
  );
}

export default Listing;
