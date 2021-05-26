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
