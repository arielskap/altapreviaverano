import React from 'react';
import HeaderGoHome from './childrens/HeaderGoHome';
import VerdadRetoOpcionBody from './childrens/VerdadRetoOpcionBody';

class VerdadRetoOpcion extends React.Component {
  constructor(props) {
    super(props);
    document.querySelector('.App').style.backgroundColor = 'black';
    window.history.pushState('VerdadReto', null);
  }

  render() {
    const { changeState } = this.props;
    return (
      <div className='VerdadRetoOpcion animated fadeIn min-h-screen'>
        <HeaderGoHome />
        <VerdadRetoOpcionBody changeState={changeState} />
      </div>
    );
  }
}

export default VerdadRetoOpcion;
