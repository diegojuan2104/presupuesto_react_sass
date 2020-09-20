import React from 'react';


import './formulario.styles.scss'
const Formulario = () => {
    return ( 
        <form>
            <h2>Agrega tus gastos aquí</h2>

            <div className="campo">
                <label>Cantidad de Gasto</label>
                <input
                    type="number"
                    className="input"
                />
            </div>

            <input
                type="submit"
                className="input"
                value="Agregar Gasto"
            
            />
        </form>
     );
}
 
export default Formulario;