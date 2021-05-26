// counter using react hooks
import React,{useState} from 'react'

export default function Counter() {
    const [count,setcount]=useState(0)              //set variable and set method in one line using useState
    return (
        <div>
            <button onClick={()=>{setcount(count +1)}}>count {count}</button>
        </div>
    )
}
//the setcount func will cost the component to be re-rendered after every click
