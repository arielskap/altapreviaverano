import React from 'react';

const Card = ({ children, className }) => {
  return (
    <div className={`${className} rounded-lg`}>
      {children}
    </div>
  );
};

export default Card;
