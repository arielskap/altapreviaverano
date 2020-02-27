import React, { useEffect } from 'react';
import Modal from './Modal';
import { showModal, getLocalStorageJson } from '../funciones';

const SecondModal = ({ juegoActual }) => {
  useEffect(() => {
    const instrucciones = getLocalStorageJson('instrucciones');
    let flag = false;
    if (instrucciones) {
      for (let i = 0; i < instrucciones.length; i++) {
        const element = instrucciones[i];
        if (element === juegoActual) {
          flag = true;
          break;
        }
      }
    }
    if (flag) {
      if (!localStorage.getItem('ModalSecondary')) {
        showModal('Modal-secondary');
      }
      localStorage.setItem('ModalSecondary', true, 365);
    }
  });
  return (
    <>
      <Modal color='pink' className='Modal-secondary' title='Terrible oremos' button='Amen bro'>
        Hola bro, vengo a decirte que si tocas en la cerveza (
        <span role='img' aria-label='Cerveza'>🍺</span>
        ) que esta arriba a la derecha vas a poder agregar juegos a Alta Previa. Que dios te bendiga
        <br />
        <span role='img' aria-label='Rezar'>🙏</span>
      </Modal>
    </>
  );
};

export default SecondModal;
