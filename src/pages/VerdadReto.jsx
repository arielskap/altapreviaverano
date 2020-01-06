import React from 'react';
import { useLocation } from 'react-router-dom';
import HeaderGoHome from '../components/childrens/HeaderGoHome';
import VerdadRetoBody from '../components/childrens/VerdadRetoBody';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function VerdadReto() {
  const query = useQuery();
  return (
    <section className='VerdadReto animated fadeIn faster'>
      <HeaderGoHome link='/verdadRetoOpcion' />
      <VerdadRetoBody juego={query.get('juego')} cant={query.get('cant')} />
    </section>
  );
};

export default VerdadReto;
