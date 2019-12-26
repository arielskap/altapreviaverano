import React from 'react';
import VerdadRetoOpcion from '../VerdadRetoOpcion';
import Boom from './Boom';
import '../../assets/styles/components/HomeBody.scss';
import crashBaile from '../../assets/static/Baile_de_Crash.gif';
import { animateCSS } from '../../funciones';

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
          <h1 className='text-4xl HomeBody-h1 animated jackInTheBox faster'>Alta Previa</h1>
          <h2 className='text-2xl HomeBody-h2 animated jackInTheBox faster'>Verano</h2>
        </div>
        <div className='flex justify-center flex-col mt-6'>
          <button
            className='HomeBody__Verdad-button text-lg text-gray-900 font-bold py-2 px-4 border-2 rounded mx-16 my-3'
            type='button'
            onClick={() => {
              animateCSS('.Home', 'fadeOut', () => {
                changeState(<VerdadRetoOpcion changeState={changeState} />);
              });
            }}
          >
            Verdad o Reto
          </button>
          <button className='HomeBody__YoNunca-button text-lg text-pink-500 border-white font-bold py-2 px-4 border-2 rounded mx-16 my-3' type='button' onClick={() => { changeState(); }}>Yo nunca</button>
          <button className='HomeBody__Botellita-button text-lg text-gray-800 border-teal-500 font-bold py-2 px-4 border-2 rounded mx-16 my-3' type='button' onClick={() => { changeState(); }}>La Botellita</button>
          <button className='HomeBody__Trago-button text-lg text-blue-900 border-pink-400 font-bold py-2 px-4 border-2 rounded mx-16 my-3' type='button' onClick={() => { changeState(); }}>Trago Aleatorio</button>
        </div>
        <div>
          <img className='object-contain' src={crashBaile} alt='Gif Meme' />
        </div>
      </section>
    );
  }
}

export default HomeBody;
