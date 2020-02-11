import React from 'react';

const Card = ({ children, className }) => {
  return (
    <div className={`${className} pb-1 rounded-lg`}>
      {children}
    </div>
  );
};

export default Card;
