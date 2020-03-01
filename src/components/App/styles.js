import styled from "styled-components";
import { Container } from "react-bootstrap";

export const ContainerApp = styled(Container)`
  background-color: #fff;
  min-height: 100%;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);

  h1 {
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    padding: 16px 0px;
    color: #0000cd;
  }

  .carregando {
    display: block;
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    color: #66cdaa;
  }
`;
