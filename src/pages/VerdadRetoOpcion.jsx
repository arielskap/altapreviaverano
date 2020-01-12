import React from 'react';
import Header from '../components/Header';
import VerdadRetoOpcionBody from '../components/VerdadRetoOpcionBody';

class VerdadRetoOpcion extends React.Component {
  constructor(props) {
    super(props);
    document.querySelector('.App').style.backgroundColor = 'black';
  }

  render() {
    return (
      <div className='VerdadRetoOpcion animated fadeIn faster'>
        <Header />
        <VerdadRetoOpcionBody />
      </div>
    );
  }
}

export default VerdadRetoOpcion;
