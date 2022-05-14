import './styles/app.css';
import Navbar from './components/Navbar';
import React from 'react';
import Search from './components/Search';
import Ads from './components/Ads';
import DocAssist from './components/DocAssist';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Search />
      <DocAssist />
      <Ads />
    </div>
  );
}

export default App;
