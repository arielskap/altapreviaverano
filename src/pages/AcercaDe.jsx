import React from 'react';
import AcercaDeBody from '../components/AcercaDeBody';

class AcercaDe extends React.Component {
  componentDidMount() {
    document.querySelector('.App').style.backgroundColor = '#4FD1C4';
  }

  render() {
    return (
      <section className='AcercaDe animated fadeIn faster'>
        <AcercaDeBody />
      </section>
    );
  }
}

export default AcercaDe;
