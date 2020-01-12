import React from 'react';
import explosion from '../assets/static/explosion.gif';

class Boom extends React.Component {
  render() {
    return (
      <div className='Boom'>
        <img className='object-contain w-full h-full absolute' src={explosion} alt='explosion' />
      </div>
    );
  }
}

export default Boom;
