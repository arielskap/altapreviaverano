import React from 'react';
import ReactDOM from 'react-dom';
import VerdadRetoBodySelect from './VerdadRetoBodySelect';
import Title from './Title';
import { animateCSS, vibrar } from '../funciones';
import { verdad, reto } from '../verdadReto';
import '../assets/styles/components/VerdadRetoJuego.scss';

class VerdadRetoJuego extends React.Component {
  componentDidMount() {
    const { juego } = this.props;
    const { verdadReto } = this.props;
    let text;
    if (juego === 'Suave' || juego === 'Picante') {
      if (verdadReto === 'verdad') {
        text = document.createTextNode(verdad(juego));
      } else {
        text = document.createTextNode(reto(juego));
      }
    }
    document.querySelector('.VerdadRetoJuego__mission').appendChild(text);
  }

  noLoHizo() {
    const { verdadReto } = this.props;
    const p = document.createElement('p');
    if (verdadReto === 'verdad') {
      p.appendChild(document.createTextNode(reto('Picante')));
      p.classList.add('animated', 'fadeIn', 'VerdadRetoJuego__mission', 'p-4', 'border-2', 'border-red-700', 'mt-6', 'rounded-lg');
    } else {
      p.appendChild(document.createTextNode(verdad('Picante')));
      p.classList.add('animated', 'fadeIn', 'VerdadRetoJuego__mission', 'p-4', 'border-2', 'border-blue-700', 'mt-6', 'rounded-lg');
    }
    document.querySelector('.VerdadRetoJuego-body').appendChild(p);
    document.querySelector('.VerdadRetoJuego-footer__noLoHizo').classList.add('hidden');
    document.querySelector('.VerdadRetoJuego-footer__realizado').classList.remove('w-4/6', 'rounded-r');
    document.querySelector('.VerdadRetoJuego-footer__realizado').classList.add('w-full', 'rounded');
  }

  render() {
    const { changeStateVerdadReto } = this.props;
    let { juego } = this.props;
    const { verdadReto } = this.props;
    let { cant } = this.props;
    return (
      <div className='VerdadRetoJuego animated fadeIn mt-16'>
        <div className='VerdadRetoJuego-body text-lg mx-4'>
          <p className={verdadReto === 'verdad' ? 'VerdadRetoJuego__mission p-4 border-2 border-green-700 rounded-lg' : 'VerdadRetoJuego__mission p-4 border-2 border-red-700 rounded-lg'} />
        </div>
        <div className='VerdadRetoJuego-footer fixed bottom-0 flex w-full left-0'>
          <button
            className='VerdadRetoJuego-footer__noLoHizo bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-4 border border-red-700 rounded-l w-2/6'
            type='button'
            onClick={() => {
              vibrar();
              this.noLoHizo();
            }}
          >
            No lo hizo...
          </button>
          <button
            className='VerdadRetoJuego-footer__realizado bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-4 border border-blue-700 rounded-r w-4/6'
            type='button'
            onClick={() => {
              vibrar();
              animateCSS('.VerdadRetoJuego', 'fadeOut faster', () => {
                if (cant !== '∞') {
                  cant--;
                  if (cant <= 0) {
                    juego = 'Picante';
                    changeStateVerdadReto(<Title juego={juego} cant={cant} />);
                  } else {
                    changeStateVerdadReto(<Title juego={juego} cant={cant} />);
                  }
                }
                ReactDOM.render(
                  <VerdadRetoBodySelect juego={juego} element='.VerdadRetoBody__change' cant={cant} changeStateVerdadReto={changeStateVerdadReto} />, document.querySelector('.VerdadRetoBody__change'),
                );
              });
            }}
          >
            ¡Realizado!
          </button>
        </div>
      </div>
    );
  }
}

export default VerdadRetoJuego;
