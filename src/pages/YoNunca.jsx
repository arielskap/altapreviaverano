import React, { useEffect } from 'react';
import Header from '../components/Header';
import GameGeneric from '../components/GameGeneric';

function YoNunca() {
  const numeroSwitch = [];
  let numMath = 4;
  for (let i = 0;i < numMath;i++) {
    numeroSwitch[i] = i;
  }

  const yoNunca = () => {
    let p = document.querySelector('.YoNuncaBody-p');
    const parentP = document.querySelector('.YoNuncaBody__parent-p');
    let pInstagram = document.querySelector('.p-instagram');
    const parentInstagram = document.querySelector('.div-instagram');
    let yoNunca;
    const numAleatorio = Math.floor((Math.random() * numMath));
    const json = [{
      id: 1,
      text: 'Meti la mano en el agua del inodoro',
      instagram: 'ecstasy.ring',
    }, {
      id: 2,
      text: 'Tome alcohol',
    }, {
      id: 3,
      text: 'Me desnude en publico',
    }, {
      id: 4,
      text: 'Bailé Fortnite',
      instagram: 'ni.idea',
    }];
    if (numeroSwitch[numAleatorio] !== undefined) {
      yoNunca = document.createTextNode(json[numeroSwitch[numAleatorio]].text);
      if (json[numeroSwitch[numAleatorio]].instagram) {
        pInstagram.remove();
        pInstagram = document.createElement('p');
        pInstagram.classList.add('p-instagram');
        pInstagram.appendChild(document.createTextNode(json[numeroSwitch[numAleatorio]].instagram));
        parentInstagram.appendChild(pInstagram);
      } else {
        pInstagram.remove();
      }
    } else {
      yoNunca = document.createTextNode('Ya no hay mas "Yo Nunca". Juga otra cosa o quebra.');
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
