import React, { Component } from "react";

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './style.css';
 
export default class Main extends Component{
    render(){
		return (
			<Jumbotron fluid>
                <Container>
                    <Row>
                        <Col xs={12} id="centralize">
                            <h1>Sistema Web</h1>
                            <p>
                            Aguarde para mais informações.<br/>
                            Sistema em fase de desenvolvimento.
                            </p>
                        </Col>
                    </Row>
                    
                </Container>
            </Jumbotron>
		)
	}
}

