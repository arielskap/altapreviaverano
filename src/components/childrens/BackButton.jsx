import React from 'react';
import { animateCSS } from '../../funciones';
import back from '../../assets/static/back.png';

class BackButton extends React.Component {
  render() {
    const { component } = this.props;
    const { changeState } = this.props;
    return (
      <div className='BackButton'>
        <button
          type='button'
          className='rounded-full h-12 w-12 bg-aqua-transparent flex justify-center'
          onClick={() => {
            animateCSS('.App', 'fadeOut', () => {
              changeState(component);
            });
          }}
        >
          <img className='fill-current h-full w-full' src={back} alt='Volver' />
        </button>
      </div>
    );
  }
}

export default BackButton;
