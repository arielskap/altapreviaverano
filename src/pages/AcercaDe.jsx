import React, { useEffect } from 'react';
import '../assets/styles/components/AcercaDe.scss';
import facebook from '../assets/static/facebook.png';
import instagram from '../assets/static/instagram.png';
import tiktok from '../assets/static/tiktok.png';
import logo from '../assets/static/logo.png';
import barmat from '../assets/static/barmat.png';
import Form from '../components/Form';

const AcercaDe = () => {
  useEffect(() => {
    document.querySelector('.App').style.backgroundColor = '#4FD1C4';
  });

  const TAM_IMG = 'h-16 w-16';
  const options = ['~Causa~', 'Alabarnos', 'Sugerencia', 'Error'];
  return (
    <section className='AcercaDe animated fadeIn faster mx-2 pt-4'>
      <div className='AcercaDeBody__header text-center'>
        <h2 className='text-2xl AcercaDeBody__header-titulo rounded-t'>Alta Previa</h2>
        <h3 className='text-2xl AcercaDeBody__header-titulo rounded-b'>Edicion Verano</h3>
      </div>
      <div className='AcercaDeBody__body mt-4'>
        <div>
          <div className='AcercaDeBody__porque p-1 rounded-lg'>
            <h4 className='text-xl'>¿Por que usas lenguaje inclusivo?</h4>
            <div className='mt-2'>
              <p>
                  Bueno, porque el lenguaje influye en todo lo que hacemos. Tiene un valor más fuerte del que generalmente pensamos. Toda palabra tiene un porque y un significado que se le da directa o indirectamente. Yo desconozco a la persona que este leyendo esto o que este jugando a estos juegos, por eso no quiero presuponer y así habilitar a cualquiera a poder jugar
                <span role='img' aria-label='Happy'>😄</span>
              </p>
            </div>
          </div>
        </div>
        <div>
          <p className='AcercaDeBody__presupuesto rounded-lg mt-4 p-1'>
              Como todavía no hay presu... AHORA SI BABY (?
            <br />
              Contacto:
          </p>
          <Form options={options} />
          <div>
            <p className='bg-teal-600 p-1 rounded-lg'>Las redes del archimega super re groso developer in the fucking word: </p>
            <div className='flex justify-center mt-1'>
              <button className={TAM_IMG} type='button'><img className='object-contain w-full h-full' src={facebook} alt='facebook' /></button>
              <a className={TAM_IMG} href='https://www.instagram.com/ecstasy_ring/'><img className='object-contain w-full h-full' src={instagram} alt='instagram' /></a>
              <button className={TAM_IMG} type='button'><img className='object-contain w-full h-full' src={tiktok} alt='tiktok' /></button>
            </div>
          </div>
        </div>
        <div className='mt-3'>
          <p className='AcercaDeBody__cocktel p-1 rounded-lg'>Si queres ser un todo hacker de la coctelería descargate:</p>
          <div className='flex justify-center mt-1'>
            <button className={TAM_IMG} type='button'><img className='object-contain w-full h-full' src={barmat} alt='barmat' /></button>
          </div>
        </div>
        <div className='AcercaDeBody__footer mt-4'>
          <p className='AcercaDeBody__footer-somos p-1 rounded-lg'>
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
        </div>
      </div>
    </section>
  );
};

export default AcercaDe;
