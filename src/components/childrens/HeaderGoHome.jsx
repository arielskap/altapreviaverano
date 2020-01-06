import React from 'react';
import BackButton from './BackButton';

function HeaderGoHome({ link }) {
  let linkVar = link;
  if (linkVar === undefined) {
    linkVar = '/home';
  }
  return (
    <div className='VerdadRetoOpcionHeader pt-4 mx-4'>
      <BackButton link={linkVar} />
    </div>
  );
};

export default HeaderGoHome;
