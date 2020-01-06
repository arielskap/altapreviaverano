import React from 'react';
import HomeHeader from '../components/childrens/HomeHeader';
import HomeBody from '../components/childrens/HomeBody';

const Home = () => {
  return (
    <div className='Home animated fadeIn faster'>
      <HomeHeader />
      <HomeBody />
    </div>
  );
};

export default Home;
