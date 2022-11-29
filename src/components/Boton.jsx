import React from "react";
import '../styles/Boton.css'

export default function Boton(props){
    
    const esOperador = (valor) => {
        return isNaN(valor) && (valor !== '.') && (valor !== '=') && (valor !== 'C');
    };

    const esIgual = (valor) => {
        return valor === '=';
    };

    return(
        <div className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''} ${esIgual(props.children) ? 'igual' : ''}`.trimEnd()} 
            onClick={() => props.manejarClic(props.children)}>
            {props.children}
        </div>
    )
}

/*  
onClick={props.manejarClic(props.children)}

--> ACA SE LE PASA LA PROPS (PROPIEDAD DEL COMPONENTE) MANEJARCLIC EL PROPS.CHILDREN
(EL VALOR QUE ESTA ENTRE LOS LLAVES DE APERTURA Y CIERRE DEL COMPOENENTE EN EL APP.JS)
OSEA EL VALOR DE CADA BOTON, SE LO PASAMOS A LA FUNCION MANEJARCLIC QUE LA PASAMOS AL EVENTLISTENER
ONCLICK, QUE NOS PERMITE DAR UNA ACCION CUANDO DAMOS CLICK.

*/