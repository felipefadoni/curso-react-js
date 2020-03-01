import React, { useState, useRef } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

import { FormLocalizar, FormInputs } from "./styles";

const Localizar = ({ handleLocalizar }) => {
  const [textInput, setTextInput] = useState("");
  const inputTextRef = useRef();

  const handleSubmitForm = event => {
    event.preventDefault();
    handleLocalizar({
      textInput
    });
  };

  return (
    <FormLocalizar>
      <FormInputs onSubmit={handleSubmitForm}>
        <Form.Group as={Row} controlId="formLocalizarRepositorio">
          <Form.Label column sm="2">
            Localizar Usuário:
          </Form.Label>
          <Col sm="8">
            <Form.Control
              type="text"
              placeholder="Digite aqui"
              defaultValue={textInput}
              onChange={input => setTextInput(input.target.value)}
              ref={inputTextRef}
            />
          </Col>
          <Col sm="2">
            <Button type="submit" variant="success">
              Ok
            </Button>
          </Col>
        </Form.Group>
      </FormInputs>
    </FormLocalizar>
  );
};

export default Localizar;
