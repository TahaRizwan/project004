import React, { useState } from 'react'
import  './Room.css'

function Room(){

    let [isLit,setLit] = useState(false)
    
    function updateLit(){
        setLit(!isLit)
    }

    return(
        <div className={`room ${isLit?"lit":"dark"}`}>
            <h1>The Room is {isLit?'lit':'dark'}</h1>
            <button 
            onClick={updateLit}>Switch</button>
        </div>
    )
}

export default Room; 