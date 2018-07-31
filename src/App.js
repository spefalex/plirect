import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Formulaire from './Components/Formulaire';
import Connexion from './Components/Connexion';
import Application from './Components/Application';
import Inscription from './Components/Inscription';
import Blog from './Components/Blog';

import {Router, Route, browserHistory, Link} from 'react-router';
export default class App extends Component {

    render() {
        return (
            <div>
                <Router history={browserHistory}>
                <Route path="/" component={Connexion}/>
                <Route path="/acceuil" component={Application}/>
                <Route path="/inscription" component={Inscription}/>
                <Route path="/blog" component={Blog}/>
            </Router>
            </div>

        );
    }
}
