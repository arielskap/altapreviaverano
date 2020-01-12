import React from 'react';
import { useHistory } from 'react-router-dom';
import { animateCSS, vibrar } from '../funciones';
import '../assets/styles/components/VerdadRetoOpcionBody.scss';

function goVerdadReto(history, juego) {
  const e = document.querySelector('.VerdadRetoOpcionBody-select');
  const cant = e.options[e.selectedIndex].value;
  history.push(`/verdadReto?juego=${juego}&cant=${cant}`);
}

function VerdadRetoOpcionBody() {
  const history = useHistory();
  console.log(history);
  return (
    <section className='VerdadRetoOpcionBody'>
      <div className='VerdadRetoOpcionBody-header mb-4'>
        <h1 className='VerdadRetoOpcionBody-h1 text-center text-4xl mt-4 mx-4 rounded'>Verdad O Reto</h1>
      </div>
      <div className='VerdadRetoOpcionBody__body'>
        <div className='VerdadRetoOpcionBody__body-option text-center border-blue-600 border-2 mx-4 flex flex-col px-4 py-4 rounded-lg'>
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
            className='VerdadRetoOpcionBody__suave hover:bg-green-700 text-white font-bold py-2 px-4 border border-green-700 rounded mt-4'
            onClick={() => {
              vibrar();
              animateCSS('.VerdadRetoOpcion', 'fadeOut', () => {
                goVerdadReto(history, 'Suave');
              });
            }}
          >
              Suave
          </button>
        </div>
        <div className='mx-4'>
          <button
            type='button'
            className='VerdadRetoOpcionBody__picante hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded mt-4 w-full'
            onClick={() => {
              vibrar();
              animateCSS('.VerdadRetoOpcion', 'fadeOut', () => {
                goVerdadReto(history, 'Picante');
              });
            }}
          >
              Picante
          </button>
        </div>
      </div>
    </section>
  );
};
export default VerdadRetoOpcionBody;
