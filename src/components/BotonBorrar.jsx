import React from 'react';
import '../styles/BotonBorrar.css';


export default function BotonBorrar(props) {
    return (
        <div className='boton-borrar' 
            onClick={props.manejarBorrar}>
            {props.children}
        </div>
    )
};
