import React from 'react';
import HeaderGoHome from './childrens/HeaderGoHome';
import YoNuncaJuego from './childrens/YoNuncaJuego';

class YoNunca extends React.Component {
  constructor(props) {
    super(props);
    window.history.pushState('YoNunca', null);
    document.querySelector('.App').style.backgroundColor = 'pink';
  }

  render() {
    return (
      <section className='YoNunca animated fadeIn'>
        <HeaderGoHome />
        <YoNuncaJuego />
      </section>
    );
  }
}

export default YoNunca;
