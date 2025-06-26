import React, { useState } from 'react'

export default function Counter() {
    const [counter , setCounter] = useState(0);

    if(counter ===3){
        throw new Error("This is Custom Error!")
    }
  return (
    <div>
        <p>Counter : {counter}</p>
        <button onClick={()=>setCounter(prev => prev+1)}>INCR</button>
        <button onClick={()=>setCounter(prev => prev-1)}>DECR</button>
    </div>
  )
}
