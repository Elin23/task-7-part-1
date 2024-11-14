import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { IoIosArrowRoundForward } from "react-icons/io";
import './FormComponent.css'
function FormComponent() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-4">
        <Form.Group as={Col} md="6" controlId="validationCustom01">
          <Form.Label>YourName*</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder=""
            defaultValue=""
          />
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustomUsername">
          <Form.Label>YourEmail*</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="email"
              placeholder=""
              aria-describedby="inputGroupPrepend"
              required
            />
          </InputGroup>
        </Form.Group>
      </Row>
      <Row>
        <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
          <Form.Label>WriteMessage*</Form.Label>
          <Form.Control as="textarea" rows={5} />
        </Form.Group>
      </Row>
      <Button type="submit" className='btn-send-message rounded-5 px-3 py-2'>Send Message <IoIosArrowRoundForward className='fs-3'/></Button>
    </Form>
  );
}

export default FormComponent;