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
import Switch from '../components/Switch';
import palmera from '../assets/static/palmera.png';

const AcercaDe = () => {
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);

  const handleCheck = () => {
    const checkBox = document.querySelector('#Switch__info');
    if (checkBox.checked) {
      deleteCookie('closed');
    } else {
      setCookie('closed', '.perfil-info|.addGame-info', 365);
    }
  };

  const handleSwitch = () => {
    const switchButton = document.querySelector('#Switch__style');
    if (switchButton.checked) {
      document.querySelector('.App').style.background = '';
      document.querySelector('.App').style.backgroundColor = '#4FD1C4';
      setCookie('background', 'lindo', 365);
    } else {
      document.querySelector('.App').style.background = `linear-gradient(rgba(0,0,0,1), rgba(255,255,255,.1)), url(${palmera}) #4FD1C4`;
      setCookie('background', 'feo', 365);
    }
  };

  useEffect(() => {
    const checkBox = document.querySelector('#Switch__info');
    const closedItems = getCookie('closed');
    const switchButton = document.querySelector('#Switch__style');
    const isBeautify = getCookie('background');
    if (!closedItems) {
      checkBox.checked = true;
      document.querySelector('.Switch__info').style.backgroundColor = 'hotpink';
    }
    if (isBeautify === 'lindo') {
      switchButton.checked = true;
      document.querySelector('.Switch__style').style.backgroundColor = 'khaki';
      document.querySelector('.App').style.backgroundColor = '#4FD1C4';
    } else {
      document.querySelector('.App').style.background = `linear-gradient(rgba(0,0,0,1), rgba(255,255,255,.1)), url(${palmera}) #4FD1C4`;
    }
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
          <div className='flex my-3'>
            <Switch className='ml-2 w-12 h-6' onClick={handleCheck} id='Switch__info' color='hotpink' />
            <p className='ml-2'>Habilitar info adicional.</p>
          </div>
          <div className='flex my-3'>
            <Switch className='ml-2 w-12 h-6' onClick={handleSwitch} id='Switch__style' color='khaki' />
            <p className='ml-2'>Cambiar Estilo</p>
          </div>
        </Card>
        <Card className='AcercaDeBody__porque mt-4 pb-1'>
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
          <Form className='bg-black-transparent' options={options} link='review/create' />
        </Card>
        <div className='sm:grid sm:grid-cols-2 sm:gap-2'>
          <Card className='footer-redes mt-4 pb-1'>
            <p className='p-1'>Las redes del archimega super re groso developer in the fucking word: </p>
            <div className='flex justify-center mt-1'>
              <Tippy content='¿Facebook en el 2020? xddd' visible={visible}>
                <button className={TAM_IMG} type='button' onClick={() => setVisible(!visible)}><img className='object-contain w-full h-full' src={facebook} alt='facebook' /></button>
              </Tippy>
              <a className={TAM_IMG} href='https://www.instagram.com/ecstasy_ring/'><img className='object-contain w-full h-full' src={instagram} alt='instagram' /></a>
              <Tippy content='Para perder la dignidad tengo el LoL, bro.' visible={visible2} placement='bottom'>
                <button className={TAM_IMG} type='button' onClick={() => setVisible2(!visible2)}><img className='object-contain w-full h-full' src={tiktok} alt='tiktok' /></button>
              </Tippy>
            </div>
          </Card>
          <Card className='mt-3 AcercaDeBody__cocktel pb-1'>
            <p className='p-1'>Si queres ser un todo hacker de la coctelería descargate:</p>
            <div className='flex justify-center mt-1'>
              <button className={TAM_IMG} type='button'><img className='object-contain w-full h-full' src={barmat} alt='barmat' /></button>
            </div>
          </Card>
        </div>
        <div className='sm:grid sm:grid-cols-12 sm:gap-2'>
          <Card className='AcercaDeBody__footer-somos mt-4 pb-1 sm:col-start-2 sm:col-span-10'>
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
      </div>
    </section>
  );
};

export default AcercaDe;
