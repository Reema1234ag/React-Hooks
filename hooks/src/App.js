import './App.css';
import Counter from './components/Counter';
import Counter2 from './components/Counter2';
import Counter3 from './components/Counter3';
import Hooks1 from './components/Hooks1';

function App() {
  return (
    <div className="App">
     <Hooks1/> 
     <Counter/>
     <hr></hr>
     <Counter2/>
     <br></br>
     <Counter3/>
    </div>
  );
}

export default App;
