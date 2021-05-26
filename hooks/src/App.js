import './App.css';
import Lifecycle from './components/class component/Lifecycle';
import Counter from './components/Counter';
import Counter2 from './components/Counter2';
import Counter3 from './components/Counter3';
import Counter4 from './components/Counter4';
import Hooks1 from './components/Hooks1';
import EffectCounter from './components/useEffectHook/EffectCounter';

function App() {
  return (
    <div className="App">
      <h1>useState hook</h1>
     <Hooks1/> 
     <Counter/>
     <hr></hr>
     <Counter2/>
     <br></br>
     <Counter3/>
     <br></br>
     <Counter4/>
     <hr></hr>
     <h1>useEffect hook</h1>
     <Lifecycle/>
     <h3>(using class component)</h3>
     <EffectCounter/>
     <h3>(above using effect hook in functional component)</h3>
    </div>
  );
}

export default App;
