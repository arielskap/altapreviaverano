import { getCookie, setCookie, peticion } from './funciones';
import skeleton from './assets/static/skeleton.svg';

const constructor = () => {
  const juegos = [{
    id: 1,
    name: 'verdadOReto',
    request: 'truthOrDare/read/all',
  }, {
    id: 2,
    name: 'yoNunca',
    request: 'iNever/read/all',
  }, {
    id: 3,
    name: 'masPropenso',
    request: 'moreProne/read/all',
  }];
  const respuesta = [];
  let authorization = getCookie('access_token');
  setCookie('sdk', 'abbulHaceAlgoGil', 365);
  if (!authorization || authorization === 'null') {
    setCookie('perfilImg', skeleton, 365);
    setCookie('perfilAlt', 'skeleton', 365);
    new Promise((resolve, reject) => {
      const miInit = { method: 'POST',
        body: JSON.stringify(
          {
            sdk: getCookie('sdk'),
            createdAt: Date.now(),
            country: 'AR',
          },
        ),
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'same-origin',
      };
      fetch('https://altaprevia.herokuapp.com/register', miInit)
        .then((res) => {
          authorization = res.headers.get('authorization');
          authorization = authorization.replace('Bearer', '');
          return res.json();
        })
        .catch((error) => {
          console.error('Error:', error);
          reject(error);
        })
        .then((response) => {
          console.log('Success register:', response);
          setCookie('access_token', authorization, 365);
          resolve(1);
        });
    }).then((res) => {
      for (let i = 0; i < juegos.length; i++) {
        const element = juegos[i];
        respuesta[i] = new Promise((resolve, reject) => {
          resolve(peticion(element.request));
        }).then((res) => {
          setCookie(element.name, res.body);
          return res;
        });
      }
    });
  } else {
    for (let i = 0; i < juegos.length; i++) {
      const element = juegos[i];
      respuesta[i] = new Promise((resolve, reject) => {
        resolve(peticion(element.request));
      }).then((res) => {
        setCookie(element.name, res.body);
        return res;
      });
    }
  }
};

export default constructor;
