import React, { Fragment, useState} from "react";
import './pregunta.styles.scss'

const Pregunta = () => {

  const[cantidad, guardarCantidad] = useState(0);


  //Funcion que lee el presupuesto

  const definirPresupuesto = e =>{
    guardarCantidad(parseInt(e.target.value,10));
  }

  //Submit para definir el presuspuesto

  const agregarPresupuesto = e =>{
    e.preventDefault();
  }

  return (
    <Fragment>
      <form className="pregunta-form">
        <h2 className="form-title">COLOCA TU PRESUPUESTO</h2>
        
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
