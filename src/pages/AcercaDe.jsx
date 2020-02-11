import React, { useEffect, useState } from 'react';
import Tippy from '@tippy.js/react';
import { deleteCookie, setCookie, getCookie } from '../funciones';
import '../assets/styles/components/AcercaDe.scss';
import facebook from '../assets/static/facebook.png';
import instagram from '../assets/static/instagram.png';
import tiktok from '../assets/static/tiktok.png';
import logo from '../assets/static/logo.png';
import barmat from '../assets/static/barmat.png';
import Form from '../components/Form';
import Card from '../components/Card';

const AcercaDe = () => {
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);

  const handleCheck = () => {
    const checkBox = document.querySelector('#checkbox');
    if (checkBox.checked) {
      deleteCookie('closed');
    } else {
      setCookie('closed', '.perfil-info|.addGame-info', 365);
    }
  };

  useEffect(() => {
    const checkBox = document.querySelector('#checkbox');
    const closedItems = getCookie('closed');
    if (!closedItems) {
      checkBox.checked = true;
    }
    document.querySelector('.App').style.backgroundColor = '#4FD1C4';
  });

  const TAM_IMG = 'h-16 w-16';
  const options = ['~Causa~', 'Alabarnos', 'Sugerencia', 'Error'];
  return (
    <section className='AcercaDe animated fadeIn faster mx-2 pt-4 pb-2'>
      <div className='AcercaDeBody__header text-center'>
        <h2 className='text-2xl AcercaDeBody__header-titulo rounded-lg'>Acerca De:</h2>
      </div>
      <div className='AcercaDeBody__body mt-4'>
        <Card className='card-configuracion p-1'>
          <h4 className='text-xl'>Configuracion:</h4>
          <label className='pl-4' htmlFor='checkbox'>
            <input type='checkbox' id='checkbox' onClick={handleCheck} />
            {' '}
            Habilitar info adicional.
          </label>
        </Card>
        <Card className='AcercaDeBody__porque mt-4'>
          <div className='p-1'>
            <h4 className='text-xl'>¿Por que usas lenguaje inclusivo?</h4>
            <div className='mt-2'>
              <p>
                Bueno, porque el lenguaje influye en todo lo que hacemos. Tiene un valor más fuerte del que generalmente pensamos. Toda palabra tiene un porque y un significado que se le da directa o indirectamente. Yo desconozco a la persona que este leyendo esto o que este jugando a estos juegos, por eso no quiero presuponer y así habilitar a cualquiera a poder jugar
                <span role='img' aria-label='Happy'>😄</span>
              </p>
            </div>
          </div>
        </Card>
        <Card className='AcercaDeBody__presupuesto mt-4 p-3'>
          <h4 className='text-xl'>Contacto:</h4>
          <Form className='bg-black-transparent' options={options} />
        </Card>
        <Card className='footer-redes mt-4'>
          <p className='p-1'>Las redes del archimega super re groso developer in the fucking word: </p>
          <div className='flex justify-center mt-1'>
            <Tippy content='¿Facebook en el 2020? xddd' visible={visible}>
              <button className={TAM_IMG} type='button' onClick={() => setVisible(!visible)}><img className='object-contain w-full h-full' src={facebook} alt='facebook' /></button>
            </Tippy>
            <a className={TAM_IMG} href='https://www.instagram.com/ecstasy_ring/'><img className='object-contain w-full h-full' src={instagram} alt='instagram' /></a>
            <Tippy content='Para perder la dignidad tengo el LoL, bro.' visible={visible2}>
              <button className={TAM_IMG} type='button' onClick={() => setVisible2(!visible2)}><img className='object-contain w-full h-full' src={tiktok} alt='tiktok' /></button>
            </Tippy>
          </div>
        </Card>
        <Card className='mt-3 AcercaDeBody__cocktel'>
          <p className='p-1'>Si queres ser un todo hacker de la coctelería descargate:</p>
          <div className='flex justify-center mt-1'>
            <button className={TAM_IMG} type='button'><img className='object-contain w-full h-full' src={barmat} alt='barmat' /></button>
          </div>
        </Card>
        <Card className='AcercaDeBody__footer-somos mt-4'>
          <p className='p-1'>
            Ariel Santiago Villarreal Gutierrez y Abbul Rodriguez
            <br />
            Copyright © 2020 Todos los Derechos Reservados
            <br />
          </p>
          <div className='flex justify-center mt-1'>
            <div className='h-24 w-24'>
              <img className='object-contain w-full h-full' src={logo} alt='Logo' />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default AcercaDe;
