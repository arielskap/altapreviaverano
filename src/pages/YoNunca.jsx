import React from 'react';
import HeaderGoHome from '../components/childrens/HeaderGoHome';
import YoNuncaJuego from '../components/childrens/YoNuncaJuego';

class YoNunca extends React.Component {
  constructor(props) {
    super(props);
    document.querySelector('.App').style.backgroundColor = 'pink';
  }

  render() {
    return (
      <section className='YoNunca animated fadeIn faster'>
        <HeaderGoHome />
        <YoNuncaJuego />
      </section>
    );
  }
}

export default YoNunca;
