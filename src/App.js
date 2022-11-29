import './App.css';
import Boton from './components/Boton.jsx';
import Pantalla from './components/Pantalla.jsx'
import BotonClear from './components/BotonClear.jsx';
import BotonBorrar from './components/BotonBorrar.jsx'

import { FiDelete } from 'react-icons/fi';
import { TbLetterC } from 'react-icons/tb';

import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const agregarInput = val => {
    setInput(input + val);
  };

  const calcularRes = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert('¡Porfavor ingrese valores para realizar un calculo!')
    }
  };

  const calcularAnterior = () => {
      var valor = input;
      setInput(valor.substring(0, valor.length - 1)); // no es un array el input, es un string
  };

  return (
    <div className="App">
      <h1 className='titulo'>Calculadora</h1>
      <div className='cont-calculadora'>
        <Pantalla input={input} />
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={calcularRes}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')}><TbLetterC /></BotonClear>
          <BotonBorrar manejarBorrar={() => calcularAnterior()} ><FiDelete /></BotonBorrar>
        </div>
      </div>
    </div>
  );
}

export default App;
