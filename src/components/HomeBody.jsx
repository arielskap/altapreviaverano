import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';
import Boom from './Boom';
import { animateCSS } from '../funciones';
import '../assets/styles/components/HomeBody.scss';
import crashBaile from '../assets/static/Baile_de_Crash.gif';

const HomeBody = () => {
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      animateCSS('.HomeBody__Booom', 'fadeOut faster', () => {
        document.querySelector('.HomeBody__Booom').classList.add('hidden');
        document.querySelector('.HomeBody-h1').classList.remove('jackInTheBox', 'faster');
        animateCSS('.HomeBody-h1', 'bounceIn slower');
      });
    }, 800);
  });
  return (
    <section className='HomeBody'>
      <div className='text-center mt-2 mx-2 flex justify-center flex-col'>
        <div className='HomeBody__Booom z-10 absolute top-0 bg-repeat-round h-screen w-screen'>
          <Boom />
        </div>
        <h1 className='text-4xl HomeBody-h1 animated jackInTheBox faster rounded-t'>Alta Previa</h1>
        <Tippy content='Perreito... como en los viejos tiempos, pe perreito pe pe perreito' visible={visible2}>
          <h2 className='text-2xl HomeBody-h2 animated jackInTheBox faster rounded-b' onClick={() => setVisible2(!visible2)}>
            Verano
            <span role='img' aria-label='Surf'>🏄</span>
          </h2>
        </Tippy>
      </div>
      <div className='flex justify-center flex-col mt-6'>
        <Link to='/verdadRetoOpcion' className='HomeBody__Verdad-button text-lg text-gray-900 font-bold py-2 px-4 border-2 rounded mx-16 my-3 text-center'>
            Verdad o Reto
        </Link>
        <Link to='/yoNunca' className='HomeBody__YoNunca-button text-lg text-pink-500 border-white font-bold py-2 px-4 border-2 rounded mx-16 my-3 text-center'>
            Yo nunca
        </Link>
        <Link to='/botellita' className='HomeBody__Botellita-button text-lg text-gray-800 border-teal-500 font-bold py-2 px-4 border-2 rounded mx-16 my-3 text-center'>
            La Botellita
        </Link>
        <button className='HomeBody__Trago-button text-lg text-blue-900 border-pink-400 font-bold py-2 px-4 border-2 rounded mx-16 my-3' type='button' onClick={() => { }}>Más probable a</button>
      </div>
      <div className='flex justify-center'>
        <Tippy content='Perreito... como en los viejos tiempos, pe perreito pe pe perreito' visible={visible}>
          <img className='crash object-contain' src={crashBaile} alt='Gif Meme' onClick={() => setVisible(!visible)} />
        </Tippy>
      </div>
    </section>
  );
};

export default HomeBody;
