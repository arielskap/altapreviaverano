import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Tippy from '@tippy.js/react';
import Boom from '../components/Boom';
import { animateCSS } from '../funciones';
import '../assets/styles/components/Home.scss';
import information from '../assets/static/information.png';
//import crashBaile from '../assets/static/Baile_de_Crash.gif';
import crashBaile from '../assets/static/crash_duro.gif';

const Home = () => {
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const perfilImg = localStorage.getItem('perfilImg');
  const perfilAlt = localStorage.getItem('perfilAlt');
  useEffect(() => {
    setTimeout(() => {
      animateCSS('.HomeBody__Booom', 'fadeOut faster', () => {
        document.querySelector('.HomeBody__Booom').classList.add('hidden');
        document.querySelector('.HomeBody-h2').classList.remove('jackInTheBox', 'faster');
        animateCSS('.HomeBody-h2', 'rubberBand');
      });
    }, 400);
  }, []);

  return (
    <div className='Home animated fadeIn faster'>
      <section className='HomeHeader'>
        <div className='flex justify-between px-4 pt-4'>
          <Link to='/home/perfil' className='rounded-full h-12 w-12 flex justify-center Link__perfil p-1'>
            <img className='rounded-full object-contain' src={perfilImg} alt={perfilAlt} />
          </Link>
          <Link to='/home/acercaDe' className='HomeHeader__information-button rounded-full h-12 w-12 bg-aqua-transparent flex justify-center'>
            <img className='fill-current h-full w-full' src={information} alt='Informacion' />
          </Link>
        </div>
      </section>
      <section className='HomeBody'>
        <div className='text-center mt-2 mx-2 flex justify-center flex-col'>
          <div className='HomeBody__Booom z-10 absolute top-0 bg-repeat-round h-screen w-screen'>
            <Boom />
          </div>
          <h1 className='text-4xl HomeBody-h1 animated jackInTheBox faster rounded-t'>Alta Previa</h1>
          <Tippy content='Más viral que el gangnam style' visible={visible2}>
            <h2 className='text-2xl HomeBody-h2 animated jackInTheBox faster rounded-b' onClick={() => setVisible2(!visible2)}>
              Coronavirus
              <span className='surf' role='img' aria-label='Surf'>🧫‍</span>
            </h2>
          </Tippy>
        </div>
        <div className='flex justify-center flex-col mt-6 sm:grid sm:grid-cols-2'>
          <Link to='/games/verdadRetoOpcion' className='HomeBody__Verdad-button text-lg text-gray-900 font-bold py-2 px-4 border-2 rounded mx-16 my-3 text-center sm:col-span-1 sm:mx-4'>
            Verdad o Reto
          </Link>
          <Link to='/games/yoNunca' className='HomeBody__YoNunca-button text-lg text-pink-500 border-white font-bold py-2 px-4 border-2 rounded mx-16 my-3 text-center sm:col-span-1 sm:mx-4'>
            Yo nunca
          </Link>
          <Link to='/games/botellita' className='HomeBody__Botellita-button text-lg text-gray-800 border-teal-500 font-bold py-2 px-4 border-2 rounded mx-16 my-3 text-center sm:col-span-1 sm:mx-4'>
            La Botellita
          </Link>
          <Link to='/games/masProbable' className='HomeBody__Trago-button text-lg text-blue-900 border-pink-400 font-bold py-2 px-4 border-2 rounded mx-16 my-3 text-center sm:col-span-1 sm:mx-4'>
            Más probable a
          </Link>
        </div>
        <div className='flex justify-center w-full'>
          <div className='max-w-sm'>
            <Tippy content='Ahhhhhh alto cagaso de estornudar' visible={visible}>
              <img className='crash object-contain' src={crashBaile} alt='Gif Meme' onClick={() => setVisible(!visible)} />
            </Tippy>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
