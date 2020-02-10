import { getCookie, setCookie, peticion } from './funciones';
import skeleton from './assets/static/skeleton.svg';

const constructor = () => {
  let petVerdadOReto;
  let petYoNunca;
  let petMasPropenso;
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
      petVerdadOReto = peticion('truthOrDare/read/all');
      petYoNunca = peticion('iNever/read/all');
      petMasPropenso = peticion('moreProne/read/all');
    });
  } else {
    petVerdadOReto = peticion('truthOrDare/read/all');
    petYoNunca = peticion('iNever/read/all');
    petMasPropenso = peticion('moreProne/read/all');
  }
};

export default constructor;
