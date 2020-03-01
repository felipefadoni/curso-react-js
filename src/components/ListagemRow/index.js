import React, { useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";

const ListagemRow = ({ row }) => {
  const [dadosPerfil, setDadosPerfil] = useState({
    name: "",
    blog: "",
    location: "",
    bio: ""
  });

  const handleDetalhePerfil = async login => {
    try {
      const dadosPerfil = await axios.get(
        `https://api.github.com/users/${login}`
      );
      setDadosPerfil(dadosPerfil.data);
    } catch (error) {
      alert("Erro ao localizar o perfil.");
    }
  };

  return (
    <li key={row.id}>
      <img src={row.avatar_url} alt="" />
      <span className="dados-mais-detalhe">
        <p>Login: {row.login}</p>
        <Button size="sm" onClick={() => handleDetalhePerfil(row.login)}>
          Mais Detalhes
        </Button>
      </span>
      {dadosPerfil.name !== "" ? (
        <span className="dados-perfil">
          <p>Nome: {dadosPerfil.name || "Não informado"}</p>
          {dadosPerfil.blog !== "" ? (
            <p>
              Web Site:{" "}
              <a
                target="_new"
                href={
                  !!dadosPerfil.blog.match(/http/)
                    ? dadosPerfil.blog
                    : `http://${dadosPerfil.blog}`
                }
              >
                visitar
              </a>
            </p>
          ) : null}
          <p>Cidade: {dadosPerfil.location || "Não informado"}</p>
          <p>{dadosPerfil.bio}</p>
        </span>
      ) : null}
    </li>
  );
};

export default ListagemRow;
