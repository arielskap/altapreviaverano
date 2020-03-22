import React from 'react';

const ButtonCountry = ({ children, img, handleGo }) => {
  return (
    <div className='mx-4'>
      <button className='button_country flex items-center w-full my-2 px-2 bg-transparent hover:bg-blue-500 border border-blue-500 hover:border-transparent rounded focus:outline-none focus:shadow-outline' type='button' onClick={() => { handleGo(children); }}>
        <img className='object-contain w-10 py-1' src={img} alt={`Flag ${children}`} />
        <p className='ml-4'>{children}</p>
      </button>
    </div>
  );
};

export default ButtonCountry;
