import logo from './logo.svg';
import './Animal component/Animal.css';
import Animal from '../src/Animal component/Animal';

function App() {
  return (
    <div className="App">
      <Animal animal="Kangaroo" animal_name="Roo"/>
      <Animal animal="Elephant" animal_name="Trunky" />
    </div>
  );
}

export default App;
