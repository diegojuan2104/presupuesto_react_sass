import React, { Fragment, useState} from "react";
import './pregunta.styles.scss'

import Error from "../Error/error.component"

const Pregunta = ({guardarPresupuesto, guardarRestante}) => {

  const[cantidad, guardarCantidad] = useState(0);

  const [error, guardarError] = useState(false);


  //Funcion que lee el presupuesto

  const definirPresupuesto = e =>{
    guardarCantidad(parseInt(e.target.value,10));
  }

  //Submit para definir el presuspuesto

  const agregarPresupuesto = e =>{
    e.preventDefault();

    //Validar
    if(cantidad < 1 || isNaN(cantidad)){
      guardarError(true);
      return;
    }
    guardarError(false);

    guardarPresupuesto(cantidad);
    guardarRestante(cantidad);
  }

  return (
    <Fragment>
      <form className="pregunta-form" onSubmit={agregarPresupuesto}>
        <h2 className="form-title">COLOCA TU PRESUPUESTO</h2>

        {error ? <Error mensaje = "El presupuesto es incorrecto"/> : null}
        
        <input
          type="number"
          placeholder="Coloca tu presupuesto"
          className=" item input-presupuesto"
          onChange={definirPresupuesto}
        />

        <input 
            type="submit" 
            className=" item submit-button"
            value="Definir Presupuesto"
        />
      </form>
    </Fragment>
  );
};

export default Pregunta;
