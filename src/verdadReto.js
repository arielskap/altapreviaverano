import { getLocalStorageJson, hasRandom } from './funciones';
import retoPicanteJson from './json/retoPicante.json';
import retoSuaveJson from './json/retoSuave.json';
import verdadPicanteJson from './json/verdadPicante.json';
import verdadSuaveJson from './json/verdadSuave.json';

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
    retorno = verdadSuave.length > 0 ? [hasRandom(verdadSuave[numSuave]), verdadSuave[numSuave].user.instagram] : [hasRandom(verdadSuaveJson[numSuave]), verdadSuaveJson[numSuave].user.instagram];
  } else {
    retorno = verdadPicante.length > 0 ? [hasRandom(verdadPicante[numPicante]), verdadPicante[numPicante].user.instagram] : [hasRandom(verdadPicanteJson[numPicante]), verdadPicanteJson[numPicante].user.instagram];
  }
  return retorno;
};

export const reto = (juego) => {
  const retoSuave = getLocalStorageJson('retoSuave');
  const retoPicante = getLocalStorageJson('retoPicante');
  let lengthSuave;
  let lengthPicante;
  if (retoSuave.length) {
    lengthSuave = retoSuave.length;
  } else {
    lengthSuave = retoSuaveJson.length;
  }
  if (retoPicante.length) {
    lengthPicante = retoPicante.length;
  } else {
    lengthPicante = retoPicanteJson.length;
  }
  const numSuave = Math.floor((Math.random() * lengthSuave));
  const numPicante = Math.floor((Math.random() * lengthPicante));
  let retorno;
  if (juego === 'Suave') {
    retorno = retoSuave.length ? [hasRandom(retoSuave[numSuave]), retoSuave[numSuave].user.instagram] : [hasRandom(retoSuaveJson[numSuave]), retoSuaveJson[numSuave].user.instagram];
  } else {
    retorno = retoPicante.length ? [hasRandom(retoPicante[numPicante]), retoPicante[numPicante].user.instagram] : [hasRandom(retoPicanteJson[numPicante]), retoPicanteJson[numPicante].user.instagram];
  }
  return retorno;
};

