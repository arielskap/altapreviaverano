import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/components/HomeHeader.scss';
import information from '../../assets/static/information.png';

class HomeHeader extends React.Component {
  render() {
    return (
      <section className='HomeHeader'>
        <div className='flex justify-end px-4 pt-4'>
          <Link to='/acercaDe' className='HomeHeader__information-button rounded-full h-12 w-12 bg-aqua-transparent flex justify-center'>
            <img className='fill-current h-full w-full' src={information} alt='Informacion' />
          </Link>
        </div>
      </section>
    );
  }
}

export default HomeHeader;
