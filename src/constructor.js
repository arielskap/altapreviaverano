import { getCookie, setCookie, peticion, showModal, setCookieJson } from './funciones';
import skeleton from './assets/static/skeleton.svg';

const verifySet = (juegos, register = true) => {
  const respuesta = [];
  if (register) {
    for (let i = 0; i < juegos.length; i++) {
      const element = juegos[i];
      respuesta[i] = new Promise((resolve, reject) => {
        resolve(peticion(element.request));
      }).then((res) => {
        if (res === 0) {
          setCookie(element.name, 0, 365);
          if (getCookie('internet') !== '1') {
            showModal('Modal-internet');
          }
          setCookie('internet', 1, 365);
        } else {
          setCookieJson(element.name, res.body, 365);
        }
        return res;
      });
    }
  } else {
    if (getCookie('internet') !== '1') {
      showModal('Modal-internet');
    }
    setCookie('internet', 1, 365);
  }
};

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
    name: 'masProbable',
    request: 'moreProne/read/all',
  }];
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
          return 0;
        })
        .then((response) => {
          console.log('Success register:', response);
          setCookie('access_token', authorization, 365);
          resolve(response);
        });
    }).then((res) => {
      verifySet(juegos, res);
    });
  } else {
    verifySet(juegos);
  }
};

export default constructor;
