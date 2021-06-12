import { useEffect, useState } from 'react';

import axios from 'axios';

import SearchBox from './components/SearchBox';
import CountryDetails from './components/CountryDetails';

const App = () => {
  const [search, setSearch] = useState('');
  const [countryList, setCountryList] = useState([]);
  const [errorStatus, setErrorStatus] = useState('');

  const onGetDataError = (error) => {
    setErrorStatus(error);
  };

  const onGotData = (response) => {
    setCountryList(response.data);
  };

  const onSearchChanged = (value) => {
    setSearch(value);
    if (value === '') {
      // Reset all app state
      setCountryList([]);
      setErrorStatus('');
    }
  };

  useEffect(() => {
    if (search === '')
      return;

    axios
        .get('https://restcountries.eu/rest/v2/name/' + search)
        .then(response => onGotData(response))
        .then(() => {
          setErrorStatus('');
        })
        .catch(onGetDataError);
  }, [search]);

  return (
    <div className="App">
      <SearchBox setSearchTerm={onSearchChanged} />

      <br />

      <CountryDetails countries={countryList} error={errorStatus} />
    </div>
  );
}

export default App;
