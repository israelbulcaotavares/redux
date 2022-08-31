import './App.css';

import Intervalo from './components/Intervalo';
 
import Media from './components/Media';
import Soma from './components/Soma';
import Sorteio from './components/Sorteio';
import React from 'react';

function App() {

 
  return (
    <div className="App">
      <h1>Exercícios React-Redux (Simples) </h1>
      <div className='linha'>
        <Intervalo ></Intervalo>
      </div>
      <div className='linha'>
        <Media prop1="abc" props2="def" ></Media>
        <Soma></Soma>
        <Sorteio></Sorteio>

      </div>
    </div>
  );
}

export default App;
