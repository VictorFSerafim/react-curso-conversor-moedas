import React from 'react';
import './conversor-moedas.css';
import { Jumbotron, Button, Form, Col, Spinner } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

function ConversorMoedas() {
  return (
    <div>
      <h1>Conversor de moedas</h1>
      <Jumbotron>
        <Form>
          <Form.Row>
            <Col sm="3">
              <Form.Control placeholder='0' value={1} required/>
            </Col>
            <Col sm="3">

            </Col>
            <Col sm="1">

            </Col>
            <Col sm="3">

            </Col>

            <Col sm="2">

            </Col>

          </Form.Row>
        </Form>
      </Jumbotron>
    </div>
  );
}

export default ConversorMoedas;
