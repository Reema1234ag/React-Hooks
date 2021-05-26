import React,{useState} from 'react'

export default function Counter2() {
    const initialcount=0;
    const[count,setcount]=useState(initialcount)
    const incrementfive =()=>{
        for(let i=0;i<5;i++){
            setcount(prevcount => prevcount+1)                              //2nd way by using previous value for update count value in it(safe way)
        }
    }
    return (
        <div>
           count:{count} 
           <button onClick={()=>{setcount(initialcount)}}>Reset</button>
           <button onClick={()=>{setcount(count +1)}}>Increment</button>           {/*1st way but this is unsafe*/}
           <button onClick={()=>{setcount(count -1)}}>Decrement</button>
           <button onClick={incrementfive}>Increment5</button>
        </div>
    )
}
