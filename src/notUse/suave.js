let contPicante = getCookie('cantPicante');
//∞
//$(p).text("Vegan");
//$(p).text("¿busca en internet *algo asqueroso como blue balls*?");
//$(p).text("Deberas hacer x posiciones con la persona a tu....");
//$(p).text("Tenes 10 segundos para decir el nombre de todas las personas que juegan. En caso de fracasar, deberas besar a las personas que no hayas dicho su nombre"); //Agregar boton y contador
let flag = 0;
let flagContador = 0;
let escracho = 0;
function getCookie(cname) {
  const name = `${cname}=`;
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
}
const animationEnd = (function (el) {
  const animations = {
    animation: 'animationend',
    OAnimation: 'oAnimationEnd',
    MozAnimation: 'mozAnimationEnd',
    WebkitAnimation: 'webkitAnimationEnd',
  };

  for (const t in animations) {
    if (el.style[t] !== undefined) {
      return animations[t];
    }
  }
})(document.createElement('div'));

function escrachoOn() {
  escracho = 1;
  console.log('entre');
}
function bye() {
  $('body').addClass('animated fadeOut faster').one(animationEnd, () => {
    window.location.href = 'menuReto.html';
  });
}

function cargar() {
  $('#carga').addClass('animated fadeOut slow').one(animationEnd, () => {
    $('#carga').queue(function () { $(this).remove(); });
  });
}
function ocultar() {
  if (contPicante <= 0) {
    if (flag == 0) {
      contador();
      flag = 1;
    }
  } else {
    if (flag == 0) {
      $('#contador').text(contPicante);
      $('#fort').hide();
      flag = 1;
    }
  }
  $('p').hide();
  $('#bAleatorio').hide();
  $('#numAleatorio').hide();
  if (escracho == 1) {
    imagenesRandom();
    $('#random').hide();
  }
  $('#spin').hide();
  $('#pSpin').hide();
  $('#botonReto').hide();
  $('#botonRealizado').hide();
  $('#botonRealizado').removeClass('rounded-0');
}

function mostrar() {
  $('#bottle').show();
  $('#verdad').show();
  $('#reto').show();
  if (contPicante <= 0) {
    $('#titulo').text('Picante');
    $('#fort').show();
  }
  $('.popover').show();
}

function contador() {
  if (contPicante > 0) {
    contPicante--;
    $('#contador').text(contPicante);
  }
  if (contPicante <= 0 && flagContador == 0) {
    $('body').removeClass('bg-dark text-white').addClass('text-black');
    $('#h1').removeClass('bg-info');
    $('body').css('background', 'linear-gradient(to right,rgb(182, 27, 27), rgb(223, 223, 98))');
    $('#contador').hide();
    $('#titulo').text('Picante');
    $('#fort').show();
    flagContador = 1;
  }
}

