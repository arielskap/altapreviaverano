/* eslint-disable import/no-cycle */
import React from 'react';
import BackButton from './BackButton';

class VerdadRetoHeader extends React.Component {
  render() {
    return (
      <section className='VerdadRetoHeader pt-4 mx-4'>
        <BackButton />
      </section>
    );
  }
}

export default VerdadRetoHeader;
