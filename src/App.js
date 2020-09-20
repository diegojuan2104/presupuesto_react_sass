import React from "react";
import Pregunta from "./components/pregunta/pregunta.component";

function App() {
  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
        <div className="title-img-container">
          <img className="title-img" src={require("./img/Title.png")}></img>
        </div>
        <div className="contenido-principal">
          <Pregunta />
        </div>
      </header>
    </div>
  );
}

export default App;
