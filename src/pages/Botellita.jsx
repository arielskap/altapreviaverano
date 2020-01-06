import React from 'react';
import HeaderGoHome from '../components/childrens/HeaderGoHome';
import BotellitaJuego from '../components/childrens/BotellitaJuego';

class Botellita extends React.Component {
  constructor(props) {
    super(props);
    document.querySelector('.App').style.backgroundColor = '#4299e1';
  }

  render() {
    return (
      <div className='Botellita animated fadeIn faster'>
        <HeaderGoHome />
        <BotellitaJuego />
      </div>
    );
  }
};

export default Botellita;
