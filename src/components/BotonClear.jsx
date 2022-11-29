import React from 'react';
import '../styles/BotonClear.css'


const BotonClear = (props) => (
    <div className='boton-clear' 
        onClick={props.manejarClear}>
        {props.children}
    </div>
);
/* el props.children trae la informacion que yo le pase
a la etiqueta colocada en el app.js, en este caso 'clear' */
export default BotonClear;