import React, { Component } from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { browserHistory } from 'react-router';
import { Route } from 'react-router-dom';


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
        var that = this;
        fetch('http://localhost:3000/sistemaweb/usuarios')
            .then(function(response){
                response.json()
                .then(function(data){
                    that.setState({
                        usuario: data
                    })
                })
            })
    }

    removeUsuario(user_id){
        var that = this;
        let usuario = this.state.usuario;
        let user = usuario.find(function(user){
            return user.user_id === user_id
        });
        //console.log(user);

        var request = new Request('http://localhost:3000/sistemaweb/remove/' + user_id, {
          method: 'DELETE' 
        });

        fetch(request)
          .then(function(response){
              usuario.splice(usuario.indexOf(user), 1);
              that.setState({
                  usuario: usuario
              })
              response.json()
               .then(function(data){
                   console.log(data);
               })
          })
    }
    
    addUsuario(event){
        var that = this;
        event.preventDefault();
        let usuario_data = {
            username: this.username.current.value,
            email: this.email.current.value,
            password: this.password.current.value
        };
        var request = new Request('http://localhost:3000/sistemaweb/new-usuario', {
            method: 'POST',
            headers: new Headers({ 'Content-Type': 'application/json'}),
            body: JSON.stringify(usuario_data)
        });
        let usuario = that.state.usuario;
        usuario.push(usuario_data);//REVISAR COM ERRO
        console.log(usuario);
        that.setState({
            usuario: usuario
        })
        //xmlhttprequest()
        fetch(request)
            .then(function(response){
                response.json()
                .then(function(data){
                    
                })
            })
            .catch(function(err){
                console.log(err)
            })
    }

    render() {
        let title = this.state.title;
        let usuario = this.state.usuario;
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
                    <ul>
                        {usuario.map(user => <li key={user.user_id}> {user.email} <button onClick={this.removeUsuario.bind(this, user.user_id)}>Remover</button></li>)}
                    </ul>
                    </Col>
                </Row>
            </Container>
        );
    }
}