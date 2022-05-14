import React from 'react';
import '../styles/navbar.css';
import '../styles/toggle.css';

function Navbar({ handleShow }) {
  return (
    <div className='navbar'>
      <div className='navTitle'>
        <h1>Doc Assist</h1>
      </div>
      <div className='darkLightMode'>
        <div className='container'>
          <div className='daynight'>
            <label htmlFor='checkbox'>
              <input type='checkbox' name='' id='checkbox' />
              <div className='toggle'>
                <div className='cloud'></div>
                <div className='star'></div>
                <div className='sea'></div>
                <div className='mountains'></div>
              </div>
            </label>
          </div>
        </div>
      </div>
      <div className='hideShowSearch'>
        <button onClick={handleShow}>Hide Manual Search</button>
      </div>
    </div>
  );
}

export default Navbar;
