import React, { useEffect } from 'react';
import Header from '../components/Header';
import GameGeneric from '../components/GameGeneric';
import { gameGeneric, getCookieJson } from '../funciones';
import yoNuncaJson from '../json/yoNunca.json';

function YoNunca() {
  const numeroSwitch = [];
  let numMath = getCookieJson('yoNunca').length || yoNuncaJson.length;
  for (let i = 0;i < numMath;i++) {
    numeroSwitch[i] = i ;
  }

  const yoNunca = () => {
    const json = getCookieJson('yoNunca') || yoNuncaJson;
    const numAleatorio = gameGeneric('YoNunca', json, numMath, numeroSwitch, 'Ya no hay mas "Yo Nunca". Juga otra cosa o quebra.');
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
