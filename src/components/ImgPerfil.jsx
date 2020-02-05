import React from 'react';

const ImgPerfil = (props) => {
  const { src } = props;
  const { alt } = props;
  return (
    <div className='w-1/5 h-full border-2 border-transparent hover:border-pink-500 rounded-lg'>
      <button type='button' className='w-full h-full p-1'>
        <img className='object-contain w-full h-full' src={src} alt={alt} />
      </button>
    </div>
  );
};

export default ImgPerfil;
