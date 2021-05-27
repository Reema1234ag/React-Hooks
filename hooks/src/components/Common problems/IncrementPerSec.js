import React,{useState,useEffect} from 'react'

function IncrementPerSec() {
    const[count,setcount]=useState(0)
    const tick=()=>{
        setcount(count+1)                                //or (prevcount=prevcount+1 so there is no need of dependecy count array below)
    }
    useEffect(()=>{
        const interval=setInterval(tick,1000)           //this effect is going fire in every render
        return()=>{
            clearInterval(interval)
        }
    },[count])                                               //but usng is [], this will render only once(like componentDidMount)
    return (
        <div>
          {count}  
        </div>
    )
}

export default IncrementPerSec
