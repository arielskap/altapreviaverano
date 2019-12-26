import React from 'react';
import HomeHeader from './childrens/HomeHeader';
import HomeBody from './childrens/HomeBody';
import '../assets/styles/components/Home.scss';

class Home extends React.Component {
  render() {
    const { changeState } = this.props;
    return (
      <div className='Home animated fadeIn min-h-screen'>
        <HomeHeader changeState={changeState} />
        <HomeBody changeState={changeState} />
      </div>
    );
  }
};

export default Home;
