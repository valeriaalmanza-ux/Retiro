import {
  FormularioRetiro,
  ResultadoRetiro,
} from "./components";

import { useRetiro } from "./Hooks";

function App() {
  const {
    nombre,
    ahorro,
    aniosRetiro,
    resultado,

    setNombre,
    setAhorro,
    setAniosRetiro,
  } = useRetiro();

  return (
    <div >
      <h1>
        Simulador de Retiro
      </h1>

      <FormularioRetiro
        nombre={nombre}
        ahorro={ahorro}
        aniosRetiro={
          aniosRetiro
        }
        setNombre={setNombre}
        setAhorro={setAhorro}
        setAniosRetiro={
          setAniosRetiro
        }
      />

      <hr />

      <ResultadoRetiro
        nombre={nombre}
        resultado={resultado}
      />
    </div>
  );
}

export default App;