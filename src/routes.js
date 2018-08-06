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
import Apropos from './Components/Apropos';
import Telecharge from './Components/Telecharge';


export default (
 <div>

<Route exact path="/" component={Connexion} />
<Route path="/userForm" component={UserForm} />
<Route path="/Inscription" component={Inscription} />
<Route path="/Blog" component={Blog}/>
<Route path="/Apropos" component={Apropos}/>
<Route path="/Telecharge" component={Telecharge}/>
</div>
);
