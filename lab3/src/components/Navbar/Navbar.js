import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const navigate = useNavigate();

  const handleAddNewClick = () => {
    navigate('/add');
  };

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">Properties for rent</a>
        <div className="button-container">
          <button className="btn btn-outline-light me-2">Contact</button>
          <button className="btn btn-outline-light" onClick={handleAddNewClick}>Add new</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
