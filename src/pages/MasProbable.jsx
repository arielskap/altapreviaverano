import React, { useEffect, useState, useRef } from 'react';
import Header from '../components/Header';
import GameGeneric from '../components/GameGeneric';
import { gameGeneric, setLocalStorageJson, getLocalStorageJson, mostrarInstruc, animateCSS, backgroundColor } from '../funciones';
import masProbableJson from '../json/masProbable.json';
import ModalV2 from '../components/ModalV2';

const MasProbable = () => {

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalErrorIsOpen, setModalErrorIsOpen] = useState(false);
  const continuarPartida = getLocalStorageJson('masProbable_turno');
  const numeroSwitch = useRef();
  const numMath = useRef();
  const isLocal = useRef(true);

  const initArray = () => {
    for (let i = 0;i < numMath.current;i++) {
      numeroSwitch.current[i] = i ;
    }
  };

  const masProbableA = () => {
    const json = isLocal.current ? masProbableJson : getLocalStorageJson('masProbable');
    const numAleatorio = gameGeneric('masProbable', json, numMath.current, numeroSwitch.current, 'F');
    numeroSwitch.current.splice(numAleatorio, 1);
    numMath.current--;
    setLocalStorageJson('masProbable_turno', { numeroSwitch: numeroSwitch.current, numMath: numMath.current, isLocal: isLocal.current });
  };

  const tudoBomTudoLegal = () => {
    initArray();
    masProbableA();
  };

  const handleContinuarModalAcept = () => {
    animateCSS('.ModalV2', 'fadeOut faster', () => {
      if (continuarPartida.isLocal === false && (continuarPartida.isLocal !== isLocal.current || !getLocalStorageJson('masProbable'))) {
        setModalErrorIsOpen(true);
      } else {
        numeroSwitch.current = continuarPartida.numeroSwitch;
        numMath.current = continuarPartida.numMath;
        masProbableA();
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
      if (getLocalStorageJson('masProbable')) {
        if (getLocalStorageJson('masProbable').length > 0) {
          numMath.current = getLocalStorageJson('masProbable').length;
          isLocal.current = false;
        } else {
          numMath.current = masProbableJson.length;
        }
      } else {
        numMath.current = masProbableJson.length;
      }
    };

    isLocal.current = true;
    constructor();
    if (continuarPartida && continuarPartida.numeroSwitch.length > 0) {
      setModalIsOpen(true);
    } else {
      tudoBomTudoLegal();
    }

    backgroundColor('purple');
    mostrarInstruc('masProbable');
  }, []);

  return (
    <>
      <Header title='Instrucciones' button='Apa la papaa'>
        Se debe señalar a la persona que es &quot;más probable a&quot; x cosa, luego la misma bebera o tendra que hacer alguna prenda
        <br />
        <span role='img' aria-label='Corazon'>❤️️</span>
      </Header>
      <GameGeneric game='masProbable' tippyText='¿Quien es más probable a estar leyendo esto?' callback={masProbableA} color='purple'>Quien Es Más Probable A...</GameGeneric>
      {modalIsOpen === true && (
        <ModalV2
          isOpen={modalIsOpen}
          title='¿Otra Vida? ❤️'
          button='De one'
          buttonRefused='De 0'
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

export default MasProbable;
