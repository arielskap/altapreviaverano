import React, { useEffect } from 'react';
import Modal from './Modal';
import { showModal, setCookie, getCookie } from '../funciones';

const FirstModal = () => {
  useEffect(() => {
    if (!getCookie('ModalFirst')) {
      showModal('Modal-first');
    }
    setCookie('ModalFirst', true, 365);
  });
  return (
    <>
      <Modal color='pink' className='Modal-first' title='Terrible oremos' button='Amen bro'>
        Hola bro, vengo a decirte que si tocas en la cerveza (
        <span role='img' aria-label='Cerveza'>🍺</span>
        ) que esta arriba a la derecha vas a poder agregar juegos a Alta Previa. Que dios te bendiga
        <br />
        <span role='img' aria-label='Rezar'>🙏</span>
      </Modal>
    </>
  );
};

export default FirstModal;
