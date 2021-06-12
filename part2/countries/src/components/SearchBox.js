const SearchBox = ({ setSearchTerm }) => {
    const onSearchChanged = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div>
            <span>Find countries: </span>
            <input id='input_country_name' type='text' onChange={onSearchChanged}></input>
        </div>
    );
};

export default SearchBox;