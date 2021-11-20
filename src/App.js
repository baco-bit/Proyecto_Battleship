import Juego from './Componentes/Juego';
import './index.css';


function App() {
  return (
    <div className="App" >
      <h1>Battleship</h1>
      <div className="container d-flex flex-warp-warp">
      <Juego />  

      </div>
    </div>
  );
}

export default App;
