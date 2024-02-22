import { useState } from "react";

export default function ManusearModal() {
  const [aberto, setAberto] = useState<boolean>(false);

  function alternar() {
    setAberto(!aberto);
  }

  function fecharModal() {
    setAberto(false);
  }

  return {
    aberto,
    alternar,
    fecharModal,
  };
}