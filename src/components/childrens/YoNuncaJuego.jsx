import React from 'react';
import { vibrar } from '../../funciones';
import '../../assets/styles/components/YoNuncaJuego.scss';

class YoNuncaJuego extends React.Component {
  constructor(props) {
    super(props);
    this.numMath = 4;
    this.numeroSwitch = [];
    for (let i = 0;i < this.numMath;i++) {
      this.numeroSwitch[i] = i + 1;
    }
  }

  componentDidMount() {
    this.yoNunca();
  }

  yoNunca = () => {
    let p = document.querySelector('.YoNuncaBody-p');
    const parentP = document.querySelector('.YoNuncaBody__parent-p');
    let yoNunca;
    const numAleatorio = Math.floor((Math.random() * this.numMath));
    switch (this.numeroSwitch[numAleatorio]) {
      case 1:
        yoNunca = document.createTextNode('Meti la mano en el agua del inodoro');
        break;
      case 2:
        yoNunca = document.createTextNode('Tome alcohol');
        break;
      case 3:
        yoNunca = document.createTextNode('Me desnude en publico');
        break;
      case 4:
        yoNunca = document.createTextNode('Bailé Fortnite');
        break;
      default:
        yoNunca = document.createTextNode('Ya no hay mas "Yo Nunca". Juga otra cosa o quebra.');
        break;
    }
    p.remove();
    p = document.createElement('p');
    p.classList.add('YoNuncaBody-p', 'animated', 'fadeIn', 'faster');
    p.appendChild(yoNunca);
    parentP.appendChild(p);
    this.numeroSwitch.splice(numAleatorio, 1);
    this.numMath--;
  }

  render() {
    return (
      <div className='YoNuncaBody mt-2'>
        <div className='YoNuncaBody-header mx-4'>
          <h1 className='YoNuncaBody-h1 text-3xl text-center p-1 rounded-lg text-white'>Yo Nunca...</h1>
        </div>
        <div className='YoNuncaBody-body mt-12 mx-8'>
          <div className='YoNuncaBody__parent-p border-pink-500 border-2 p-4 rounded-lg text-lg'>
            <p className='YoNuncaBody-p' />
          </div>
        </div>
        <div className='YoNuncaBody-footer fixed bottom-0 w-full'>
          <button className='text-center w-full bg-green-500 py-3 text-white text-lg' type='button' onClick={() => { vibrar(); this.yoNunca(); }}>Siguiente</button>
        </div>
      </div>
    );
  }
}

export default YoNuncaJuego;
