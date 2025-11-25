import React, { useState } from 'react'
import BotonMarcable from './BotonMarcable'

let diasTexto=["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"];
const Semana = ({diasSeleccionados,laborable}) => {
  // let diasTexto=["Lunes","Martes","Miércoles","Jueves","Viernes"];
  console.log(diasSeleccionados);
  if(!diasSeleccionados) diasSeleccionados=[];
  // if(!laborable && !diasTexto.includes("Sábado")){
  //     diasTexto=[...diasTexto,"Sábado","Domingo"];
  // }  
  const [diasMarcados,setDiasMarcados]=useState(diasSeleccionados);
  
    const seleccionar=(dia)=>{
        let nuevaSeleccion;
        //console.log(diasMarcados);
        if (diasMarcados.includes(dia)) {
            nuevaSeleccion = diasMarcados.filter(d => d !== dia);
        } else {
            nuevaSeleccion = [...diasMarcados, dia];
        }
        setDiasMarcados(nuevaSeleccion);
    };
    
  return (
    <div>
    {diasTexto.map((dia,idx) => (
      // <BotonMarcable key={dia} texto={dia} marcado={diasMarcados.includes(dia.substring(0,2))} click={()=>seleccionar(dia.substring(0,2))}/>  
      ((laborable && idx<5) || (!laborable)) && <BotonMarcable key={dia} texto={dia} marcado={diasMarcados.includes(dia.substring(0,2))} click={()=>seleccionar(dia.substring(0,2))}/>  
    ))}
    {/* <BotonMarcable texto="algo" propiedad="x" /> */}
    </div>
  )
}

export default Semana