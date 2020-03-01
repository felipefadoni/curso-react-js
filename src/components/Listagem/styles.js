import styled from "styled-components";

export const ListarBusca = styled.section`
  display: block;

  .sem-registros {
    display: block;
    font-size: 16px;
    text-align: center;
    padding: 32px 0px;
  }

  ul {
    display: block;
    padding: 0px;

    li {
      display: flex;
      border-bottom: 1px solid #dcdcdc;
      padding: 16px;
      justify-content: center;
      align-items: center;

      img {
        width: 180px;
        height: 180px;
        margin-right: 16px;
      }

      .dados-mais-detalhe {
        width: 50%;

        p {
          margin: 0px 0px 8px 0px;
        }
      }

      .dados-perfil {
        p {
          margin: 0px 0px 8px 0px;
          font-size: 18px;
        }
      }
    }
  }
`;
