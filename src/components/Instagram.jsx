import React from 'react';
import Card from './Card';
import '../assets/styles/components/Instagram.scss';

const Instagram = () => {
  return (
    <a href='https://www.instagram.com/ecstasy_ring/' className='a-instagram'>
      <Card className='div-instagram bg-white-transparent mx-8 mt-6 p-4 border-2 text-center'>
        <p className='p-instagram' />
      </Card>
    </a>
  );
};

export default Instagram;
