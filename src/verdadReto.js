import { getLocalStorageJson } from './funciones';
import retoPicanteJson from './json/retoPicante.json';
import retoSuaveJson from './json/retoSuave.json';
import verdadPicanteJson from './json/verdadPicante.json';
import verdadSuaveJson from './json/verdadSuave.json';

const lugar = () => {
  let palabra;
  const opcion = Math.floor((Math.random() * 3));
  switch (opcion) {
    case 1:
      palabra = 'a la izquierda';
      break;
    case 2:
      palabra = 'a la derecha';
      break;
    case 3:
      palabra = 'enfrente tuyo';
      break;
  }
  return palabra;
};

export const verdad = (juego) => {
  let retorno;
  const verdadSuave = getLocalStorageJson('verdadSuave');
  const verdadPicante = getLocalStorageJson('verdadPicante');
  let lengthSuave;
  let lengthPicante;
  if (verdadSuave.length) {
    lengthSuave = verdadSuave.length;
  } else {
    lengthSuave = verdadSuaveJson.length;
  }
  if (verdadPicante.length) {
    lengthPicante = verdadPicante.length;
  } else {
    lengthPicante = verdadPicanteJson.length;
  }
  const numSuave = Math.floor((Math.random() * lengthSuave));
  const numPicante = Math.floor((Math.random() * lengthPicante));
  if (juego === 'Suave') {
    retorno = verdadSuave.length > 0 ? [verdadSuave[numSuave].body, verdadSuave[numSuave].user.instagram] : [verdadSuaveJson[numSuave].body, verdadSuaveJson[numSuave].user.instagram];
  } else {
    retorno = verdadPicante.length > 0 ? [verdadPicante[numPicante].body, verdadPicante[numPicante].user.instagram] : [verdadPicanteJson[numPicante].body, verdadPicanteJson[numPicante].user.instagram];
  }
  return retorno;
};

export const reto = (juego) => {
  const retoSuave = getLocalStorageJson('retoSuave');
  const retoPicante = getLocalStorageJson('retoPicante');
  const lengthSuave = retoSuave.length || retoSuaveJson.length;
  const lengthPicante = retoPicante.length || retoPicanteJson.length;
  const numSuave = Math.floor((Math.random() * lengthSuave));
  const numPicante = Math.floor((Math.random() * lengthPicante));
  let retorno;
  if (juego === 'Suave') {
    retorno = retoSuave.length ? [retoSuave[numSuave].body, retoSuave[numSuave].user.instagram] : [retoSuaveJson[numSuave].body, retoSuaveJson[numSuave].user.instagram];
  } else {
    retorno = retoPicante.length ? [retoPicante[numPicante].body, retoPicante[numPicante].user.instagram] : [retoPicanteJson[numPicante].body, retoPicanteJson[numPicante].user.instagram];
  }
  return retorno;
};

