import React, { Component } from "react";


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './style.css';

export default class SignUp extends Component {
    render() {
        return (
            <Container>
                <Row className="dp-center">
                    <Col xs={12} md={6} >
                    <form>
                        <h3>Cadastro</h3>

                        <div className="form-group">
                            <label>Primeiro nome</label>
                            <input type="text" className="form-control" placeholder="Primeiro nome" />
                        </div>

                        <div className="form-group">
                            <label>Último nome</label>
                            <input type="text" className="form-control" placeholder="Último nome" />
                        </div>

                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" placeholder="Enter email" />
                        </div>

                        <div className="form-group">
                            <label>Senha</label>
                            <input type="password" className="form-control" placeholder="Enter senha" />
                        </div>

                        <button type="submit" className="btn btn-primary btn-block">Cadastrar</button>
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