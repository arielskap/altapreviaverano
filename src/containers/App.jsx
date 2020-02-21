import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import constructor from '../constructor';
import Mensaje from '../pages/Mensaje';
import AcercaDe from '../pages/AcercaDe';
import Home from '../pages/Home';
import VerdadRetoOpcion from '../pages/VerdadRetoOpcion';
import VerdadReto from '../pages/VerdadReto';
import YoNunca from '../pages/YoNunca';
import Botellita from '../pages/Botellita';
import MasProbable from '../pages/MasProbable';
import AddGame from '../pages/AddGame';
import Perfil from '../pages/Perfil';
import NotFound from '../pages/NotFound';
import '../assets/styles/tailwind.css';
import '../assets/styles/App.scss';
import 'tippy.js/dist/tippy.css';
import ScrollToTop from '../components/ScrollToTop';
import SecondModal from '../components/SecondModal';
import Modal from '../components/Modal';

constructor();

const App = () => {
  return (
    <section className='App'>
      <Modal color='red' className='Modal-internet' title='Sin Internet bro' button='Ya estoy habilitando los 20G'>Mira krak sin internet tus posibilidades en esta aplicacion son escasas, así que dale gastate todos los datos</Modal>
      <div className='appChildren min-h-screen'>
        <HashRouter>
          <Switch>
            <Route exact path='/'>
              <Mensaje />
            </Route>
            <Route path='/home'>
              <Switch>
                <Route exact path='/home'>
                  <ScrollToTop />
                  <Home />
                </Route>
                <Route path='/home/acercaDe'>
                  <AcercaDe />
                </Route>
                <Route path='/home/perfil'>
                  <ScrollToTop />
                  <Perfil />
                </Route>
              </Switch>
            </Route>
            <Route path='/games'>
              <Switch>
                <Route path='/games/verdadRetoOpcion'>
                  <SecondModal juegoActual='verdadOReto' />
                  <VerdadRetoOpcion />
                </Route>
                <Route path='/games/verdadReto'>
                  <VerdadReto />
                </Route>
                <Route path='/games/yoNunca'>
                  <SecondModal juegoActual='yoNunca' />
                  <YoNunca />
                </Route>
                <Route path='/games/botellita'>
                  <SecondModal juegoActual='botellita' />
                  <Botellita />
                </Route>
                <Route path='/games/masProbable'>
                  <SecondModal juegoActual='masProbable' />
                  <MasProbable />
                </Route>
                <Route path='/games/addGame'>
                  <AddGame />
                </Route>
              </Switch>
            </Route>
            <Route path='*'>
              <NotFound />
            </Route>
          </Switch>
        </HashRouter>
      </div>
    </section>
  );
};

export default App;
