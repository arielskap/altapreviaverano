import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Tippy from '@tippy.js/react';
import '../assets/styles/components/VerdadRetoBodySelect.scss';
import fort from '../assets/static/fort.gif';
import fortCielo from '../assets/static/fortCielo.gif';
import { animateCSS } from '../funciones';

const VerdadRetoBodySelect = () => {
  const [visible, setVisible] = useState(false);
  const history = useHistory();
  const juego = localStorage.getItem('verdadOretoJuego');
  const cant = localStorage.getItem('verdadOretoCantidad');

  useEffect(() => {
    return () => {
      setVisible(false);
    };
  }, []);

  return (
    <div className='VerdadRetoBodySelect animated fadeIn'>
      <div className='mt-6 px-4'>
        <button
          type='button'
          className='VerdadRetoBody__suave-button text-lg bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded w-full my-2'
          onClick={() => {
            animateCSS('.VerdadRetoBodySelect', 'fadeOut faster', () => {
              localStorage.setItem('verdadOretoJuego', juego);
              localStorage.setItem('verdadOretoCantidad', cant);
              history.replace('/games/verdadReto/juego?verdadReto=verdad');
            });
          }}
        >
          Verdad
        </button>
        <button
          type='button'
          className='VerdadRetoBody__picante-button text-lg bg-red-500 hover:bg-red-700 text-black font-bold py-2 px-4 border border-red-700 rounded w-full my-2'
          onClick={() => {
            animateCSS('.VerdadRetoBodySelect', 'fadeOut faster', () => {
              localStorage.setItem('verdadOretoJuego', juego);
              localStorage.setItem('verdadOretoCantidad', cant);
              history.replace('/games/verdadReto/juego?verdadReto=reto');
            });
          }}
        >
          Reto
        </button>
      </div>
      <div className='w-full h-48 mt-5'>
        { juego === 'Picante' ? (
          <Tippy content='MIAMEEEEEEEEEEEEEE ahre maradona' visible={visible}>
            <img className='object-contain w-full h-full' src={fort} alt='Fort' onClick={() => setVisible(!visible)} />
          </Tippy>
        ) : (
          <Tippy content='F' visible={visible}>
            <img className='object-contain w-full h-full' src={fortCielo} alt='MAIAMEEE' onClick={() => setVisible(!visible)} />
          </Tippy>
        )}
      </div>
    </div>
  );
};

export default VerdadRetoBodySelect;
