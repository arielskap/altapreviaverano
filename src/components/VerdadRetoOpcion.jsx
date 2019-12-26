import React from 'react';
import VerdadRetoOpcionHeader from './childrens/VerdadRetoOpcionHeader';
import VerdadRetoOpcionBody from './childrens/VerdadRetoOpcionBody';

class VerdadRetoOpcion extends React.Component {
  render() {
    const { changeState } = this.props;
    return (
      <div className='VerdadRetoOpcion animated fadeIn min-h-screen'>
        <VerdadRetoOpcionHeader changeState={changeState} />
        <VerdadRetoOpcionBody changeState={changeState} />
      </div>
    );
  }
}

export default VerdadRetoOpcion;
