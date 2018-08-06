import React from 'react';
import { Link } from 'react-router'
import Input from './SUBCOMPONENTS/Input';
import Checkbox from './SUBCOMPONENTS/Checkbox';
import Button from './SUBCOMPONENTS/Button';
export default class Connexion extends React.Component {

goAcceuil = event => {
event.preventDefault();
//alert(this.pseudoInput.value)
//const pseudo = this.pseudoInput.value;
//const password = this.passwordInput.value;
this.props.router.push('/acceuil/');
this.props.router.push({
          pathname: '/acceuil',
       // query: {pseudo:pseudo}
        })

}

render() {

return (
<div className="container">
<div className="row">
<div className="panel panel-default col-sm-6 col-md-4 col-md-offset-4">
  <div className="panel-body">
    <form  noValidate>
    <h5>Connectez vous pour accéder à votre contenu</h5>
      <Input typeForm="text" placeholder="Email" iconClass="envelope"/>
      <Input typeForm="text" placeholder="Mot de passe" iconClass="lock"/>
      <div class="row row-action">
      <div className="col-sm">
        <Checkbox checkID="souv">Se souvenir de moi</Checkbox>
      <a href="#">Mot de passe oublié?</a>
      </div>
      <div className="col-sm">
      <div class="row">
      <button type="submit" id="log" className="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off"  onClick={e=> this.goAcceuil(e)}>
        Se connecter
      </button>
      </div>
      <div class="row">
      <Button idButton="log" typeButton="submit" className="primary" btncontent="S'inscrire"/>
      </div>
      </div>
      </div>
      <Link to={`/userForm`}><h1>test route</h1></Link>
    </form>
  </div>
</div>
</div>
</div>
	)

	}

}
