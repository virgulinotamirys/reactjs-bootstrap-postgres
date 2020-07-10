import React , { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import Login from './pages/login';
import SignUp from './pages/signup';
import Sobre from './pages/sobre';


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/login" component={Login}/>
            <Route path="/signup" component={SignUp}/>
            <Route path="/sobre" component={Sobre}/>
        </Switch>
    </BrowserRouter>
);


export default Routes;
