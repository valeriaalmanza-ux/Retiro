interface Props {
  nombre: string;
  ahorro: number;
  aniosRetiro: number;

  setNombre: (valor: string) => void;

  setAhorro: (valor: number) => void;

  setAniosRetiro: (
    valor: number
  ) => void;
}

export const FormularioRetiro = ({
  nombre,
  ahorro,
  aniosRetiro,
  setNombre,
  setAhorro,
  setAniosRetiro,
}: Props) => {
  return (
    <div>
      <h2>
        Datos del Retiro
      </h2>

      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) =>
          setNombre(e.target.value)
        }
      />

      <input
        type="number"
        placeholder="Ahorro Total"
        value={ahorro}
        onChange={(e) =>
          setAhorro(
            Number(e.target.value)
          )
        }
      />
  
      <input
        type="number"
        placeholder="Años en retiro"
        value={aniosRetiro}
        onChange={(e) =>
          setAniosRetiro(Number(e.target.value))}
      />
    </div>
  );
};
