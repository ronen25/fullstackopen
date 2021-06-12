import CountryOverview from "./CountryOverview";

const CountryDetails = ({ countries, error }) => {
    // Error requires an error message to be rendered
    if (error !== '') {
        return <p style={{ background: 'maroon', color: 'white' }}> error </p>;
    }

    // If name is empty then render instructions
    if (countries.length === 0) {
        return (
            <div>
                <p>Enter a country name to start.</p>
            </div>
        );
    }
    else if (countries.length === 1) {
        return <CountryOverview details={countries[0]} />;
    }
    else if (countries.length <= 10) {
        // Render a list of the countries names
        let countries_list = countries.map((element, idx) => (<li key={idx}>{ element.name }</li>))
        return (
            <ul>
            { countries_list }
            </ul>
        );
    }
    else {
        return (
            <div>
                <p>Found { countries.length } results, please narrow the search.</p>
            </div>
        );
    }
};

export default CountryDetails;