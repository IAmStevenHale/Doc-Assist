import { useState } from 'react';
import ReactDOM from 'react-dom/client';

function PatientNotes() {
  const [name, setName] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log(name);
  }

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label>
        Enter your name:
        <input type='text' onChange={(e) => handleChange(e)} />
        <input type='submit' onClick={(e) => handleSubmit(e)} />
      </label>
    </form>
  );
}
export default PatientNotes;
