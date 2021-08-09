import { useState, useEffect } from 'react';
import debounce from '../utils/debounce';
import Error from './Error';

function Searchbox(props) {
  const [searchOptions, setSearchOptions] = useState([]);
  const [errorMessage, setError] = useState('');

  function findSearchResults(e) {
    const searchTerm = e.target.value;
    console.log('SEARCH TERM------>', searchTerm);

    const url = `http://localhost:3000/api/search?searchTerm=${searchTerm}`;
    fetch(url)
      .then(res => res.json())
      .then(res => setSearchOptions(res))
      .catch(e => setError(e.message));
  }

  return (
    <div>
      <input onChange={e => debounce.call(this, findSearchResults.bind(this, e), 500)} />
      <ul>
        {searchOptions.map(option => (
          <li key={option.id}>{option.label}</li>
        ))}
      </ul>
    </div>
  );
}

export default Searchbox;