function verdad(elije) {
  let num;
  let opcion;
  let cuerpo;
  const p = '#pVerdad';
  if (elije == 0 && contPicante != 0) {
    num = Math.floor((Math.random() * 61) + 1);
    switch (num) {
      case 1:
        $(p).text('¿Con cuantos de esta ronda chapaste?');
        break;
      case 2:
        $(p).text('¿Cual es tu categoria de porno favorita?');
        break;
      case 3:
        $(p).text('¿Te chapaste a algun familiar?');
        break;
      case 4:
        $(p).text('¿Cuantas veces quebraste?');
        break;
      case 5:
        $(p).text('¿Si no conocieras a nadie de la ronda, a quien le darias?');
        break;
      case 6:
        $(p).text('¿Te calienta algun familiar?');
        break;
      case 7:
        $(p).text('¿Cuanta plata crees haberte gastado en drogas y/o alcohol?');
        break;
      case 8:
        $(p).text('¿Que es lo que más te atrae en otra persona?');
        break;
      case 9:
        $(p).text('¿Quien crees que coge mejor?');
        break;
      case 10:
        $(p).text('¿Con quien de la ronda harías un trio?');
        break;
      case 11:
        $(p).text('¿Tenes depilada tu zona intima?');
        break;
      case 12:
        $(p).text('¿Con quien del grupo saldrías a una cita?');
        break;
      case 13:
        $(p).text('¿Con que famoso/a tendrías sexo?');
        break;
      case 14:
        $(p).text('¿Que crees que piensan de vos y es falso?');
        break;
      case 15:
        $(p).text('¿Dejarías a una pareja para siempre por un millón de dolares?');
        break;
      case 16:
        $(p).text('¿Cómo fue tu primer beso?');
        break;
      case 17:
        $(p).text('¿Alguna vez metiste los cuernos?');
        break;
      case 18:
        $(p).text('Si te perdieras en una isla desierta, ¿A quien del grupo te llevarías?');
        break;
      case 19:
        $(p).text('¿En el cuerpo de quien del grupo te gustaría estar un día?');
        break;
      case 20:
        $(p).text('¿Sentiste atracción por un amigue de tu ex/pareja?');
        break;
      case 21:
        $(p).text('¿Cuál es el sitio más extraño en que has conocido a una persona con la que terminaste saliendo?');
        break;
      case 22:
        $(p).text('¿Cogiste en tu trabajo?');
        break;
      case 23:
        $(p).text('¿Lugar más raro en donde has tenido sexo?');
        break;
      case 24:
        $(p).text('¿Qué parte del cuerpo prefieres en personas del mismo sexo que tú?');
        break;
      case 25:
        opcion = Math.floor((Math.random() * 2) + 1);
        switch (opcion) {
          case 1:
            cuerpo = 'larga';
            break;
          case 2:
            cuerpo = 'corta';
            break;
        }
        $(p).text(`¿Cuanto duro tu relación más ${cuerpo}?`);
        break;
      case 26:
        $(p).text('¿Seco, húmedo o mojado?');
        break;
      case 27:
        opcion = Math.floor((Math.random() * 2) + 1);
        switch (opcion) {
          case 1:
            cuerpo = 'menos';
            break;
          case 2:
            cuerpo = 'más';
            break;
        }
        $(p).text(`¿Cuál es la parte que ${cuerpo} te gusta de tu cuerpo?`);
        break;
      case 28:
        $(p).html('Conta algo "malo" que hayas hecho de chique.');
        break;
      case 29:
        $(p).text('¿Cómo aprendiste a besar?');
        break;
      case 30:
        $(p).text('¿Que te gusta que te acaricien?');
        break;
      case 31:
        $(p).text('¿Que es lo peor que hiciste por celos?');
        break;
      case 32:
        $(p).text('Nombra actores y actrices porno que conozcas');
        break;
      case 33:
        $(p).text('Describi la sensación de orgasmo en una palabra');
        break;
      case 34:
        $(p).text('¿Viste o ves porno en stream?');
        break;
      case 35:
        $(p).text('¿Te descubrieron masturbandote?');
        break;
      case 36:
        $(p).text('¿Cual es tu orden de prioridad: tener sexo, comer o dormir?');
        break;
      case 37:
        $(p).text('¿Perdonarias una infidelidad?');
        break;
      case 38:
        $(p).text('¿Qué es lo más extraño que has buscado en internet?');
        break;
      case 39:
        $(p).text('¿Cuándo ha sido el momento más inapropiado de tu vida en que te has tirado un pedo?');
        break;
      case 40:
        $(p).text('¿Cuál es el hábito más repugnante que tienes?');
        break;
      case 41:
        $(p).text('¿A quién salvarías del grupo si viene un meteorito y solo puedes salvar a una persona?');
        break;
      case 41:
        $(p).text('¿Cuál es tu estrategia para conquistar a una persona?');
        break;
      case 42:
        $(p).text('¿Cuál es la cosa más cara que has robado?');
        break;
      case 43:
        $(p).text('¿Cuál es la cosa más tonta a la que tienes un apego emocional?');
        break;
      case 44:
        $(p).text('¿Cuál es tu miedo irracional?');
        break;
      case 45:
        $(p).text('¿Cuál es el lugar más extraño en el que has orinado?');
        break;
      case 46:
        opcion = Math.floor((Math.random() * 2) + 1);
        switch (opcion) {
          case 1:
            cuerpo = ' fisico';
            break;
          case 2:
            cuerpo = ' boca';
            break;
          case 3:
            cuerpo = 'es ojos';
            break;
        }
        $(p).text(`¿Quien tiene mejor${cuerpo} del grupo?`);
        break;
      case 47:
        $(p).text('Que persona del grupo es más linda de cara?');
        break;
      case 48:
        $(p).text('Si pudieras volver a hacer una cosa que hiciste en tu infancia, ¿Cuál sería?');
        break;
      case 49:
        $(p).text('¿Alguna vez le enviaste un texto inapropiado a tus tutores por accidente?');
        break;
      case 50:
        $(p).text('Quien crees que a mejorado su aspecto fisico');
        break;
      case 51:
        $(p).text('¿De quien te has enamorado alguna vez y no se lo has contado?');
        break;
      case 52:
        $(p).text('¿Qué te gustaría cambiar de tu cuerpo?');
        break;
      case 53:
        $(p).text('¿Qué película elegirías si pudieras convertirla en tu vida?');
        break;
      case 54:
        $(p).text('¿Cuál es tu película favorita de Disney y por qué?');
        break;
      case 55:
        $(p).text('¿Alguna vez pensaste en engañar a tu pareja?');
        break;
      case 56:
        $(p).text('¿Cuál fue tu primera impresión de tu ex/pareja cuando se conocieron?');
        break;
      case 57:
        $(p).text('¿Como te ves de aca a 10 años?');
        break;
      case 58:
        $(p).text('Relata la mejor joda a la que hayas ido.');
        break;
      case 59:
        $(p).text('¿Alguna vez te han sacado de un bar o un boliche?¿Por que?');
        break;
      case 60:
        $(p).text('¿Parado o acostado?');
        break;
      case 61:
        $(p).text('Deci 3 dibujitos que hayas visto de chique');
        break;
    }
  }
  if (elije == 1 || contPicante <= 0) {
    num = Math.floor((Math.random() * 41) + 1);
    switch (num) {
      case 1:
        $(p).text('¿A cuantas personas le hiciste sexo oral?');
        break;
      case 2:
        $(p).text('¿Que morbo tenes en el sexo?');
        break;
      case 3:
        $(p).text('¿Cuantas veces por semana te masturbas?');
        break;
      case 4:
        $(p).text('¿Quien crees que tiene la pija más grande?');
        break;
      case 5:
        $(p).text('¿Con cuantas personas tuviste sexo?');
        break;
      case 6:
        $(p).text('¿Tenes algun juguete sexual? ¿Cual?');
        break;
      case 7:
        $(p).text('¿Cual es tu posicion sexual favorita?');
        break;
      case 8:
        $(p).text('¿Hiciste algun trio?¿Si no con quien lo harias de la ronda?');
        break;
      case 9:
        $(p).text('¿Que te calienta de la otra persona?');
        break;
      case 10:
        $(p).text('¿Te cabe el sadomasoquismo?');
        break;
      case 11:
        $(p).text('¿Te metieron/metiste un dedo en el ano alguna vez?');
        break;
      case 12:
        $(p).text('¿Que haces si ves a tu pareja masturbandose?');
        break;
      case 13:
        $(p).text('¿Que fantasía sexual tenes?');
        break;
      case 14:
        $(p).text('¿Sentiste atracción por un amigue de tu ex/pareja?¿Quien?');
        break;
      case 15:
        $(p).text('¿Por qué rompiste con tu ex pareja?');
        break;
      case 16:
        $(p).text('¿Metiste los cuernos?');
        break;
      case 17:
        $(p).text('¿Si no conocieras a nadie del grupo con quien tendrías sexo?');
        break;
      case 18:
        $(p).text('¿Cogiste con más de una persona en menos de 24hs?(No cuenta trio/orgia)');
        break;
      case 19:
        $(p).text('¿Del grupo, quién crees que tiene más sex-appeal?');
        break;
      case 20:
        $(p).text('¿Algún disfraz que te excite?');
        break;
      case 21:
        $(p).text('¿Tuviste conversaciones excitantes/subidas de tono por un chat?');
        break;
      case 22:
        $(p).text('¿Cuanta difrenecia de edad has tenido con alguien en la cama?(mayor y menor)');
        break;
      case 23:
        $(p).text('¿Hoy, te masturbaste?');
        break;
      case 24:
        $(p).text('¿Cuál es el objeto más extraño que te has insertado en el cuerpo?');
        break;
      case 25:
        $(p).text('¿Cogiste alguna vez al aire libre?');
        break;
      case 26:
        $(p).text('¿Te masturbaste en el colegio alguna vez?');
        break;
      case 27:
        $(p).text('¿Tuviste sexo en la cama de tus tutores?');
        break;
      case 28:
        $(p).text('Conta un sueño caliente que hayas tenido con alguien del grupo');
        break;
      case 29:
        $(p).text('¿Tanga o bombacha?');
        break;
      case 30:
        $(p).text('¿Cuál es la parte más sensible de tu cuerpo?');
        break;
      case 31:
        $(p).text('¿Cuál es tu pagina porno favorita?');
        break;
      case 32:
        $(p).text('¿Cómo fue tu primera vez?');
        break;
      case 33:
        opcion = Math.floor((Math.random() * 2) + 1);
        switch (opcion) {
          case 1:
            cuerpo = 'es tetas';
            break;
          case 2:
            cuerpo = ' culo';
            break;
        }
        $(p).text(`¿Quien tiene mejor${cuerpo} del grupo?`);
        break;
      case 34:
        $(p).text('Deci algo que te destaques en el sexo.');
        break;
      case 35:
        $(p).text('Conta una experiencia incomoda que hayas tenido en el sexo.');
        break;
      case 36:
        opcion = Math.floor((Math.random() * 2) + 1);
        switch (opcion) {
          case 1:
            cuerpo = 'mejor';
            break;
          case 2:
            cuerpo = 'peor';
            break;
        }
        $(p).text(`Di el nombre de la persona que hayas tenido ${cuerpo} sexo.`);
        break;
      case 37:
        $(p).text('¿Cuál es la máxima cantidad de orgasmos que has tenido en el sexo?');
        break;
      case 38:
        $(p).text('¿Te descubrieron teniendo sexo?');
        break;
      case 39:
        $(p).text('¿Alguna vez has tenido que usar un anticonceptivo de emergencia?');
        break;
      case 40:
        $(p).text('¿Alguna vez has tenido relaciones sexuales mientras otras personas te miran?');
        break;
      case 41:
        $(p).text('¿Te gusta que te escupan? Cerdo, puerco...');
        break;
    }
  }
  if (elije == 0) {
    $('#pVerdad').show();
    $('#botonReto').attr('onclick', 'reto(1);');
    mostrarVerdadReto();
    $('.popover').hide();
  }
  if (elije == 1) {
    $('#pVerdad').show();
    mostrarVerdadReto2();
  }
}

