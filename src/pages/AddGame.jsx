import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';
import Form from '../components/Form';
import { animateCSS } from '../funciones';
import Close from '../components/Close';

const AddGame = () => {
  const [visible, setVisible] = useState(false);
  const history = useHistory();
  const data = [{
    id: 1,
    juego: '~Juego~',
    request: '',
  }, {
    id: 2,
    juego: 'Verdad o Reto',
    request: 'truthOrDare/create',
    extraOptions: true,
  }, {
    id: 3,
    juego: 'Yo Nunca',
    request: 'iNever/create',
  }, {
    id: 4,
    juego: 'Más Propenso a',
    request: 'moreProne/create',
  }];
  const optionChoise = 'truthOrDare/create';
  const extraOptions = [{
    id: 0,
    options: [{
      id: 0,
      value: 'truth',
      children: 'Verdad',
    },
    {
      id: 1,
      value: 'dare',
      children: 'Reto',
    }],
  }, {
    id: 1,
    options: [{
      id: 0,
      value: false,
      children: 'Suave',
    },
    {
      id: 1,
      value: true,
      children: 'Picante',
    }],
  }];
  const options = [];
  const requests = [];
  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    options[i] = element.juego;
    requests[i] = element.request;
  }
  let closedItems = localStorage.getItem('closed') || [];
  if (typeof closedItems === 'string') {
    closedItems = closedItems.split('|');
  }
  return (
    <section className='AddGame pt-6 animated fadeIn mx-4 pb-2'>
      <div className='flex justify-center'>
        <Tippy content='ahh re open inglish' visible={visible}>
          <h1 id='titulo' onClick={() => setVisible(!visible)} className=' text-center text-white bg-black-transparent py-1 px-3 text-xl rounded'>¡Add Games!</h1>
        </Tippy>
      </div>
      { !closedItems.find((element) => element === '.addGame-info') && (
        <div className='addGame-info bg-black-transparent mt-4 rounded-lg text-white p-3 border-2 border-green-500 shadow-md'>
          <Close parent='.addGame-info' />
          <p>
            Bueno para ganarte la cerveza tendras que etiquetarnos en 3 historias... ahre no mentira. Nunca hubo cerveza. Antes de que nos amenaces de muerte lo que queríamos ofrecerte es la posibilidad de que vos! sí vos! le que leé esto, pueda agregar los verdad o reto, yo nunca, etc que quieras! Y todo gratis! AHHHHHH!!!
          </p>
        </div>
      )}
      <div className='flex justify-center items-center mt-3'>
        <Form className='bg-black-transparent' options={options} optionChoise={optionChoise} extraOptions={extraOptions} optionsLinks={requests} hasInstagram={true} />
      </div>
      <div className='bg-black-transparent mt-4 rounded-lg text-white p-3 border-2 border-green-500 shadow-md'>
        <div className='text-center'>
          <button
            className='bg-orange-500 text-black hover:bg-teal-600 font-semibold hover:text-white py-2 px-4 hover:border-transparent rounded'
            type='button'
            onClick={() => {
              animateCSS('.AddGame', 'fadeOut faster', () => {
                history.push('/home/perfil');
              });
            }}
          >
            Ir a tu perfil
            {' '}
            <span role='img' aria-label='jeje'>🌝</span>
          </button>
        </div>
        <p className='text-gray-600 text-xs italic mt-1'>*¡Si te registras va a aparecer tu instagram abajo de los juegos que hayas agregado!</p>
      </div>
    </section>
  );
};

export default AddGame;
