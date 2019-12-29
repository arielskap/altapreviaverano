import React from 'react';
import '../../assets/styles/components/BotellitaJuego.scss';
import vodka from '../../assets/static/vodka.png';
import { vibrar } from '../../funciones';

class BotellitaJuego extends React.Component {
    componentDidMount = () => {
      document.querySelector('.LaBotellita-button').addEventListener('click', this.randomBottle);
    }

    randomBottle = () => {
      vibrar();
      const degrees = Math.floor((Math.random() * 4000) + 1);
      document.querySelector('.pSpin').classList.replace('block', 'hidden');
      document.querySelector('.spin').style.transform = `rotate(${degrees}deg)`;
      document.querySelector('.LaBotellita-button').removeEventListener('click', this.randomBottle);
      setTimeout(() => {
        document.querySelector('.LaBotellita-button').addEventListener('click', this.randomBottle);
        document.querySelector('.pSpin').classList.replace('hidden', 'block');
      }, 3000);
    }

    render() {
      return (
        <div className='LaBotellita-Body mt-2'>
          <div className='LaBotellita-header mx-4'>
            <h1 className='LaBotellita-h1 text-3xl text-center p-1 rounded-lg text-black'>La Botellita</h1>
          </div>
          <div className='LaBotellita-body mt-8 mx-8'>
            <div className='flex justify-center'>
              <button className='LaBotellita-button' type='button'>
                <img src={vodka} className='object-contain animated fadeIn spin' alt='Botellita' />
              </button>
            </div>
            <div className='flex justify-center fixed bottom-0 w-full left-0'>
              <button type='button' className='pSpin block text-xl p-3 w-full text-white' onClick={() => { this.randomBottle(); }}>¡Touch!</button>
            </div>
          </div>
        </div>
      );
    }
}

export default BotellitaJuego;
