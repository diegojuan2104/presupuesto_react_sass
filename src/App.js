import React, { useState } from "react";

import Pregunta from "./components/Pregunta/pregunta.component";
import Formulario from "./components/Formulario/formulario.component";
import Listado from "./components/Listado/listado.component"


import "./index.scss";
 
function App() {

  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [mostrarPregunta, actualizarPregunta] = useState(true);
  const [gastos, guardarGastos] = useState([]);


  //Cuando agreguemos un nuevo gasto

  const agregarNuevoGasto = gasto =>{
      guardarGastos([
        ...gastos,
        gasto
      ])
  }


  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
        <div className="title-img-container">
          <img className="title-img" src={require("./img/Title.png")}></img>
        </div>

        <div className="contenido-principal">
          {mostrarPregunta ? (
            <div className="pregunta-box">
              <Pregunta
                guardarPresupuesto={guardarPresupuesto}
                guardarRestante={guardarRestante}
                actualizarPregunta={actualizarPregunta}
              />
            </div>
          ) : (
            <div className="contenido-gastos">
                <Formulario  
                  agregarNuevoGasto={agregarNuevoGasto}
                />
                <Listado gastos={gastos}/>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
