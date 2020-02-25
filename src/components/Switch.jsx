import React, { useEffect } from 'react';
import '../assets/styles/components/Switch.scss';

const Switch = ({ className, onClick, id, color }) => {
  useEffect(() => {
    document.querySelector(`#${id}`).addEventListener('change', (e) => {
      if (e.target.checked) {
        document.querySelector(`.${id}`).style.backgroundColor = color;
      } else {
        document.querySelector(`.${id}`).style.backgroundColor = 'gray';
      }
    });
  });
  return (
    <label htmlFor={id} className={`switch ${className}`} onClick={onClick}>
      <input type='checkbox' id={id} />
      <span className={`slider round ${id}`} />
    </label>
  );
};

export default Switch;
