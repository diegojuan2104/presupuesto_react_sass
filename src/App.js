import React, { useState } from "react";

import Pregunta from "./components/Pregunta/pregunta.component";
import Formulario from "./components/Formulario/formulario.component"

import './index.scss'

function App() {
  const [presupuesto, guardarPresupuesto] = useState(0);

  const [restante, guardarRestante] = useState(0);

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
        <div className="title-img-container">
          <img className="title-img" src={require("./img/Title.png")}></img>
        </div>

        <div className="contenido-principal">
          <Pregunta
            guardarPresupuesto={guardarPresupuesto}
            guardarRestante={guardarRestante}
          />

          <div className="cotenido-gastos">

            <div>
              <Formulario/>
            </div>
            
            <div>2</div>

          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
