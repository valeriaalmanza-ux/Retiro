interface Props {
  nombre: string;
  resultado: number;
}

export const ResultadoRetiro = ({
  nombre,
  resultado,
}: Props) => {
  return (
    <div>
      <h2>{nombre} </h2>

      <h2>
        Resultado estimado:
      </h2>
      <h2>
        <h5>Holaaa, {nombre} te tocarían {resultado.toFixed(2)} el año durante tus años 15 de retiro. </h5>
      </h2>
    </div>
  );
};