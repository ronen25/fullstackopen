import CountryOverview from "./CountryOverview";

const CountryDetails = ({ countries, error }) => {
    const onShowButtonClicked = (event) => {
        const index = event.target.id.split('_')[2];
        const item_id = 'country_details_' + index;
        const element = document.getElementById(item_id);

        // Toggle display
        if (element.style.display === 'inherit') {
            element.style.display = 'none';
        }
        else {
            element.style.display = 'inherit';
        }
    };

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
        return <CountryOverview details={ countries[0] } />;
    }
    else if (countries.length <= 10) {
        // Render a list of the countries names
        let countries_list = countries.map((country) => (
            <li key={country.numericCode}>
                { country.name } <span>&nbsp;&nbsp;</span>
                <button id={ 'btn_show_' + country.numericCode } type='button'
                        onClick={onShowButtonClicked}>Show</button>

                <CountryOverview details={country} show={false} />
            </li>
        ));

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