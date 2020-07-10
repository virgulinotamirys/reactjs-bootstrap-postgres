import React, { Component } from "react";

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './style.css';
 
export default class Main extends Component{
    
    constructor(){
        super();
        this.state = {
            title: 'Sistema Web',
            usuario: []
        }
    }
    //faz chamadas ajax
    componentDidMount(){
        console.log('Componente é chamado...');
    }

    render(){
        let title = this.state.title;
		return (
			<Jumbotron fluid>
                <Container>
                    <Row>
                        <Col xs={12} id="centralize">
                            <h1>{title}</h1>
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

