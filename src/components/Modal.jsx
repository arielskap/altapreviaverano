import React from 'react';
import { showModal, animateCSS } from '../funciones';

const Modal = (props) => {
  const { title } = props;
  const { children } = props;
  const { button } = props;

  return (
    <div className='modal h-screen w-full absolute flex items-center justify-center bg-modal z-10 top-0 hidden animated fadeIn faster' onClick={() => animateCSS('.modal', 'fadeOut faster', showModal)}>
      <div className='bg-white rounded-lg border-2 border-teal-500 shadow p-8 m-4 max-w-xs max-h-full text-center overflow-y-scroll'>
        <div className='mb-4 text-xl'>
          <h1>{title}</h1>
        </div>
        <div className='mb-8'>
          <p>{children}</p>
        </div>
        <div className='flex justify-center'>
          <button type='button' className='flex-no-shrink text-white py-2 px-4 rounded bg-teal-400 hover:bg-teal-700 pointer-events-none' onClick={() => animateCSS('.modal', 'fadeOut faster', showModal)}>{button}</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
