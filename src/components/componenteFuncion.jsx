import React, { useState, useEffect } from "react";

const ComponenteFuncion = () => {

    const primeroDatos = {
        edad: 31,
        nombre: 'Ezequiel',
        fecha: new Date()
    }; 

    const [datos, setDatos] = useState(primeroDatos)


    useEffect(() => {
        const hora = setInterval(()=>{
           segundoDatos()
        }, 1000)
        return () => {
            clearInterval(hora)
        };
    });

    const segundoDatos = () => {
    return setDatos({
      edad: datos.edad + 1,
      nombre: datos.nombre,
      fecha: new Date()
    })
  }; 



  return (
    <div>
    <h1>
        La hora es: {datos.fecha.toLocaleTimeString()}
    </h1>
      <h1>
        {datos.nombre} 
      </h1>
      <h2>
        
      </h2>
      <h1>Edad: {datos.edad}</h1>
    </div>
  );
}; 

export default ComponenteFuncion;
  