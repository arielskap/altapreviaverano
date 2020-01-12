import React from 'react';

function NotFound() {
  return (
    <div className='text-center flex justify-center items-center w-full min-h-screen'>
      <div className='flex justify-center flex-col bg-white mx-4 p-2'>
        <h1 className='text-xl'>404: Not Found</h1>
        <h2 className='text-lg mt-2'>No se como llegaste acá, pero raja, por que se pudre todo</h2>
        <img className='object-contain' src='https://media.giphy.com/media/diBEnAwwUG7UA/source.gif' alt='Si estas leyendo esto es por que tampoco tenes internet' />
      </div>
    </div>
  );
}

export default NotFound;

