//as we did in lifecycle file in class component folder
//here we are doing that using effect hook in functional components
import React,{useState,useEffect} from 'react'

function EffectCounter2() {
    const[x, setx]=useState(0)
    const[y,sety]=useState(0)

    const logMousePosition= e=>{
        console.log("mouse event")
            setx(e.clientX)            //set the co-ordinates of mouse pointer 
            sety(e.clientY)
        
    }
    useEffect(()=>  // this parameter execute after every render to the component
    {
        console.log("useEffect called")
        window.addEventListener('mousemove', logMousePosition)
    }
    ,[])           //we can mimic the componentDidMount() by just passing an empty array in the 2nd parameter of useEffect
                    //this will render now only once at starting  as componentDidMount does
    return (
        <div>
            X- {x} Y- {y}
        </div>
    )
}

export default EffectCounter2
//useeffect function gets executed after every render
//component didmount and didupdate at one place
