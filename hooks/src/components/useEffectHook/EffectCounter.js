//as we did in lifecycle file in class component folder
//here we are doing that using effect hook in functional components
import React,{useState,useEffect} from 'react'

function EffectCounter() {
    const[count, setcount]=useState(0)
    useEffect(()=>  // this parameter execute after every render to the component
    {
        document.title=`you clicked ${count} times`
    }
    )
    return (
        <div>
           <button onClick={()=>{setcount(count+1)}}>Clicked {count} times</button> 
        </div>
    )
}

export default EffectCounter
//useeffect function gets executed after every render
//component didmount and didupdate at one place
