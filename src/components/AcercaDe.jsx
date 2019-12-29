import React from 'react';
import HeaderGoHome from './childrens/HeaderGoHome';
import AcercaDeBody from './childrens/AcercaDeBody';

class AcercaDe extends React.Component {
  constructor(props) {
    super(props);
    window.history.pushState('Information', null);
    document.querySelector('.App').style.backgroundColor = '#4FD1C4';
  }

  render() {
    return (
      <section className='AcercaDe animated fadeIn'>
        <HeaderGoHome />
        <AcercaDeBody />
      </section>
    );
  }
}

export default AcercaDe;
