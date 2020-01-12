import React from 'react';
import HomeHeader from '../components/HomeHeader';
import HomeBody from '../components/HomeBody';

const Home = () => {
  return (
    <div className='Home animated fadeIn faster'>
      <HomeHeader />
      <HomeBody />
    </div>
  );
};

export default Home;
