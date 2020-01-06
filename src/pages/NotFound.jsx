import React from 'react';

function NotFound() {
  return (
    <div className='mx-4 mt-4 bg-white p-2 text-center flex justify-center flex-col'>
      <h1 className='text-xl'>404: Not Found</h1>
      <h2 className='text-lg mt-2'>No se como llegaste acá, pero raja, por que se pudre todo</h2>
      <img className='object-contain' src='https://media.giphy.com/media/diBEnAwwUG7UA/source.gif' alt='Si estas leyendo esto es por que tampoco tenes internet' />
    </div>
  );
}

export default NotFound;

