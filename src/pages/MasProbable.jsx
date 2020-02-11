import React, { useEffect } from 'react';
import Header from '../components/Header';
import GameGeneric from '../components/GameGeneric';
import { gameGeneric } from '../funciones';

const MasProbable = () => {

  const numeroSwitch = [];
  let numMath = 4;
  for (let i = 0;i < numMath;i++) {
    numeroSwitch[i] = i + 1;
  }

  const masProbableA = () => {
    const json = [{
      id: 1,
      text: 'Tomar falopa',
      instagram: 'ecstasy_ring',
    }, {
      id: 2,
      text: 'Bailar en pelotas',
    }, {
      id: 3,
      text: 'Ser fan del polaco',
      instagram: 'asdasda.fg',
    }, {
      id: 4,
      text: 'Ser emo',
    }, {
      id: 5,
      text: 'Cagarse en clase',
      instagram: 'jiji.jojo',
    }];
    const numAleatorio = gameGeneric('masProbable', json, numMath, numeroSwitch, 'F');
    numeroSwitch.splice(numAleatorio, 1);
    numMath--;
  };

  useEffect(() => {
    document.querySelector('.App').style.backgroundColor = 'purple';
    masProbableA();
  }, []);

  return (
    <>
      <Header title='Instrucciones' button='Apa la papaa'>
        Se debe señalar a la persona que es &quot;más probable a&quot; x cosa, luego la misma bebera o tendra que hacer algun prenda
        <br />
        <span role='img' aria-label='Corazon'>❤️️</span>
      </Header>
      <GameGeneric game='masProbable' tippyText='¿Quien es más probable a estar leyendo esto?' callback={masProbableA} color='purple'>Quien Es Más Probable A...</GameGeneric>
    </>
  );
};

export default MasProbable;
