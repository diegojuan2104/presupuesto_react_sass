import React from 'react';
import './gasto.styles.scss'

const Gasto = ({gasto}) => {
    return (
        <li className="gastos">
            <p>
                {gasto.nombre}
                <span className="gasto">{gasto.cantidad}</span>
            </p>
        </li>
      );
}
 
export default Gasto;