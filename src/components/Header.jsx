import React from 'react';
import Tippy from '@tippy.js/react';
import { Link } from 'react-router-dom';
import Modal from './Modal';
import { showModal } from '../funciones';
import beer from '../assets/static/beer.png';
import informacion from '../assets/static/informacion.png';

const Header = (props) => {
  const { title } = props;
  const { button } = props;
  const { children } = props;
  const { className } = props;
  return (
    <div className={`VerdadRetoOpcionHeader pt-4 w-full flex justify-between ${className}`}>
      <Tippy content='¡Instrucciones!' placement='right'>
        <button type='button' className='rounded-full h-12 w-12 ml-4' onClick={() => showModal()}>
          <img className='object-contain w-full h-full' src={informacion} alt='info' />
        </button>
      </Tippy>
      <Tippy content='¡Regalamos cerveza!' placement='left' visible={true}>
        <Link to='/games/addGame' className='rounded-full h-12 w-12 mr-4'>
          <img className='object-contain w-full h-full' src={beer} alt='beer' />
        </Link>
      </Tippy>
      <Modal title={title} button={button}>{children}</Modal>
    </div>
  );
};

export default Header;
