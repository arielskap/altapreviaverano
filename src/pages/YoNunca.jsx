import React, { useEffect } from 'react';
import Header from '../components/Header';
import YoNuncaJuego from '../components/YoNuncaJuego';

const YoNunca = () => {
  useEffect(() => {
    document.querySelector('.App').style.backgroundColor = 'pink';
  });
  return (
    <section className='YoNunca animated fadeIn faster'>
      <Header />
      <YoNuncaJuego />
    </section>
  );

};

export default YoNunca;
