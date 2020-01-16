import React from 'react';
import Tippy from '@tippy.js/react';
import { Link } from 'react-router-dom';
import beer from '../assets/static/beer.png';

const Header = () => {
  return (
    <div className='VerdadRetoOpcionHeader pt-4 w-full flex justify-end'>
      <Tippy content='¡Regalamos cerveza!' placement='left' visible={true}>
        <Link to='/addGame' className='rounded-full h-12 w-12 mr-4'>
          <img className='object-contain w-full h-full' src={beer} alt='beer' />
        </Link>
      </Tippy>
    </div>
  );
};

export default Header;
