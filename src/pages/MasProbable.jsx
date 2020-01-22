import React, { useEffect } from 'react';
import Header from '../components/Header';
import GameGeneric from '../components/GameGeneric';

const MasProbable = () => {

  const numeroSwitch = [];
  let numMath = 4;
  for (let i = 0;i < numMath;i++) {
    numeroSwitch[i] = i + 1;
  }

  const masProbableA = () => {
    let p = document.querySelector('.masProbableBody-p');
    const parentP = document.querySelector('.masProbableBody__parent-p');
    let masProbable;
    const numAleatorio = Math.floor((Math.random() * numMath));
    switch (numeroSwitch[numAleatorio]) {
      case 1:
        masProbable = document.createTextNode('Tomar falopa');
        break;
      case 2:
        masProbable = document.createTextNode('Bailar en pelotas');
        break;
      case 3:
        masProbable = document.createTextNode('Ser fan del polaco');
        break;
      case 4:
        masProbable = document.createTextNode('Ser emo');
        break;
      default:
        masProbable = document.createTextNode('Cagarse en clase');
        break;
    }
    p.remove();
    p = document.createElement('p');
    p.classList.add('masProbableBody-p', 'animated', 'fadeIn', 'faster');
    p.appendChild(masProbable);
    parentP.appendChild(p);
    numeroSwitch.splice(numAleatorio, 1);
    numMath--;
  };

  useEffect(() => {
    document.querySelector('.App').style.backgroundColor = 'purple';
    masProbableA();
  }, []);

  return (
    <>
      <Header title='Mas Probable A' button='Entendi todito'>El juego trata sobre divertirse</Header>
      <GameGeneric game='masProbable' tippyText='¿Quien es más probable a estar leyendo esto?' callback={masProbableA} color='purple'>Quien Es Más Probable A...</GameGeneric>
    </>
  );
};

export default MasProbable;
