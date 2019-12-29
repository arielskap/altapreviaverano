import React from 'react';
import Home from './Home';
import { animateCSS, vibrar } from '../funciones';

export class Mensaje extends React.Component {
  render() {
    const { changeState } = this.props;
    return (
      <section className='Mensaje bg-black h-screen w-full flex items-center'>
        <div className='mx-4 bg-white rounded-lg p-2'>
          <h1 className='text-center text-lg text-red-700'>
            Informacion
            <span role='img' aria-label='Informacion'>❗</span>
          </h1>
          <p> La idea de la aplicaciones es divertirse. Nadie esta obligado a participar, y no se debe insistir ni obligar a ningun participante a hacer algo que no quiera</p>
          <div className='w-full flex justify-end mt-3'>
            <button
              type='button'
              className='bg-green-700 hover:bg-green-500 text-white hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded'
              onClick={() => {
                animateCSS('.appChildren', 'fadeOut faster', () => {
                  vibrar();
                  changeState(<Home changeState={changeState} />);
                });
              }}
            >
                Entiendo, no voy a ser une sorete
            </button>
          </div>
        </div>
      </section>
    );
  }
}

export default Mensaje;
