import React, { useState } from "react";
import axios from "axios";

import { ContainerApp } from "./styles";

import GlobalStyle from "../../styles/global";

import Localizar from "../Localizar";
import Listagem from "../Listagem";

const App = () => {
  const [listaLocalizados, setListaLocalizados] = useState([]);
  const [loading, setLoading] = useState(false);

  const localizarDados = async dados => {
    setLoading(true);
    try {
      if (dados.textInput === "") {
        setListaLocalizados([]);
        setLoading(false);
      } else {
        const dadosLocalizados = await axios.get(
          `https://api.github.com/search/users?q=${dados.textInput}`
        );
        setListaLocalizados(dadosLocalizados.data.items);
        setLoading(false);
      }
    } catch (error) {
      alert("Atenção, erro ao localizar usuários.");
      setLoading(false);
    }
  };

  return (
    <>
      <GlobalStyle />
      <ContainerApp>
        <h1>Integração API Github</h1>
        <Localizar handleLocalizar={dados => localizarDados(dados)} />
        {loading === false ? (
          <Listagem listagem={listaLocalizados} />
        ) : (
          <div className="carregando">Aguarde, carregando.</div>
        )}
      </ContainerApp>
    </>
  );
};

export default App;
