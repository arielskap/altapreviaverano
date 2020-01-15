import React, { useEffect } from 'react';
import Header from '../components/Header';
import BotellitaJuego from '../components/BotellitaJuego';

const Botellita = () => {
  useEffect(() => {
    document.querySelector('.App').style.backgroundColor = '#4299e1';
  });

  return (
    <div className='Botellita animated fadeIn faster'>
      <Header />
      <BotellitaJuego />
    </div>
  );

};

export default Botellita;
