import './App.css';
import IncrementPerSec1 from './components/class component/IncrementPerSec1';
import Lifecycle from './components/class component/Lifecycle';
import Lifecycle2 from './components/class component/Lifecycle2';
import IncrementPerSec from './components/Common problems/IncrementPerSec';
import Counter from './components/Counter';
import Counter2 from './components/Counter2';
import Counter3 from './components/Counter3';
import Counter4 from './components/Counter4';
import Hooks1 from './components/Hooks1';
import EffectCounter from './components/useEffectHook/EffectCounter';
import EffectCounter2 from './components/useEffectHook/EffectCounter2';
import EffectReturn from './components/useEffectHook/EffectReturn';

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
     <h2>Example-1</h2>
     <Lifecycle/>
     <h3>(using class component)</h3>
     <EffectCounter/>
     <h3>(above using effect hook in functional component)</h3>
     <h2>Example-2</h2>
     <Lifecycle2/><h3>(using class component)</h3>
     <EffectCounter2/><h3>(above using effect hook in functional component)</h3>
     <br></br> 
    <EffectReturn/>
    <hr></hr>
    <h2>Incrementing value in each second</h2>
    <IncrementPerSec1/><h3>(using class component)</h3>
    <IncrementPerSec/><h3>(using effect hook in functional component)</h3>
    </div>
  );
}

export default App;
