import React from 'react';
import Mensaje from '../components/Mensaje';
//import VerdadRetoOpcion from '../components/VerdadRetoOpcion';
import '../assets/styles/tailwind.css';
import '../assets/styles/App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      components: <Mensaje changeState={this.changeState} />,
    };
  }

  changeState = (component) => {
    if (typeof component === 'object') {
      this.setState({
        components: component,
      });
    } else {
      console.log('Component is not a object');
    }
  }

  render() {
    const { components } = this.state;
    return (
      <section className='App'>
        <div className='appChildren min-h-screen'>
          {components}
        </div>
      </section>
    );
  }
}

export default App;
