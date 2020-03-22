import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Argentina from '../assets/static/Argentina.svg';
import Bolivia from '../assets/static/Bolivia.svg';
import Brasil from '../assets/static/Brasil.svg';
import Chile from '../assets/static/Chile.svg';
import España from '../assets/static/España.svg';
import Mexico from '../assets/static/Mexico.svg';
import Paraguay from '../assets/static/Paraguay.svg';
import Peru from '../assets/static/Peru.svg';
import Uruguay from '../assets/static/Uruguay.svg';
import Venezuela from '../assets/static/Venezuela.svg';
import Marte from '../assets/static/Marte.png';
import arrow from '../assets/static/down-arrow.svg';
import ButtonCountry from '../components/ButtonCountry';
import { animateCSS, backgroundColor } from '../funciones';

const Country = () => {
  const history = useHistory();

  const go = (country) => {
    document.querySelectorAll('.button_country').forEach((button) => {
      const buttonVar = button;
      buttonVar.disabled = true;
    });
    animateCSS('.Country_children', 'bounceOut faster', () => {
      localStorage.setItem('countryFirst', true);
      history.replace('/message');
    });
  };

  useEffect(() => {
    backgroundColor('#1a202c');
  }, []);

  return (
    <div className='Country animated fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center bg-transparent-black-1 text-white'>
      <div className='Country_children w-64 bounceIn faster border-4 border-pink-600 p-2 rounded-lg'>
        <h1 className='text-center text-xl font-bold mb-4'>¿De que país sos?</h1>
        <div className='h-72'>
          <ul className='max-h-full overflow-y-auto'>
            <li>
              <ButtonCountry handleGo={go} img={Argentina}>Argentina</ButtonCountry>
            </li>
            <li>
              <ButtonCountry handleGo={go} img={Bolivia}>Bolivia</ButtonCountry>
            </li>
            <li>
              <ButtonCountry handleGo={go} img={Brasil}>Brasil</ButtonCountry>
            </li>
            <li>
              <ButtonCountry handleGo={go} img={Chile}>Chile</ButtonCountry>
            </li>
            <li>
              <ButtonCountry handleGo={go} img={España}>España</ButtonCountry>
            </li>
            <li>
              <ButtonCountry handleGo={go} img={Mexico}>Mexico</ButtonCountry>
            </li>
            <li>
              <ButtonCountry handleGo={go} img={Paraguay}>Paraguay</ButtonCountry>
            </li>
            <li>
              <ButtonCountry handleGo={go} img={Peru}>Peru</ButtonCountry>
            </li>
            <li>
              <ButtonCountry handleGo={go} img={Uruguay}>Uruguay</ButtonCountry>
            </li>
            <li>
              <ButtonCountry handleGo={go} img={Venezuela}>Venezuela</ButtonCountry>
            </li>
            <li>
              <ButtonCountry handleGo={go} img={Marte}>Otro/Marte</ButtonCountry>
            </li>
          </ul>
        </div>
        <div className='flex justify-center w-full mt-2'>
          <img className='object-contain w-4' src={arrow} alt='Arrow Down' />
        </div>
      </div>
    </div>
  );
};

export default Country;
