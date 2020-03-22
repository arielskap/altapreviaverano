import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import '../assets/styles/components/Modal.scss';

const ModalV2 = ({ children, isOpen, title, button, color, handleAcept, handleRefused, buttonRefused }) => {
  if (!isOpen) {
    return null;
  }
  useEffect(() => {
    document.body.style.overflow = 'hidden';
  }, []);

  return ReactDOM.createPortal(
    <div className='ModalV2 animated fadeIn faster fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center bg-transparent-black-1 text-white'>
      <div className={`rounded-lg border-2 border-${color || 'orange'}-500 shadow p-8 m-4 max-w-xs max-h-full text-center bg-transparent-white-1`}>
        <div className='mb-4 text-xl'>
          <h1>{title || 'Esto es un titulo de prueba'}</h1>
        </div>
        <div className='mb-8'>
          <p>{children || 'Esto es un texto de prueba'}</p>
        </div>
        <div className={`flex ${handleRefused ? 'justify-around' : 'justify-center'}`}>
          { handleRefused && (
            <button
              type='button'
              className='button-modal-refused flex-no-shrink text-white py-2 px-4 rounded bg-red-400 hover:bg-red-700'
              onClick={() => {
                document.querySelector('.button-modal-refused').setAttribute('disabled', 'disabled');
                document.body.style.overflow = 'auto';
                handleRefused();
              }}
            >
              {buttonRefused || 'Prueba'}
            </button>
          )}
          <button
            type='button'
            className={`button-modal-acept flex-no-shrink text-white py-2 px-4 rounded bg-${color || 'orange'}-400 hover:bg-${color || 'orange'}-700`}
            onClick={() => {
              document.querySelector('.button-modal-acept').setAttribute('disabled', 'disabled');
              document.body.style.overflow = 'auto';
              handleAcept();
            }}
          >
            {button || 'Prueba'}
          </button>
        </div>
      </div>
    </div>,
    document.getElementById('modal'),
  );
};

export default ModalV2;
