import React from 'react';

const ImgPerfil = (props) => {
  const { src } = props;
  const { alt } = props;
  const { className } = props;
  const { classNameImg } = props;
  return (
    <div className={`w-full h-full p-1 rounded-lg ${className}`}>
      <img className={`object-contain w-full h-full ${classNameImg}`} src={src} alt={alt} />
    </div>
  );
};

export default ImgPerfil;
