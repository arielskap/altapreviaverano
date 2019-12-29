import React from 'react';
import VerdadRetoOpcion from '../VerdadRetoOpcion';
import YoNunca from '../YoNunca';
import Botellita from '../Botellita';
import Boom from './Boom';
import { animateCSS, vibrar } from '../../funciones';
import '../../assets/styles/components/HomeBody.scss';
import crashBaile from '../../assets/static/Baile_de_Crash.gif';

class HomeBody extends React.Component {

  componentDidMount() {
    setTimeout(() => {
      animateCSS('.HomeBody__Booom', 'fadeOut faster', () => {
        document.querySelector('.HomeBody__Booom').classList.add('hidden');
        document.querySelector('.HomeBody-h1').classList.remove('jackInTheBox', 'faster');
        animateCSS('.HomeBody-h1', 'bounceIn slower');
      });
    }, 800);
  }

  render() {
    const { changeState } = this.props;
    return (
      <section className='HomeBody'>
        <div className='text-center mt-2 mx-2 flex justify-center flex-col'>
          <div className='HomeBody__Booom z-10 absolute top-0 bg-repeat-round h-screen w-screen'>
            <Boom />
          </div>
          <h1 className='text-4xl HomeBody-h1 animated jackInTheBox faster rounded-t'>Alta Previa</h1>
          <h2 className='text-2xl HomeBody-h2 animated jackInTheBox faster rounded-b'>
            Verano
            <span role='img' aria-label='Surf'>🏄</span>
          </h2>
        </div>
        <div className='flex justify-center flex-col mt-6'>
          <button
            className='HomeBody__Verdad-button text-lg text-gray-900 font-bold py-2 px-4 border-2 rounded mx-16 my-3'
            type='button'
            onClick={() => {
              vibrar();
              animateCSS('.Home', 'fadeOut', () => {
                changeState(<VerdadRetoOpcion changeState={changeState} />);
              });
            }}
          >
            Verdad o Reto
          </button>
          <button
            className='HomeBody__YoNunca-button text-lg text-pink-500 border-white font-bold py-2 px-4 border-2 rounded mx-16 my-3'
            type='button'
            onClick={() => {
              vibrar();
              animateCSS('.Home', 'fadeOut', () => {
                changeState(<YoNunca changeState={changeState} />);
              });
            }}
          >
            Yo nunca
          </button>
          <button
            className='HomeBody__Botellita-button text-lg text-gray-800 border-teal-500 font-bold py-2 px-4 border-2 rounded mx-16 my-3'
            type='button'
            onClick={() => {
              vibrar();
              animateCSS('.Home', 'fadeOut', () => {
                changeState(<Botellita changeState={changeState} />);
              });
            }}
          >
            La Botellita
          </button>
          <button className='HomeBody__Trago-button text-lg text-blue-900 border-pink-400 font-bold py-2 px-4 border-2 rounded mx-16 my-3' type='button' onClick={() => { changeState(); }}>Más probable a</button>
        </div>
        <div className='flex justify-center'>
          <img className='object-contain' src={crashBaile} alt='Gif Meme' />
        </div>
      </section>
    );
  }
}

export default HomeBody;
