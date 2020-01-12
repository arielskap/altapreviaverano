import React from 'react';
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';
import Form from '../components/Form';

const AddGame = () => {
  const options = ['~Juego~', 'Verdad o Reto', 'Yo Nunca', 'La Botellita', 'Más Propenso a'];
  return (
    <section className='AddGame pt-6 animated fadeIn mx-4'>
      <Tippy content='Hello'>
        <button type='button'>My button</button>
      </Tippy>
      <div className='flex justify-center'>
        <h1 id='titulo' className=' text-center text-white bg-black-transparent py-1 px-3 text-xl rounded'>¡Add Games!</h1>
      </div>
      <div className='flex justify-center items-center mt-3'>
        <Form className='bg-black-transparent' handleSubmit={() => {}} options={options} />
      </div>
    </section>
  );
};

export default AddGame;
