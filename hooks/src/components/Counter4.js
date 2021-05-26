// how to use state hook when the state variable is an array
import React,{useState}from 'react'

export default function Counter4() {
    const[items,setitems]=useState([])
    const additem=()=>{
        setitems([...items,{id:items.length, value:Math.floor(Math.random()*10)+1}])      //random number b/w 1 to 10
    }
    return (
        <div>
        <button onClick={additem}>Add Items</button>
        {
            items.map(item => <li key={item.id}>{item.value}</li>)
        }
        
        </div>
    )
}
