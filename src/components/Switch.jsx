import React from 'react';
import '../assets/styles/components/Switch.scss';

const Switch = ({ className, onClick }) => {
  return (
    <label htmlFor='switch' className={`switch ${className}`} onClick={onClick}>
      <input type='checkbox' id='switch' />
      <span className='slider round' />
    </label>
  );
};

export default Switch;
