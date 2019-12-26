import React from 'react';
import AcercaDeHeader from './childrens/AcercaDeHeader';
import AcercaDeBody from './childrens/AcercaDeBody';

class AcercaDe extends React.Component {
  render() {
    return (
      <section className='AcercaDe min-h-screen'>
        <AcercaDeHeader />
        <AcercaDeBody />
      </section>
    );
  }
}

export default AcercaDe;