function reto(elije) {
  let num;
  let opcion;
  let palabra;
  let cuerpo;
  const p = '#pReto';
  if (elije == 0 && contPicante != 0) {
    num = Math.floor((Math.random() * 28) + 1);
    switch (num) {
      case 1:
        $(p).text('¡Sacate una prenda!');
        break;
      case 2:
        palabra = lugar();
        $(p).text(`Dale un pico al que tengas ${palabra}`);
        break;
      case 3:
        palabra = lugar();
        $(p).text(`Quitale una prenda al que tengas ${palabra}`);
        break;
      case 4:
        $(p).text('Dale un pico a la persona que te parezca mas linda');
        break;
      case 5:
        palabra = lugar();
        $(p).text(`Dejar el celu por 15 segundos (sin contraseña) al que esta ${palabra}`);
        break;
      case 6:
        $(p).text('Los de la ronda haran una bebida y la tomaras');
        break;
      case 7:
        opcion = Math.floor((Math.random() * 3) + 1);
        switch (opcion) {
          case 1:
            cuerpo = 'el pie';
            break;
          case 2:
            cuerpo = 'el cuello';
            break;
          case 3:
            cuerpo = 'la pierna';
            break;
        }
        palabra = lugar();
        $(p).text(`Lame ${cuerpo} al que tengas ${palabra}`);
        break;
      case 8:
        opcion = Math.floor((Math.random() * 4) + 1);
        switch (opcion) {
          case 1:
            palabra = '1 trago';
            break;
          case 2:
            palabra = '2 tragos';
            break;
          case 3:
            palabra = '3 tragos';
            break;
          case 4:
            palabra = '4 tragos';
            break;
        }
        $(p).text(`Toma ${palabra}`);
        break;
      case 9:
        $(p).text('El grupo publicara una historia en tu Instagram');
        break;
      case 10:
        $(p).text('Estas acargo de la musica! Pone los temas que vos quieras hasta que le toque a otro.');
        break;
      case 11:
        $(p).text('Intercambia prendas con una persona de difrente sexo.');
        break;
      case 12:
        $(p).text('Tenes que decir que persona de la ronda quiere darle a otra persona (Si no sabes ninguna, inventa).');
        break;
      case 13:
        $(p).text('Deberas mantenerte en un chat aleatorio hasta que te toque de nuevo (Ej: Omegle, Chatroulette, etc)');
        break;
      case 14:
        $(p).text('Tirar un freestyle (Que dure minimo 20 segundos)');
        break;
      case 15:
        palabra = lugar();
        $(p).text(`Vos y la persona que tengas ${palabra} deberan reposicionarse, taparse los ojos e intentar besar al otro`);
        break;
      case 16:
        palabra = lugar();
        $(p).text(`Hacer Strip Dance a la persona que tengas ${palabra}`);
        break;
      case 17:
        palabra = lugar();
        $(p).text(`Vos y la persona que tengas ${palabra} deberan gemir como si tuvieran sexo`);
        break;
      case 18:
        palabra = lugar();
        $(p).text(`Dale un masaje hasta que te toque de nuevo a la persona ${palabra}`);
        break;
      case 19:
        palabra = lugar();
        $(p).text(`Sacale una prenda de ropa a la persona ${palabra}`);
        break;
      case 20:
        palabra = lugar();
        $(p).text(`Pasale un hielo a la persona ${palabra} con la boca`);
        break;
      case 21:
        $(p).text('Habla con acento extranjero hasta que te toque de nuevo');
        break;
      case 22:
        palabra = lugar();
        $(p).text(`Baila por 20 segundos la cancion que ponga la persona ${palabra}`);
        break;
      case 23:
        $(p).text('Mostra algun talento tuyo.');
        break;
      case 24:
        $(p).text('¿A quien votaste como presidente?');
        break;
      case 25:
        $(p).text('Todas las personas de "Capital" toman');
        break;
      case 26:
        $(p).text('Escudo de virginidad ACTIVADO. Por una ronda no participas, ahora poder mirar anime tranquile');
        break;
      case 27:
        $(p).text('Si usas anteojos te los deberas quitar por dos rondas. En caso de no tener, se lo quitaras a alguien de la ronda.');
        break;
      case 28:
        $(p).text('Deberas likear las primeras 6 fotos que te aparecen en Instagram');
        break;
    }
  }
  if (elije == 1 || contPicante <= 0) {
    num = Math.floor((Math.random() * 30) + 1);
    switch (num) {
      case 1:
        palabra = lugar();
        $(p).text(`Beso copado al que tengas ${palabra}`);
        break;
      case 2:
        $(p).text('Beso copado a la persona que te parezca más linda');
        break;
      case 3:
        palabra = lugar();
        $(p).text(`Hace un chupon (No marques!!!) al que tengas ${palabra}`);
        break;
      case 4:
        opcion = Math.floor((Math.random() * 5) + 1);
        switch (opcion) {
          case 1:
            palabra = '5 tragos';
            break;
          case 2:
            palabra = '6 tragos';
            break;
          case 3:
            palabra = '7 tragos';
            break;
          case 4:
            palabra = 'medio vaso';
            break;
          case 5:
            palabra = 'lo que queda del vaso';
            break;
        }
        $(p).text(`Toma ${palabra}`);
        break;
      case 5:
        palabra = lugar();
        $(p).text(`Encerrate por 5 min con el que este ${palabra}. (El juego seguira y se salteara a les que esten encerrades)`);
        break;
      case 6:
        palabra = lugar();
        $(p).text(`Dejar el celu por 30 segundos (sin contraseña) al que esta ${palabra}`);
        break;
      case 7:
        $(p).text('Tapate los ojos. Los demas jugadores deberan decir un numero del 1 al 10. El que acierte el numero debera besar a la persona con los ojos tapados (En caso de que mas de uno acierte, aun así deberan besarla). Luego debera adivinar quien fue.');
        $('#bAleatorio').show();
        break;
      case 8:
        $(p).html('Manda una "nude" a alguien de este grupo');
        break;
      case 9:
        $(p).text('El grupo publicara algo a tu feed de Instagram');
        break;
      case 10:
        $(p).text('Toma un chupito desde el cuerpo de otra persona');
        break;
      case 11:
        palabra = lugar();
        $(p).text(`La persona ${palabra} te tocara una de estas tres zonas: Pechos, cola o parte intima`);
        break;
      case 12:
        palabra = lugar();
        $(p).text(`Susurrar una actividad sexual a la persona ${palabra}`);
        break;
      case 13:
        palabra = lugar();
        $(p).text(`Chupar el dedo de forma sexual a la persona ${palabra}`);
        break;
      case 14:
        palabra = lugar();
        $(p).text(`Hacer un chupon en una parte del cuerpo que no se vea a la persona ${palabra}`);
        break;
      case 15:
        $(p).text('¡Sacate tres prendas!');
        break;
      case 16:
        $(p).text('Elige dos jugadores que deberán besarse.');
        break;
      case 17:
        palabra = lugar();
        $(p).text(`Dale una buena nalgada a la persona ${palabra}`);
        break;
      case 18:
        palabra = lugar();
        $(p).text(`Sacale dos prendas de ropa a la persona ${palabra}`);
        break;
      case 19:
        palabra = Math.floor((Math.random() * 2) + 1);
        switch (palabra) {
          case 1:
            palabra = 'a la derecha';
            break;
          case 2:
            palabra = 'a la izquierda';
            break;
        }
        $(p).text(`¡Una ronda en donde se pasaran un hielo de boca en boca! Empezas vos con la persona ${palabra}`);
        break;
      case 20:
        $(p).text('Mostra un poco de tu ropa interior.');
        break;
      case 21:
        $(p).text('Balotagge: Cristina Kirchner vs Mauricio, el gato, Macri. ¿A quien votas?');
        break;
      case 22:
        $(p).text('Deci una parafilia que tengas');
        break;
      case 23:
        $(p).text('¿Del uno al diez... que tan peludo tenes el culo?');
        break;
      case 24:
        $(p).text('Tendras que contar un spoiler de alguna pelicula/serie.');
        break;
      case 25:
        palabra = Math.floor((Math.random() * 2) + 1);
        switch (palabra) {
          case 1:
            palabra = ' derecha ';
            break;
          case 2:
            palabra = ' izquierda ';
            break;
        }
        $(p).text(`Le daras el celular con alguna aplicación de citas (en caso de no tener instalaras una) a la persona a tu${palabra}por una ronda`);
        break;
      case 26:
        palabra = Math.floor((Math.random() * 2) + 1);
        switch (palabra) {
          case 1:
            palabra = 'más';
            break;
          case 2:
            palabra = 'menos';
            break;
        }
        $(p).text(`Deberas besar a la persona con ${palabra} edad del grupo (Ojoo si sos mayor de 18 y le mas chique es menor, el equipo de 'alta previa' ya esta llamando al FBI`);
        break;
      case 27:
        palabra = Math.floor((Math.random() * 2) + 1);
        switch (palabra) {
          case 1:
            palabra = 'derecha';
            break;
          case 2:
            palabra = 'izquierda';
            break;
        }
        $(p).text(`Si nunca tu viste relaciones sexuales la persona a tu ${palabra} debera regalarte un condon. En caso de si haber tenido relaciones vos se lo tendras que regalar`);
        break;
      case 28:
        $(p).text('Para seguir jugando deberas ingresar tu tarjeta de cred... ah les re afanaba. Safaste no tenes que hacer nada.');
        break;
      case 29:
        palabra = Math.floor((Math.random() * 2) + 1);
        switch (palabra) {
          case 1:
            palabra = 'derecha';
            break;
          case 2:
            palabra = 'izquierda';
            break;
        }
        $(p).text(`Dar el celu a la persona a tu ${palabra} con el chat de una persona con la que estes saliendo. La otra persona podra escribirle lo que quiera por dos rondas`);
        break;
      case 30:
        $(p).text('Deberas jugar una pulseada con la persona que consideres como la más "fuerte". Si perdes, le ganadore debera nalgearte. Si ganas vos le nalgearas.');
        break;
    }
  }
  if (elije == 0) {
    $('#pReto').show();
    $('#botonReto').attr('onclick', 'verdad(1);');
    mostrarVerdadReto();
    $('.popover').hide();
  }
  if (elije == 1) {
    $('#pReto').show();
    mostrarVerdadReto2();
  }
}

