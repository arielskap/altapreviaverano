import React from 'react';
import '../../assets/styles/components/AcercaDeBody.scss';
import facebook from '../../assets/static/facebook.png';
import instagram from '../../assets/static/instagram.png';
import tiktok from '../../assets/static/tiktok.png';
import logo from '../../assets/static/logo.png';
import barmat from '../../assets/static/barmat.png';

class AcercaDeBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 280,
    };
  }

  handleSubmit = (event) => {
    const e = document.querySelector('.AcercaDeBody__form-select');
    const select = e.options[e.selectedIndex].value;
    const textarea = document.querySelector('.AcercaDeBody__form-textarea');
    const info = document.querySelector('.AcercaDeBody__form-info');
    if (select === '1' || select === '2' || select === '3') {
      if (textarea.value.length > 15) {
        info.textContent = '¡Gracias por escribirnos!';
        info.style.backgroundColor = '#48bb78';
      } else {
        info.textContent = 'Escribí maaaas no tengas miedo';
        info.style.backgroundColor = '#e53e3e';
      }
    } else {
      info.textContent = 'No seleccionaste nada de la lista, kraken';
      info.style.backgroundColor = '#e53e3e';
    }
    event.preventDefault();
  }

  handleKeyUp = () => {
    const textarea = document.querySelector('.AcercaDeBody__form-textarea');
    const p = document.querySelector('.AcercaDeBody__form-count');
    const lenght = textarea.value.length;
    const resto = 280 - lenght;
    if (resto <= 15) {
      if (p.classList.contains('bg-red-500')) {
        p.classList.replace('bg-red-500', 'bg-red-700');
      }
      this.setState({
        count: `Alta biblia te hiciste ${resto}`,
      });
    } else {
      if (p.classList.contains('bg-red-700')) {
        p.classList.replace('bg-red-700', 'bg-red-500');
      }
      this.setState({
        count: resto,
      });
    }
  }

  render() {
    const TAM_IMG = 'h-16 w-16';
    const { count } = this.state;
    return (
      <section className='AcercaDeBody mx-2'>
        <div className='AcercaDeBody__header text-center'>
          <h2 className='text-2xl AcercaDeBody__header-titulo rounded-t'>Alta Previa</h2>
          <h3 className='text-2xl AcercaDeBody__header-titulo rounded-b'>Edicion Verano</h3>
        </div>
        <div className='AcercaDeBody__body mt-4'>
          <div>
            <div className='AcercaDeBody__porque p-1 rounded-lg'>
              <h4 className='text-xl'>¿Por que usas lenguaje inclusivo?</h4>
              <div className='mt-2'>
                <p>
                  Bueno, porque el lenguaje influye en todo lo que hacemos. Tiene un valor más fuerte del que generalmente pensamos. Toda palabra tiene un porque y un significado que se le da directa o indirectamente. Yo desconozco a la persona que este leyendo esto o que este jugando a estos juegos, por eso no quiero presuponer y así habilitar a cualquiera a poder jugar
                  <span role='img' aria-label='Happy'>😄</span>
                </p>
              </div>
            </div>
          </div>
          <div>
            <p className='AcercaDeBody__presupuesto rounded-lg mt-4 p-1'>
              Como todavía no hay presu... AHORA SI BABY (?
              <br />
              Contacto:
            </p>
            <form className='AcercaDeBody__form my-2 border-2 border-teal-700 p-2 rounded-lg' onSubmit={this.handleSubmit}>
              <div className='flex justify-start'>
                <div className='inline-block relative'>
                  <select className='AcercaDeBody__form-select block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline' required>
                    <option value=''>-Causa-</option>
                    <option value='1'>Alabarnos</option>
                    <option value='2'>Sugerencia</option>
                    <option value='3'>Error</option>
                  </select>
                  <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
                    <svg className='fill-current h-4 w-4' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'><path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' /></svg>
                  </div>
                </div>
              </div>
              <div className='mt-2'>
                <div className='flex justify-end mb-1'>
                  <p className='AcercaDeBody__form-count bg-red-500 rounded-full py-1 px-2'>{count}</p>
                </div>
                <div className='flex justify-center'>
                  <textarea onKeyUp={this.handleKeyUp} className='AcercaDeBody__form-textarea p-1 rounded w-full' maxLength='250' rows='4' placeholder='Dale escribi algo, daaaale daaaaale #toxico' required />
                </div>
              </div>
              <div>
                <p className='AcercaDeBody__form-info p-1 rounded mt-1 text-center' />
              </div>
              <div className='flex justify-end mt-2'>
                <button className='bg-green-500 hover:bg-green-700 text-black font-bold py-2 px-4 border border-green-700 rounded' type='submit'>¡Enviar!</button>
              </div>
            </form>
            <div>
              <p className='bg-teal-600 p-1 rounded-lg'>Las redes del archimega super re groso developer in the fucking word: </p>
              <div className='flex justify-center mt-1'>
                <button className={TAM_IMG} type='button'><img className='object-contain w-full h-full' src={facebook} alt='facebook' /></button>
                <a className={TAM_IMG} href='https://www.instagram.com/ecstasy_ring/'><img className='object-contain w-full h-full' src={instagram} alt='instagram' /></a>
                <button className={TAM_IMG} type='button'><img className='object-contain w-full h-full' src={tiktok} alt='tiktok' /></button>
              </div>
            </div>
          </div>
          <div className='mt-3'>
            <p className='AcercaDeBody__cocktel p-1 rounded-lg'>Si queres ser un todo hacker de la coctelería descargate:</p>
            <div className='flex justify-center mt-1'>
              <button className={TAM_IMG} type='button'><img className='object-contain w-full h-full' src={barmat} alt='barmat' /></button>
            </div>
          </div>
          <div className='AcercaDeBody__footer mt-4'>
            <p className='AcercaDeBody__footer-somos p-1 rounded-lg'>
                Ariel Santiago Villarreal Gutierrez y Abbul Rodriguez
              <br />
                Copyright © 2020 Todos los Derechos Reservados
              <br />
            </p>
            <div className='flex justify-center mt-1'>
              <div className='h-24 w-24'>
                <img className='object-contain w-full h-full' src={logo} alt='Logo' />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AcercaDeBody;
