import React, { useState, useEffect } from 'react';
import Tippy from '@tippy.js/react';
import Header from '../components/Header';
import { vibrar } from '../funciones';
import '../assets/styles/components/YoNunca.scss';

const YoNunca = () => {
  const [visible, setVisible] = useState(false);
  const numeroSwitch = [];
  let numMath = 4;
  for (let i = 0;i < numMath;i++) {
    numeroSwitch[i] = i + 1;
  }

  const yoNunca = () => {
    let p = document.querySelector('.YoNuncaBody-p');
    const parentP = document.querySelector('.YoNuncaBody__parent-p');
    let yoNunca;
    const numAleatorio = Math.floor((Math.random() * numMath));
    switch (numeroSwitch[numAleatorio]) {
      case 1:
        yoNunca = document.createTextNode('Meti la mano en el agua del inodoro');
        break;
      case 2:
        yoNunca = document.createTextNode('Tome alcohol');
        break;
      case 3:
        yoNunca = document.createTextNode('Me desnude en publico');
        break;
      case 4:
        yoNunca = document.createTextNode('Bailé Fortnite');
        break;
      default:
        yoNunca = document.createTextNode('Ya no hay mas "Yo Nunca". Juga otra cosa o quebra.');
        break;
    }
    p.remove();
    p = document.createElement('p');
    p.classList.add('YoNuncaBody-p', 'animated', 'fadeIn', 'faster');
    p.appendChild(yoNunca);
    parentP.appendChild(p);
    numeroSwitch.splice(numAleatorio, 1);
    numMath--;
  };

  useEffect(() => {
    document.querySelector('.App').style.backgroundColor = 'pink';
    yoNunca();
  });

  return (
    <section className='YoNunca animated fadeIn faster'>
      <Header />
      <div className='YoNuncaBody mt-2'>
        <div className='YoNuncaBody-header mx-4'>
          <Tippy content='Yo nunca hice click a esto... (Ahora toma o te hago la gran Nisman)' visible={visible}>
            <h1 className='YoNuncaBody-h1 text-3xl text-center p-1 rounded-lg text-white' onClick={() => setVisible(!visible)}>Yo Nunca...</h1>
          </Tippy>
        </div>
        <div className='YoNuncaBody-body mt-12 mx-8'>
          <div className='YoNuncaBody__parent-p border-pink-500 border-2 p-4 rounded-lg text-lg'>
            <p className='YoNuncaBody-p' />
          </div>
        </div>
        <div className='YoNuncaBody-footer fixed bottom-0 w-full'>
          <button className='text-center w-full bg-green-500 py-3 text-white text-lg' type='button' onClick={() => { vibrar(); yoNunca(); }}>Siguiente</button>
        </div>
      </div>
    </section>
  );

};

export default YoNunca;
