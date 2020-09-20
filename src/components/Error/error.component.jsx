import React from 'react';
import './error.styles.scss'

const Error = ({mensaje}) => {
    return (  
        <p className="error">{mensaje}</p>
    );
}
 
export default Error;