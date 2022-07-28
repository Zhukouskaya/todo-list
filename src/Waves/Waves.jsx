import React from "react"; 
import waves from './img/wave.svg'

function Waves ({ onCreate }) {
  return (
    <div className="waves">
      <img src= { waves } alt="waves-img"/>
    </div>
  )
}

export default Waves