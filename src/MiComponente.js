import React, { useState } from 'react';
import './MiComponente.css';

function MiComponente() {
    const [contador, setContador] = useState(0);

  const incrementarContador = () => {
    setContador(contador + 1);
  };

  return (
    <div>
      <h1>Hola, mundo!</h1>
      <p className="text-boton">Contador: {contador}</p>
      <button className="boton" onClick={incrementarContador}>Incrementar</button>
    </div>
  );
}

export default MiComponente;
