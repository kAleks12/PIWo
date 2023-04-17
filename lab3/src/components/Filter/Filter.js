import {useNavigate} from "react-router-dom";
import React from "react";

function Filter() {
    const navigate = useNavigate();

    return (
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
    );
}

export default Filter;
