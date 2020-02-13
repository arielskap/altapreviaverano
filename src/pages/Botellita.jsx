import React, { useEffect } from 'react';
import Header from '../components/Header';
import '../assets/styles/components/Botellita.scss';
import SpinBottle from '../components/SpinBottle';

const Botellita = () => {

  useEffect(() => {
    document.querySelector('.App').style.backgroundColor = '#4299e1';
  });

  return (
    <div className='Botellita animated fadeIn faster min-h-screen'>
      <Header className='min-h-10vh' title='Instrucciones' button='eeesaaaaaaa'>
        ¡¡¡Gira la botella!!! y al que le toque sale patererete, na mentira, se besan, en caso de no querer toman un trago
        <br />
        <span role='img' aria-label='Corazon'>❤️️</span>
      </Header>
      <div className='LaBotellita-Body pt-2 min-h-90vh'>
        <div className='LaBotellita-header mx-4 min-h-10vh'>
          <h1 className='LaBotellita-h1 text-3xl text-center p-1 rounded-lg text-black'>La Botellita</h1>
        </div>
        <div className='LaBotellita-body w-screen'>
          <SpinBottle className='w-full  flex items-center justify-center pt-4 pb-12 min-h-70vh max-w-full' />
        </div>
      </div>
    </div>
  );
};

export default Botellita;
