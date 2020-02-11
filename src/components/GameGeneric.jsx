import React, { useState } from 'react';
import Tippy from '@tippy.js/react';
import '../assets/styles/components/GameGeneric.scss';
import H1 from './H1';
import Instagram from './Instagram';

const GameGeneric = (props) => {
  const [visible, setVisible] = useState(false);
  const { children } = props;
  const { game } = props;
  const { tippyText } = props;
  const { callback } = props;
  const { color } = props;
  /*className tags*/
  const section = game;
  const body = `${game}Body`;
  const wrapper = `${game}Body-wrapper`;
  const parent = `${game}Body__parent-p`;
  const p = `${game}Body-p`;
  const footer = `${game}Body-footer`;
  return (
    <section className={`${section} animated fadeIn faster`}>
      <div className={`${body} mt-2`}>
        <Tippy content={tippyText} visible={visible}>
          <div>
            <H1 className={body} visible={visible} handleClick={setVisible}>{children}</H1>
          </div>
        </Tippy>
        <div className={`${wrapper} mt-12 mx-8`}>
          <div className={`${parent} border-${color}-500 border-2 p-4 rounded-lg text-lg bg-white-transparent`}>
            <p className={`${p}`} />
          </div>
        </div>
        <Instagram />
        <div className={`${footer} fixed bottom-0 w-full`}>
          <button className='text-center w-full bg-green-500 py-3 text-white text-lg' type='button' onClick={callback}>Siguiente</button>
        </div>
      </div>
    </section>
  );
};

export default GameGeneric;
