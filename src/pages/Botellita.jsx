import React from 'react';
import Header from '../components/Header';
import BotellitaJuego from '../components/BotellitaJuego';

class Botellita extends React.Component {
  constructor(props) {
    super(props);
    document.querySelector('.App').style.backgroundColor = '#4299e1';
  }

  render() {
    return (
      <div className='Botellita animated fadeIn faster'>
        <Header />
        <BotellitaJuego />
      </div>
    );
  }
};

export default Botellita;
