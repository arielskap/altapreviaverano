import React from 'react';
import ReactDOM from 'react-dom';
import Title from './Title';
import VerdadRetoBodySelect from './VerdadRetoBodySelect';

class VerdadRetoBody extends React.Component {
  componentDidMount() {
    const { juego } = this.props;
    ReactDOM.render(
      <VerdadRetoBodySelect juego={juego} element='.VerdadRetoBody__change' />, document.querySelector('.VerdadRetoBody__change'),
    );
  }

  render() {
    const { juego } = this.props;
    const { cant } = this.props;
    return (
      <section className='VerdadRetoBody px-4 animated fadeIn'>
        <div className='text-center text-3xl mt-4 shadow-lg'>
          { juego === 'Suave' ? (
            <div className='border-blue-400 bg-blue-600 text-white'>
              <Title juego={juego} cant={cant} />
            </div>
          ) : (
            <div className='border-red-400 bg-red-600 border-2'>
              <Title juego={juego} cant={cant} />
            </div>
          )}
        </div>
        <div className='VerdadRetoBody__change' />
      </section>
    );
  }
}

export default VerdadRetoBody;
