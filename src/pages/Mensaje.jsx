import React from 'react';
import { Link } from 'react-router-dom';

const Mensaje = () => {
  return (
    <section className='Mensaje bg-black h-screen w-full flex items-center justify-center'>
      <div className='mx-4 bg-white rounded-lg p-2 animated fadeIn faster'>
        <h1 className='text-center text-lg text-red-700'>
            Informacion
          <span role='img' aria-label='Informacion'>❗</span>
        </h1>
        <p> La idea de la aplicaciones es divertirse. Nadie esta obligade a participar, y no se debe insistir ni obligar a ningun participante a hacer algo que no quiera</p>
        <div className='w-full flex justify-end mt-3'>
          <Link to='/home' className='bg-green-700 hover:bg-green-500 text-white hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded'>
                Entiendo, no voy a ser une sorete
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Mensaje;
