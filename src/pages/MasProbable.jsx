import React, { useEffect } from 'react';
import Header from '../components/Header';
import GameGeneric from '../components/GameGeneric';
import { gameGeneric, getLocalStorageJson, mostrarInstruc } from '../funciones';
import masProbableJson from '../json/masProbable.json';

const MasProbable = () => {

  const numeroSwitch = [];
  let numMath;
  let isLocal = true;
  if (getLocalStorageJson('masProbable')) {
    if (getLocalStorageJson('masProbable').length > 0) {
      numMath = getLocalStorageJson('masProbable').length;
      isLocal = false;
    } else {
      numMath = masProbableJson.length;
    }
  } else {
    numMath = masProbableJson.length;
  }
  for (let i = 0;i < numMath;i++) {
    numeroSwitch[i] = i ;
  }

  const masProbableA = () => {
    const json = isLocal ? masProbableJson : getLocalStorageJson('masProbable');
    const numAleatorio = gameGeneric('masProbable', json, numMath, numeroSwitch, 'F');
    numeroSwitch.splice(numAleatorio, 1);
    numMath--;
  };

  useEffect(() => {
    document.querySelector('.App').style.backgroundColor = 'purple';
    masProbableA();
    mostrarInstruc('masProbable');
  }, []);

  return (
    <>
      <Header title='Instrucciones' button='Apa la papaa'>
        Se debe señalar a la persona que es &quot;más probable a&quot; x cosa, luego la misma bebera o tendra que hacer alguna prenda
        <br />
        <span role='img' aria-label='Corazon'>❤️️</span>
      </Header>
      <GameGeneric game='masProbable' tippyText='¿Quien es más probable a estar leyendo esto?' callback={masProbableA} color='purple'>Quien Es Más Probable A...</GameGeneric>
    </>
  );
};

export default MasProbable;
