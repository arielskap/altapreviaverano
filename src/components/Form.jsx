import React, { useState } from 'react';
import { getCookie } from '../funciones';

const Form = (props) => {
  const [count, setCount] = useState(280);
  const { className } = props;
  const { options } = props;
  const { link } = props;
  const optionList = options.map((option, index) => {
    const id = index;
    return <option value={option} key={id}>{option}</option>;
  });

  const handleKeyUp = () => {
    const textarea = document.querySelector('.form-textarea');
    const p = document.querySelector('.form-count');
    const lenght = textarea.value.length;
    const resto = 280 - lenght;
    if (resto <= 15) {
      if (p.classList.contains('bg-red-500')) {
        p.classList.replace('bg-red-500', 'bg-red-700');
      }
      setCount(`Alta biblia te hiciste ${resto}`);
    } else {
      if (p.classList.contains('bg-red-700')) {
        p.classList.replace('bg-red-700', 'bg-red-500');
      }
      setCount(resto);
    }
  };

  const handleSubmit = (event) => {
    const e = document.querySelector('.form-select');
    const select = e.options[e.selectedIndex].value;
    const textarea = document.querySelector('.form-textarea');
    const info = document.querySelector('.form-info');
    let authorization = getCookie('access_token');
    for (let i = 1; i < options.length; i++) {
      const option = options[i];
      if (select === option) {
        if (textarea.value.length > 15) {
          const miInit = { method: 'POST',
            body: JSON.stringify(
              {
                'type': select,
                'body': textarea.value,
                'createdAt': Date.now(),
              },
            ),
            headers: {
              'Content-Type': 'application/json',
              'Authorization': authorization,
            },
            credentials: 'same-origin',
          };
          fetch(`https://altaprevia.herokuapp.com/${link}`, miInit)
            .then((res) => {
              authorization = res.headers.get('authorization');
              authorization = authorization.replace('Bearer', '');
              return res.json();
            })
            .catch((error) => {
              console.error('Error:', error);
            })
            .then((response) => {
              console.log('Success created:', response);
              if (!authorization || authorization === 'null') setCookie('access_token', authorization, 365);
            });
          info.textContent = '¡Gracias por escribirnos!';
          info.style.backgroundColor = '#48bb78';
          break;
        } else {
          info.textContent = 'Escribí maaaas no tengas miedo';
          info.style.backgroundColor = '#e53e3e';
          break;
        }
      } else {
        info.textContent = 'No seleccionaste nada de la lista, kraken';
        info.style.backgroundColor = '#e53e3e';
      }
    }
    event.preventDefault();
  };

  return (
    <form className={`form my-2 w-full border-2 border-teal-700 p-2 rounded-lg ${className}`} onSubmit={handleSubmit}>
      <div className='flex justify-start'>
        <div className='inline-block relative'>
          <select className='form-select block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline' required>
            {optionList}
          </select>
          <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
            <svg className='fill-current h-4 w-4' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'><path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' /></svg>
          </div>
        </div>
      </div>
      <div className='mt-2'>
        <div className='flex justify-end mb-1'>
          <p className='form-count bg-red-500 rounded-full py-1 px-2'>{count}</p>
        </div>
        <div className='flex justify-center'>
          <textarea onKeyUp={() => handleKeyUp()} className='form-textarea p-1 rounded w-full' maxLength='280' rows='4' placeholder='Dale envia algo, daaaale daaaaale #toxico' required />
        </div>
      </div>
      <div>
        <p className='form-info p-1 rounded mt-1 text-center' />
      </div>
      <div className='flex justify-end mt-2'>
        <button className='bg-green-500 hover:bg-green-700 text-black font-bold py-2 px-4 border border-green-700 rounded' type='submit'>¡Enviar!</button>
      </div>
    </form>
  );
};

export default Form;