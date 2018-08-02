// ./src/routes.js
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Formulaire from './Components/Formulaire';
import Connexion from './Components/Connexion';
import Application from './Components/Application';
import Inscription from './Components/Inscription';
import Blog from './Components/Blog';
import Cours from './Components/Cours';
import UserForm from './Components/UserForm';
import App from './App';


export default (
  <Route path="/" component={UserForm}>
    <IndexRoute component={App}></IndexRoute>
    <Route path="/inscription" component={UserForm}></Route>
   
  </Route>
);
