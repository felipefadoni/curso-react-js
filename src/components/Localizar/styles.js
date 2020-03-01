import styled from "styled-components";
import { Form } from "react-bootstrap";

export const FormLocalizar = styled.section`
  display: flex;
  justify-content: center;

  span {
    margin-right: 6px;
  }

  input {
    margin-right: 6px;
    padding: 5px 10px;
    border-radius: 3px;
  }
`;

export const FormInputs = styled(Form)`
  width: 100%;
`;
