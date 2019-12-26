import React from 'react';
import VerdadRetoHeader from './childrens/VerdadRetoHeader';
import VerdadRetoBody from './childrens/VerdadRetoBody';

class VerdadReto extends React.Component {
  render() {
    const { juego } = this.props;
    const { cant } = this.props;
    const { changeState } = this.props;
    return (
      <section className='VerdadReto animated fadeIn min-h-screen'>
        <VerdadRetoHeader changeState={changeState} />
        <VerdadRetoBody juego={juego} cant={cant} changeState={changeState} />
      </section>
    );
  }
}

export default VerdadReto;
