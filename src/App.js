import React, { useState, useEffect } from "react";

import Pregunta from "./components/Pregunta/pregunta.component";
import Formulario from "./components/Formulario/formulario.component";
import Listado from "./components/Listado/listado.component";
import ControlPresupuesto from "./components/ControlPresupuesto/control-presupuesto.component";

import "./index.scss";

function App() {
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [mostrarPregunta, actualizarPregunta] = useState(true);
  const [gastos, guardarGastos] = useState([]);
  const [gasto, guardarGasto] = useState([]);
  const [creargasto, guardarCrearGasto] = useState(false);


  //UseEffect que actuliza el restante
  useEffect(() => {
    if(creargasto){
    
    if(gasto.cantidad > restante){
      alert("Este Gasto sobrepasa el presupuesto");
      return;
    }
    guardarGastos([...gastos, gasto]);


    ///Resta del presupuesto actual 
    const presupuestoRestante = restante - gasto.cantidad;

    guardarRestante(presupuestoRestante);

    guardarCrearGasto(false);
    }
  }, [gasto]);


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
              <ControlPresupuesto
                restante={restante}
                presupuesto={presupuesto}
              />
              <Formulario 
                guardarGasto={guardarGasto}
                guardarCrearGasto={guardarCrearGasto}
               />

              <Listado gastos={gastos} />
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
