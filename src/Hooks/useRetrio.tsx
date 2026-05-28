import { useEffect, useState } from "react";

export const useRetiro = () => {
  const [nombre, setNombre] =
    useState("");

  const [ahorro, setAhorro] =
    useState(0);

  const [aniosRetiro, setAniosRetiro] =
    useState(0);

  const [resultado, setResultado] =
    useState(0);

  const calcularRetiro = () => {
    const total =
      ahorro / aniosRetiro;

    setResultado(total);
  };

  useEffect(() => {
    calcularRetiro();
  }, [ahorro, aniosRetiro]);

  return {
    nombre,
    ahorro,
    aniosRetiro,
    resultado,

    setNombre,
    setAhorro,
    setAniosRetiro,
  };
};