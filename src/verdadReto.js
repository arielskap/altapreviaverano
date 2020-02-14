import { getCookieJson } from './funciones';

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
  const num = Math.floor((Math.random() * 8));
  let retorno;
  const json = getCookieJson('verdadOReto');
  const verdadSuave = json.verdad_suave;
  const verdadPicante = json.verdad_picante;
  if (juego === 'Suave') {
    retorno = [verdadSuave[num].body, verdadSuave[num].user.instagram || null];
  } else {
    retorno = [verdadPicante[num].body, verdadPicante[num].user.instagram || null];
  }
  return retorno;
};

export const reto = (juego) => {
  const num = Math.floor((Math.random() * 8));
  let retorno;
  const json = getCookieJson('verdadOReto');
  const retoSuave = json.reto_suave;
  const retoPicante = json.reto_picante;
  if (juego === 'Suave') {
    retorno = [retoSuave[num].body, retoSuave[num].user.instagram || null];
  } else {
    retorno = [retoPicante[num].body, retoPicante[num].user.instagram || null];
  }
  return retorno;
};

