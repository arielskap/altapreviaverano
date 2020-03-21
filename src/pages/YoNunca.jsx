import React, { useEffect, useState, useRef } from 'react';
import Header from '../components/Header';
import GameGeneric from '../components/GameGeneric';
import { gameGeneric, setLocalStorageJson, getLocalStorageJson, mostrarInstruc, animateCSS } from '../funciones';
import yoNuncaJson from '../json/yoNunca.json';
import ModalV2 from '../components/ModalV2';

function YoNunca() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalErrorIsOpen, setModalErrorIsOpen] = useState(false);
  const continuarPartida = getLocalStorageJson('yoNunca_turno');
  const numeroSwitch = useRef();
  const numMath = useRef();
  const isLocal = useRef(true);

  const initArray = () => {
    for (let i = 0;i < numMath.current;i++) {
      numeroSwitch.current[i] = i ;
    }
  };

  const yoNunca = () => {
    const json = isLocal.current ? yoNuncaJson : getLocalStorageJson('yoNunca');
    const numAleatorio = gameGeneric('YoNunca', json, numMath.current, numeroSwitch.current, 'Ya no hay mas "Yo Nunca". Juga otra cosa o quebra.');
    numeroSwitch.current.splice(numAleatorio, 1);
    numMath.current--;
    setLocalStorageJson('yoNunca_turno', { numeroSwitch: numeroSwitch.current, numMath: numMath.current, isLocal: isLocal.current });
  };

  const tudoBomTudoLegal = () => {
    initArray();
    yoNunca();
  };

  const handleContinuarModalAcept = () => {
    animateCSS('.ModalV2', 'fadeOut faster', () => {
      if (continuarPartida.isLocal === false && (continuarPartida.isLocal !== isLocal.current || !getLocalStorageJson('yoNunca'))) {
        setModalErrorIsOpen(true);
      } else {
        numeroSwitch.current = continuarPartida.numeroSwitch;
        numMath.current = continuarPartida.numMath;
        yoNunca();
      }
      setModalIsOpen(false);
    });
  };

  const handleContinuarModalRefused = () => {
    animateCSS('.ModalV2', 'fadeOut faster', () => {
      tudoBomTudoLegal();
      setModalIsOpen(false);
    });
  };

  useEffect(() => {
    const constructor = () => {
      numeroSwitch.current = [];
      if (getLocalStorageJson('yoNunca')) {
        if (getLocalStorageJson('yoNunca').length > 0) {
          numMath.current = getLocalStorageJson('yoNunca').length;
          isLocal.current = false;
        } else {
          numMath.current = yoNuncaJson.length;
        }
      } else {
        numMath.current = yoNuncaJson.length;
      }
    };

    constructor();
    if (continuarPartida && continuarPartida.numeroSwitch.length > 0) {
      setModalIsOpen(true);
    } else {
      tudoBomTudoLegal();
    }

    document.querySelector('.App').style.backgroundColor = 'pink';
    mostrarInstruc('yoNunca');
  }, []);

  return (
    <>
      <Header title='Instrucciones' button='Perfectirigillo'>
        El juego consiste en tomar alcohol, una linea, una seca o dar pasos de fortnite si no hiciste lo que predica el texto.
        <br />
        <span role='img' aria-label='Corazon'>❤️️</span>
      </Header>
      <GameGeneric game='YoNunca' tippyText='Yo nunca hice click a esto... (Ahora toma o te hago la gran Nisman)' callback={yoNunca} color='pink'>Yo Nunca...</GameGeneric>
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
      )}
    </>
  );

};

export default YoNunca;
