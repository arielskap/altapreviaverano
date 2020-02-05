import React from 'react';
import { Link } from 'react-router-dom';
import { getCookie, setCookie } from '../funciones';

const Mensaje = () => {
  let authorization = getCookie('access_token');
  const token = getCookie('access_token');
  setCookie('sdk', 'abbulHaceAlgoGil', 365);
  if (!token || token === 'null') {
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
      .catch((error) => console.error('Error:', error))
      .then((response) => {
        console.log('Success register:', response);
        setCookie('access_token', authorization, 365);
      });
  }

  return (
    <section className='Mensaje bg-black h-screen w-full flex items-center justify-center'>
      <div className='mx-4 bg-white rounded-lg p-2 animated fadeIn faster'>
        <h1 className='text-center text-lg text-red-700'>
            Informacion
          <span role='img' aria-label='Informacion'>❗</span>
        </h1>
        <p> La idea de la aplicaciones es divertirse. Nadie esta obligade a participar, y no se debe insistir ni obligar a ningun participante a hacer algo que no quiera</p>
        <div className='w-full flex justify-end mt-3'>
          <Link to='/home' className='bg-green-700 hover:bg-green-500 text-white hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded'>
                Entiendo, no voy a ser une sorete
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Mensaje;
