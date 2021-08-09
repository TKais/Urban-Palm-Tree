import { useState, useEffect } from 'react';
import TextInput from './TextInput';
import Select from './Select';
import Error from './Error';
import Loader from './Loader';

function Form() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState(0);
  const [options, setOptions] = useState([]);
  const [isLoading, setLoadingState] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const url = 'http://localhost:3000/api/options/';
    setLoadingState(true);
    fetch(url)
      .then(res => res.json())
      .then(res => setOptions(JSON.parse(res)))
      .then(() => setLoadingState(false))
      .catch(err => setErrorMessage(err.message));
  }, []);

  function handleSubmit(evt) {
    evt.preventDefault();
    const data = { firstName, lastName, age };
    const url = 'http://localhost:3000/api/form/';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }

    fetch(url, options)
      .then(res => res.json())
      .then(res => console.log(res));
  }

  return (
    <>
      { isLoading ? <Loader loadingText="Loading..." /> :
        <form onSubmit={handleSubmit}>
          <TextInput type="text" placeholder="First Name" handleChange={evt => setFirstName(evt.target.value)} />
          <TextInput type= "text" placeholder="Last Name" handleChange={evt => setLastName(evt.target.value)} />
          { errorMessage ?
            <Error errorMessage={errorMessage} /> :
            <Select handleChange={evt => setAge(evt.target.value)} options={options} />
          }
          <button type="submit">Submit</button>
        </form>
      }
    </>
  );
}

export default Form;
