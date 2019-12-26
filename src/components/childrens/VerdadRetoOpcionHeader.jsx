import React from 'react';
import BackButton from './BackButton';
// eslint-disable-next-line import/no-cycle
import Home from '../Home';

class VerdadRetoOpcionHeader extends React.Component {
  render() {
    const { changeState } = this.props;
    return (
      <div className='VerdadRetoOpcionHeader pt-4 mx-4'>
        <BackButton component={<Home changeState={changeState} />} changeState={changeState} />
      </div>
    );
  }
}

export default VerdadRetoOpcionHeader;
