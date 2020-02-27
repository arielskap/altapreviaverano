import React, { useEffect, useState } from 'react';
import H1 from '../components/H1';
import ImgPerfil from '../components/ImgPerfil';
import Modal from '../components/Modal';
import { showModal, getLocalStorageJson, setLocalStorageJson } from '../funciones';
import '../assets/styles/components/Perfil.scss';
import avocado from '../assets/static/avocado.svg';
import palmera from '../assets/static/palmera.png';
import perfilJson from '../constantes';
import Close from '../components/Close';

const Perfil = () => {
  const perfilImg = localStorage.getItem('perfilImg');
  const perfilAlt = localStorage.getItem('perfilAlt');
  const [img, setImg] = useState(perfilImg);
  const [alt, setAlt] = useState(perfilAlt);
  let closedItems = localStorage.getItem('closed') || [];
  if (typeof closedItems === 'string') {
    closedItems = closedItems.split('|');
  }
  let select = 0;
  const handleSubmitAvatar = (event) => {
    let jsonSrc;
    let jsonAlt;
    if (select !== 0) {
      perfilJson.forEach((json) => {
        const { id } = json;
        if (select === id) {
          jsonSrc = json.src;
          jsonAlt = json.alt;
        }
      });
      showModal('Modal-avatar');
      setImg(jsonSrc);
      setAlt(jsonAlt);
      localStorage.setItem('perfilImg', jsonSrc, 365);
      localStorage.setItem('perfilAlt', jsonAlt, 365);
    }
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    let authorization = localStorage.getItem('access_token');
    event.preventDefault();
    showModal();
    const dataUser = {
      nombre: document.querySelector('#nombre').value,
      apellido: document.querySelector('#apellido').value,
      instagram: document.querySelector('#instagram').value,
      instaVisible: document.querySelector('#instaVisible').checked,
      email: document.querySelector('#email').value,
      edad: document.querySelector('#edad').value,
      pais: document.querySelector('#pais').value,
      otro: document.querySelector('#otro').value,
    };
    setLocalStorageJson('dataUser', dataUser);
    const miInit = { method: 'PUT',
      body: JSON.stringify(
        {
          'firstName': dataUser.nombre,
          'lastName': dataUser.apellido,
          'instagram': dataUser.instagram,
          'isPublic': dataUser.instaVisible,
          'email': dataUser.email,
          'age': dataUser.edad,
          'country': dataUser.pais,
          'otherCountry': dataUser.otro,
        },
      ),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': authorization,
      },
      credentials: 'same-origin',
    };
    return fetch('https://altaprevia.herokuapp.com/user/update', miInit)
      .then((res) => {
        authorization = res.headers.get('authorization');
        authorization = authorization.replace('Bearer', '');
        return res.json();
      })
      .catch((error) => {
        console.error('Error https://altaprevia.herokuapp.com/user/update:', error);
        return 0;
      })
      .then((response) => {
        console.log('Success update https://altaprevia.herokuapp.com/user/update:', response);
        if (!authorization || authorization === 'null') localStorage.setItem('access_token', authorization, 365);
        return response;
      });
  };

  const handleChange = () => {
    const e = document.querySelector('.form-select');
    const selected = e.options[e.selectedIndex].value;
    if (selected === 'xx') {
      document.querySelector('#otro').removeAttribute('disabled');
      document.querySelector('#otro').setAttribute('required', true);
      document.querySelector('#otro').classList.toggle('opacity-50');
      document.querySelector('#otro').classList.toggle('cursor-not-allowed');
      document.querySelector('.p-otro').classList.toggle('opacity-50');
      document.querySelector('.p-otro').classList.toggle('cursor-not-allowed');
    } else {
      document.querySelector('#otro').value = '';
      document.querySelector('#otro').setAttribute('disabled', 'disabled');
      document.querySelector('#otro').setAttribute('required', false);
      document.querySelector('#otro').classList.add('opacity-50');
      document.querySelector('#otro').classList.add('cursor-not-allowed');
      document.querySelector('.p-otro').classList.add('opacity-50');
      document.querySelector('.p-otro').classList.add('cursor-not-allowed');
    }
  };

  useEffect(() => {
    const background = localStorage.getItem('background');
    const dataUser = getLocalStorageJson('dataUser');
    document.querySelector('#instaVisible').checked = true;
    if (dataUser) {
      if (dataUser.nombre) {
        document.querySelector('#nombre').value = dataUser.nombre;
      }
      if (dataUser.apellido) {
        document.querySelector('#apellido').value = dataUser.apellido;
      }
      if (dataUser.instagram) {
        document.querySelector('#instagram').value = dataUser.instagram;
      }
      if (!dataUser.instaVisible) {
        document.querySelector('#instaVisible').checked = false;
      }
      if (dataUser.email) {
        document.querySelector('#email').value = dataUser.email;
      }
      if (dataUser.edad) {
        document.querySelector('#edad').value = dataUser.edad;
      }
      if (dataUser.pais) {
        document.querySelector('#pais').value = dataUser.pais;
      }
      if (dataUser.otro) {
        document.querySelector('#otro').value = dataUser.otro;
      }
    }
    if (background === 'lindo') {
      document.querySelector('.App').style.backgroundColor = 'coral';
      document.querySelector('.App').style.backgroundImage = `url(${avocado})`;
    } else {
      document.querySelector('.App').style.background = `linear-gradient(rgba(0,0,0,1), rgba(255,255,255,.1)), url(${avocado}) coral`;
    }

    return () => {
      if (background === 'lindo') {
        document.querySelector('.App').style.backgroundImage = `url(${palmera})`;
      } else {
        document.querySelector('.App').style.background = `linear-gradient(rgba(0,0,0,1), rgba(255,255,255,.1)), url(${palmera}) coral`;
      }
    };
  });

  return (
    <div className=' container mx-auto px-4 animated fadeIn faster'>
      <div className='pt-4'>
        <H1 className='perfil'>Perfil</H1>
      </div>
      <div className='flex justify-center w-full mt-4'>
        <div className='rounded-full w-24 h-24 div__imgPerfil'>
          <ImgPerfil classNameImg='object-contain rounded-full' src={img} alt={alt} />
        </div>
      </div>
      <div className='mt-4'>
        {!closedItems.find((element) => element === '.perfil-info') && (
          <div className='p-2 rounded bg-transparent-pink-1 text-white perfil-info'>
            <Close parent='.perfil-info' />
            <h2 className='text-center text-xl'>¿Que podes hacer en tu perfil?</h2>
            <p>
              Basicamente nada... Na mentira...
              <br />
              Podes agregar tu instagram, el mismo aparecera si agregas un juego y es elegido por los desarrolladores.
              <br />
              Y además podes... Cambiar tu avatar!!!
            </p>
          </div>
        )}
        <form className='my-6' onSubmit={handleSubmitAvatar}>
          <h3 className='text-center text-lg'>¡Cambiar Avatar!</h3>
          <div className='grid grid-cols-5 sm:grid-cols-7 gap-1 sm:gap-2'>
            {perfilJson.map((value) => {
              const { id } = value;
              const { alt } = value;
              const { src } = value;
              return (
                <button
                  type='button'
                  onClick={() => {
                    select = id ;
                  }}
                  key={id}
                >
                  <ImgPerfil src={src} alt={alt} className='border-2 border-transparent hover:border-pink-500' />
                </button>
              );
            })}
          </div>
          <div className='text-right'>
            <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 mb-3'>¡Confirmar!</button>
          </div>
          <Modal className='Modal-avatar' title='¡Avatar cambiado!' button='Pefeto' color='purple'><span role='img' aria-label='okey'>👍</span></Modal>
        </form>
        <div className='mx-4'>
          <form onSubmit={handleSubmit}>
            <div className='sm:grid sm:grid-cols-2 sm:gap-2'>
              <label htmlFor='nombre'>
                <p className='block uppercase tracking-wide text-gray-800 text-xs font-bold mb-2'>Nombre/s: (Opcional)</p>
                <input id='nombre' type='text' placeholder='tuGatita123' className='bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal' maxLength='40' />
                <p className='text-gray-600 text-xs italic bg-transparent-red-1 rounded p-1 mt-1'>*Podes poner lo que quieras, no te queremos robar informacion o si...</p>
              </label>
              <label htmlFor='apellido'>
                <p className='block uppercase tracking-wide text-gray-800 text-xs font-bold mb-2'>Apellido/s: (Opcional)</p>
                <input id='apellido' type='text' placeholder='Uzumaki' className='bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal' maxLength='40' />
              </label>
            </div>
            <div className='sm:grid sm:grid-cols-2 sm:gap-2'>
              <label htmlFor='instagram'>
                <p className='block uppercase tracking-wide text-gray-800 text-xs font-bold my-2'>Instagram:</p>
                <input id='instagram' type='text' placeholder='ecstasy.ring' className='bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal' maxLength='30' required />
                <label htmlFor='instaVisible' className='flex justify-end items-center mt-2 text-sm'>
                  <input id='instaVisible' type='checkbox' />
                  <p className='ml-1'>Instagram visible</p>
                </label>
                <p className='text-gray-600 text-xs italic bg-transparent-red-1 rounded p-1 mt-1'>*Si un juego que recomiendas es elegido para formar parte de la app, se agregara tu instagram, es lo minimo que podemos hacer por trabajar gratis (?</p>
              </label>
              <label htmlFor='email'>
                <p className='block uppercase tracking-wide text-gray-800 text-xs font-bold my-2'>Email: (Opcional)</p>
                <input id='email' type='email' placeholder='elMasRati@skere.com' className='bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal' maxLength='40' />
              </label>
            </div>
            <div className='sm:grid sm:grid-cols-2 sm:gap-2'>
              <label htmlFor='edad'>
                <p className='block uppercase tracking-wide text-gray-800 text-xs font-bold my-2'>Edad:</p>
                <input id='edad' type='number' min='18' max='99' placeholder='1.000.000' className='bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal' required />
              </label>
              <label htmlFor='pais'>
                <p className='block uppercase tracking-wide text-gray-800 text-xs font-bold my-2'>Pais:</p>
                <div className='relative'>
                  <select id='pais' className='form-select block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500' required onChange={handleChange}>
                    <option value=''>~Pais~</option>
                    <option value='ar'>Argentina</option>
                    <option value='bo'>Bolivia  </option>
                    <option value='br'>Brasil </option>
                    <option value='cl'>Chile</option>
                    <option value='es'>España</option>
                    <option value='mx'>Mexico</option>
                    <option value='py'>Paraguay</option>
                    <option value='pe'>Peru</option>
                    <option value='uy'>Uruguay</option>
                    <option value='ve'>Venezuela</option>
                    <option value='xx'>Otro/Marte</option>
                  </select>
                  <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
                    <svg className='fill-current h-4 w-4' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'><path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' /></svg>
                  </div>
                </div>
              </label>
              <label className='sm:col-start-2' htmlFor='otro'>
                <p className='p-otro block uppercase tracking-wide text-gray-800 text-xs font-bold my-2 opacity-50 cursor-not-allowed'>Otro:</p>
                <input id='otro' type='text' placeholder='Venus' className='bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal opacity-50 cursor-not-allowed' disabled />
              </label>
            </div>
            <div className='text-right'>
              <button type='submit' className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded my-4'>¡Agregarme!</button>
            </div>
          </form>
        </div>
      </div>
      <Modal title='¡Muchas gracias!' button='altoke perro' color='green'>Mejor que el club grido</Modal>
    </div>
  );
};

export default Perfil;
