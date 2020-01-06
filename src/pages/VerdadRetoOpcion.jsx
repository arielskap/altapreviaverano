import React from 'react';
import HeaderGoHome from '../components/childrens/HeaderGoHome';
import VerdadRetoOpcionBody from '../components/childrens/VerdadRetoOpcionBody';

class VerdadRetoOpcion extends React.Component {
  constructor(props) {
    super(props);
    document.querySelector('.App').style.backgroundColor = 'black';
  }

  render() {
    return (
      <div className='VerdadRetoOpcion animated fadeIn faster'>
        <HeaderGoHome />
        <VerdadRetoOpcionBody />
      </div>
    );
  }
}

export default VerdadRetoOpcion;
