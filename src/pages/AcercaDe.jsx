import React from 'react';
import HeaderGoHome from '../components/childrens/HeaderGoHome';
import AcercaDeBody from '../components/childrens/AcercaDeBody';

class AcercaDe extends React.Component {
  componentDidMount() {
    document.querySelector('.App').style.backgroundColor = '#4FD1C4';
  }

  render() {
    return (
      <section className='AcercaDe animated fadeIn faster'>
        <HeaderGoHome />
        <AcercaDeBody />
      </section>
    );
  }
}

export default AcercaDe;
