import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Mensaje from '../pages/Mensaje';
import AcercaDe from '../pages/AcercaDe';
import Home from '../pages/Home';
import VerdadRetoOpcion from '../pages/VerdadRetoOpcion';
import VerdadReto from '../pages/VerdadReto';
import YoNunca from '../pages/YoNunca';
import Botellita from '../pages/Botellita';
import MasProbable from '../pages/MasProbable';
import AddGame from '../pages/AddGame';
import NotFound from '../pages/NotFound';
import '../assets/styles/tailwind.css';
import '../assets/styles/App.scss';
import 'tippy.js/dist/tippy.css';

const App = () => {
  return (
    <section className='App'>
      <div className='appChildren min-h-screen'>
        <HashRouter>
          <Switch>
            <Route exact path='/'>
              <Mensaje />
            </Route>
            <Route path='/home'>
              <Home />
            </Route>
            <Route path='/acercaDe'>
              <AcercaDe />
            </Route>
            <Route path='/verdadRetoOpcion'>
              <VerdadRetoOpcion />
            </Route>
            <Route path='/verdadReto'>
              <VerdadReto />
            </Route>
            <Route path='/yoNunca'>
              <YoNunca />
            </Route>
            <Route path='/botellita'>
              <Botellita />
            </Route>
            <Route path='/masProbable'>
              <MasProbable />
            </Route>
            <Route path='/addGame'>
              <AddGame />
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
