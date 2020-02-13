import React, { useEffect } from 'react';
import Header from '../components/Header';
import '../assets/styles/components/BotellitaJuego.scss';
//import vodka from '../assets/static/vodka.png';
import SpinBottle from '../components/SpinBottle';

const Botellita = () => {

  useEffect(() => {
    document.querySelector('.App').style.backgroundColor = '#4299e1';
  });

  return (
    <div className='Botellita animated fadeIn faster min-h-screen'>
      <Header title='Instrucciones' button='eeesaaaaaaa'>
        Apreta la botella o el boton ( Si si ya se todavía no podes girarla ) y al que le toque sale patererete, na mentira, se besan, en caso de no querer toman un trago
        <br />
        <span role='img' aria-label='Corazon'>❤️️</span>
      </Header>
      <div className='LaBotellita-Body mt-2'>
        <div className='LaBotellita-header mx-4'>
          <h1 className='LaBotellita-h1 text-3xl text-center p-1 rounded-lg text-black'>La Botellita</h1>
        </div>
        <div className='LaBotellita-body pt-4 h-full'>
          <SpinBottle className='w-full h-full flex justify-center' />
        </div>
      </div>
    </div>
  );
};

export default Botellita;
