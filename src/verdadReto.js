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
  const verdadSuave = [{
    'id': 1,
    'text': '¿Con cuantos de esta ronda chapaste?',
  }, {
    'id': 2,
    'text': '¿Cual es tu categoria de porno favorita?',
    'instagram': 'ecstasy.ring',
  }, {
    'id': 3,
    'text': '¿Te chapaste a algun familiar?',
  }, {
    'id': 4,
    'text': '¿Cuantas veces quebraste?',
    'instagram': 'eskere.dou',
  }, {
    'id': 5,
    'text': '¿Si no conocieras a nadie de la ronda, a quien le darias?',
    'instagram': 'wow.wow',
  }, {
    'id': 6,
    'text': '¿Te calienta algun familiar?',
  }, {
    'id': 7,
    'text': '¿Cuanta plata crees haberte gastado en drogas y/o alcohol?',
  }, {
    'id': 8,
    'text': '¿Que es lo que más te atrae en otra persona?',
    'instagram': 'lalla.lo',
  }];
  const verdadPicante = [{
    'id': 1,
    'text': '¿A cuantas personas le hiciste sexo oral?',
    'instagram': 'fafa',
  }, {
    'id': 2,
    'text': '¿Que morbo tenes en el sexo?',
    'instagram': 'fufu',
  }, {
    'id': 3,
    'text': '¿Cuantas veces por semana te masturbas?',
  }, {
    'id': 4,
    'text': '¿Quien crees que tiene la pija más grande?',
    'instagram': 'tra',
  }, {
    'id': 5,
    'text': '¿Con cuantas personas tuviste sexo?',
  }, {
    'id': 6,
    'text': '¿Tenes algun juguete sexual? ¿Cual?',
  }, {
    'id': 7,
    'text': '¿Cual es tu posicion sexual favorita?',
    'instagram': 'paaaa.paaaa',
  }, {
    'id': 8,
    'text': '¿Hiciste algun trio?¿Si no con quien lo harias de la ronda?',
  }];
  if (juego === 'Suave') {
    retorno = [verdadSuave[num].text, verdadSuave[num].instagram || null];
  } else {
    retorno = [verdadPicante[num].text, verdadPicante[num].instagram || null];
  }
  return retorno;
};

export const reto = (juego) => {
  const num = Math.floor((Math.random() * 8));
  let retorno;
  const retoSuave = [{
    'id': 1,
    'text': '¡Sacate una prenda!',
    'instagram': 'lulll.jk',
  }, {
    'id': 2,
    'text': `Dale un pico al que tengas ${lugar()}`,
  }, {
    'id': 3,
    'text': `Quitale una prenda al que tengas ${lugar()}`,
  }, {
    'id': 4,
    'text': 'Dale un pico a la persona que te parezca mas linda',
    'instagram': 'fyhf.fjh',
  }, {
    'id': 5,
    'text': `Dejar el celu por 15 segundos (sin contraseña) al que esta ${lugar()}`,
  }, {
    'id': 6,
    'text': 'Los de la ronda haran una bebida y la tomaras',
    'instagram': 'rtdr.dhgbndf',
  }, {
    'id': 7,
    'text': 'El grupo publicara una historia en tu Instagram',
  }, {
    'id': 8,
    'text': 'Estas acargo de la musica! Pone los temas que vos quieras hasta que le toque a otro.',
  }];
  const retoPicante = [{
    'id': 1,
    'text': `Beso copado al que tengas ${lugar()}`,
  }, {
    'id': 2,
    'text': 'Beso copado a la persona que te parezca más linda',
    'instagram': 'www.asdasdasf',
  }, {
    'id': 3,
    'text': `Hace un chupon (No marques!!!) al que tengas ${lugar()}`,
  }, {
    'id': 4,
    'text': `Encerrate por 5 min con el que este ${lugar()}. (El juego seguira y se salteara a les que esten encerrades)`,
    'instagram': 'www.sfdsfsdf',
  }, {
    'id': 5,
    'text': `Dejar el celu por 30 segundos (sin contraseña) al que esta ${lugar()}`,
  }, {
    'id': 6,
    'text': 'Manda una "nude" a alguien de este grupo',
    'instagram': 'sdgsdgs_Sdgsgsd',
  }, {
    'id': 7,
    'text': 'El grupo publicara algo a tu feed de Instagram',
  }, {
    'id': 8,
    'text': 'Toma un chupito desde el cuerpo de otra persona',
    'instagram': 'sfetet_dfsgsfdg',
  }];
  if (juego === 'Suave') {
    retorno = [retoSuave[num].text, retoSuave[num].instagram || null];
  } else {
    retorno = [retoPicante[num].text, retoPicante[num].instagram || null];
  }
  return retorno;
};

