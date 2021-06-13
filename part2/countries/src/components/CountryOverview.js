import './css/CountryOverview.css';

const CountryOverview = ({ details }) => {
    // Format population and languages
    const population = new Intl.NumberFormat().format(details.population);
    const languages_list = details.languages.map(lang => <li key={ lang.iso639_1 }> { lang.name }</li>);

    return (
        <div class="country_overview">
            <img src={ details.flag } alt='Country flag' align='top'></img>

            <div id="details">
                <h2>{ details.name }</h2>

                <p>Capital: { details.capital } </p>
                <p>Population: { population }</p>

                <h3>Languages</h3>
                <ul> { languages_list } </ul>
            </div>
        </div>
    );
};

export default CountryOverview;