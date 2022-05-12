import React from 'react';
import '../styles/ads.css';
import AdSense from 'react-adsense';

const Ads = () => {
  return (
    <div className='ads'>
      Google AdSense
      {/* <AdSense.Google
        client='ca-pub-1034524975771842'
        slot='3468851388'
        style={{ display: 'block' }}
        format='auto'
        responsive='true'
        layoutKey='-gw-1+2a-9x+5c'
      /> */}
    </div>
  );
};

export default Ads;
