import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import Title from '../components/Title';
import VerdadRetoBodySelect from '../components/VerdadRetoBodySelect';
import VerdadRetoJuego from '../components/VerdadRetoJuego';
import '../assets/styles/components/VerdadReto.scss';

class VerdadReto extends React.Component {

  constructor(props) {
    super(props);
    const juego = localStorage.getItem('verdadOretoJuego');
    const cant = localStorage.getItem('verdadOretoCantidad');
    this.state = {
      component: <Title juego={juego} cant={cant} />,
    };
  }

  changeStateVerdadReto = (component) => {
    let { juego } = component.props;
    if (typeof component === 'object') {
      const { cant } = component.props;
      if (cant <= 0) {
        juego = 'Picante';
      }
      this.setState({
        component: <Title juego={juego} cant={cant} />,
      });
    } else {
      console.log('Component is not a object');
    }
  };

  render() {
    const { component } = this.state;
    const juego = localStorage.getItem('verdadOretoJuego');
    return (
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
              <VerdadRetoJuego changeStateVerdadReto={this.changeStateVerdadReto} />
            </Route>
          </Switch>
          <div className='VerdadRetoBody__change' />
        </section>
      </section>
    );
  }
};

export default VerdadReto;
