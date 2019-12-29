import React from 'react';
import ReactDOM from 'react-dom';
import Title from './Title';
import VerdadRetoBodySelect from './VerdadRetoBodySelect';
import '../../assets/styles/components/VerdadRetoBody.scss';

class VerdadRetoBody extends React.Component {
  constructor(props) {
    super(props);
    const { juego } = this.props;
    const { cant } = this.props;
    this.juego = juego;
    this.cant = cant;
    this.state = {
      component: <Title juego={juego} cant={this.cant} />,
    };
  }

  componentDidMount() {
    const { juego } = this.props;
    ReactDOM.render(
      <VerdadRetoBodySelect juego={juego} element='.VerdadRetoBody__change' cant={this.cant} changeStateVerdadReto={this.changeStateVerdadReto} />, document.querySelector('.VerdadRetoBody__change'),
    );
  }

  changeStateVerdadReto = (component) => {
    if (typeof component === 'object') {
      const { cant } = component.props;
      if (cant <= 0) {
        this.juego = 'Picante';
      }
      this.setState({
        component,
      });
    } else {
      console.log('Component is not a object');
    }
  }

  render() {
    const { component } = this.state;
    return (
      <section className='VerdadRetoBody px-4 animated fadeIn'>
        <div className='text-center text-3xl mt-4 shadow-lg'>
          { this.juego === 'Suave' ? (
            <div className='VerdadRetoBody__suave border-green-400 text-white rounded'>
              {component}
            </div>
          ) : (
            <div className='VerdadRetoBody__picante border-red-400 border-2 rounded'>
              {component}
            </div>
          )}
        </div>
        <div className='VerdadRetoBody__change' />
      </section>
    );
  }
}

export default VerdadRetoBody;
