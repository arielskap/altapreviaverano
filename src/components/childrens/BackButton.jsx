import React from 'react';
import back from '../../assets/static/back.png';

class BackButton extends React.Component {
  render() {
    let flag = 0;
    return (
      <div className='BackButton'>
        <button
          type='button'
          className='BackButton-button rounded-full h-12 w-12 bg-aqua-transparent flex justify-center'
          onClick={() => {
            flag === 0 && window.history.back();
            flag = 1;
          }}
        >
          <img className='BackButton-img fill-current h-full w-full' src={back} alt='Volver' />
        </button>
      </div>
    );
  }
}

export default BackButton;
