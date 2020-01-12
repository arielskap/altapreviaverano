import React from 'react';
import Header from '../components/Header';
import YoNuncaJuego from '../components/YoNuncaJuego';

class YoNunca extends React.Component {
  constructor(props) {
    super(props);
    document.querySelector('.App').style.backgroundColor = 'pink';
  }

  render() {
    return (
      <section className='YoNunca animated fadeIn faster'>
        <Header />
        <YoNuncaJuego />
      </section>
    );
  }
}

export default YoNunca;
