import React from 'react';
import '../styles/submit.css';
const Submit = () => {
  return (
    <div className='submit'>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type='email' name='' id='' />
        <input type='submit' value='Send Selected Results' />
      </form>
    </div>
  );
};

export default Submit;
