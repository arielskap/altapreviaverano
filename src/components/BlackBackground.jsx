import React from 'react';

const BlackBackground = ({ children }) => {
  return (
    <div className='bg-transparent-black-strong animated fadeIn faster fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center'>
      {children}
    </div>
  );
};

export default BlackBackground;
