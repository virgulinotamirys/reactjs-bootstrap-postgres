import React, { Component } from "react";


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './server_signup.js';
import './style.css';

export default class SignUp extends Component {

    constructor(){
        super();
        this.usuarioForm = React.createRef();
        this.username = React.createRef();
        this.email = React.createRef();
        this.password = React.createRef();
        this.state = {
            title: 'Faça seu cadastro',
            usuario: []
        }
    }

     //faz chamadas ajax
    componentDidMount(){
        console.log('Componente é chamado...');
    }

    
    addUsuario(event){
        event.preventDefault();
        console.log('event');
    }

    render() {
        let title = this.state.title;
        return (
            <Container>
                <Row className="dp-center">
                    <Col xs={12} md={6} >
                    <form ref={this.usuarioForm}>
                        <h3>{title}</h3>

                        <div className="form-group">
                            <label>Nome</label>
                            <input type="text" ref={this.username} className="form-control" placeholder="Enter nome completo" />
                        </div>

                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" ref={this.email} className="form-control" placeholder="Enter email" />
                        </div>

                        <div className="form-group">
                            <label>Senha</label>
                            <input type="password" ref={this.password} className="form-control" placeholder="Enter senha" />
                        </div>

                        <button type="submit" onClick={this.addUsuario.bind(this)} className="btn btn-primary btn-block">Cadastrar</button>
                        <p className="forgot-password text-right">
                            Já sou cadastrado <a href="/login">ir para login</a>
                        </p>
                    </form>
                    </Col>
                </Row>
            </Container>
        );
    }
}