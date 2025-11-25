import React from 'react'
import './BotonMarcable.css'
const BotonMarcable = (props) => {

//function BotonMarcable (props){    
    let clase=props.marcado?(props.marcado===true?'marcado':'sin-marcar'):'sin-marcar';
    //console.log(props);
  return (
    <button id={props.indice} className={clase} onClick={props.click}>{props.texto}</button>
  )
}

export default BotonMarcable

