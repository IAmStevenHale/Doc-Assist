import '../styles/search.css';
import MBSItem from './MBSItem';
import MBSData from '.././MBS_JSON_DATA/MBS-JSON-20220701.json';
import React, { useEffect, useState } from 'react';

const Search = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    setCoins(MBSData.MBS_XML.Data);
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredMBS = coins.filter((coin) =>
    coin.Description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className='search'>
        <div className='mbsSearch'>
          <h2 className='mbsText'>Search MBS Manually</h2>
          <form>
            <input
              type='text'
              placeholder='Enter Text Here'
              className='coinInput'
              onChange={handleChange}
            />
          </form>
        </div>
        <ul>
          {filteredMBS.slice(0, 100).map((item) => (
            <li>
              <MBSItem
                key={item.ItemNum}
                ItemNum={item.ItemNum}
                Description={item.Description}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Search;
