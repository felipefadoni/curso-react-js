import React from "react";

import { ListarBusca } from "./styles";

import ListagemRow from "../ListagemRow";

const Listagem = ({ listagem }) => {
  return (
    <ListarBusca>
      {listagem.length > 0 ? (
        <ul>
          {listagem.map(row => (
            <ListagemRow row={row} key={row.id} />
          ))}
        </ul>
      ) : (
        <div className="sem-registros">Sem registros localizados.</div>
      )}
    </ListarBusca>
  );
};

export default Listagem;
