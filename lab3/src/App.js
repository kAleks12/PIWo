import React, {useEffect, useState} from 'react';
import PropertyList from './components/PropertyList/PropertyList';
import PropertyForm from './components/PropertyForm/PropertyForm';
import Navbar from './components/Navbar/Navbar';
import propertiesData from './data/properties.json';
import { Route, Routes } from 'react-router';
import './App.css';

function App() {
  const [sortBy, setSortBy] = useState('');
  const [priceFilter, setPriceFilter] = useState('');
  const [roomsFilter, setRoomsFilter] = useState('');
  const [cityFilter, setCityFilter] = useState('');
  const [properties, setProperties] = useState(propertiesData);

  useEffect(() => {
    console.log(properties)
  }, [properties.length])

  const handleNewPropertySubmit = (newProperty) => {
    setProperties([...properties, newProperty]);
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const handlePriceFilterChange = (event) => {
    setPriceFilter(event.target.value);
  };

  const handleRoomsFilterChange = (event) => {
    setRoomsFilter(event.target.value);
  };

  const handleCityFilterChange = (event) => {
    setCityFilter(event.target.value);
  };

  const filteredProperties = properties.filter((property) => {
    if (priceFilter && property.price !== parseInt(priceFilter)) {
      return false;
    }

    if (roomsFilter && property.bedrooms !== parseInt(roomsFilter)) {
      return false;
    }

    return !(cityFilter && !property.city.toLowerCase().includes(cityFilter.toLowerCase()));

  }).sort((a, b) => {
    switch (sortBy) {
      case 'asc':
        return a.price - b.price;
      case 'desc':
        return b.price - a.price;
      default:
        return 0;
    }
  });


  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={ 
          <>
          <Navbar />
          <div>
            <form className="filter-form">
              <label className="form-label">
                Sort by price:
                <select value={sortBy} onChange={handleSortChange}>
                  <option value="">---</option>
                  <option value="asc">Ascending</option>
                  <option value="desc">Descending</option>
                </select>
              </label>
              <label className="form-label">
                Filter by price:
                <input type="number" value={priceFilter} min="0" onChange={handlePriceFilterChange} />
              </label>
              <label className="form-label">
                Filter by number of rooms:
                <input type="number" value={roomsFilter} min="0" onChange={handleRoomsFilterChange} />
              </label>
              <label className="form-label">
                Filter by city:
                <input type="text" value={cityFilter} onChange={handleCityFilterChange} />
              </label>
            </form>
          </div>
          <PropertyList properties={filteredProperties} />
          </>
        }/> 
        <Route path="/add" element={
          <PropertyForm handler={handleNewPropertySubmit}/>
        }/>
      </Routes>
    </div>
  );
}

export default App;
