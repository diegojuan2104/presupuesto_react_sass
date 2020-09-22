import React from "react";
import "./gasto.styles.scss";

const Gasto = ({ gasto }) => {
  return (
    <p className="gasto">
      <div className="gasto-nombre">{gasto.nombre}</div>
      <span className="gasto-cantidad">${gasto.cantidad}</span>
    </p>
  );
};

export default Gasto;
