import React, { useEffect } from 'react';
import Header from '../components/Header';
import GameGeneric from '../components/GameGeneric';

function YoNunca() {
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
  }, []);

  return (
    <>
      <Header title='Instrucciones' button='Perfectirigillo'>
        El juego consiste en tomar alcohol, una linea, una seca o dar pasos de fortnite si no hiciste lo que predica el texto.
        <br />
        <span role='img' aria-label='Corazon'>❤️️</span>
      </Header>
      <GameGeneric game='YoNunca' tippyText='Yo nunca hice click a esto... (Ahora toma o te hago la gran Nisman)' callback={yoNunca} color='pink'>Yo Nunca...</GameGeneric>
    </>
  );

};

export default YoNunca;
