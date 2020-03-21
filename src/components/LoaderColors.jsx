import React, { useEffect } from 'react';
import '../assets/styles/components/LoaderColors.scss';

const LoaderColors = () => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);
  return (
    <div className='loading-wrap gamba-circles'>
      <div className='circle' />
      <div className='circle' />
      <div className='circle' />
      <div className='circle' />
    </div>
  );
};

export default LoaderColors;
