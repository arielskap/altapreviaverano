import React from 'react';
import { Link } from 'react-router-dom';
import back from '../../assets/static/back.png';

class BackButton extends React.Component {
  render() {
    const { link } = this.props;
    return (
      <div className='BackButton'>
        <Link to={link} className='BackButton-button rounded-full h-12 w-12 bg-aqua-transparent flex justify-center'>
          <img className='BackButton-img fill-current h-full w-full' src={back} alt='Volver' />
        </Link>
      </div>
    );
  }
}

export default BackButton;
