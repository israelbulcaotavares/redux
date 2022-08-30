import './App.css';

import Intervalo from './components/Intervalo';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <h1>Exercícios React-Redux (Simples) </h1>
      <div className='linha'>
        <Intervalo title="Card 1" red >X</Intervalo> 
      </div>
      <div className='linha'>
        <Card title="Card 2" blue >X</Card>
        <Card title="Card 3" blue >Y</Card>
        <Card title="Card 4" purple >Z</Card>
    
      </div>
    </div>
  );
}

export default App;
