import React from 'react';
import VerdadReto from '../VerdadReto';
import { animateCSS } from '../../funciones';
import '../../assets/styles/components/VerdadRetoOpcionBody.scss';

class VerdadRetoOpcionBody extends React.Component {

  goVerdadReto(juego) {
    const { changeState } = this.props;
    const e = document.querySelector('.VerdadRetoOpcionBody-select');
    const cant = e.options[e.selectedIndex].value;
    changeState(<VerdadReto juego={juego} cant={cant} changeState={changeState} />);
  }

  render() {
    return (
      <section className='VerdadRetoOpcionBody'>
        <div className='VerdadRetoOpcionBody-header mb-4'>
          <h1 className='text-center text-4xl mt-4'>Verdad O Reto</h1>
        </div>
        <div className='VerdadRetoOpcionBody__body'>
          <div className='VerdadRetoOpcionBody__body-option text-center border-blue-600 border-2 mx-4 flex flex-col px-4 py-4'>
            <p>Cantidad de turno para que se vuelva Picante:</p>
            <div>
              <select defaultValue='∞' className='VerdadRetoOpcionBody-select border-red-600 border-2 w-full rounded mt-4'>
                <option value='5'>5</option>
                <option value='10'>10</option>
                <option value='25'>25</option>
                <option value='50'>50</option>
                <option value='∞'>∞</option>
              </select>
            </div>
            <button
              type='button'
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mt-4'
              onClick={() => animateCSS('.VerdadRetoOpcion', 'fadeOut', () => {
                this.goVerdadReto('Suave');
              })}
            >
              Suave
            </button>
          </div>
          <div className='mx-4'>
            <button
              type='button'
              className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded mt-4 w-full'
              onClick={() => animateCSS('.VerdadRetoOpcion', 'fadeOut', () => {
                this.goVerdadReto('Picante');
              })}
            >
              Picante
            </button>
          </div>
        </div>
      </section>
    );
  }
}
export default VerdadRetoOpcionBody;
