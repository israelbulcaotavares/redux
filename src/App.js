import './App.css';

import Intervalo from './components/Intervalo';
import Card from './components/Card';
import Media from './components/Media';
import Soma from './components/Soma';
import Sorteio from './components/Sorteio';


function App() {
  return (
    <div className="App">
      <h1>Exercícios React-Redux (Simples) </h1>
      <div className='linha'>
        <Intervalo title="Card 1" red >X</Intervalo>
      </div>
      <div className='linha'>
        <Media minimo={1} maximo={10}></Media>
        <Soma minimo={1} maximo={10}></Soma>
        <Sorteio  minimo={1} maximo={10}></Sorteio>

      </div>
    </div>
  );
}

export default App;