function mostrarVerdadReto() {
  $('#verdad').hide();
  $('#reto').hide();
  $('#fort').hide();
  $('#botonReto').show();
  $('#botonRealizado').show();
  if (escracho == 1) {
    $('#random').show();
  }
  $('#spin').hide();
  $('#pSpin').hide();
  $('#bottle').hide();
}

function mostrarVerdadReto2() {
  $('#botonReto').hide();
  $('#botonRealizado').addClass('rounded-0');
}

function lugar() {
  let opcion;
  let palabra;
  opcion = Math.floor((Math.random() * 3) + 1);
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
}

function numAleatorio() {
  const num = Math.floor((Math.random() * 10) + 1);
  $('#bAleatorio').hide();
  $('#numAleatorio').show();
  $('#numAleatorio').text(num);
}

function showBottle() {
  $('#fort').hide();
  $('#pSpin').show();
  $('#spin').show();
  $('.popover').hide();
}

function imagenesRandom() {
  const numImg = Math.floor((Math.random() * 19) + 1);
  const random = '#random';
  switch (numImg) {
    case 1:
      $(random).attr('src', 'img/joda/abril-min.png');
      break;
    case 2:
      $(random).attr('src', 'img/joda/abril2-min.png');
      break;
    case 3:
      $(random).attr('src', 'img/joda/ailu-min.png');
      break;
    case 4:
      $(random).attr('src', 'img/joda/aro-min.png');
      break;
    case 5:
      $(random).attr('src', 'img/joda/aro2-min.png');
      break;
    case 6:
      $(random).attr('src', 'img/joda/aroytiago-min.png');
      break;
    case 7:
      $(random).attr('src', 'img/joda/bruno-min.png');
      break;
    case 8:
      $(random).attr('src', 'img/joda/bruno2-min.png');
      break;
    case 9:
      $(random).attr('src', 'img/joda/chicos-min.png');
      break;
    case 10:
      $(random).attr('src', 'img/joda/chicos2-min.png');
      break;
    case 11:
      $(random).attr('src', 'img/joda/chicos3-min.png');
      break;
    case 12:
      $(random).attr('src', 'img/joda/dani-min.png');
      break;
    case 13:
      $(random).attr('src', 'img/joda/diego-min.png');
      break;
    case 14:
      $(random).attr('src', 'img/joda/joako-min.png');
      break;
    case 15:
      $(random).attr('src', 'img/joda/lucas-min.png');
      break;
    case 16:
      $(random).attr('src', 'img/joda/tiago-min.png');
      break;
    case 17:
      $(random).attr('src', 'img/joda/tiago2-min.png');
      break;
    case 18:
      $(random).attr('src', 'img/joda/juanma-min.png');
      break;
    case 19:
      $(random).attr('src', 'img/joda/carla-min.png');
      break;
  }
}
