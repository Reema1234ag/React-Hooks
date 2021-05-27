// componentWillUnmounted functionality using useEffect hooks
//as we did in lifecycle file in class component folder
//here we are doing that using effect hook in functional components
import React,{useState,useEffect} from 'react'
import EffectCounter2 from './EffectCounter2'

function EffectReturn() {
    const[display, setdis]=useState(true)
   
    
    return (
        <div>
            <button onClick={()=>{setdis(!display)}}>Toggle Display</button>
            {display && <EffectCounter2/>}
        </div>
    )
}

export default EffectReturn

//in class component we have componentWillUnmount() method
//componentWillUnmount(){
// window.removerEventListener("mouseover",this.logMousePosition)   
//}

