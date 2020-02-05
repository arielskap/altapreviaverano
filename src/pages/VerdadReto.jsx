import React, { useState } from 'react';
import { useLocation, Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import Title from '../components/Title';
import VerdadRetoBodySelect from '../components/VerdadRetoBodySelect';
import VerdadRetoJuego from '../components/VerdadRetoJuego';
import '../assets/styles/components/VerdadReto.scss';

const VerdadReto = () => {
  const query = new URLSearchParams(useLocation().search);
  let juego = query.get('juego');
  const cant = query.get('cant');
  const [component, setComponent] = useState(<Title juego={juego} cant={cant} />);
  const changeStateVerdadReto = (component) => {
    if (typeof component === 'object') {
      const { cant } = component.props;
      if (cant <= 0) {
        juego = 'Picante';
      }
      setComponent(component);
    } else {
      console.log('Component is not a object');
    }
  };

  /*useEffect(() => {
    const juego = query.get('juego');
    ReactDOM.render(
      <VerdadRetoBodySelect juego={juego} element='.VerdadRetoBody__change' cant={cant} changeStateVerdadReto={changeStateVerdadReto} />, document.querySelector('.VerdadRetoBody__change'),
    );
  }, []);*/

  return (
    <section className='VerdadReto animated fadeIn faster'>
      <Header />
      <section className='VerdadRetoBody px-4 animated fadeIn'>
        <div className='text-center text-3xl mt-4 shadow-lg'>
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
  );
};

export default VerdadReto;
