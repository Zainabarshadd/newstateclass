import React, { useState } from 'react'

export default function Count() {
    let [count,setcount] = useState(0)
    
    function inccount(){
        setcount(count+1)
    }


  return (
    <div>
        <h3>Count = {count}</h3>
       <button onClick={inccount}>Increase Count</button>
    </div>
  )
}
