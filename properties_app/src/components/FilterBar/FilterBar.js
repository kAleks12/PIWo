import React from "react";
import "./FilterBar.css"

function FilterBar(props) {
    const {
        sortBy, handleSortChange,
        priceFilter, handlePriceFilterChange,
        roomsFilter, handleRoomsFilterChange,
        cityFilter, handleCityFilterChange
    } = props;

    return (
        <div className="filter-bar-container">
            <div className="filter-bar">
                <label className="filter-label">
                    Sort by price:
                    <select value={sortBy} onChange={handleSortChange}>
                        <option value="">---</option>
                        <option value="asc">Ascending</option>
                        <option value="desc">Descending</option>
                    </select>
                </label>

                <label className="filter-label">
                    Filter by price:
                    <input type="number" value={priceFilter} min="0" onChange={handlePriceFilterChange}/>
                </label>

                <label className="filter-label">
                    Filter by number of rooms:
                    <input type="number" value={roomsFilter} min="0" onChange={handleRoomsFilterChange}/>
                </label>

                <label className="filter-label">
                    Filter by city:
                    <input type="text" value={cityFilter} onChange={handleCityFilterChange}/>
                </label>
            </div>
        </div>
    );
}

export default FilterBar;
