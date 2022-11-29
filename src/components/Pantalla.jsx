import React from 'react';
import '../styles/Pantalla.css'
/* OTRA FORMA DE DEFINIR UN COMPONENTE*/
/* SE USA MAS QUE NADA EN COMPONENTES SENCILLOS */
/* LA CLAVE ES USAR UNA VARIABLE Y DECLARARLE UNA FUNCION FLECHA */ 


const Pantalla = ({ input }) => (
    <div className='mostrarPantalla'>
        { input }
    </div>
);

export default Pantalla;