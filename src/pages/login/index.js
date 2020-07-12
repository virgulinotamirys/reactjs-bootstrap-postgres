import React, { Component } from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import './style.css';
 
export default class Login extends Component{

    constructor(){
        super();
        this.state = {
            title: 'Faça seu login',
            showHide : false,
            usuario: [],
        }
    }

    handleModalShowHide() {
        this.setState({ showHide: !this.state.showHide })
    }


    render(){
        let title = this.state.title;
		return (
            <Container>
                <Row className="dp-center">
                    <Col xs={12} md={6} >
                    <form>
                        <h3>{title}</h3>

                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" placeholder="Enter email" />
                        </div>

                        <div className="form-group">
                            <label>Senha</label>
                            <input type="password" className="form-control" placeholder="Enter senha" />
                        </div>

                        <div className="form-group">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <label className="custom-control-label" htmlFor="customCheck1">Lembre-me</label>
                            </div>
                        </div>

                        <button type="submit"  className="btn btn-primary btn-block">Enviar</button>
                        <p className="forgot-password text-right">
                            Esqueceu a <a href="#" onClick={() => this.handleModalShowHide()}>senha?</a>
                        </p>
                        <p className="signup text-right">
                            <a href="/signup">Cadastre-se</a>
                        </p>
                    </form>


                    <Modal show={this.state.showHide}>
                        <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
                        <Modal.Title>Esqueci a senha</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Para recuperar sua senha, informa seu endereço de email cadastrado no sistema.
                        <form>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" className="form-control" placeholder="Enter email" />
                            </div>

                        </form>

                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={() => this.handleModalShowHide()}>
                            Cancelar
                        </Button>
                        <Button variant="primary" onClick={() => this.handleModalShowHide()}>
                            Salvar
                        </Button>
                        </Modal.Footer>
                    </Modal>

                    </Col>
                </Row>
            </Container>
		);
	}
}

