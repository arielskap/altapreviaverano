import React from 'react';
import HomeHeader from './childrens/HomeHeader';
import HomeBody from './childrens/HomeBody';
import VerdadRetoOpcion from './VerdadRetoOpcion';
import { animateCSS, vibrar } from '../funciones';

class Home extends React.Component {
  constructor(props) {
    super(props);
    const { changeState } = this.props;
    if (window.history.state === null) {
      window.history.pushState('Home', null);
    }
    window.onpopstate = () => this.historial(changeState);
  }

  historial = (changeState) => {
    vibrar();
    animateCSS('.appChildren', 'fadeOut', () => {
      if (window.history.state === 'Home') {
        document.querySelector('.App').style.backgroundColor = 'cornsilk';
        changeState(<Home changeState={changeState} />);
      } else if (window.history.state === 'VerdadReto') {
        changeState(<VerdadRetoOpcion changeState={changeState} />);
      }
    });
  }

  render() {
    const { changeState } = this.props;
    return (
      <div className='Home animated fadeIn'>
        <HomeHeader changeState={changeState} />
        <HomeBody changeState={changeState} />
      </div>
    );
  }
};

export default Home;
