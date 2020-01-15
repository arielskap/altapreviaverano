import React, { useEffect } from 'react';
import Header from '../components/Header';
import VerdadRetoOpcionBody from '../components/VerdadRetoOpcionBody';

const VerdadRetoOpcion = () => {
  useEffect(() => {
    document.querySelector('.App').style.backgroundColor = 'black';
  });
  return (
    <div className='VerdadRetoOpcion animated fadeIn faster'>
      <Header />
      <VerdadRetoOpcionBody />
    </div>
  );
};

export default VerdadRetoOpcion;
