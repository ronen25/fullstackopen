import React from 'react';

const SearchFilter = ({ filter, onFilterChanged }) => {
    return (
        <div>
            filter shown with
            <input id="inputFilter" onChange={onFilterChanged} value={filter} />
        </div>
    );
};

export default SearchFilter;
