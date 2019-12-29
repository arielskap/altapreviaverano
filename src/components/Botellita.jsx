import React from 'react';
import HeaderGoHome from './childrens/HeaderGoHome';
import BotellitaJuego from './childrens/BotellitaJuego';

class Botellita extends React.Component {
  constructor(props) {
    super(props);
    window.history.pushState('Botellita', null);
    document.querySelector('.App').style.backgroundColor = '#4299e1';
  }

  render() {
    const { changeState } = this.props;
    return (
      <div className='Botellita animated fadeIn'>
        <HeaderGoHome changeState={changeState} />
        <BotellitaJuego />
      </div>
    );
  }
};

export default Botellita;
