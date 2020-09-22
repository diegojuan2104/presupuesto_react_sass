import React from 'react';

import './control-presupuesto.styles.scss'

const ControlPresupuesto = ({presupuesto,restante}) => {
    return (  
        <div className="control-presupuesto">
            <h2>Cartera</h2>
            <div className="presupuesto">
                Presupuesto:     ${presupuesto}
            </div>
            <div className="restante">
                Restante:        <span className="valor-restante">${restante}</span>
            </div>
        </div>
    );
}
 
export default ControlPresupuesto;