//object as a state variable with the useState hook
import React,{useState} from 'react'

export default function Counter3() {
    const [name, setname]=useState({firstname:'', lastname:''})        //here name is an  object
    return (
        <div>
            <form>
            <input type='text' value={name.firstname} onChange={e=>{setname({firstname:e.target.value})}}/>     
            <input type='text' value={name.lastname} onChange={e=>{setname({lastname:e.target.value})}}/>
            <h2>Your firstname is- {name.firstname}</h2>
            <h2>Your Lastname is- {name.lastname}</h2>
            <h2>{JSON.stringify(name)}</h2>             {/* useState donot automaticaly merge and update the object where setState in class component does
                                                                and this is the key difference in useState and setState */}
            </form>
        </div>
    )
}
 