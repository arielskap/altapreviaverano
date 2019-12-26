/* eslint-disable import/no-cycle */
import React from 'react';
import BackButton from './BackButton';
import VerdadRetoOpcion from '../VerdadRetoOpcion';

class VerdadRetoHeader extends React.Component {
  render() {
    const { changeState } = this.props;
    return (
      <section className='VerdadRetoHeader pt-4 mx-4'>
        <BackButton component={<VerdadRetoOpcion changeState={changeState} />} changeState={changeState} />
      </section>
    );
  }
}

export default VerdadRetoHeader;
