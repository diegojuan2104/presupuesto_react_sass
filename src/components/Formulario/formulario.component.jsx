import React, { useState } from "react";

import Error from "../Error/error.component";
import shortId from "shortid";

import "./formulario.styles.scss";
const Formulario = ({guardarGasto, guardarCrearGasto}) => {
  const [cantidad, guardarCantidad] = useState("");
  const [nombre, guardarNombre] = useState("");
  const [error, guardarError] = useState(false);

  const agregarGasto = (e) => {
    e.preventDefault();

    //Validar
    if (cantidad < 1 || isNaN(cantidad) || nombre.trim() === "") {
      
      guardarError(true);
      return;
    }
    guardarError(false);
    
    //Construir el gasto
    const gasto = {
        nombre, 
        cantidad,
        id:shortId.generate()
    }

    //pasar el gasto al componente principal
    guardarGasto(gasto);
    guardarCrearGasto(true);
    
    //resetear el form
    guardarNombre("");
    guardarCantidad(0);
  };

  return (
    <form onSubmit={agregarGasto}>
      <h2>Agrega tus gastos aquí</h2>

      {error ? (
        <Error mensaje="Todos los campos son obligatorios / existe un error" />
      ) : null}

      <div className="campo">
        <label>Nombre del Gasto:</label>
        <input
          type="text"
          className="input-text"
          placeholder="Ingrese un nombre"
          value={nombre}
          onChange={(e) => guardarNombre(e.target.value)}
        />
      </div>

      <div className="campo">
        <label>Cantidad de Gasto:</label>
        <input
          value={cantidad}
          type="number"
          className="input-text"
          placeholder="Ingrese un valor"
          onChange={(e) => guardarCantidad(parseInt(e.target.value))}
        />
      </div>

      <input type="submit" className="submit-button" value="Agregar Gasto" />
    </form>
  );
};

export default Formulario;
