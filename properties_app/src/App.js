import React, {useState, useEffect} from 'react';
import {Route, Routes} from 'react-router';
import axios from 'axios';

import './App.css';

import ListingsList from './components/ListingsView/ListingsList';
import PropertyForm from './components/AddingForm/AddListing';
import Navbar from './components/Navbar/Navbar';
import FilterBar from './components/FilterBar/FilterBar';
import Login from "./components/LoginMethod/Login";
import LoginForm from "./components/LoginPage/LoginForm";
import RegisterForm from "./components/Register/RegisterForm";


function App() {
    const propertiesData = []

    const [sortBy, setSortBy] = useState('');
    const [priceFilter, setPriceFilter] = useState('');
    const [roomsFilter, setRoomsFilter] = useState('');
    const [cityFilter, setCityFilter] = useState('');
    const [properties, setProperties] = useState(propertiesData);

    useEffect(() => {
        axios.get('/init_data/properties.json')
            .then(response => {
                setProperties(response.data);
            })
            .catch(error => {
                console.error('Error occurred while loading properties: ', error);
            });
    }, []);

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
                <Route path="/login" element={<Login/>}/>

                <Route exact path="/" element={
                    <>
                        <Navbar/>
                        <FilterBar
                            sortBy={sortBy}
                            handleSortChange={handleSortChange}
                            priceFilter={priceFilter}
                            handlePriceFilterChange={handlePriceFilterChange}
                            roomsFilter={roomsFilter}
                            handleRoomsFilterChange={handleRoomsFilterChange}
                            cityFilter={cityFilter}
                            handleCityFilterChange={handleCityFilterChange}
                        />
                        <ListingsList properties={filteredProperties}/>
                    </>
                }/>

                <Route path="/add" element={
                    <PropertyForm handler={handleNewPropertySubmit}/>
                }/>

                <Route path="/login-form" element={
                    <LoginForm/>
                }/>

                <Route path="/register-form" element={
                    <RegisterForm/>
                }/>
            </Routes>
        </div>
    );
}

export default App;