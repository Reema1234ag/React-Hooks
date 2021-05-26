import React,{useState} from 'react'           //import package usestate

export default function Hooks1() {
    const[name, setname]= useState("Reema")     //define setter function by your choice while defining the state
    const[name1, setname1]=useState()
    return (
        <div>
            <h1>I am using React-Hooks</h1>
            <h2>{name}</h2> 
            <h2>{name1}</h2>
            <button onClick={()=>{
                setname("How are u?");           //use setter function directly to change the value
                setname1("Reema")
            }}>click me</button>             
        </div>
    )
}
