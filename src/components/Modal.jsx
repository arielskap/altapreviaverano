import React, { useEffect } from 'react';
import { showModal, animateCSS } from '../funciones';
import '../assets/styles/components/Modal.scss';

const Modal = (props) => {
  const { title } = props;
  const { children } = props;
  const { button } = props;
  const { className } = props;
  let { color } = props;
  color = color || 'teal';
  useEffect(() => {
    return () => {
      if (document.body.classList.contains('overflow-hidden')) {
        document.body.classList.toggle('overflow-hidden');
      }
    };
  }, []);

  return (
    <div className={`${className || 'modal'} h-screen w-full fixed flex items-center justify-center bg-modal z-10 left-0 top-0 hidden bg-transparent-black-1 text-white`}>
      <div className={`rounded-lg border-2 border-${color}-500 shadow p-8 m-4 max-w-xs max-h-full text-center bg-transparent-white-1`}>
        <div className='mb-4 text-xl'>
          <h1>{title}</h1>
        </div>
        <div className='mb-8'>
          <p>{children}</p>
        </div>
        <div className='flex justify-center'>
          <button
            type='button'
            className={`button-modal flex-no-shrink text-white py-2 px-4 rounded bg-${color}-400 hover:bg-${color}-700`}
            onClick={() => {
              document.querySelector('.button-modal').setAttribute('disabled', 'disabled');
              animateCSS(`.${className || 'modal'}`, 'fadeOut faster', () => {
                showModal(className);
              });
            }}
          >
            {button}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
