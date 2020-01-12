import React from 'react';
import ReactDOM from 'react-dom';
import VerdadRetoJuego from './VerdadRetoJuego';
import '../assets/styles/components/VerdadRetoBodySelect.scss';
import fort from '../assets/static/fort.gif';
import fortCielo from '../assets/static/fortCielo.gif';
import { animateCSS, vibrar } from '../funciones';

class VerdadRetoBodySelect extends React.Component {
  render() {
    const { juego } = this.props;
    const { element } = this.props;
    const { cant } = this.props;
    const { changeStateVerdadReto } = this.props;
    return (
      <div className='VerdadRetoBodySelect animated fadeIn'>
        <div className='mt-6 px-4'>
          <button
            type='button'
            className='VerdadRetoBody__suave-button text-lg bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded w-full my-2'
            onClick={() => {
              vibrar();
              animateCSS('.VerdadRetoBodySelect', 'fadeOut faster', () => {
                ReactDOM.render(
                  <VerdadRetoJuego juego={juego} verdadReto='verdad' cant={cant} changeStateVerdadReto={changeStateVerdadReto} />, document.querySelector(element),
                );
              });
            }}
          >
            Verdad
          </button>
          <button
            type='button'
            className='VerdadRetoBody__picante-button text-lg bg-red-500 hover:bg-red-700 text-black font-bold py-2 px-4 border border-red-700 rounded w-full my-2'
            onClick={() => {
              vibrar();
              animateCSS('.VerdadRetoBodySelect', 'fadeOut faster', () => {
                ReactDOM.render(
                  <VerdadRetoJuego juego={juego} verdadReto='reto' cant={cant} changeStateVerdadReto={changeStateVerdadReto} />, document.querySelector(element),
                );
              });
            }}
          >
            Reto
          </button>
        </div>
        <div className='w-full h-48'>
          { juego === 'Picante' ?
            <img className='object-contain w-full h-full' src={fort} alt='Fort' /> :
            <img className='object-contain w-full h-full' src={fortCielo} alt='MAIAMEEE' />}
        </div>
      </div>
    );
  }
}

export default VerdadRetoBodySelect;
