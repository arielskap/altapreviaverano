import React, { useState, useRef } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import Title from '../components/Title';
import VerdadRetoBodySelect from '../components/VerdadRetoBodySelect';
import VerdadRetoJuego from '../components/VerdadRetoJuego';
import ModalV2 from '../components/ModalV2';
import '../assets/styles/components/VerdadReto.scss';

const VerdadReto = () => {
  const cant = useRef(localStorage.getItem('verdadOretoCantidad'));

  const [juego, setJuego] = useState(localStorage.getItem('verdadOretoJuego'));
  const [component, setComponent] = useState(<Title juego={juego} cant={cant.current} />);

  const changeStateVerdadReto = (component) => {
    let { juego } = component.props;
    if (typeof component === 'object') {
      const { cant } = component.props;
      if (cant <= 0) {
        juego = 'Picante';
      }
      setJuego(juego);
      setComponent(<Title juego={juego} cant={cant} />);
    } else {
      console.log('Component is not a object');
    }
  };

  return (
    <>
      <section className='VerdadReto animated fadeIn faster min-h-screen h-full'>
        <Header title='Instrucciones' button='bueno, tampoco me cuentes tu vida, BRO'>
          Si se elige verdad se debera responder la pregunta, en caso de que sea reto debera hacer la prenda. Si elige no hacerla al presionar &apos;No lo hizo&apos; le aparecera la opcion contraría y encima &apos;picante&apos;
          <br />
          <span role='img' aria-label='Corazon'>❤️️</span>
        </Header>
        <section className='VerdadRetoBody animated fadeIn'>
          <div className='text-center text-3xl mt-4 shadow-lg px-4'>
            { juego === 'Suave' ? (
              <div className='VerdadRetoBody__suave border-green-400 text-white rounded'>
                {component}
              </div>
            ) : (
              <div className='VerdadRetoBody__picante border-red-400 border-2 rounded'>
                {component}
              </div>
            )}
          </div>
          <Switch>
            <Route path='/games/verdadReto/select'>
              <VerdadRetoBodySelect />
            </Route>
            <Route path='/games/verdadReto/juego'>
              <VerdadRetoJuego changeStateVerdadReto={changeStateVerdadReto} />
            </Route>
          </Switch>
          <div className='VerdadRetoBody__change' />
        </section>
      </section>
    </>
  );
};

export default VerdadReto;
/*
{modalIsOpen === true && (
        <ModalV2
          isOpen={modalIsOpen}
          title='¿Otra Vida? ❤️'
          button='Kenai'
          buttonRefused='Ni ahí'
          color='blue'
          handleAcept={handleContinuarModalAcept}
          handleRefused={handleContinuarModalRefused}
        >
          ¿Queres continuar con la ultima partida?
        </ModalV2>
      )}
      {modalErrorIsOpen &&
      (
        <ModalV2
          isOpen={modalErrorIsOpen}
          title='Error 💥'
          button='lpm'
          color='red'
          handleAcept={() => {
            animateCSS('.ModalV2', 'fadeOut faster', () => {
              tudoBomTudoLegal();
              setModalErrorIsOpen(false);
            });
          }}
        >
          Tu partida era online y como decirtelo... ya no estas más online, así que chau partida, volve a empezar.
        </ModalV2>
      )}*/
