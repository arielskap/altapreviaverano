import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import { animateCSS, setCookie, mostrarInstruc } from '../funciones';
import '../assets/styles/components/VerdadRetoOpcion.scss';

const VerdadRetoOpcion = () => {

  const history = useHistory();

  const goVerdadReto = (juego) => {
    const e = document.querySelector('.VerdadRetoOpcionBody-select');
    const cant = e.options[e.selectedIndex].value;
    setCookie('verdadOretoJuego', juego);
    setCookie('verdadOretoCantidad', cant);
    history.push('/games/verdadReto/select');
  };

  useEffect(() => {
    document.querySelector('.App').style.backgroundColor = 'black';
    if (document.querySelector('.tippy-popper')) {
      document.querySelector('.tippy-popper').remove();
    }
    mostrarInstruc('verdadOReto');
  });

  return (
    <section className='VerdadRetoOpcion animated fadeIn faster pb-4'>
      <Header title='Instrucciones' button='bueno, tampoco me cuentes tu vida, BRO'>
        Si se elige verdad se debera responder la pregunta, en caso de que sea reto debera hacer la prenda. Si elige no hacerla al presionar 'No lo hizo' le aparecera la opcion contraría y encima 'picante'
        <br />
        <span role='img' aria-label='Corazon'>❤️️</span>
      </Header>
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
                animateCSS('.VerdadRetoOpcion', 'fadeOut', () => {
                  goVerdadReto('Suave');
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
                animateCSS('.VerdadRetoOpcion', 'fadeOut', () => {
                  goVerdadReto('Picante');
                });
              }}
            >
              Picante
            </button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default VerdadRetoOpcion;
