import React, { useState } from "react";
import './style.css';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


//criar componentes no react com apenas funcoes
const Sobre = () => (
  <Jumbotron fluid>
    <Container>
        <Row>
            <Col xs={12} id="centralize">
                <h1>Sistema Web</h1>
                <p>
                  O sistema foi desenvolvido por Tamirys Virgulino Ribeiro Prado.<br/>
                  Para mais informações, entrar em contato no seguinte e-mail: <email>virgulinotamirys@gmail.com</email>
                </p>
            </Col>
        </Row>
    </Container>
  </Jumbotron>
);


export default Sobre;
