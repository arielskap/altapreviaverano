import React, { useState } from 'react';
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';
import Form from '../components/Form';

const AddGame = () => {
  const [visible, setVisible] = useState(false);
  const options = ['~Juego~', 'Verdad o Reto', 'Yo Nunca', 'La Botellita', 'Más Propenso a'];
  return (
    <section className='AddGame pt-6 animated fadeIn mx-4'>
      <div className='flex justify-center'>
        <Tippy content='ahh re open inglish' visible={visible}>
          <h1 id='titulo' onClick={() => setVisible(!visible)} className=' text-center text-white bg-black-transparent py-1 px-3 text-xl rounded'>¡Add Games!</h1>
        </Tippy>
      </div>
      <div className='bg-black-transparent mt-4 rounded-lg text-white p-3 border-2 border-green-500 shadow-md'>
        <p>
          Bueno para ganarte la cerveza tendras que etiquetarnos en 3 historias... ahre no mentira. Nunca hubo cerveza. Antes de que nos amenaces de muerte lo que queríamos ofrecerte es la posibilidad de que vos! sí vos! le que leé esto, pueda agregar los verdad o reto, yo nunca, etc que quieras! Y todo gratis! AHHHHHH!!!
        </p>
      </div>
      <div className='flex justify-center items-center mt-3'>
        <Form className='bg-black-transparent' handleSubmit={() => {}} options={options} />
      </div>
    </section>
  );
};

export default AddGame;
