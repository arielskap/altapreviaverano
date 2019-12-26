import React from 'react';
import AcercaDe from '../AcercaDe';
import '../../assets/styles/components/HomeHeader.scss';
import information from '../../assets/static/information.png';

class HomeHeader extends React.Component {
  render() {
    const { changeState } = this.props;
    return (
      <section className='HomeHeader'>
        <div className='flex justify-end px-4 pt-4'>
          <button className='HomeHeader__information-button rounded-full h-12 w-12 bg-aqua-transparent flex justify-center' type='button' onClick={() => { changeState(<AcercaDe />); }}>
            <img className='fill-current h-full w-full' src={information} alt='Informacion' />
          </button>
        </div>
      </section>
    );
  }
}

export default HomeHeader;
