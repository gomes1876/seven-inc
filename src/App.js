import './App.css';
import { Home } from './Components/Home/Home';

function App() {

  let funcionarios = []

  return (
    <div className="App">
      <div className="col-md-10 offset-md-1" >
        <Home funcionarios={funcionarios} />

      </div>
    </div>
  );
}

export default App;
