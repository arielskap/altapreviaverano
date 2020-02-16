/* eslint-disable prefer-destructuring */
import React, { useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import Title from './Title';
import Instagram from './Instagram';
import instagram from '../assets/static/instagram.svg';
import { animateCSS, addInstagram, getCookie, setCookie } from '../funciones';
import { verdad, reto } from '../verdadReto';
import '../assets/styles/components/VerdadRetoJuego.scss';

const VerdadRetoJuego = (props) => {
  const history = useHistory();
  const query = new URLSearchParams(useLocation().search);
  const verdadReto = query.get('verdadReto');
  let juego = getCookie('verdadOretoJuego');
  let cant = getCookie('verdadOretoCantidad');
  const { changeStateVerdadReto } = props;
  const noLoHizo = () => {
    const p = document.createElement('p');
    const div = document.createElement('div');
    const parrafoFunction = verdadReto === 'verdad' ? reto('Picante') : verdad('Picante');
    const text = parrafoFunction[0];
    p.appendChild(document.createTextNode(text));
    div.classList.add('animated', 'fadeIn', 'VerdadRetoJuego__mission', 'p-4', 'border-2', `border-${verdadReto === 'verdad' ? 'red' : 'blue'}-700`, 'mt-6', 'rounded-lg');
    div.appendChild(p);
    if (parrafoFunction[1]) {
      div.insertAdjacentHTML('beforeend', `<a href="https://www.instagram.com/ecstasy_ring/" class=a-instagram><div class="div-instagram px-2 pt-2 pb-1 text-right italic fadeIn animated faster inline-flex items-center justify-end w-full"><img src=${instagram} alt="instagram" class="img-instagram object-contain h-5 w-5 mr-2"><p class="p-instagram" />${parrafoFunction[1]}</div></a>`);
    }
    document.querySelector('.VerdadRetoJuego-body').appendChild(div);
    document.querySelector('.VerdadRetoJuego-footer__noLoHizo').classList.add('hidden');
    document.querySelector('.VerdadRetoJuego-footer__realizado').classList.remove('w-4/6', 'rounded-r');
    document.querySelector('.VerdadRetoJuego-footer__realizado').classList.add('w-full', 'rounded');
    window.scrollTo(0, document.body.scrollHeight);
  };

  useEffect(() => {
    const instagram = document.querySelector('.a-instagram');
    const parentP = document.querySelector('.VerdadRetoJuego__mission');
    const juego = getCookie('verdadOretoJuego');
    const verdadReto = query.get('verdadReto');
    let parrafoFunction;
    let text;
    const p = document.createElement('p');
    p.classList.add('p-VerdadRetoJuego');
    if (juego === 'Suave' || juego === 'Picante') {
      if (verdadReto === 'verdad') {
        parrafoFunction = verdad(juego);
        text = parrafoFunction[0];
        addInstagram(parrafoFunction[1]);
        text = document.createTextNode(text);
      } else {
        parrafoFunction = reto(juego);
        text = parrafoFunction[0];
        addInstagram(parrafoFunction[1]);
        text = document.createTextNode(text);
      }
    }
    if (document.querySelector('p-VerdadRetoJuego')) {
      document.querySelector('p-VerdadRetoJuego').remove();
    }
    document.querySelector('.VerdadRetoJuego__mission').appendChild(p);
    p.appendChild(text);
    parentP.insertBefore(p, instagram);
  });
  return (
    <div className='VerdadRetoJuego animated fadeIn mt-16'>
      <div className='mb-16'>
        <div className='VerdadRetoJuego-body text-lg mx-8'>
          <div className={`VerdadRetoJuego__mission p-4 border-2 border-${verdadReto === 'verdad' ? 'green' : 'red'}-700 rounded-lg`}>
            <Instagram />
          </div>
        </div>
      </div>
      <div className='VerdadRetoJuego-footer fixed bottom-0 flex w-full left-0'>
        <button
          className='VerdadRetoJuego-footer__noLoHizo bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-4 border border-red-700 rounded-l w-2/6'
          type='button'
          onClick={() => {
            noLoHizo();
          }}
        >
          No lo hizo...
        </button>
        <button
          className='VerdadRetoJuego-footer__realizado bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-4 border border-blue-700 rounded-r w-4/6'
          type='button'
          onClick={() => {
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
              setCookie('verdadOretoJuego', juego);
              setCookie('verdadOretoCantidad', cant);
              history.replace('/games/verdadReto/select');
            });
          }}
        >
          ¡Realizado!
        </button>
      </div>
    </div>
  );
};

export default VerdadRetoJuego;
