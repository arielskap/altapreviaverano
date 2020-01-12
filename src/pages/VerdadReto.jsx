import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import VerdadRetoBody from '../components/VerdadRetoBody';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function VerdadReto() {
  const query = useQuery();
  return (
    <section className='VerdadReto animated fadeIn faster'>
      <Header link='/verdadRetoOpcion' />
      <VerdadRetoBody juego={query.get('juego')} cant={query.get('cant')} />
    </section>
  );
};

export default VerdadReto;
